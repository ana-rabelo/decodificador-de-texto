document.querySelector(".text__btn").addEventListener("click", copyText);

export function copyText(){
    const text = document.querySelector(".text__main-text");
    navigator.clipboard.writeText(text.textContent);

    document.querySelector(".text__btn").textContent = "Copiado!";
}
