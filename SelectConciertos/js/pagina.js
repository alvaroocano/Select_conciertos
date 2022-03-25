
	var opciones_conciertos=[{nombre:"AC/DC", valor:"acdc", precio:100},
	{nombre:"Barón Rojo", valor:"baron", precio:80},
	{nombre:"Iron Butterfly", valor:"iron", precio:120}]

	function crearDesplegable(){
    var select=document.createElement("select");
    select.id="opciones_conciertos";
    select.addEventListener("change",cambiarConcierto);
    var option=document.createElement("option");
    document.getElementsByTagName("div")[0].appendChild(select);
    for (var i=0; i<opciones_conciertos.length; i++){
    document.getElementsByTagName("select")[0].appendChild(option);
    option.innerHTML=opciones_conciertos[i].nombre;
    option.value=opciones_conciertos[i].valor;
    select=document.createElement("select");
    option=document.createElement("option");
    }
    
}

  function cambiarConcierto(){
        var obj_parrafo=document.createElement("p");
        obj_parrafo.id="texto_precio";
       /* var concierto=document.getElementById("opciones_conciertos").value;
        for(i=0;i<opciones_conciertos.length;i++){
            if(concierto==opciones_conciertos[i].valor){
                var nombre=opciones_conciertos[i].nombre;
                var precio=opciones_conciertos[i].precio;
                alert("El concierto de "+nombre+" vale "+precio+" €")
            }
        }*/
        var obj_select=document.getElementById("opciones_conciertos");
        var indice=obj_select.selectedIndex;
        var nombre=opciones_conciertos[indice].nombre;
        var precio=opciones_conciertos[indice].precio;
        var texto="El concierto de "+nombre+" cuesta "+precio+"€";
        var parrafo=document.getElementById("texto_precio");
        if(parrafo==null){
        var obj_parrafo=document.createElement("p");
        obj_parrafo.id="texto_precio";
        obj_parrafo.innerHTML=texto;
        document.getElementById("contenedor_precio").appendChild(obj_parrafo);
        }
        else{
            parrafo.innerHTML=texto;
        }

    }