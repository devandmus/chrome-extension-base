const logo = document.getElementById('hplogo');
const body = document.getElementById('gsr');
const devandmus = document.createElement('div');
devandmus.innerHTML = 'DEVANDMUS';
devandmus.style = 'font-weight:900;font-family: "Poppins",sans-serif;color:white;font-size:40px;padding-top:100px!important';

// trigger
window.onload = () => {
    logo.parentElement.insertBefore(devandmus, logo);
    logo.remove();

    body.style.backgroundImage = 'linear-gradient(to right, #008C83, #008DCD)';

    document.querySelector('.gLFyf.gsfi').placeholder = 'Ándale ándale ándale!!!';

    while (document.querySelector('[value="Buscar con Google"]')) {
        document.querySelector('[value="Buscar con Google"]').value = 'Búscar con tu amigo @devandmus';
    }
}
