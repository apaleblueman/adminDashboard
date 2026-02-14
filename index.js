const toggleButton = document.getElementById('toggle');

const savedTheme = localStorage.getItem('theme');
if(savedTheme == 'dark'){
    document.body.classList.toggle('dark-mode');
    document.getElementById('toggle-icon').setAttribute('src', './assets/lightbulb-on.svg');
}
else{
    document.body.classList.remove('dark-mode');
    document.getElementById('toggle-icon').setAttribute('src', './assets/lightbulb-on.svg');
}



toggleButton.addEventListener('click', function(){        
        if(document.body.getAttribute('class')== "dark-mode"){
            document.body.classList.remove('dark-mode');
            document.getElementById('toggle-icon').setAttribute('src', './assets/lightbulb-off.svg');
            savedTheme = localStorage.setItem("theme","light");
        }
        else{
            document.body.classList.toggle('dark-mode');
            document.getElementById('toggle-icon').setAttribute('src', './assets/lightbulb-on.svg');
            savedTheme = localStorage.setItem("theme","dark");
        }
   
});
