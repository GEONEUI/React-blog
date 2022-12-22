import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../conponent/Card";

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
			<h1>Blogs</h1>
			{post.map((item) => {
				return (
					<Card item={item} key={item.title} />
				);
			})}</div >
	);
}

export default Listpage;