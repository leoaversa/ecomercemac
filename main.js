const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('productoEnCarrito')


let carrito = []

stockProductos.forEach((producto) => {


    const div = document.createElement('div')
    div.classList.add('card')

    div.innerHTML += `
    <img src=${producto.img} alt="">
    <h3>${producto.modelo}</h3>
    <h4>${producto.categoría}</h4>
    <p>$${producto.precio.toLocaleString()}</p>
    <button class= 'btn btn-primary' id="agregar${producto.id}">Agregar</button>
    `

    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregaste al carrito',
            text: ("Adidas:" + " " + producto.modelo),
            showConfirmButton: false,
            timer: 1500
          })

        
    })   

})

const agregarAlCarrito = (prodId) => {

    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    /* actualizarCarrito() */
    console.log(carrito)
    
}

const actualizarCarrito = () => {
    /* contenedorCarrito.innerHTML = "" */

    carrito.forEach((prod) => {

        const div = document.createElement('div')
        div.className("productoEnCarrito")
        div.innerHTML = `
        <p>${prod.modelo}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id= "cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class= 'boton-eliminar'><i class='fas fa-trash-alt'></i></button>
        `
        

        contenedorCarrito.appendChild(div)
    })
}





