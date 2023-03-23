// marcar item como resuelto
//momento en el que fue creado y tacado
// boton que indica cual fue la mas rapida en hacerse

//var nuevasCosas=[]
var ids = 0;
var ListaTareas=[];

function AgregarTareas() {

    ids= ids + 1;
    var input = document.querySelector("#ingreso").value;
    document.querySelector("#ingreso").value = "";
    
    var obj = {
        id: ids,
        titulo: input,
        realizado: false,
        hora: null
    }

    ListaTareas.push(obj);
     
    //llamar a refrescar pantalla
    RefrescarPantalla();
    //console.log(ListaTareas);
}


function RefrescarPantalla(){
    document.querySelector("#listado").innerHTML = "";

    ListaTareas.map(item=>{
        document.querySelector("#listado").innerHTML += `
        <li>${item.titulo}</li>
        `;
    })
}