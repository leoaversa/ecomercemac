const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('productoEnCarrito')

const contadorCarrito = document.getElementById('contador-carrito')

const botonVaciar = document.getElementById('vaciar-carrito')

const precioTotal = document.getElementById('precioTotal')




let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
}) 


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
            showConfirmButton: true,
            timer: 2000
          })

        
    })   

})

const agregarAlCarrito = (prodId) => {

    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
    
}

const elliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()

}




const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {

        const div = document.createElement('div')
        div.classList.add("formulario-carrito", "mt-5", "container");
        div.innerHTML += `
        <img src=${prod.img} alt="">
        <p>${prod.modelo}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id= "cantidad">${prod.cantidad}</span></p>
        <button onclick= "eliminarDelCarrito(${prod.id})" class= 'btn boton-eliminar btn-primary'><i class='fas fa-trash-alt'></i>Eliminar</button>
        `
        
        contenedorCarrito.appendChild(div)
        
        localStorage.setItem ('carrito', JSON.stringify(carrito))

        //SUMAR PRECIOS EN CARRITO
        
        const total = carrito.map((prod)=> (prod.precio)).reduce((carritoPrecioTotal,
        carritoPrecioActual) => carritoPrecioTotal + carritoPrecioActual, 0);
        console.log(total)
        
        precioTotal.innerText = (total)

        botonVaciar.onclick = () => {
            carrito.length = 0
            div.innerHTML = ``
            console.log(carrito)            
            actualizarCarrito()
        
        }

        

        //CONTADOR CARRITO DEL NAV
        contadorCarrito.innerText = (carrito.length)
        
    })
}

        const buscador = document.getElementById('buscador')

        function filtrarPorCat(){
            const filtrarproductos = productos.filter((prod) => prod.categoría === buscador.value)
            console.log(filtrarproductos)
        
        }











    






