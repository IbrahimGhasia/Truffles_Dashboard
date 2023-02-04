const SelectField = (props) => {
	return (
		<>
			<label
				htmlFor={props.label}
				className="block mb-2 text-sm font-medium text-darkgray_"
			>
				{props.label}
			</label>
			<select
				id={props.label}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				{props.options.map((option) => (
					<option value={option} className="text-blue-500">
						{option}
					</option>
				))}
			</select>
		</>
	);
};
export default SelectField;
