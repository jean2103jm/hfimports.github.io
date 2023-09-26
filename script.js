function changeTheme(theme) {
    const panel = document.querySelector('.panel');
    let imageUrl = '';

    switch (theme) {
        case 'theme1':
            imageUrl = 'images/theme1.jpg';
            break;
        case 'theme2':
            imageUrl = 'images/theme2.jpg';
            break;

        case 'theme3':
            imageUrl = 'images/theme3.jpg';
            break;

        case 'theme4':
            imageUrl = 'images/theme4.jpg';
            break;
        // ... (otros casos)
    }

    const newImage = new Image();
    newImage.src = imageUrl;

    newImage.onload = function() {
        panel.style.backgroundImage = `url(${imageUrl})`;
        
        // Agrega la clase "blurred" para aplicar el filtro
        panel.classList.add('blurred');

        // Después de un breve retraso, elimina la clase "blurred"
        setTimeout(() => {
            panel.classList.remove('blurred');
        }, 500); // 500ms de retraso
    };
}


document.getElementById("loginBtn").addEventListener("click", function() {
    // Aquí puedes mostrar un formulario de inicio de sesión, redirigir a otra página, etc.
    alert("Formulario de inicio de sesión aquí");
});


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const scrollDowns = document.querySelector('.scroll-downs');
        scrollDowns.style.opacity = "1";
        scrollDowns.style.animation = "fadeInUp 1s forwards";
    }, 1000);  // 1000 milisegundos = 1 segundo
});
