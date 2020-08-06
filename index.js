
// El Vehicle podría ser padre de dos objetos uno del tipo auto y otro del tipo moto, lo dejo en este solo para no enredarme en las herencias, pero dependiendo del requerimiento podría variar 
class Vehicle {
    constructor(marca, modelo, puertas, precio, cilindrada) {
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
        this.precio = precio;
        this.cilindrada = cilindrada;
    }

    printVehicle() {
        if (this.puertas !== 0) {
            console.log("Marca: ", this.marca, "// Modelo:", this.modelo, "// Puertas:", this.puertas, "// Precio: $" + this.precio.toString().putPoint())
        } else {
            console.log("Marca: ", this.marca, "// Modelo:", this.modelo, "// Cilindrada:", this.cilindrada, "// Precio: $" + this.precio.toString().putPoint())
        }
    }

}
//Funcion para colocar los puntos en los numeros
String.prototype.putPoint = function () {
    var mod3 = 0
    var x = this.length;
    var cadena = "";
    var aux = "";
    while (x >= 0) {
        cadena = cadena + this.charAt(x);
        if (mod3 === 3 && x > 1) {
            cadena = cadena + ".";
            mod3 = 0;
        }
        mod3++;
        x--;
    }
    var x = cadena.length;
    while (x >= 0) {
        aux = aux + cadena.charAt(x);
        x--;
    }
    return aux + ",00";
};

String.prototype.itHasY = function () {
    var x = this.length;
    var aux = "";
    while (x >= 0) {
        aux = this.charAt(x);
        if (aux === "Y") {
            return true;
        }
        x--;
    }
    return false;

}

//Instancio los objetos en donde voy a guardar los datos
let vehicleExp = new Vehicle(0, 0, 0, 0, 0);
let vehicleCheap = new Vehicle(-1, -1, -1, -1, -1);
let vehicleHasY = new Vehicle();
let arrayVehicle = [];
//Carga de datos
arrayVehicle.push(new Vehicle("Peugeot", "206", 4, 200000));
arrayVehicle.push(new Vehicle("Honda", "Titan", 0, 60000, "125c"));
arrayVehicle.push(new Vehicle("Pugeot", "208", 5, 250000, "125c"));
arrayVehicle.push(new Vehicle("Yamaha", "YBR", 0, 80500, "160c"));

//Uso el foreach para capturar los max y min más rápido, quizá conviene separarlo depende del requerimiento
arrayVehicle.forEach(i => {
    i.printVehicle();
    if (i.precio > vehicleExp.precio) {
        vehicleExp = i;
    };
    if (i.precio < vehicleCheap.precio || vehicleCheap.precio === -1) {
        vehicleCheap = i;
    }
    if (i.modelo.itHasY()) {
        vehicleHasY = i;
    }
})
console.log("=================================================")
console.log("Vehículo más caro: ", vehicleExp.marca, vehicleExp.modelo)
console.log("Vehículo más Barato: ", vehicleCheap.marca, vehicleCheap.modelo)
console.log("Vehìculo que contiene en el modelo la letra 'Y': ", vehicleHasY.marca, vehicleHasY.modelo, vehicleHasY.precio.toString().putPoint())

