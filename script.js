// funcion que oculta o muestra el menu

let menuVisible = false;

function mostrar_ocultar_menu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//eventos click 

var github= document.getElementById("github");
var linkedin = document.getElementById("linkedin");

github.addEventListener("click", function() {
    window.location.href = "https://github.com/sanchezbarba";
});

linkedin.addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/in/manuel-s%C3%A1nchez-s%C3%A1nchez-barba-818b96207/";
});

// funcion para descargar el CV

document.getElementById('descargar_cv').addEventListener('click', function(){
    
    var ruta = 'CV_ManuelSanchez_definitivo.pdf';

    var enlace = document.createElement('a');
    enlace.href = ruta;
    enlace.download = 'CV_Manuel_Sanchez.pdf';

    enlace.click();
});
