function on() {
    let textElements = document.getElementsByClassName("item-content");

    
    for (let i = 0; i < textElements.length; i++) {
        if (textElements[i].style.display === "none") {
            return textElements[i].style.display = "block";
        }
    }
}