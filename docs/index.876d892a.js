var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire023a;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,o.call(d.exports,d,d.exports),d.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequire023a=o);var d=o("iJZz7");function l(e,t){e.style.display=t?"block":"none",e.querySelector("input").required=t}document.querySelectorAll('input[name="typeOfKeylessAddress"]').forEach((e=>{e.addEventListener("change",(function(e){const t=e.target.value;l(document.getElementById("transactionalAddressIdField"),"Transactional"===t),l(document.getElementById("addressNameField"),"Named"===t),document.getElementById("outputContainer").style.display="none",document.getElementById("error").style.display="none"}))})),document.getElementById("form").addEventListener("submit",(function(e){e.preventDefault();const t=document.querySelector('input[name="typeOfKeylessAddress"]:checked').value,n=document.getElementById("appAgentId").value;try{let l;function o(e){const t=Number(e);if(isNaN(t))throw new Error("Invalid input: must be a number");return t}if("AppAgent"===t){const r=o(n);l=(0,d.encodeAppAgent)(r)}else if("Transactional"===t){const a=document.getElementById("transactionalAddressId").value,s=o(n),u=o(a);l=(0,d.encodeTransactional)(s,u)}else if("Named"===t){const i=document.getElementById("addressName").value,c=o(n);l=(0,d.encodeNamed)(c,i)}document.getElementById("output").textContent=l,document.getElementById("outputContainer").style.display="block",document.getElementById("error").style.display="none"}catch(m){document.getElementById("outputContainer").style.display="none",document.getElementById("error").style.display="block"}}));