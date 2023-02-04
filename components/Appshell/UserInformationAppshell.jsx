import { useState } from "react";
import MultiStepProgressBar from "components/MultiStepProgressBar/MultiStepProgressBar";
import PageOne from "components/UserInformation/PageOne";
import PageTwo from "components/UserInformation/PageTwo";
import PageThree from "components/UserInformation/PageThree";
import Link from "next/link";

const UserInformationAppshell = () => {
	const [progress, setProgress] = useState(1);

	const nextPage = (progress) => {
		setProgress(progress);
	};

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
				setProgress(4);
				break;
			default:
				setProgress(1);
		}
	};
	return (
		<div>
			<div className="grid grid-cols-5 border-b-2 pb-7">
				<div>
					<Link href="/">
						<img
							src="/truffle_logo.svg"
							className="mt-7 ml-12 cursor-pointer"
						/>
					</Link>
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
				<div className="h-[70rem] bg-gray-100">
					<div>
						<MultiStepProgressBar
							progress={progress}
							setProgress={nextPageNumber}
						/>
					</div>
				</div>
				<div className="col-span-4">
					{
						{
							1: <PageOne onButtonClick={nextPage} />,
							2: <PageTwo onButtonClick={nextPage} />,
							3: <PageThree onButtonClick={nextPage} />,
							// 4: <PageFour />,
						}[progress]
					}
				</div>
			</div>
		</div>
	);
};
export default UserInformationAppshell;
