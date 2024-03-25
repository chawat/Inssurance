

import "./about.css";
import Motor from '../images/vision.jpg';
import House from '../images/growth.png';
import Healthh from '../images/mission.png';
import Termlife from '../images/quality.png';
const products = [
	{
		id: 1,
		name: "Mission",
		rating: 4.3,
		description:
		"Our Mission is to help people manage the risks of everyday life, recover from the unexpected and preserve their lifetime financial Security.",		price: 199,
		image: Healthh,
		type: "/HealthcareInsurance",
		typee: "/MotorQu",
	},
	{
		id: 2,
		name: "Vision",
		rating: 4.2,
		description:
			"Our Vision is to become a regional leader in insurance and financial services, providing innovative opportunities ensuring security for all stakeholders.",
	
		image: Motor,
		type: "/Motor",
		typee: "/MotorQu",
	},
	{
		id: 3,
		name: "Growth & Profitability",
		rating: 3.2,
		description:
		"Driven by a commitment to excellence, we strive to achieve steady growth and increased profitability fostering sustainable development for the benefit of all.",		
		image: House,
		type: "/House",
		typee: "/MotorQu",
	},
	{
		id: 4,
		name: "Quality",
		rating: 4.8,
		description:
		"At the core of our operations lies an unwavering dedication to quality. We continuously innovate and refine our processes to deliver the finest services  focusing on excellence.",
		image: Termlife,
		type: "/Personal",
		typee: "/MotorQu",
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
							<p >
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