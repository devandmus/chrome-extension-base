const logo = document.getElementById('hplogo');
const body = document.getElementById('gsr');
const devandmus = document.createElement('div');
devandmus.innerHTML = 'Devandmus';
devandmus.style = '';

// trigger
(function(){
  logo.parentElement.insertBefore(devandmus, logo);
})()
window.onload = () => {
  logo.parentElement.insertBefore(devandmus, logo);
}
