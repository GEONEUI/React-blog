import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav class="navbar bg-dark navbar-dark">
			<div class="container">
				<Link class="navbar-brand" to="/">Home</Link>
				<ul class="navbar-nav">
					<li class="nav-item">
						<Link class="nav-link active" aria-current="page" to="/Blogs">Blogs</Link>
					</li>
				</ul>
			</div>
		</nav>



	);
}

export default NavBar;