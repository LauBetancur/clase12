const animal= prompt ("ingrese un animal");

if (animal.toLowerCase()==="perro"){  
    alert("mi animal es un perro");

} else if ( animal.toLowerCase()==="gato") {
alert("mi animal es un gato")

}
else if ( animal.toLowerCase()==="conejo") {
    alert("mi animal es un conejo")
    
    } else { alert("no conozco ese animal")
    }

    const parrafo=document.querySelector("#parrafo");
    console.log(parrafo);
    parrafo.innerHTML="este es el nuevo contenido del parrafo"

    
