window.addEventListener("scroll",function(){
    
    var menu = document.getElementById('menu');
    var seccion1 = document.getElementById('inicio');
    
    
    var largo = seccion1.clientHeight;
    var ancho = seccion1.clientWidth;
    
    
    var pantalla = window.scrollY;
    
    var menuprimeraseccion = largo - 70; 
    var menusegundaseccion =(largo-30) * 2;
    //var terceraseccion = (largo-30) * 3;
    
   
    menu.classList.toggle("seccion-1",pantalla>0 && pantalla<menuprimeraseccion);
    menu.classList.toggle("seccion-2",pantalla>menuprimeraseccion
                          //&& pantalla<menusegundaseccion
                         );
    //para las cards que estan en lugar diferente
    //menu.classList.toggle("seccion-3",pantalla>menusegundaseccion && pantalla<terceraseccion);
})

