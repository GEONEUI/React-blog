import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../conponent/Card";
import { Link } from 'react-router-dom';


const Listpage = () => {

	const [posts, setPosts] = useState([]);

	const getPost = () => {

		axios.get("http://localhost:3001/posts").then((res) => {
			setPosts(res.data);
		})

	}

	useEffect(() => {
		getPost();
	}, []);




	return (
		<div>
			<div className="d-flex justify-content-between align-items-center mb-3">
				<h1>Blogs</h1>
				<Link to="/blogs/create" className="btn btn-success">Create New</Link>
			</div>
			{posts.map((post) => {
				return (
					<Card title={post.title} key={post.id} >
						<div>button</div>
					</Card>
				);
			})}</div >
	);
}

export default Listpage;