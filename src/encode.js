import {
  encodeAppAgent,
  encodeNamed,
  encodeTransactional,
} from "@traittech/trait-keyless";

function toggleField(field, shouldShow) {
  field.style.display = shouldShow ? "block" : "none";
  field.querySelector("input").required = shouldShow;
}

document
  .querySelectorAll('input[name="typeOfKeylessAddress"]')
  .forEach((radio) => {
    radio.addEventListener("change", function (event) {
      const typeOfAddress = event.target.value;

      toggleField(
        document.getElementById("transactionalAddressIdField"),
        typeOfAddress === "Transactional"
      );
      toggleField(
        document.getElementById("addressNameField"),
        typeOfAddress === "Named"
      );

      document.getElementById("outputContainer").style.display = "none";
      document.getElementById("error").style.display = "none";
    });
  });

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const typeOfAddress = document.querySelector(
    'input[name="typeOfKeylessAddress"]:checked'
  ).value;

  const appAgentId = document.getElementById("appAgentId").value;

  try {
    let encodedAddress;

    function validateNumber(value) {
      const number = Number(value);
      if (isNaN(number)) throw new Error("Invalid input: must be a number");
      return number;
    }

    if (typeOfAddress === "AppAgent") {
      const appAgentIdValidated = validateNumber(appAgentId);
      encodedAddress = encodeAppAgent(appAgentIdValidated);
    } else if (typeOfAddress === "Transactional") {
      const taId = document.getElementById("transactionalAddressId").value;
      const appAgentIdValidated = validateNumber(appAgentId);
      const taIdValidated = validateNumber(taId);
      encodedAddress = encodeTransactional(appAgentIdValidated, taIdValidated);
    } else if (typeOfAddress === "Named") {
      const addressName = document.getElementById("addressName").value;
      const appAgentIdValidated = validateNumber(appAgentId);
      encodedAddress = encodeNamed(appAgentIdValidated, addressName);
    }

    document.getElementById("output").textContent = encodedAddress;
    document.getElementById("outputContainer").style.display = "block";
    document.getElementById("error").style.display = "none";
  } catch (error) {
    document.getElementById("outputContainer").style.display = "none";
    document.getElementById("error").style.display = "block";
  }
});
