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
						<Card title="Fiat Balance" icon="/fiat_balance_icon.svg" />
					</div>
					<div>
						<Card title="Crypto Balance" icon="/crypto_balance_icon.svg" />
					</div>
					<div>
						<Card title="Receivable" icon="/down_arrow_icon.svg" />
					</div>
					<div>
						<Card title="Payable" icon="/up_arrow_icon.svg" />
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
