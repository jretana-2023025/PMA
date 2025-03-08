const product ={
    nombre:"ps5",
    precio:8000,
    disponible:true
}
 
const calcular = () =>{
    let calculo = product.precio*0.10
    let descuento = product.precio-calculo
    return descuento
}
 
console.log(product,'su descuento es: ',calcular())