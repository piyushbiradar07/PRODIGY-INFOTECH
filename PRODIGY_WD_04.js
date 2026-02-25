function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function submitForm(event) {
    event.preventDefault();
    alert("Message sent successfully!");
}
