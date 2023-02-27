import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../model/Product";
import { ProductDto } from "../../model/ProductDto";
import "./detail.scss";
import { formatNumber } from "../../helper/utils";
import { BreadcrumbContext } from "../../context/BreadcrumbContext";
import { getProduct } from "../../api/products";

export const Detail = () => {
  const { id } = useParams();
  const { setLocalCategories } = useContext(BreadcrumbContext);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setLocalCategories([]);
    getProduct(id as string)
      .then((resp) => resp.json())
      .then((resp: ProductDto) => {
        const producto = resp.item;
        producto.price.decimals = formatNumber(producto.price.decimals);
        setProduct(resp.item);
        setLocalCategories(resp.categories);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Cargando</div>;
  }

  return (
    <div className="row detail content">
      <div className="col-lg-9 col-md-8">
        <div className="picture">
          <img src={product?.picture} alt="imagen producto" />
        </div>
        <div className="detail">
          <h3>Descripción del producto</h3>
          <p className="description">{product?.description}</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-4">
        <div className="row">
          <div className="col-12 rigthPanel">
            <span className="condition">
              {product?.condition} - {product?.sold_quantity} vendidos
            </span>
            <h1 className="mt-2">{product?.title}</h1>
            <p className="price my-5">
              $ {product?.price.decimals} <sup className="sup">00</sup>
            </p>
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
