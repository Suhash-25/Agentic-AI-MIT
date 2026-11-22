import React, { useState, useEffect } from "react";
import { Plus, Edit3, Trash2, Tag, Leaf, DollarSign, Sparkles, X } from "lucide-react";
import { api } from "../services/api";

export default function ProductCatalog({ onAskAgent }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  // Modal states
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Form fields
  const [formId, setFormId] = useState("");
  const [formName, setFormName] = useState("");
  const [formDesc, setFormDesc] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [formIncentive, setFormIncentive] = useState("");
  const [formCarbon, setFormCarbon] = useState("");

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await api.products.getAll();
      setProducts(data || []);
    } catch (err) {
      console.error("Error loading products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const openAddModal = () => {
    setFormId(`PROD-${Math.floor(100 + Math.random() * 900)}`);
    setFormName("");
    setFormDesc("");
    setFormPrice("$1,200.00");
    setFormIncentive("$360.00");
    setFormCarbon("450 lbs/yr");
    setIsAddOpen(true);
  };

  const openEditModal = (p) => {
    setCurrentProduct(p);
    setFormId(p.id);
    setFormName(p.name);
    setFormDesc(p.description);
    setFormPrice(p.price);
    setFormIncentive(p.incentive);
    setFormCarbon(p.carbon_savings);
    setIsEditOpen(true);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await api.products.create({
        id: formId,
        name: formName,
        description: formDesc,
        price: formPrice,
        incentive: formIncentive,
        carbon_savings: formCarbon,
      });
      setIsAddOpen(false);
      loadProducts();
    } catch (err) {
      alert(`Failed to create product: ${err.message}`);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.products.update(formId, {
        id: formId,
        name: formName,
        description: formDesc,
        price: formPrice,
        incentive: formIncentive,
        carbon_savings: formCarbon,
      });
      setIsEditOpen(false);
      loadProducts();
    } catch (err) {
      alert(`Failed to update product: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this clean energy product?")) return;
    try {
      await api.products.delete(id);
      loadProducts();
    } catch (err) {
      alert(`Failed to delete product: ${err.message}`);
    }
  };

  const filteredProducts = products.filter((p) => {
    if (filter === "all") return true;
    const text = (p.name + " " + p.description).toLowerCase();
    return text.includes(filter);
  });

  return (
    <section id="products" style={{ padding: "5rem 0", background: "var(--bg-canvas)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div>
            <span className="tag" style={{ color: "var(--emerald-700)", fontWeight: 700, fontSize: "0.8125rem", textTransform: "uppercase" }}>
              Clean Energy Systems
            </span>
            <h2 style={{ fontSize: "2.25rem", color: "var(--emerald-950)", marginTop: "0.25rem" }}>
              Commercial & Residential Equipment
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
              High-efficiency solar arrays, microinverters, battery reserves, and heat pumps with verified carbon ratings.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button onClick={openAddModal} className="btn btn-primary">
              <Plus size={18} /> Add New Equipment
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {[
            { id: "all", label: "All Technologies" },
            { id: "solar", label: "Solar Panels" },
            { id: "battery", label: "Storage & Batteries" },
            { id: "inverter", label: "Inverters" },
            { id: "heat", label: "Heat Pumps" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className="btn"
              style={{
                fontSize: "0.875rem",
                padding: "0.4rem 1rem",
                borderRadius: "var(--radius-full)",
                background: filter === cat.id ? "var(--emerald-800)" : "#ffffff",
                color: filter === cat.id ? "#ffffff" : "var(--text-body)",
                border: "1px solid " + (filter === cat.id ? "var(--emerald-800)" : "var(--border-medium)"),
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "4rem", color: "var(--text-muted)" }}>
            <i className="fa fa-spinner fa-spin fa-2x" />
            <p style={{ marginTop: "1rem" }}>Loading certified equipment catalog...</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="card animate-fade-in"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "#ffffff",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <span className="badge badge-emerald" style={{ fontSize: "0.75rem" }}>
                      ID: {p.id}
                    </span>
                    <div style={{ display: "flex", gap: "0.35rem" }}>
                      <button
                        onClick={() => openEditModal(p)}
                        title="Edit product"
                        style={{
                          background: "var(--emerald-50)",
                          border: "none",
                          padding: "0.35rem",
                          borderRadius: "var(--radius-sm)",
                          cursor: "pointer",
                          color: "var(--emerald-800)",
                        }}
                      >
                        <Edit3 size={15} />
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        title="Delete product"
                        style={{
                          background: "var(--danger-soft)",
                          border: "none",
                          padding: "0.35rem",
                          borderRadius: "var(--radius-sm)",
                          cursor: "pointer",
                          color: "var(--danger)",
                        }}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  <h3 style={{ fontSize: "1.25rem", color: "var(--emerald-950)", marginBottom: "0.5rem" }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: 1.5, marginBottom: "1.25rem" }}>
                    {p.description}
                  </p>
                </div>

                <div>
                  {/* Metric Chips */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1.1fr",
                      gap: "0.5rem",
                      background: "var(--bg-canvas)",
                      padding: "0.75rem",
                      borderRadius: "var(--radius-md)",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", fontWeight: 600 }}>PRICE</div>
                      <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--emerald-950)" }}>
                        {p.price}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.6875rem", color: "var(--emerald-700)", fontWeight: 600 }}>INCENTIVE</div>
                      <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--emerald-700)" }}>
                        {p.incentive}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", fontWeight: 600 }}>CO2 SAVING</div>
                      <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#166534" }}>
                        {p.carbon_savings}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      onAskAgent(
                        `Tell me more about ${p.name}. With a price of ${p.price} and incentive of ${p.incentive}, what is the payback timeline?`
                      )
                    }
                    className="btn btn-ghost"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      border: "1px solid var(--border-medium)",
                      fontSize: "0.8125rem",
                      color: "var(--emerald-800)",
                    }}
                  >
                    <Sparkles size={14} /> Consult Agent on this Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add / Edit Modal */}
      {(isAddOpen || isEditOpen) && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(11, 33, 25, 0.65)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "1rem",
          }}
        >
          <div
            className="card animate-fade-in"
            style={{
              width: "100%",
              maxWidth: "520px",
              background: "#ffffff",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              position: "relative",
            }}
          >
            <button
              onClick={() => {
                setIsAddOpen(false);
                setIsEditOpen(false);
              }}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-muted)",
              }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: "1.375rem", color: "var(--emerald-950)", marginBottom: "1.25rem" }}>
              {isAddOpen ? "Add Clean Energy Equipment" : "Edit Equipment Details"}
            </h3>

            <form onSubmit={isAddOpen ? handleCreate : handleUpdate}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0.75rem" }}>
                <div className="form-group">
                  <label className="form-label">Product ID</label>
                  <input
                    type="text"
                    required
                    disabled={isEditOpen}
                    className="form-input"
                    value={formId}
                    onChange={(e) => setFormId(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Description & Efficiency Specs</label>
                <textarea
                  required
                  rows={3}
                  className="form-textarea"
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
                <div className="form-group">
                  <label className="form-label">Retail Price</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formPrice}
                    onChange={(e) => setFormPrice(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Incentive</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formIncentive}
                    onChange={(e) => setFormIncentive(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Carbon Offset</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formCarbon}
                    onChange={(e) => setFormCarbon(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1rem" }}>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddOpen(false);
                    setIsEditOpen(false);
                  }}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {isAddOpen ? "Save to Catalog" : "Update Equipment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
