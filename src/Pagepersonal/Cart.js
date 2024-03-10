import React from "react";
import { Link } from "react-router-dom";
import "../styleee.css";
import Motor from "../images/car.png";
import House from "../images/home.jpg";
import Travel from "../images/travel.png";
import Healthh from "../images/health.png";
import Termlife from "../images/termlife.png";
import Personal from "../images/PersonalAcc.png";

const products = [
  {
    id: 1,
    name: "HEALTHCARE INSURANCE",
    rating: 4.3,
    image: Healthh,
    type: "/Detail",
    typee: "/QuoteHealth",
  },
  {
    id: 2,
    name: "MOTOR INSURANCE",
    rating: 4.2,
    image: Motor,
    type: "/Detail",
    typee: "/MotorQu",
  },
  {
    id: 3,
    name: "HOUSEHOLD MULTI-RISK INSURANCE",
    rating: 3.2,
    image: House,
    type: "/Detail",
    typee: "/QuoteHouse",
  },
  {
    id: 4,
    name: "PERSONAL ACCIDENT INSURANCE",
    rating: 4.8,
    image: Personal,
    type: "/Detail",
    typee: "/QuotePerAc",
  },
  {
    id: 5,
    name: "TRAVEL INSURANCE",
    rating: 4.5,
    image: Travel,
    type: "/Detail",
    typee: "/QuoteTravel",
  },
  {
    id: 6,
    name: "TERM LIFE INSURANCE",
    rating: 3.8,
    image: Termlife,
    type: "/Detail",
    typee: "/QuoteTermL",
  },
];

const Cart = () => {
  return (
    <div className="App">
      <main>
        <div className="titleee">
          <h2 className="title">INSURANCE ESSENTIALS</h2>
        </div>
        <div className="products">
          <div className="productt">
            <span>Covering all</span>
            <br />
            <span>insurance</span>
            <br />
            <span>fields</span>
          </div>
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img className="product-image" src={product.image} alt={product.image} />
              <div className="overlay"></div>
              <h4 className="product-name">{product.name}</h4>
              <div className="buttons">
                <Link to={product.type} className="buttoon">
                  <p className="forp">Detail</p>
                </Link>
                <Link to={product.typee} className="buttoon">
                  <p className="forp">Request A Quote</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Cart;
