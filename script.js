let collections = ['Blazer', 'Coat', 'Suit', 'Jacket']
let size = ['S', 'M', 'L', 'XL', 'XXL']
let stock = []


const addNewStock = (name, price, qty, col, img, size) => {
    let collectionExist = collections.some((each) => each === col)
    if (!collectionExist) {

    } else {

    }

    let newStock = {name, price, quantity: qty, collection, image: img, size}
}


const updateStockQuantity = () => {}
const updateStockPrice = () => {}


const products = {
  // BLAZERS
  b1: {
    name: "Classic Black Blazer",
    image: "images/b1.jpeg",
    description: "Elegant 2-piece suit perfect for business or formal wear.",
    price: "₦45,000",
    size: "S, M, L, XL",
    color: "Black",
    material: "Wool",
  },
  b2: {
    name: "Rustic Brick Red Blazer",
    image: "images/b2.jpeg",
    description:
      "Stand out with this vibrant brick red suit that blends style and confidence.",
    price: "₦48,000",
    size: "M, L, XL",
    color: "Brick Red",
    material: "Cotton",
  },
  b3: {
    name: "Light Grey Smart Casual Blazer",
    image: "images/b3.jpg",
    description:
      "A modern, light grey single-breasted suit or blazer, smart-casual aesthetic.",
    price: "₦42,000",
    size: "S, M, L",
    color: "Light Grey",
    material: "Polyester Blend",
  },
  b4: {
    name: "Mint Green Modern Fit Suit",
    image: "images/b4.jpg",
    description:
      "A fresh, modern look perfect for smart-casual or summer occasions.",
    price: "₦50,000",
    size: "M, L, XL",
    color: "Mint Green",
    material: "Linen Blend",
  },
  b5: {
    name: "Golden Caramel Double-Breasted Suit",
    image: "images/b5.jpg",
    description:
      "A bold, elegant suit that commands attention with its rich caramel tone.",
    price: "₦55,000",
    size: "L, XL",
    color: "Golden Caramel",
    material: "Wool Blend",
  },
  b6: {
    name: "Golden Mustard Double-Breasted Blazer",
    image: "images/b6.jpg",
    description:
      "A stylish double-breasted blazer in a striking golden mustard color, featuring peak lapels and a tailored fit.",
    price: "₦52,000",
    size: "S, M, L",
    color: "Golden Mustard",
    material: "Twill",
  },

  // COATS
  c1: {
    name: "Classic Caramel Overcoat",
    image: "images/c1.jpg",
    description:
      "A stylish, single-breasted overcoat in a rich caramel color, offering a warm and sophisticated look.",
    price: "₦65,000",
    size: "M, L, XL",
    color: "Caramel",
    material: "Wool",
  },
  c2: {
    name: "Elegant Grey Chesterfield Coat",
    image: "images/c2.jpg",
    description:
      "A refined single-breasted coat in a medium grey hue, with clean lines and a tailored fit.",
    price: "₦68,000",
    size: "S, M, L",
    color: "Grey",
    material: "Wool Blend",
  },
  c3: {
    name: "Sophisticated Charcoal Business Coat",
    image: "images/c3.jpg",
    description:
      "A deep charcoal grey, well-structured coat suitable for business wear or elegant evening events.",
    price: "₦70,000",
    size: "M, L",
    color: "Charcoal",
    material: "Cashmere Blend",
  },
  c4: {
    name: "Charcoal Tweed Overcoat",
    image: "images/c4.jpg",
    description:
      "A textured, dark charcoal grey single-breasted overcoat made of tweed for a classic look.",
    price: "₦72,000",
    size: "M, L, XL",
    color: "Charcoal",
    material: "Tweed",
  },
  c5: {
    name: "Double-Breasted Cognac Pea Coat",
    image: "images/c5.jpg",
    description:
      "A stylish double-breasted pea coat in a warm cognac color with a wide lapel.",
    price: "₦75,000",
    size: "L, XL",
    color: "Cognac",
    material: "Wool Blend",
  },
  c6: {
    name: "Rust Casual Car Coat",
    image: "images/c6.jpg",
    description:
      "A modern, single-breasted car coat in a warm rust or burnt orange color, styled for smart casual.",
    price: "₦62,000",
    size: "S, M, L",
    color: "Rust",
    material: "Cotton Twill",
  },

  // JACKETS
  j1: {
    name: "Grey Speckled Knit Zipper Jacket",
    image: "images/j1.jpg",
    description:
      "A comfortable grey speckled knit jacket with a high collar and red zipper accents.",
    price: "₦35,000",
    size: "S, M, L",
    color: "Grey",
    material: "Knit Fabric",
  },
  j2: {
    name: "Black Sherpa-Lined Hooded Jacket",
    image: "images/j2.jpg",
    description:
      "A casual black jacket with warm sherpa lining and a hood, perfect for cooler weather.",
    price: "₦38,000",
    size: "M, L, XL",
    color: "Black",
    material: "Fleece / Sherpa",
  },
  j3: {
    name: "Classic Black Faux Leather Jacket",
    image: "images/j3.jpg",
    description:
      "A sleek black faux leather jacket with a collared design and zip-front closure.",
    price: "₦40,000",
    size: "S, M, L",
    color: "Black",
    material: "Faux Leather",
  },
  j4: {
    name: "Dark Grey Faux Shearling Lined Parka",
    image: "images/j4.jpg",
    description:
      "A warm parka with faux shearling lining and a hood, ideal for cold weather.",
    price: "₦43,000",
    size: "M, L",
    color: "Dark Grey",
    material: "Polyester / Faux Shearling",
  },
  j5: {
    name: "Light Grey Stand-Collar Biker Jacket",
    image: "images/j5.jpg",
    description:
      "A light grey jacket with stand collar and zippers, giving a modern biker look.",
    price: "₦39,000",
    size: "S, M",
    color: "Light Grey",
    material: "Faux Leather",
  },
  j6: {
    name: "Classic Grey Wool Blend Car Coat",
    image: "images/j6.jpg",
    description:
      "A single-breasted car coat in medium grey wool blend, versatile for various settings.",
    price: "₦47,000",
    size: "M, L, XL",
    color: "Grey",
    material: "Wool Blend",
  },
};

const queryParams = new URLSearchParams(window.location.search);
const productId = queryParams.get("id");
const product = products[productId];

const container = document.getElementById("product-details");

if (container && product) {
  container.innerHTML = `
    <div class="col-md-6">
      <img src="${product.image}" class="img-fluid product-img" alt="${product.name}">
    </div>
    <div class="col-md-6 details">
      <h2>${product.name}</h2>
      <p><strong>Description:</strong> ${product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Sizes Available:</strong> ${product.size}</p>
      <p><strong>Color:</strong> ${product.color}</p>
      <p><strong>Material:</strong> ${product.material}</p>

      <form id="order-form" class="mt-4">
        <div class="mb-3">
          <label for="size" class="form-label"><strong>Select Size</strong></label>
          <select id="size" class="form-select" required>
            <option value="">Choose...</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">X-Large</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="quantity" class="form-label"><strong>Quantity</strong></label>
          <input type="number" id="quantity" class="form-control" min="1" value="1" required>
        </div>

        <button type="submit" class="btn btn-success">Add to Cart</button>
      </form>

      <div class="mt-3">
        <a href="cart.html" class="btn btn-outline-primary">🛒 Go to Cart</a>
      </div>
    </div>
  `;
}

const table = document.getElementById("dashboard-table");
let count = 1;

for (const id in products) {
  const product = products[id];
  let category = "";

  if (id.startsWith("b")) category = "Blazer";
  else if (id.startsWith("c")) category = "Coat";
  else if (id.startsWith("j")) category = "Jacket";

  const row = `
    <tr>
      <td>${count++}</td>
      <td><img src="${product.image}" alt="${product.name}"></td>
      <td>${product.name}</td>
      <td>${category}</td>
      <td>${product.price}</td>
      <td><a href="details.html?id=${id}" class="btn btn-sm btn-dark">View</a></td>
    </tr>
  `;
  table.innerHTML += row;
}

document.getElementById("order-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const selectedSize = document.getElementById("size").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  if (!selectedSize || quantity < 1) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({
    id: productId,
    name: product.name,
    image: product.image,
    size: selectedSize,
    price: product.price,
    quantity: quantity,
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
});

const cartContainer = document.getElementById("cart-container");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let total = 0;
  let html = `<table class="table table-bordered">
        <thead>
          <tr><th>Product</th><th>Size</th><th>Qty</th><th>Price</th><th>Total</th><th>Action</th></tr>
        </thead><tbody>`;

  cart.forEach((item, i) => {
    const unitPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
    const itemTotal = unitPrice * item.quantity;
    total += itemTotal;

    html += `
          <tr>
            <td><img src="${item.image}" style="height: 50px;"/> ${
      item.name
    }</td>
            <td>${item.size}</td>
            <td><input type="number" min="1" value="${
              item.quantity
            }" onchange="updateQty(${i}, this.value)"/></td>
            <td>${item.price}</td>
            <td>₦${itemTotal.toLocaleString()}</td>
            <td><button class="btn btn-sm btn-danger" onclick="removeItem(${i})">Delete</button></td>
          </tr>
        `;
  });

  html += `</tbody></table>
        <h5 class="text-end">Total: ₦${total.toLocaleString()}</h5>
        <button class="btn btn-warning" onclick="clearCart()">Clear Cart</button>
        <a href="index.html" class="btn btn-secondary">Continue Shopping</a>`;

  cartContainer.innerHTML = html;
}

function updateQty(index, newQty) {
  cart[index].quantity = parseInt(newQty);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  renderCart();
}

renderCart();



  