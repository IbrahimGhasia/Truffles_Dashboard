import DateField from "components/FormElements/DateField";
import InputField from "components/FormElements/InputField";
import SelectField from "components/FormElements/SelectField";

const PageOne = ({ onButtonClick }) => {
	return (
		<div>
			<div className="mt-12 ml-[102px]">
				<p className="font-semibold text-xl ">User Information</p>
				<p className="font-normal text-lightgray_ text-sm">
					Please enter your details
				</p>
			</div>

			<section className="mt-[34px] ml-[102px] mr-[100px]">
				<div className="grid grid-cols-3 gap-x-5">
					<div>
						<SelectField label="Title" options={["Mr.", "Mrs."]} />
					</div>

					<div>
						<InputField label="First Name" />
					</div>

					<div>
						<InputField label="Last Name" />
					</div>
				</div>

				<div className="grid grid-cols-1 mt-8">
					<label
						htmlFor="mobile-number"
						className="block mb-2 text-sm font-medium text-darkgray_"
					>
						Mobile Number
					</label>
					<div className="flex">
						<button
							id="dropdown-button"
							data-dropdown-toggle="dropdown"
							className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 pr-8 text-sm font-medium text-center text-lightgray_ bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300"
							type="button"
						>
							US{" "}
							<svg
								aria-hidden="true"
								className="w-4 h-4 ml-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
						<div className="relative w-full">
							<input
								type="input"
								id="search-dropdown"
								className="block p-2.5 w-full z-20 text-sm text-lightgray_ bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
								placeholder="+1 (555) 987-6543"
							/>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 mt-8">
					<SelectField label="Gender" options={["Male", "Female"]} />
				</div>

				<div className="grid grid-cols-1 mt-8">
					<SelectField
						label="Nationality"
						options={["Unitited States", "India", "Canada", "England"]}
					/>
				</div>

				<div className="grid grid-cols-2 gap-x-5">
					<div className="mt-8">
						<InputField label="Resedential Address" />
					</div>
					<div className="mt-8">
						<InputField label="Postal Code" />
					</div>
				</div>

				<div className="grid grid-cols-1 mt-8">
					<InputField label="Occupation" />
				</div>

				<div className="grid grid-cols-1 mt-8">
					<DateField label="Date of Birth" />
				</div>

				<div className="flex justify-between mt-16">
					<button
						type="button"
						class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-5 py-2 w-[120px] h-[42px] mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
					>
						Back
					</button>
					<button
						type="button"
						class="text-white bg-purple_ hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2 mb-2 w-[120px] h-[42px] focus:outline-none"
						onClick={() => {
							onButtonClick(2);
						}}
					>
						Next
					</button>
				</div>
			</section>
		</div>
	);
};
export default PageOne;
