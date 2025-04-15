let productos = [
  {
    id: 1,
    nombre: "Desayuno Romántico",
    precio: 350,
    imagen: "https://via.placeholder.com/200x150",
    stock: 5
  },
  {
    id: 2,
    nombre: "Sorpresa Cumpleaños",
    precio: 420,
    imagen: "https://via.placeholder.com/200x150",
    stock: 3
  }
];

let carrito = [];

function mostrarProductos() {
  const contenedor = document.getElementById("productos-container");
  contenedor.innerHTML = "";

  productos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${p.imagen}" width="200" height="150"><br>
      <h3>${p.nombre}</h3>
      <p>Precio: $${p.precio}</p>
      <p>Stock: ${p.stock}</p>
      <button onclick="agregarAlCarrito(${p.id})">Agregar</button>
    `;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (producto && producto.stock > 0) {
    carrito.push(producto);
    producto.stock -= 1;
    mostrarProductos();
    actualizarCarrito();
  } else {
    alert("Producto sin stock");
  }
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  lista.innerHTML = "";
  let suma = 0;
  carrito.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio}`;
    suma += p.precio;
    lista.appendChild(li);
  });
  total.textContent = suma;
}

function comprar() {
  alert("Gracias por tu compra!");
  carrito = [];
  actualizarCarrito();
}

document.addEventListener("DOMContentLoaded", mostrarProductos);
