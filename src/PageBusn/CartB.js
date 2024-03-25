
import React, {
	useState,
	useEffect,
} from "react";
import "../styleee.css";
import { Link } from 'react-router-dom';
import { GiShoppingBag } from "react-icons/gi";
import Machinery from '../images/mac.png';
import Money from '../images/bm.png';
import Cargo from '../images/co.png';
import GroupP from '../images/gr.png';
import MotorGr from '../images/mf.jpg';
const products = [
	{
		id: 1,
		name: "GROUP PERSONAL ACCIDENT INSURANCE",
		rating: 4.3,
		description:
			"Protect your Employees from Unpredictable Accidents that might happen anytime and anywhere.",
		price: 199,
		image: GroupP,
    type:"/DetailB",
    typee:"/BQDetail",
	nameee:"Group Personal",
	},
	{
		id: 2,
		name: "GROUP HEALTHCARE INSURANCE",
		rating: 4.2,
		// description:
		// 	"Protect your Employees and their Family Members by fulfilling their Medical Needs whether they benefit from the National Social Security Fund (NSSF) or not.",
		// price: 229,
		image: GroupP,
    type:"/DetailB",
    typee:"/BQDetail",
	nameee:"Group Health",
	},
	{
		id: 3,
		name: "CARGO INSURANCE",
		rating: 3.2,
		// description:
		// 	"Protect your Shipment of Goods against Perils that might arise during its Transportation by Air, by Sea or via Land Transit.",
		// price: 99,
		image: Cargo,
    type:"/DetailB",
    typee:"/BQDetail",
	nameee:"Cargo"
	},
	{
		id: 4,
		name: "MONEY INSURANCE",
		// rating: 4.8,
		// description:
		// 	"Protect your Money against Potential Risks arising from Burglary, Employee Fraudulent Behavior... ",
		// price: 119,
		image: Money,
    type:"/DetailB",
    typee:"/BQDetail",
	nameee:"Money"
	},
	{
		id: 5,
		name: "MACHINERY BREAKDOWN INSURANCE",
		// rating: 4.5,
		// description:
		// 	"Protect your Machinery Assets against Failures and Breakdowns that might affect negatively your Business Cycle.",
		// price: 85,
		image: Machinery,
    type:"/DetailB",
    typee:"/BQDetail",
	nameee:"Machine"
	},
	{
		id: 6,
		name: "MOTOR FLEET INSURANCE",
		image: MotorGr,
    type:"/DetailB",
    typee:"/BQDetail",
	nameee:"Motor"
	},
];
const Cart = () => {

	// const [productsInCart, setProducts] =
	// 	useState(
	// 		JSON.parse(
	// 			localStorage.getItem(
	// 				"shopping-cart"
	// 			)
	// 		) || []
	// 	);
	// useEffect(() => {
	// 	localStorage.setItem(
	// 		"shopping-cart",
	// 		JSON.stringify(productsInCart)
	// 	);
	// }, [productsInCart]);
	// const addProductToCart = (product) => {
	// 	const newProduct = {
	// 		...product,
	// 		count: 1,
	// 	};
	// 	setProducts([
	// 		...productsInCart,
	// 		newProduct,
	// 	]);
	// };

	// const onQuantityChange = (
	// 	productId,
	// 	count
	// ) => {
	// 	setProducts((oldState) => {
	// 		const productsIndex =
	// 			oldState.findIndex(
	// 				(item) =>
	// 					item.id === productId
	// 			);
	// 		if (productsIndex !== -1) {
	// 			oldState[productsIndex].count =
	// 				count;
	// 		}
	// 		return [...oldState];
	// 	});
	// };

	// const onProductRemove = (product) => {
	// 	setProducts((oldState) => {
	// 		const productsIndex =
	// 			oldState.findIndex(
	// 				(item) =>
	// 					item.id === product.id
	// 			);
	// 		if (productsIndex !== -1) {
	// 			oldState.splice(productsIndex, 1);
	// 		}
	// 		return [...oldState];
	// 	});
	// };

	return (
		<div className="App">
			<main>
				<h2 className="titleee">
        INSURANCE ESSENTIALS
				</h2>
				<div className="products">
				<div className="productt">
            <span>Covering all</span>
            <br />
            <span>insurance</span>
            <br />
            <span>fields</span>
          </div>
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<div className="ooverlaybus"></div>
							<h4 className="product-name">
								{product.name}
							</h4>
							{/* <RatingStars
								rating={
									product.rating
								}
							/> */}
							{/* <p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span> */}
              <div className="buttons"> 
              <Link to={product.type} className="buttoon" >
							
								<p className="forp">
									Detail
								</p>
               
                </Link>
				<Link to={`/BQDetail?Type=${encodeURIComponent(product.nameee)}`} className="buttoon">
  <p className="forp">Request A Quote</p>
</Link>

							</div>
              </div>
						
					))}
				</div>
			</main>
		</div>
	);
}

export default Cart;