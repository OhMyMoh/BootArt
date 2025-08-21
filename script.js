window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  const products = [
    {
      id: "b1",
      name: "Classic Black Blazer",
      image: "images/b1.jpeg",
      description: 
        "Elegant 2-piece suit perfect for business or formal wear.",
      price: "£45",
      size: ["S", "M", "L"],
    },
    {
      id: "b2",
      name: "Rustic Brick Red Blazer",
      image: "images/b2.jpeg",
      description:
        "Stand out with this vibrant brick red suit that blends style and confidence.",
      price: "£47",
      size: ["S", "M", "L"],
    },
    {
      id: "b3",
      name: "Light Grey Smart Casual Blazer",
      image: "images/b3.jpg",
      description:
        "A modern, light grey single-breasted suit or blazer, smart-casual aesthetic.",
      price: "£42",
      size: ["M", "L", "XL"],
    },
    {
      id: "b4",
      name: "Mint Green Modern Fit Suit",
      image: "images/b4.jpg",
      description:
        "A fresh, modern look perfect for smart-casual or summer occasions.",
      price: "₦£50",
      size: "M, L, XL",
      color: "Mint Green",
      material: "Linen Blend",
    },
    {
      id: "b5",
      name: "Golden Caramel Double-Breasted Suit",
      image: "images/b5.jpg",
      description:
        "A bold, elegant suit that commands attention with its rich caramel tone.",
      price: "₦£55",
      size: "L, XL",
      color: "Golden Caramel",
      material: "Wool Blend",
    },
    {
      id: "b6",
      name: "Golden Mustard Double-Breasted Blazer",
      image: "images/b6.jpg",
      description:
        "A stylish double-breasted blazer in a striking golden mustard color, featuring peak lapels and a tailored fit.",
      price: "£52",
      size: "S, M, L",
      color: "Golden Mustard",
      material: "Twill",
    },
    {
      id: "c1",
      name: "Classic Caramel Overcoat",
      image: "images/c1.jpg",
      description:
        "A stylish, single-breasted overcoat in a rich caramel color, offering a warm and sophisticated look.",
      price: "£65",
      size: "M, L, XL",
      color: "Caramel",
      material: "Wool",
    },
    {
      id: "c2",
      name: "Elegant Grey Chesterfield Coat",
      image: "images/c2.jpg",
      description:
        "A refined single-breasted coat in a medium grey hue, with clean lines and a tailored fit.",
      price: "£68",
      size: "S, M, L",
      color: "Grey",
      material: "Wool Blend",
    },
    {
      id: "c3",
      name: "Sophisticated Charcoal Business Coat",
      image: "images/c3.jpg",
      description:
        "A deep charcoal grey, well-structured coat suitable for business wear or elegant evening events.",
      price: "£70",
      size: "M, L",
      color: "Charcoal",
      material: "Cashmere Blend",
    },
    {
      id: "c4",
      name: "Charcoal Tweed Overcoat",
      image: "images/c4.jpg",
      description:
        "A textured, dark charcoal grey single-breasted overcoat made of tweed for a classic look.",
      price: "£72",
      size: "M, L, XL",
      color: "Charcoal",
      material: "Tweed",
    },
    {
      id: "c5",
      name: "Double-Breasted Cognac Pea Coat",
      image: "images/c5.jpg",
      description:
        "A stylish double-breasted pea coat in a warm cognac color with a wide lapel.",
      price: "£75",
      size: "L, XL",
      color: "Cognac",
      material: "Wool Blend",
    },
    {
      id: "c6",
      name: "Rust Casual Car Coat",
      image: "images/c6.jpg",
      description:
        "A modern, single-breasted car coat in a warm rust or burnt orange color, styled for smart casual.",
      price: "£62",
      size: "S, M, L",
      color: "Rust",
      material: "Cotton Twill",
    },
    {
      id: "j1",
      name: "Grey Speckled Knit Zipper Jacket",
      image: "images/j1.jpg",
      description:
        "A comfortable grey speckled knit jacket with a high collar and red zipper accents.",
      price: "£35",
      size: "S, M, L",
      color: "Grey",
      material: "Knit Fabric",
    },
    {
      id: "j2",
      name: "Black Sherpa-Lined Hooded Jacket",
      image: "images/j2.jpg",
      description:
        "A casual black jacket with warm sherpa lining and a hood, perfect for cooler weather.",
      price: "£38",
      size: "M, L, XL",
      color: "Black",
      material: "Fleece / Sherpa",
    },
    {
      id: "j3",
      name: "Classic Black Faux Leather Jacket",
      image: "images/j3.jpg",
      description:
        "A sleek black faux leather jacket with a collared design and zip-front closure.",
      price: "£40",
      size: "S, M, L",
      color: "Black",
      material: "Faux Leather",
    },
    {
      id: "j4",
      name: "Dark Grey Faux Shearling Lined Parka",
      image: "images/j4.jpg",
      description:
        "A warm parka with faux shearling lining and a hood, ideal for cold weather.",
      price: "£43",
      size: "M, L",
      color: "Dark Grey",
      material: "Polyester / Faux Shearling",
    },
    {
      id: "j4",
      name: "Light Grey Stand-Collar Biker Jacket",
      image: "images/j5.jpg",
      description:
        "A light grey jacket with stand collar and zippers, giving a modern biker look.",
      price: "£39",
      size: "S, M",
      color: "Light Grey",
      material: "Faux Leather",
    },
    {
      id: "j4",
      name: "Classic Grey Wool Blend Car Coat",
      image: "images/j6.jpg",
      description:
        "A single-breasted car coat in medium grey wool blend, versatile for various settings.",
      price: "£47",
      size: "M, L, XL",
      color: "Grey",
      material: "Wool Blend",
    },
  ];

  const product = products.find((p) => p.id === productId);

  if (!productId || !product) {
    document.body.innerHTML = `
      <div class="container mt-5 text-center">
        <h2>❌ Product not found!</h2>
        <a href="index.html" class="btn btn-primary mt-3">← Go Back to Shop</a>
      </div>
    `;
    return;
  }

  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-img").src = product.image;
  document.getElementById("product-desc").textContent = product.description;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-sizes").innerHTML = product.size
    .map((s) => `<option value="${s}">${s}</option>`)
    .join("");
});

document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.getElementById("add-to-cart");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      const name = document.getElementById("product-name").textContent;
      const price = document.getElementById("product-price").textContent;
      const img = document.getElementById("product-img").src;
      const size = document.getElementById("product-sizes").value;
      const quantity = document.getElementById("quantity").value;

      const product = {
        name,
        price,
        img,
        size,
        quantity,
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Added to cart!");
    });
  }
});

  const params = new URLSearchParams(window.location.search);
  const product = {
    id: params.get("id"),
    name: params.get("name"),
    price: params.get("price"),
    img: params.get("img"),
    desc: params.get("desc"),
    sizes: params.get("sizes") ? params.get("sizes").split(",") : []
  };

  document.getElementById("product-img").src = product.img;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-desc").textContent = product.desc;
  document.getElementById("product-price").textContent = "₦" + product.price;

  const sizeSelect = document.getElementById("product-sizes");
  product.sizes.forEach(size => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
  });

  document.querySelector(".btn-primary").addEventListener("click", function () {
    const selectedSize = sizeSelect.value;
    const quantity = parseInt(document.querySelector('input[type="number"]').value);

    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      size: selectedSize,
      quantity: quantity
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
    window.location.href = "cart.html"; 
  });

