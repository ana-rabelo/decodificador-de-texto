export function hideElements() {
    const text = document.querySelector(".text__sec-text");
    const img = document.querySelector(".text__img");

    text.classList.add("hidden");
    img.classList.add("hidden");
}

export function addElements(){
    const btn = document.querySelector(".text__btn");
    btn.classList.remove("hidden");
}