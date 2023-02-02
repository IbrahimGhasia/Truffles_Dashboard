import Navbar from "./Navbar";

const DashboardAppshell = (props) => {
	return (
		<>
			<div className="grid grid-cols-4 border-b-2 pb-7">
				<div>
					<div>
						<img src="/truffle_logo.svg" className="mt-7 ml-12" />
					</div>
				</div>
				<div className="col-span-3">
					<div className="flex justify-between">
						<p className="mt-7 text-black_ text-2xl font-bold">Dashboard</p>
						<div className="mt-8">
							<div className="flex flex-row gap-3 mr-12">
								<img src="/user_circle.svg" />
								<p className="text-sm text-gray_">Evan Winter</p>
								<img src="/notification_bell.svg" />
								<d className="bg-[#F5222D] text-[#fff] text-[11px] rounded-full absolute h-[15px] w-[15px] text-center top-[28px] right-[44px]">
									4
								</d>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-4 mt-7">
				<nav>
					<Navbar />
				</nav>

				<div className="col-span-3">
					<p>Content</p>
				</div>
			</div>
		</>
	);
};
export default DashboardAppshell;
