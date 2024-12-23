import { AddressType, decodeAddress } from "@traittech/trait-keyless";

function convertAddressTypeToString(addressType) {
  switch (addressType) {
    case AddressType.Regular:
      return "Regular";
    case AddressType.AppAgent:
      return "AppAgent";
    case AddressType.Transactional:
      return "Transactional";
    case AddressType.Named:
      return "Named";
    default:
      return "";
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const address = document.getElementById("address").value;

  try {
    const decodedAddress = decodeAddress(address);

    decodedAddress.addressType = convertAddressTypeToString(
      decodedAddress.addressType
    );

    document.getElementById("output").textContent = JSON.stringify(
      decodedAddress,
      null,
      2
    );
    document.getElementById("outputContainer").style.display = "block";
    document.getElementById("error").style.display = "none";
  } catch (error) {
    document.getElementById("outputContainer").style.display = "none";
    document.getElementById("error").style.display = "block";
  }
});
