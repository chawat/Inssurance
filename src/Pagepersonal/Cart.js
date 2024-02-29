
import React, {
	useState,
	useEffect,
} from "react";
import "../styleee.css";
import { Link } from 'react-router-dom';
import { GiShoppingBag } from "react-icons/gi";
import Motor from '../images/motor.avif';
import House from '../images/house.jpg';
import Travel from '../images/travel.jpg';
import Healthh from '../images/healthcare.jpg';
import Termlife from '../images/termlife.jpeg';
const products = [
	{
		id: 1,
		name: "HEALTHCARE INSURANCE",
		rating: 4.3,
		description:
			"Safeguard your Qualit of Life by considering the Health Protection Plans provided by Insurance!",
		price: 199,
		image: Healthh,
    type:"/HealthcareInsurance",
	typee:"/MotorQu",
	},
	{
		id: 2,
		name: "MOTOR INSURANCE",
		rating: 4.2,
		description:
			"Mute the headaches caused by Car Accidents and choose one of  our Motor Insurances Plans especially designed to provide you with a Safe Drive.",
		price: 229,
		image: Motor,
    type:"/Motor",
	typee:"/MotorQu",
	},
	{
		id: 3,
		name: "HOUSEHOLD MULTI-RISK INSURANCE",
		rating: 3.2,
		description:
			"Protect your Residence and its Content against many Hazards.For you, the Security and Safety Measures installed are enough but you still need to get covered against Potential Risks including Fire, Burglary, General Third Party Liability & other Perils.",
		price: 99,
		image: House,
    type:"/House",
	typee:"/QuoteHouse",
	},
	{
		id: 4,
		name: "PERSONAL ACCIDENT INSURANCE",
		rating: 4.8,
		description:
			"HAWAT Personal Accident Insurance Plan provides a Guaranteed Worldwide Cover to protect you and your Family from any unforeseen event that might occur.",
		price: 119,
		image: Termlife,
    type:"/Personal",
	typee:"/QuotePerAc",
	},
	{
		id: 5,
		name: "TRAVEL INSURANCE",
		rating: 4.5,
		description:
			"HAWAT Assistance Abroad (AAA), a Travel Insurance & Assistance Plan, especially designed to provide you with the protection you need to travel in peace",
		price: 85,
		image: Travel,
    type:"Travel",
	typee:"/MotorQu",
	},
	{
		id: 6,
		name: "TERM  LIFE INSURANCE",
		rating: 3.8,
		description:
			" HAWAT Term Life Insurance Plan will secure a Superior Life for You and your Family even in the hardest times. This Solution guarantees a Worldwide Protection with a wide choice of Covers.",
		price: 149,
		image: Termlife,
    type:"/Term",
	typee:"/QuoteTermL",
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
				<h2 className="title">
        INSURANCE ESSENTIALS
				</h2>
				<div className="products">
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
							<h4 className="product-name">
								{product.name}
							</h4>
							{/* <RatingStars
								rating={
									product.rating
								}
							/> */}
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
              <div className="buttons"> 
              <Link to={product.type} className="btn" >
							
								<p className="forp">
									Detail
								</p>
               
                </Link>
                <Link to={product.typee} className="btn" >
                
								<p className="forp">
									Request A Quote
								</p>
                
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