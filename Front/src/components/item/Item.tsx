import React from "react";
import { Product } from "../../model/Product";
import { Link } from "react-router-dom";
import "./item.scss";
import { formatNumber } from "../../helper/utils";

interface Props {
  product: Product;
}

export const Item = ({ product }: Props) => {
  product.price.decimals = formatNumber(product.price.decimals);
  return (
    <>
      <div className="col-12 item">
        <div className="d-flex cardMeli">
          <Link to={product.id} className="picture">
            <img src={product.picture} alt="imagen producto" />
          </Link>
          <div className="detail">
            <div className="price">
              <p>$ {product.price.decimals}</p>
              {product.free_shipping && (
                <img
                  className="free"
                  src={require("./../../assets/ic_shipping.png")}
                  alt="envio gratis"
                />
              )}
            </div>
            <Link to={product.id} className="title">
              <p>{product.title}</p>
            </Link>
          </div>
          <div className="city">
            <p>{product.city_name}</p>
          </div>
        </div>
      </div>
    </>
  );
};
