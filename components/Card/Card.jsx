const Card = (props) => {
	return (
		<div className="border-0 bg-white rounded-lg p-6 grid grid-cols-2 relative shadow-lg">
			<div className="flex flex-col">
				<p className="text-gray_ text-base font-normal">{props.title}</p>
				<p className="mt-4 font-bold text-2xl">$00,000</p>
			</div>
			<div className="absolute right-0 mr-6 mt-7 shadow-lg">
				<img
					src={props.icon}
					className="border-0 rounded-lg p-3.5 w-[60px] h-[60px] bg-purple_"
				/>
			</div>
		</div>
	);
};
export default Card;
