import InputField from "components/FormElements/InputField";
import SelectField from "components/FormElements/SelectField";
import DateField from "components/FormElements/DateField";

const PageTwo = ({ onButtonClick }) => {
	return (
		<div>
			<div className="mt-12 ml-[102px]">
				<p className="font-semibold text-xl ">Buisness Information</p>
				<p className="font-normal text-lightgray_ text-sm">
					Use a permanent address where you can receive mail.
				</p>
			</div>

			<section className="mt-[34px] ml-[102px] mr-[100px]">
				<div className="grid grid-cols-1">
					<InputField label="Account ID" />
				</div>

				<div className="grid grid-cols-1 mt-8">
					<InputField label="Company Name" />
				</div>

				<div className="grid grid-cols-2 gap-x-5">
					<div className="mt-8">
						<SelectField
							label="Country of Incorporation"
							options={["Unitited States", "India", "Canada", "England"]}
						/>
					</div>
					<div className="mt-8">
						<SelectField
							label="Country of Operation"
							options={["Unitited States", "India", "Canada", "England"]}
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 mt-8">
					<SelectField
						label="Business Type"
						options={["Unitited States", "India", "Canada", "England"]}
					/>
				</div>

				<div className="grid grid-cols-1 mt-8">
					<InputField label="Company address" />
				</div>

				<div className="grid grid-cols-3 gap-x-5">
					<div className="mt-8">
						<InputField label="ZIP / Postal" />
					</div>
					<div className="mt-8">
						<InputField label="State / Province" />
					</div>
					<div className="mt-8">
						<InputField label="City" />
					</div>
				</div>

				<div className="grid grid-cols-1 mt-8">
					<InputField label="Registration Number" />
				</div>

				<div className="grid grid-cols-1 mt-8">
					<DateField label="Incorporation Date" />
				</div>

				<div className="flex justify-between mt-16">
					<button
						type="button"
						class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-5 py-2 w-[120px] h-[42px] mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						onClick={() => {
							onButtonClick(1);
						}}
					>
						Back
					</button>
					<button
						type="button"
						class="text-white bg-purple_ hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2 mb-2 w-[120px] h-[42px] focus:outline-none"
						onClick={() => {
							onButtonClick(3);
						}}
					>
						Next
					</button>
				</div>
			</section>
		</div>
	);
};
export default PageTwo;
