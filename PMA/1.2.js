const productos =[
    {
        nombre:"xbox",
        precio:8000,
        cantidad:5
    },
    {
        nombre:"control ps5",
        precio:500,
        cantidad:3
    },
    {
        nombre:"pantalla samsung",
        precio:2000,
        cantidad:2
    },
    {
        nombre:"silla",
        precio:700,
        cantidad:2
    }
]
 
const carrito = ()=>{
    let total = 0
    for(i=0; i < productos.length; i++){
        let precio = productos[i].precio
        let stock = productos[i].cantidad
        let invetario = precio * stock
        total = total + invetario
        console.log(`El producto ${i+1} con el precio de Q${precio} el cal  hay ${stock} y el total de: Q${invetario}`)
    }
    console.log(`El total es: Q${total}`)
}



carrito()