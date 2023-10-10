import React, { useState } from "react";
import { useProducts } from "../../context/providers/ProductsContext";
import Spinner from "../../components/ui/Spinner";

const ProductForm = () => {
  const { addNewProduct, isLoading } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const handleChange = (ev) => {
    setProduct({ ...product, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    addNewProduct(product);
  };
  return (
    <div className="row h-100">
      <div className="col-md-6 offset-md-3 my-auto">
        <form className="card card-body" onSubmit={handleSubmit}>
          <div className="row">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Subir artículo</h1>
              <button
                className="btn btn-primary"
                disabled={!product.name && isLoading}
              >
                {isLoading ? (
                  <>
                    <Spinner />
                    <span className="ms-2">Cargando...</span>
                  </>
                ) : (
                  <span>Guardar</span>
                )}
              </button>
            </div>
            <div className="col-md-8">
              <label htmlFor="name">Nombre:</label>
              <input
                className="form-control mb-2"
                type="text"
                name="name"
                onChange={handleChange}
                autoFocus
              />
              <label htmlFor="description">Descripción:</label>
              <textarea
                className="form-control"
                rows="2"
                name="description"
                onChange={handleChange}
              ></textarea>

              <label htmlFor="price">Precio:</label>
              <input
                className="form-control mb-2"
                type="text"
                name="price"
                onChange={handleChange}
                value={product.price}
              />
              <label htmlFor="image">Imagen:</label>
              <input
                className="form-control mb-2"
                type="text"
                name="image"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 my-auto">
              <img
                src="/assets/image.jpg"
                alt="Añade un artículo"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
