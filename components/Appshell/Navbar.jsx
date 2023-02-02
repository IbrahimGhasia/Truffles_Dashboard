const Navbar = (props) => {
	return (
		<>
			<ul className="text-gray_ mx-12">
				<div className="flex flex-row border-solid border-0 rounded-lg p-3 bg-white cursor-pointer">
					<img
						src="/dashboard_icon.svg"
						className=" p-2 border-0 rounded-lg bg-purple_ shadow-md"
					/>
					<li className="ml-3 mt-1.5 text-sm">Dashboard</li>
				</div>

				<div className="flex flex-row border-solid border-0 rounded-lg p-4 cursor-pointer">
					<img
						src="/invoice_icon.svg"
						className=" p-2 border-0 rounded-lg bg-white shadow-md"
					/>
					<li className="ml-3 mt-1.5 text-sm">Dashboard</li>
				</div>

				<div className="flex flex-row border-solid border-0 rounded-lg p-4 cursor-pointer">
					<img
						src="/performa_icon.svg"
						className=" p-2 border-0 rounded-lg bg-white shadow-md"
					/>
					<li className="ml-3 mt-1.5 line-through text-sm">Performa</li>
				</div>

				<div className="flex flex-row border-solid border-0 rounded-lg p-4 cursor-pointer">
					<img
						src="/swap_icon.svg"
						className=" p-2 border-0 rounded-lg bg-white shadow-md"
					/>
					<li className="ml-3 mt-1.5 line-through text-sm">Swap</li>
				</div>

				<div className="flex flex-row border-solid border-0 rounded-lg p-4 cursor-pointer">
					<img
						src="/transfer_icon.svg"
						className=" p-2 border-0 rounded-lg bg-white shadow-md"
					/>
					<li className="ml-3 mt-1.5 line-through text-sm">Transfer</li>
				</div>

				<div className="flex flex-row border-solid border-0 rounded-lg p-4 cursor-pointer">
					<img
						src="/contact_icon.svg"
						className=" p-2 border-0 rounded-lg bg-white shadow-md"
					/>
					<li className="ml-3 mt-1.5 text-sm">Contact</li>
				</div>
			</ul>
		</>
	);
};
export default Navbar;
