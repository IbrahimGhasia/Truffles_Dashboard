import Dashboard from "components/Dashboard/Dashboard";
import Link from "next/link";
import Navbar from "./Navbar";

const DashboardAppshell = (props) => {
	return (
		<>
			<div className="grid grid-cols-5 border-b-2 pb-7">
				<div>
					<div>
						<img
							src="/truffle_logo.svg"
							className="mt-7 ml-12 cursor-pointer"
						/>
					</div>
				</div>
				<div className="col-span-4">
					<div className="flex justify-between">
						<p className="mt-7 text-black_ text-2xl font-bold">Dashboard</p>
						<div className="mt-8">
							<div className="flex flex-row gap-3 mr-12">
								<img src="/user_circle.svg" />
								<Link href="/user_information">
									<p className="text-sm text-gray_">Evan Winter</p>
								</Link>

								<img src="/notification_bell.svg" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-5 mt-7">
				<nav>
					<Navbar />
				</nav>

				<div className="col-span-4">
					<Dashboard />
				</div>
			</div>
		</>
	);
};
export default DashboardAppshell;
