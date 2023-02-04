import { useState } from "react";
import MultiStepProgressBar from "components/MultiStepProgressBar/MultiStepProgressBar";

const UserInformationAppshell = () => {
	// const [page, setPage] = useState("pageone");
	const [progress, setProgress] = useState(1);

	// const nextPage = (page) => {
	// 	setPage(page);
	// };

	const nextPage = (progress) => {
		setProgress(progress);
	};

	// const nextPageNumber = (pageNumber) => {
	// 	switch (pageNumber) {
	// 		case "1":
	// 			setPage("pageone");
	// 			break;
	// 		case "2":
	// 			setPage("pagetwo");
	// 			break;
	// 		case "3":
	// 			setPage("pagethree");
	// 			break;
	// 		case "4":
	// 			alert("Ooops! Seems like you did not fill the form.");
	// 			break;
	// 		default:
	// 			setPage("1");
	// 	}
	// };

	const nextPageNumber = (pageNumber) => {
		switch (pageNumber) {
			case 1:
				setProgress(1);
				break;
			case 2:
				setProgress(2);
				break;
			case 3:
				setProgress(3);
				break;
			case 4:
				// alert("Ooops! Seems like you did not fill the form.");
				setProgress(4);
				break;
			default:
				setProgress(1);
		}
	};
	return (
		<>
			<div className="grid grid-cols-5 border-b-2 pb-7">
				<div>
					<img src="/truffle_logo.svg" className="mt-7 ml-12 cursor-pointer" />
				</div>

				<div className="col-span-4">
					<div className="flex justify-end">
						<p className="text-sm text-gray_ font-normal mt-8 mr-12">
							Having trouble?{" "}
							<span className="font-semibold text-purple_ cursor-pointer">
								Get Help
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-5">
				<div className="h-screen bg-gray-100">
					<div className="">
						{/* <MultiStepProgressBar
							page={page}
							onPageNumberClick={nextPageNumber}
						/> */}

						<MultiStepProgressBar
							progress={progress}
							setProgress={nextPageNumber}
						/>
					</div>
				</div>
				<div className="col-span-4"></div>
			</div>
		</>
	);
};
export default UserInformationAppshell;
