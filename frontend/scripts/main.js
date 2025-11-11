import ApiService from "../services/apiService.js";
const productList = document.getElementById("product-list");
const incentiveResult = document.getElementById("incentive-result");
const checkIncentiveBtn = document.getElementById("checkIncentiveBtn");

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

async function initApp() {
  try {
    const products = await ApiService.get("/products");
    renderProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    productList.innerHTML = `<p class="error-text">Failed to load products.</p>`;
  }
}

// Handle incentive lookup
checkIncentiveBtn.addEventListener("click", async () => {
  const zip = document.getElementById("zip-input").value.trim();
  if (!zip) {
    alert("Please enter a ZIP code.");
    return;
  }

  try {
    const incentive = await ApiService.get(`/incentive/?zip_code=${zip}`);
    console.log(incentive);
    renderIncentive(incentive);
  } catch (error) {
    console.error("Error fetching incentive:", error);
    incentiveResult.innerHTML = `<p class="error-text">No incentives found for ZIP ${zip}.</p>`;
    incentiveResult.classList.remove("hidden");
  }
});

function renderProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h4>${p.name}</h4>
      <p class="desc">${p.description}</p>
      <div class="product-metrics">
        <div class="metric">
          <i class="fas fa-tags"></i>
          <span class="metric-label">Price</span>
          <span class="metric-value">${p.price}</span>
        </div>
        <div class="metric">
          <i class="fas fa-hand-holding-usd"></i>
          <span class="metric-label">Incentive</span>
          <span class="metric-value">${p.incentive}</span>
        </div>
        <div class="metric">
          <i class="fas fa-leaf"></i>
          <span class="metric-label">Carbon Saved</span>
          <span class="metric-value">${p.carbon_savings}</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-edit" data-id="${p.id}">
          <i class="fas fa-edit"></i> Edit
        </button>
        <button class="btn-delete" data-id="${p.id}">
          <i class="fas fa-trash"></i> Delete
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  attachDeleteHandlers();
  attachEditHandlers();
}

function attachEditHandlers() {
  const editButtons = document.querySelectorAll(".btn-edit");

  editButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = e.target.closest("button").dataset.id;
      openEditModal(productId);
    });
  });
}

function openEditModal(id) {
  const modal = document.getElementById("editModal");
  const product = [...document.querySelectorAll(".product-card")]
    .map((card) => ({
      id: card.querySelector(".btn-edit").dataset.id,
      name: card.querySelector("h4").textContent,
      description: card.querySelector(".desc").textContent,
      price: card.querySelector(".metric-value:nth-child(3)").textContent,
    }))
    .find((p) => p.id === id);

  // Pre-fill (optional: skip if you don’t want prefilled values)
  document.getElementById("edit-id").value = id;
  document.getElementById("edit-name").value = product.name;
  document.getElementById("edit-description").value = product.description;
  document.getElementById("edit-price").value = product.price;
  document.getElementById("edit-incentive").value = "";
  document.getElementById("edit-carbon").value = "";

  modal.classList.remove("hidden");
}

// Close modal
document.getElementById("cancelEdit").addEventListener("click", () => {
  document.getElementById("editModal").classList.add("hidden");
});

// Handle update form submit
document.getElementById("editForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = document.getElementById("edit-id").value;
  const updatedProduct = {
    id,
    name: document.getElementById("edit-name").value.trim(),
    description: document.getElementById("edit-description").value.trim(),
    price: document.getElementById("edit-price").value.trim(),
    incentive: document.getElementById("edit-incentive").value.trim(),
    carbon_savings: document.getElementById("edit-carbon").value.trim(),
  };

  // Validate all fields
  for (let [key, value] of Object.entries(updatedProduct)) {
    if (!value) {
      alert(`Please fill in the ${key} field.`);
      return;
    }
  }

  try {
    await ApiService.put(`/products/${id}`, updatedProduct);
    alert("Product updated successfully!");
    document.getElementById("editModal").classList.add("hidden");
    initApp();
  } catch (error) {
    console.error("Error updating product:", error);
    alert("Failed to update product.");
  }
});



function attachDeleteHandlers() {
  const deleteButtons = document.querySelectorAll(".btn-delete");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const productId = e.target.closest("button").dataset.id;
      // const confirmDelete = confirm("Are you sure you want to delete this product?");
      // if (!confirmDelete) return;

      try {
        await ApiService.delete(`/products/${productId}`);
        alert("Product deleted successfully!");
        // Refresh product list
        initApp();
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete product.");
      }
    });
  });
}



function renderIncentive(incentive) {
  if (!incentive) {
    incentiveResult.innerHTML = `<p>No incentives found for the entered ZIP code.</p>`;
  } else {
    incentiveResult.innerHTML = `
            <p><strong>Total Incentive:</strong> ${incentive[0].total_incentive}</p>
            <p><strong>ORG:</strong> ${incentive[0].org}</p>
            <p><strong>ZIP Code:</strong> ${incentive[0].zip_code}</p>
          `;
  }
  incentiveResult.classList.remove("hidden");
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      // Format: "data:<mimeType>;base64,<encodedData>"
      const [meta, base64] = result.split(",");
      const mimeType = meta.match(/:(.*?);/)[1];
      resolve({
        data: base64,
        mimeType,
        displayName: file.name,
      });
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// --- CREATE PRODUCT MODAL ---
const addProductBtn = document.getElementById("addProductBtn");
const createModal = document.getElementById("createModal");
const cancelCreate = document.getElementById("cancelCreate");
const createForm = document.getElementById("createForm");

// Open modal
addProductBtn.addEventListener("click", () => {
  createModal.classList.remove("hidden");
});

// Close modal
cancelCreate.addEventListener("click", () => {
  createModal.classList.add("hidden");
});

// Handle form submit
createForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newProduct = {
    id: document.getElementById("create-id").value.trim(),
    name: document.getElementById("create-name").value.trim(),
    description: document.getElementById("create-description").value.trim(),
    price: document.getElementById("create-price").value.trim(),
    incentive: document.getElementById("create-incentive").value.trim(),
    carbon_savings: document.getElementById("create-carbon").value.trim(),
  };

  // Validate all fields
  for (let [key, value] of Object.entries(newProduct)) {
    if (!value) {
      alert(`Please fill in the ${key} field.`);
      return;
    }
  }

  try {
    await ApiService.post("/products", newProduct);
    alert("Product created successfully!");
    createModal.classList.add("hidden");
    createForm.reset();
    initApp();
  } catch (error) {
    console.error("Error creating product:", error);
    alert("Failed to create product.");
  }
});
