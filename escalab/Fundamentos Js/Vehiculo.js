//Crea una clase Vehiculo con propiedades como marca, modelo, anio y precio.
class Vehiculo {
  constructor(marca, modelo, anio, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.precio = precio;
  }
}

//Ejercicio 3
//A continuación, crea un array de objetos Vehiculo
const vehiculos = [
  new Vehiculo("Toyota", "Corolla", 2022, 25000),
  new Vehiculo("Tesla", "Model X", 2021, 90000),
  new Vehiculo("Tesla", "Model S", 2022, 80000),
  new Vehiculo("Chevrolet", "Camaro", 2019, 30000),
  new Vehiculo("Chevrolet", "Equinox", 2022, 28000),
];
//y utiliza métodos para filtrar el array por marca, modelo o anio y ordenar por precio.
function filtarYOrdenar({ vehiculos, marca, modelo, anio, orden }) {
  return vehiculos
    .filter((v) => (marca ? v.marca === marca : true))
    .filter((v) => (modelo ? v.modelo === modelo : true))
    .filter((v) => (anio ? v.anio === anio : true))
    .sort((a, b) => {
      const comparacion = a.precio - b.precio;
      return orden === "ASC" ? comparacion : -comparacion;
    });
}

//Filtrar teslas ASC
console.log(
  "Teslas ASC: ",
  filtarYOrdenar({
    vehiculos: vehiculos,
    marca: "Tesla",
    orden: "ASC",
  })
);
//Filtrar teslas DESC
console.log(
  "Teslas DESC: ",
  filtarYOrdenar({
    vehiculos: vehiculos,
    marca: "Chevrolet",
    orden: "DESC",
  })
);

//Filtrar por año

console.log(
  "Solo 2022 ASC: ",
  filtarYOrdenar({
    vehiculos: vehiculos,
    anio: 2022,
    orden: "ASC",
  })
);
