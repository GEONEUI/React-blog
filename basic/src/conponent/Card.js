const Card = ({ item }) => {
	return (
		<div className="card mb-3" >
			<div className="card-body">
				{item.title}
			</div>
		</div>
	);
};

export default Card;