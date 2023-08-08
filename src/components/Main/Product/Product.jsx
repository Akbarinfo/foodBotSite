import * as React from "react";
import { Link } from "react-router-dom";
import foodList from "../../../database/foodList.json";

export const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <ul className="product__list">
          {foodList.map((food, key) => {
            return (
              <li key={key + 1} className="product__item">
                <div className="product__item-box">
                  <Link to={food.link}>
                    <div className="product__img">
                      <img src={food.images} alt={food.name} />
                    </div>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
