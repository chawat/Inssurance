
import React, {
	useState,
	useEffect,
} from "react";
import "./about.css";
import Motor from '../images/vision.svg';
import House from '../images/growth.svg';
import Healthh from '../images/mission.svg';
import Termlife from '../images/Quality.svg';
const products = [
	{
		id: 1,
		name: "Mission",
		rating: 4.3,
		description:
			"Our Mission is to help people manage the risks of everyday life, recover from the unexpected and preserve their lifetime financial Security.",
		price: 199,
		image: Healthh,
    type:"/HealthcareInsurance",
	typee:"/MotorQu",
	},
	{
		id: 2,
		name: "Vision",
		rating: 4.2,
		description:
			"Our Vision is to be a Regional Insurance Financial Services Leader, offering Innovative and Effective opportunities for Protection, Savings and Investment, consequently providing Security for all of our Stakeholders.",
		price: 229,
		image: Motor,
    type:"/Motor",
	typee:"/MotorQu",
	},
	{
		id: 3,
		name: "Growth & Profitability",
		rating: 3.2,
		description:
			"Achieve a steady Growth and increase Profitability to maintain Financial Strength and Sustainable Development.",
		price: 99,
		image: House,
    type:"/House",
	typee:"/MotorQu",
	},
	{
		id: 4,
		name: "Quality",
		rating: 4.8,
		description:
			"Provide the Finest Services to our Business Partners and Customers coupled with Professionalism and Excellence",
		price: 119,
		image: Termlife,
    type:"/Personal",
	typee:"/MotorQu",
	},
	
];
const Cartabout = () => {

	

	return (
		<div className="Appabout">
			<div className="maineabout">
			<h2 className="titleab">
				MISSON, VISION & GOALS
				</h2>
				
				<div className="productsab">
				
					{products.map((product) => (
						<div
							className="productab"
							key={product.id}>
								<div class="image-containerrr">
							<img
								className="product-imageee"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							</div>
							<h4 className="productab-name">
								{product.name}
							</h4>
							<p>
								{
									product.description
								}
							</p>
              </div>
						
					))}
				</div>
			</div>
		</div>
	);
}

export default Cartabout;