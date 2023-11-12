import "../../public/Styles/header.css";

function Header() {
	return (
		<div className="headerSection">
			<div className="headerContainer">
				<ul className="headerList">
					<li className="headerItem">
						<a className="headerItem" href="#home">
							Home
						</a>
					</li>
					<li className="headerItem">
						<a className="headerItem" href="#kitchen">
							Kitchen
						</a>
					</li>
					<li className="headerItem">
						<a className="headerItem" href="#wardrobe">
							Wardrobe
						</a>
					</li>
					<li className="headerItem">
						<a className="headerItem" href="#about">
							About
						</a>
					</li>
					<li className="headerItem">
						<a className="headerItem" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
