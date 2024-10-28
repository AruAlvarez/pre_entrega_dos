
const opciones = [
    {
        id: 1,
        destino: "Cordoba",
        precio: 30000,
        fecha1: "01/12/24",
        fecha2: "02/12/24"
    },
    {
        id: 2,
        destino: "Mendoza",
        precio: 50000,
        fecha1: "03/12/24",
        fecha2: "04/12/24"
    },
    {
        id: 3,
        destino: "Salta",
        precio: 70000,
        fecha1: "05/12/24",
        fecha2: "06/12/24"
    },
    {
        id: 4,
        destino: "Bariloche",
        precio: 90000,
        fecha1: "07/12/24",
        fecha2: "08/12/24"
    }
]

opciones.forEach(el => {
    const card = document.createElement("div");
    const destino = document.createElement("p");
    const precio = document.createElement("p");
    const boton = document.createElement("button");

    card.className = "destino-card"

    destino.innerText = el.destino;
    precio.innerText = `Tarifa por persona ${el.precio}`;
    boton.innerText = "Quiero ir"

    card.appendChild(destino);
    card.appendChild(precio)
    card.appendChild(boton)

    container.appendChild(card)
    boton.onclick = () => {
        const card2 = document.createElement("div");
        const tittle = document.createElement("p");
        const fecha = document.createElement("select");
        const option = document.createElement("option");
        const option2 = document.createElement("option");
        const cantidad = document.createElement("input");
        const boton2 = document.createElement("button")

        tittle.innerText = "Elegí fecha de salida e indicá cantidad de pasajeros"
        option.value = el.fecha1
        option2.value = el.fecha2
        option.text = el.fecha1
        option2.text = el.fecha2
        boton2.innerText = "Calcular tarifa final"

        card2.appendChild(tittle);
        card2.appendChild(fecha);
        card2.appendChild(cantidad);
        fecha.appendChild(option);
        fecha.appendChild(option2);
        card2.appendChild(boton2)

        container2.appendChild(card2)

        boton2.onclick = () => {
            const card3 = document.createElement("div");
            const tittle3 = document.createElement("p");
            const boton3 = document.createElement("button")

            tittle3.innerText="Precio total con impuestos incluidos" + (cantidad.value*el.precio)
            boton3.innerText="RESERVAR"

            card3.appendChild(tittle3)
            card3.appendChild(boton3)
                       
            container3.appendChild(card3)
           
            boton3.onclick = () => alert ("Ya podes preparar tu equipaje! Buen viaje!");
        }
        
    }
})
