// GET REQUEST
function getTodos() {
  axios
    .get("https://fakestoreapi.com/products/")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// GET 1 REQUEST
function get1Todos() {
  axios
    .get("https://fakestoreapi.com/products/1")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// GET CATEGORY REQUEST
function getCategoryTodos() {
  axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// GET JEWELERY REQUEST
function getJeweleryTodos() {
  axios
    .get("https://fakestoreapi.com/products/category/jewelery")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// GET USER ID 1 REQUEST
function getUserIdTodos() {
  axios
    .get("https://fakestoreapi.com/cart?userId=1")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// GET LIMIT 5 REQUEST
function get5Todos() {
  axios
    .get("https://fakestoreapi.com/products?limit=5")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// POST REQUEST
function addTodo() {
  axios
    .post("https://fakestoreapi.com/products", {
      title: "Mens Leather Jacket",
      price: 49.99,
      description: "Great outwear leather jacket for Fall & Winter",
      category: "men's clothing",
      rating: {
        rate: 4.7,
        count: 123,
      },
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// PUT REQUEST
function putTodo() {
  axios
    .put("https://fakestoreapi.com/products/1", {
      title: "Black Mens Leather Jacket",
      price: 49.99,
      description: "Great black outwear leather jacket for Fall & Winter",
      category: "men's clothing",
      rating: {
        rate: 4.7,
        count: 123,
      },
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// PATCH REQUEST
function patchTodo() {
  axios
    .patch("https://fakestoreapi.com/products/1", {
      title: "Discounted Mens Leather Jacket",
      price: 39.99,
      description: "Great black outwear leather jacket for Fall & Winter",
      category: "men's clothing",
      rating: {
        rate: 4.7,
        count: 123,
      },
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("https://fakestoreapi.com/products/1")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
      <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
      </div>
      <div class="card mt-3">
        <div class="card-header">
          Headers
        </div>
        <div class="card-body">
          <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-header">
          Data
        </div>
        <div class="card-body">
          <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-header">
          Config
        </div>
        <div class="card-body">
          <pre>${JSON.stringify(res.config, null, 2)}</pre>
        </div>
      </div>
    `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("get_1").addEventListener("click", get1Todos);
document.getElementById("get_cat").addEventListener("click", getCategoryTodos);
document
  .getElementById("get_jewelery")
  .addEventListener("click", getJeweleryTodos);
document
  .getElementById("get_user_id1")
  .addEventListener("click", getUserIdTodos);
document.getElementById("get_5").addEventListener("click", get5Todos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("put").addEventListener("click", putTodo);
document.getElementById("patch").addEventListener("click", patchTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
