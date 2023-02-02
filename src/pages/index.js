import { Inter } from "@next/font/google";
import DashboardAppshell from "components/Appshell/DashboardAppshell";

export default function Home() {
	return (
		<div className="h-screen bg-gray-100">
			<DashboardAppshell />
		</div>
	);
}
