import { cipher } from "./cipher.js";
import { decipher } from "./decipher.js";
import { hideElements, addElements } from "../utils/toggleElements.js";

const btnDecode = document.querySelector(".button__decrypt");
const btnEncode = document.querySelector(".button__encrypt");

btnDecode.addEventListener("click", () => { handleText("decode") });
btnEncode.addEventListener("click", () => { handleText("encode") });

export function handleText(action) {
    /* 
    * Get the text from the textarea and check if it is valid.
    * If it is, call the cipher or decipher function and display the result
    * If it is not, alert the user to
    * 
    * @param {string} action - The action to be performed (encode or decode)
    * @returns {void} 
    */

   
   const text = document.querySelector(".s-textarea__area").value;
   const mainText = document.querySelector(".text__main-text");
   document.querySelector(".text__btn").textContent = "Copiar";

    let reg = /^[a-z 0-9]+$/;
    if (reg.test(text)) {
        if (action === "decode") {
            mainText.innerHTML = decipher(text);
        } else if (action === "encode") {
            mainText.innerHTML = cipher(text);
        }
        hideElements();
        addElements();
    } else {
        alert("Por favor, insira um texto válido!");
    }
}