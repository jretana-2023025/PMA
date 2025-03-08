let invetario = [
    {
        id:123,
        nombre:'teclado',
        precio: 260.00,
        stock:12
    },
    {
        id:456,
        nombre:'mouse',
        precio:130.00,
        stock:15
    },
    {
        id:789,
        nombre:'monitor',
        precio:800.00,
        stock:18
    },
]


const ProductosDeInventario = () =>{
    try {
        for(let i = 0; i < invetario.length; i++){
            console.log(`Producto: ${i+1}`)
            console.log(`id: ${invetario[i].id}`)
            console.log(`nombre: ${invetario[i].nombre}`)
            console.log(`precio: Q$${invetario[i].precio}`)
            console.log(`stock: ${invetario[i].stock}`)
        }
        
        
    } catch (error) {
        console.log(error);
    }
}

const foudById = (id) =>{
    try {
        let = buscar = false
        for(let i = 0; i < invetario.length; i++){
            buscar = true
            if(invetario[i].id==id){
            console.log(`Producto: por ID`)
            console.log(`Producto: ${i+1}`)
            console.log(`id: ${invetario[i].id}`)
            console.log(`nombre: ${invetario[i].nombre}`)
            console.log(`precio: Q$${invetario[i].precio}`)
            console.log(`stock: ${invetario[i].stock}`)
            }
        }
        if(buscar===false){
            console.log(`product not found`)
        }
        
    } catch (error) {
        console.log(error);
    }
}

const carrito = (id,cantidad) =>{
    try {
        let buscar = false
        for(let i = 0; i < invetario.length; i++){
            if(invetario[i].id ==id){
                buscar = true
                if(invetario[i].stock >= cantidad){
                    invetario[i].stock = invetario[i].stock - cantidad
                    let total = invetario[i].precio *cantidad
                    console.log(`=====CARRITO=======`)
                    console.log(`Total de la compra Q ${total}`)
                    break
                }
                console.log(`La cantidad es mayor al de el stock`)
            }
        }
        if(buscar ===false){
            console.log('no se encotró el producto')
        }
    } catch (error) {
        console.error(error)
    }
}

foudById(456)
ProductosDeInventario()
carrito(456,14)

