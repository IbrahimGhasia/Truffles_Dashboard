import Alert from "components/Alert/Alert";
import Card from "components/Card/Card";

const Dashboard = (props) => {
	return (
		<div>
			<Alert />

			<div className="mt-8 grid grid-cols-3">
				<div className="col-span-2 grid grid-cols-2 gap-5">
					<Card title="Fiat Balance" icon="/fiat_balance_icon.svg" />
					<Card title="Crypto Balance" icon="/crypto_balance_icon.svg" />
					<Card title="Receivable" icon="/down_arrow_icon.svg" />
					<Card title="Payable" icon="/up_arrow_icon.svg" />
				</div>

				<div className="">Hello</div>
			</div>
		</div>
	);
};
export default Dashboard;
