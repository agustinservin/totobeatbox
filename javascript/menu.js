
function mostrarmenu(){
    var pantalla = window.innerWidth;
    if(pantalla >= 320 && pantalla<=1286){
    var menusection = document.getElementById('secciones-menu');
    var btnabrir = document.getElementById('btn-menu');
    var btncerrar = document.getElementById('btn-cerrar-menu');
    menusection.style.left="0";
    btncerrar.style.left="5%";
    btnabrir.style.left="-100%";
    }
}
function cerrarmenu(){ 
     var pantalla = window.innerWidth;
    if(pantalla >= 320 && pantalla<=1286){
    var btncerrar = document.getElementById('btn-cerrar-menu');
    var btnabrir = document.getElementById('btn-menu');
    var menusection = document.getElementById('secciones-menu');
    menusection.style.left="-200%";
    btnabrir.style.left="0";
    btncerrar.style.left="-100%";
   
    }
}