import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../conponent/Card";

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
			<h1>Blogs</h1>
			{posts.map((post) => {
				return (
					<Card post={post} key={post.title} >
						<div>button</div>
					</Card>
				);
			})}</div >
	);
}

export default Listpage;