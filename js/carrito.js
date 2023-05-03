const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
// PRODUCTOS
const productos = [
  // Bolsa
  {
      id: "bolsa-01",
      titulo: "Bolsa Callaway Blanco",
      imagen: "./img/Bolsa-Callaway-Blanco.jpg",
      precio: 1500
  },
  {
      id: "bolsa-02",
      titulo: "Bolsa Callaway Negro",
      imagen: "./img/Bolsa-Callaway-Negro.jpg",
      precio: 1000
  },
  //Guantes
  {
    id:"Guantes-01",
    titulo:"Guantes Stuburt",
    imagen:"./img/Guantes-Stuburt.jpg",
    precio:2000
  },
  //Pelotas
  {
    id:"Pelotas-01",
    titulo:"Pelotas Callaway SuperSoft",
    imagen:"./img/Pelotas1.jpg",
    precio:3300
  },
  {
  id:"Pelotas-02",
  titulo:"Pelotas Callaway Boca Juniors",
  imagen:"./img/PelotasBoca.jpg",
  precio:5500
  }
];

let carrito = []; //para arrancar con el carrito vacio


//funcion para cargar los productos y hacerlos tipo card con su boton de agregar carrito
  function cargarProductos()
  {
  productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src = "${product.imagen}">
    <h3>${product.titulo}</h3>
    <p class = "price">${product.precio}$</p>
    `;
    shopContent.append(content);
    
    let comprar = document.createElement("button");
    
    comprar.innerText = "Agregar al carrito";
    comprar.className = "comprar";
    
    content.append(comprar);

    //sirve para agregar elementos al carrito y por ahora te los muestra por consola
    comprar.addEventListener("click",() => 
    {
    carrito.push({
      id: product.id,
      img: product.imagen,
      nombre: product.titulo,
      precio: product.precio,
    });
    console.log(carrito);
    });
    })
  }
  cargarProductos(productos);

  
  