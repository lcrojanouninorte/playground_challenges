let profile: [string, number, boolean];
let nombre: string;
let edad: number;
let isAdmin: boolean;

[nombre, edad, isAdmin] = ['luis', 2, true];

console.table([nombre, edad, isAdmin]);

profile = [nombre, edad, isAdmin];

console.table({ nombre, edad, isAdmin });
