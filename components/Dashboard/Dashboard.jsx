import Alert from "components/Alert/Alert";
import Calendar from "components/Calendar/Calendar";
import Card from "components/Card/Card";
import StockPriceCard from "components/Card/StockPriceCard";
import LineChart from "components/ChartLine/LineChart";

const Dashboard = (props) => {
	return (
		<div className="h-screen bg-gray-100">
			<Alert />

			<div className="mt-8 grid grid-cols-3">
				<div className="grid grid-cols-2 gap-5 col-span-2">
					<div>
						{/* <Card title="Fiat Balance" icon="/fiat_balance_icon.svg" /> */}
						<div className="border-0 bg-white rounded-lg p-6 grid grid-cols-2 relative shadow-lg">
							<div className="flex flex-col">
								<p className="text-gray_ text-base font-normal">Fiat Balance</p>
								<p className="mt-4 font-bold text-2xl">$00,000</p>
							</div>
							<div className="absolute right-0 mr-6 mt-7 shadow-lg">
								<img
									src="/fiat_balance_icon.svg"
									className="border-0 rounded-lg p-3.5 w-[60px] h-[60px] bg-purple_"
								/>
							</div>
						</div>
					</div>
					<div>
						{/* <Card title="Crypto Balance" icon="/crypto_balance_icon.svg" /> */}
						<div className="border-0 bg-white rounded-lg p-6 grid grid-cols-2 relative shadow-lg">
							<div className="flex flex-col">
								<p className="text-gray_ text-base font-normal">
									Crypto Balance
								</p>
								<p className="mt-4 font-bold text-2xl">$00,000</p>
							</div>
							<div className="absolute right-0 mr-6 mt-7 shadow-lg">
								<img
									src="/crypto_balance_icon.svg"
									className="border-0 rounded-lg p-3.5 w-[60px] h-[60px] bg-purple_"
								/>
							</div>
						</div>
					</div>
					<div>
						{/* <Card title="Receivable" icon="/down_arrow_icon.svg" /> */}
						<div className="border-0 bg-white rounded-lg p-6 grid grid-cols-2 relative shadow-lg">
							<div className="flex flex-col">
								<p className="text-gray_ text-base font-normal">Receivable</p>
								<p className="mt-4 font-bold text-2xl">$00,000</p>
							</div>
							<div className="absolute right-0 mr-6 mt-7 shadow-lg">
								<img
									src="/down_arrow_icon.svg"
									className="border-0 rounded-lg p-5 w-[60px] h-[60px] bg-purple_"
								/>
							</div>
						</div>
					</div>
					<div>
						{/* <Card title="Payable" icon="/up_arrow_icon.svg" /> */}
						<div className="border-0 bg-white rounded-lg p-6 grid grid-cols-2 relative shadow-lg">
							<div className="flex flex-col">
								<p className="text-gray_ text-base font-normal">Payable</p>
								<p className="mt-4 font-bold text-2xl">$00,000</p>
							</div>
							<div className="absolute right-0 mr-6 mt-7 shadow-lg">
								<img
									src="/up_arrow_icon.svg"
									className="border-0 rounded-lg p-5 w-[60px] h-[60px] bg-purple_"
								/>
							</div>
						</div>
					</div>
					<LineChart />
				</div>
				<div className="col-span-1 mx-6">
					<div>
						<Calendar />
						<div className="bg-white mt-0 rounded-b-xl shadow-lg">
							<hr />
							<StockPriceCard icon="red_arrow_icon.svg" />
							<StockPriceCard icon="green_arrow_icon.svg" />
							<StockPriceCard icon="green_arrow_icon.svg" />
							<StockPriceCard icon="red_arrow_icon.svg" />
							<StockPriceCard icon="green_arrow_icon.svg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
