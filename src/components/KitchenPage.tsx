import React, { useState, useEffect } from "react";
import "../../public/Styles/kitchenPage.css";
import Header from "./Header";

const kitchenImages = [
	"../Images/Kitchen/3Kitchen.jpg",
	// "../Images/Kitchen/4Kitchen.png",
	"../Images/Kitchen/6Kitchen.jpeg",
	"../Images/Kitchen/7Kitchen.jpeg",
	"../Images/Kitchen/8Kitchen.jpeg",
];

function KitchenPage() {
	const [currentKitchenImageIndex, setCurrentKitchenImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentKitchenImageIndex(
				(prevIndex) => (prevIndex + 1) % kitchenImages.length
			);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval); // Clear the interval on component unmount
	}, [currentKitchenImageIndex]);

	return (
		<>
			<div className="kitchenPageSection">
				<Header />
				<div className="kitchenPageContainer">
					<div className="kitchenPageLeft">
						<div className="kitchenPageText">
							<h2>
								<br></br>Kitchen Installation
							</h2>
							<p className="kitchenInfo">
								At dbi studio, our primary aim is to offer you a hassle-free
								experience while delivering exceptional quality. As a close-knit
								team, we guide you throughout the entire process, setting us
								apart from larger companies and ensuring a personalized,
								hands-on approach. We're readily available to address any
								questions or modifications you may have.<br></br>
								<br></br> When embarking on your kitchen project, it's common to
								feel uncertain about where to start. It is important to consider
								any work that may need to be done before a kitchen installation:
								<br></br>
								<br></br>
								<ul className="kitchenList">
									<li>Builder</li>
									<li>Plasterer</li>
									<li>Painter & Decorator</li>
									<li>Plumber</li>
									<li>Electrician</li>
									<li>Lighting</li>
									<li>Interior Furnishings</li>
									<li>Materials</li>
									<li>Budget</li>
								</ul>
								We can connect you with our trusted tradespeople for building,
								plumbing, and electrical work, guaranteeing a seamless journey
								from the initial consultation to project completion.
								Alternatively, you can choose your own professionals.<br></br>
								<br></br>
								In our kitchens, we exclusively utilize top-of-the-line
								hardware. For drawers, hinges, and lift-up fittings, we rely on
								Blum, a reputable Austrian manufacturer with a lifetime limited
								warranty. Blum's commitment to quality and exceeding industry
								standards ensures exceptional durability.<br></br>
								<br></br> Complementing this, we incorporate accessories from
								our trusted suppliers, always prioritizing the highest-quality
								products to achieve the finest finish possible.<br></br>
								<br></br> If our approach resonates with you and aligns with
								your kitchen aspirations, reach out to us through our contact
								page, and let's begin crafting your dream kitchen together.
							</p>
						</div>
					</div>
					<div className="kitchenPageRight">
						<div className="processContainer">
							<h3 className="process">Our Process</h3>
						</div>
						<div className="boxesContainer">
							<div className="BoxCon">
								<div className="repairGuy">
									<img src="../Images/SVG Icons/repair-guy-outline-svgrepo-com (1).svg"></img>
								</div>
								<div className="steptitle">
									<h3>Hi</h3>
									<p className="stepsList">
										Start by understanding your preferences and requirements to
										ensure your satisfaction.
									</p>
								</div>
							</div>
							<div className="BoxCon">
								<div className="repairGuy">
									<img src="../Images/SVG Icons/design-svgrepo-com.svg"></img>
								</div>
								<p className="stepsList">
									Translate consultation insights into a collaborative design
									process. We'll also discuss plumbing, electrical changes, and
									flooring plans.
								</p>
							</div>
							<div className="BoxCon">
								<div className="repairGuy">
									<img src="../Images/SVG Icons/sledgehammer-svgrepo-com.svg"></img>
								</div>
								<p className="stepsList">
									Prepare the space by removing your old kitchen.
								</p>
							</div>
							<div className="BoxCon">
								<div className="repairGuy">
									<img src="../Images/SVG Icons/double-wrench-tool-and-hammer-forming-a-cross-of-outlines-svgrepo-com.svg"></img>
								</div>
								<p className="stepsList">
									The exciting final step! We'll install your pre-built cabinets
									within a week for a stress-free experience.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default KitchenPage;
