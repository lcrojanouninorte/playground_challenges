//Ejercicio 1
//Crea una clase Persona con propiedades como nombre, edad y género.
class Persona {
  constructor(nombre, genero, edad) {
    this.nombre = nombre;
    this.genero = genero;
    this.edad = edad;
  }
}

//A continuación, crea un array de objetos Persona
let personas = [
  new Persona("Juan", "Masculino", 30),
  new Persona("María", "Femenino", 25),
  new Persona("Pedro", "Masculino", 45),
  new Persona("Ana", "Femenino", 50),
  new Persona("Luis", "Masculino", 20),
  new Persona("Carmen", "Femenino", 35),
];
//y utiliza métodos para filtrar el array por género y ordenar por edad.

function filtrarYOrdernar(personas, genero, ordenar) {
  return personas
    .filter((persona) => persona.genero == genero)
    .sort((a, b) => {
      const comparacion = a.edad - b.edad;
      return ordenar === "ASC" ? comparacion : -comparacion;
    });
}
console.log(filtrarYOrdernar(personas, "Masculino", "ASC"));
console.log(filtrarYOrdernar(personas, "Femenino", "DESC"));
