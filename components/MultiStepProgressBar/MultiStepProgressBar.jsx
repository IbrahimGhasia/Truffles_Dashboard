import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ progress, setProgress }) => {
	let stepPercentage = 0;
	if (progress === 1) {
		stepPercentage = 16;
	} else if (progress === 2) {
		stepPercentage = 49.5;
	} else if (progress === 3) {
		stepPercentage = 82.5;
	} else if (progress === 4) {
		stepPercentage = 100;
	} else {
		stepPercentage = 0;
	}

	return (
		<>
			<div className="flex items-center justify-around mt-16 mr-96">
				<div className="progress-bar--container mt-24">
					<ProgressBar percent={stepPercentage}>
						<Step>
							{({ accomplished, index }) => (
								<div
									className={`indexedStep ${
										accomplished ? "accomplished" : null
									} ${progress > 1 && "completed"}`}
									onClick={() => setProgress(1)}
								>
									{progress === 1 && <img src="/dot_icon.svg" alt="active" />}
									{progress > 1 && <img src="/tick_icon.svg" alt="active" />}
								</div>
							)}
						</Step>
						<Step>
							{({ accomplished, index }) => (
								<div
									className={`indexedStep ${
										accomplished ? "accomplished" : null
									} ${progress > 2 && "completed"}`}
									onClick={() => setProgress(2)}
								>
									{progress === 2 && <img src="/dot_icon.svg" alt="active" />}
									{progress > 2 && <img src="/tick_icon.svg" alt="active" />}
								</div>
							)}
						</Step>
						<Step>
							{({ accomplished, index }) => (
								<div
									className={`indexedStep ${
										accomplished ? "accomplished" : null
									} ${progress > 3 && "completed"}`}
									onClick={() => setProgress(3)}
								>
									{progress === 3 && <img src="/dot_icon.svg" alt="active" />}
									{progress > 3 && <img src="/tick_icon.svg" alt="active" />}
								</div>
							)}
						</Step>
						<Step>
							{({ accomplished, index }) => (
								<div
									className={`indexedStep ${
										accomplished ? "accomplished" : null
									} ${progress > 4 && "completed"}`}
									onClick={() => setProgress(4)}
								>
									{progress === 4 && <img src="/dot_icon.svg" alt="active" />}
									{progress > 4 && <img src="/tick_icon.svg" alt="active" />}
								</div>
							)}
						</Step>
					</ProgressBar>
				</div>
				<div className="">
					<div className="progress-bar--labels flex flex-col mt-2">
						<span
							className={`font-[600] leading-[16px] mb-[50px] w-[200px] text-xs ${
								progress === 1 && "text-[#7445F8] "
							} `}
						>
							User Information
						</span>

						<span
							className={`font-[600] leading-[16px] mb-[50px] w-[200px] text-xs ${
								progress === 2 && "text-[#7445F8] "
							}`}
						>
							Buisness Information 1
						</span>

						<span
							className={`font-[600] leading-[16px] mb-[50px] w-[200px] text-xs ${
								progress === 3 && "text-[#7445F8]"
							}`}
						>
							Business Information 2
						</span>

						<span
							className={`font-[600] leading-[16px] pb-[38px] w-[200px] text-xs ${
								progress === 4 && "text-[#7445F8]"
							}`}
						>
							Upload Documents
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default MultiStepProgressBar;
