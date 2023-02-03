// const Chart = (props) => {
// 	return (
// 		<div>
// 			<div class="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
// 				<div class="relative z-20 flex flex-col min-w-0 break-words bg-white border-0 border-solid dark:bg-gray-950 border-black-125 shadow-soft-xl dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
// 					<div class="p-6 pb-0 mb-0 border-b-0 border-solid border-black-125 rounded-t-2xl">
// 						<h6 class="dark:text-white">Sales overview</h6>
// 						<p class="leading-normal text-sm dark:opacity-60">
// 							<i class="fa fa-arrow-up text-lime-500" aria-hidden="true"></i>
// 							<span class="font-semibold">4% more</span> in 2021
// 						</p>
// 					</div>
// 					<div class="flex-auto p-4">
// 						<div>
// 							<canvas id="chart-line" height="300"></canvas>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default Chart;

import { Chart } from "react-google-charts";

export const data = [
	["Year", "Liablities", "Assets"],
	["Apr", 20, 60],
	["May", 100, 35],
	["June", 200, 300],
	["July", 10, 200],
	["Aug", 150, 500],
	["Sept", 100, 260],
	["Oct", 430, 400],
	["Nov", 70, 240],
	["Dec", 410, 500],
];

export const options = {
	title: "Assets and Liablities",
	curveType: "function",
	chartArea: { width: "80%", height: "75%" },
	legend: { position: "bottom", alignment: "start" },
	lineWidth: 4,
	colors: ["#FF8540", "#82D616"],
	vAxis: {
		ticks: [0, 100, 200, 300, 400, 500],
	},
};

const LineChart = (props) => {
	return (
		<div>
			<Chart
				chartType="LineChart"
				width="765px"
				height="400px"
				data={data}
				options={options}
			/>
		</div>
	);
};

export default LineChart;
