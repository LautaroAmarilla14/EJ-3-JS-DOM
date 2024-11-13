const pizzas = [
  {
    id: 1,
    nombre: "Pizza De Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza De Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const input = document.getElementById("numero");
const Btn = document.getElementById("Btn");
const contenedor = document.getElementById("contenedor");


const SaveToLocalStorage = (pizzaId) => {
  localStorage.setItem("UltimaPizzaId", pizzaId);
};


const clickHandler = () => {
let item = input.value;
  input.value = "";

let pizzaId = parseInt(item);
  
if (isNaN(pizzaId)) {
    contenedor.innerHTML = "<p>Porfavor ingresa un número válido.</p>";
    return;
  }
  
let pizza = pizzas.find(elemento => elemento.id === pizzaId);

if (pizza) {
    contenedor.innerHTML = `
      <h2>${pizza.nombre}</h2>
      <p>Precio: $${pizza.precio}</p>
      <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
      <img src="${pizza.imagen}" alt="${pizza.nombre}" width="200" />
    `;


SaveToLocalStorage(pizzaId);

} else {
    contenedor.innerHTML = "<p>No se encontró una pizza con ese ID.</p>";
  }
};



const init = () => {
Btn.addEventListener("click", clickHandler);

const ultimaPizzaId = localStorage.getItem("UltimaPizzaId");
if (ultimaPizzaId){
  const pizza = pizzas.find((elemento) => elemento.id === parseInt(ultimaPizzaId));
  if (pizza) {
  contenedor.innerHTML  = `
  <h2>${pizza.nombre}</h2>
  <p>Precio: $${pizza.precio}</p>
  <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
  <img src="${pizza.imagen}" alt="${pizza.nombre}" width="200" />
`;
  }
};



};
init();