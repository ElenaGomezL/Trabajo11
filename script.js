
var topping = ['Oreo','KitKat','Kinder']//Array
var precio // Number
var helado = 100 // Number
if (topping == 'Oreo'){
precio = 10
} else if (topping == 'KitKat'){
    precio = 15
 } else if (topping == 'Kinder'){
    precio = 25
 }else{
    console.log("No tenemos este topping")
}
precioFinal = (precio+helado)
console.log("El helado cuesta $" + precioFinal)

let menu="pescado"
switch(menu){
    case "carne":
    console.log("Te sugerimos acompañarla con vino tinto");
    break;
    case "pescado":
    console.log("Te sugerimos acompañarlo con vino blanco");
    break;
    case "verdura":
    console.log("Te sugerimos acompañarla con agua");
    break;
    default:
    console.log("Elija carne, pescado o verdura")
}
var colores = ["celeste", "rosa", "amarillo"]
for (var i=0; i<colores.length;i++)
  console.log("Los colores son: "+ colores[i])
colores.push ("verde");
for (let i=0; i< colores.length;i++)
  console.log("Los colores son: " + colores[i])

var numero = 0;
while (numero < 11){
console.log(numero + " es más chico que 11")
numero = numero+1;
}

