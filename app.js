document.addEventListener("DOMContentLoaded", function() {
    const text = "Bienvenido a mi portfolio,\\ ¿Quieres saber más?";
    let index = 0;
    const speed = 100; // Velocidad de escritura en milisegundos

    function typeWriter() {
        if (index < text.length) {
            if (text.charAt(index) == "\\"){
                document.getElementById("typing-text").innerHTML += "<br>"
            } else {document.getElementById("typing-text").innerHTML += text.charAt(index);}
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
