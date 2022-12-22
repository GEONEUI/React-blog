import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar bg-dark navbar-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">Home</Link>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link active" aria-current="page" to="/Blogs">Blogs</Link>
					</li>
				</ul>
			</div>
		</nav>



	);
}

export default NavBar;