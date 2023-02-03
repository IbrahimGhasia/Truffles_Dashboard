const StockPriceCard = (props) => {
	return (
		<>
			<div className="grid grid-cols-6 border-0 p-6">
				<img
					src={props.icon}
					alt="red arrow"
					className="col-span-1 mt-1 ml-3"
				/>
				<div className="flex flex-col col-span-3">
					<p className="font-medium text-xs">QUICKSILVER LLC</p>
					<p className="font-medium text-[8px]">TFID: 8045780</p>
				</div>
				<p className="font-medium text-xs col-span-2 mt-1 ml-5">$ 145,000.00</p>
			</div>
		</>
	);
};
export default StockPriceCard;
