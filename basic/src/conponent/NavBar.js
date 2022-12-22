import { Link } from 'react-router-dom';

const NavBar = () => {
	return (


		<>
			<ul class="nav justify-content-end">
				<li class="nav-item">
					<Link class="nav-link active text-black" aria-current="page" to="/">Home</Link>
				</li>
				<li class="nav-item">
					<Link class="nav-link active text-black" aria-current="page" to="/Blogs">Blogs</Link>
				</li>
			</ul>
		</>



	);
}

export default NavBar;