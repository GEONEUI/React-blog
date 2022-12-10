import axios from "axios";
import { useState, useEffect } from "react";

const Listpage = () => {

	const [post, setPost] = useState([]);

	const getPost = () => {

		axios.get("http://localhost:3001/posts").then((res) => {
			setPost(res.data);
		})

	}

	useEffect(() => {
		getPost();
	}, []);




	return (
		<div>
			<h1>List contents</h1>
			{post.map((item) => {
				return (
					<div>{item.title}</div>
				);
			})}</div>
	);
}

export default Listpage;