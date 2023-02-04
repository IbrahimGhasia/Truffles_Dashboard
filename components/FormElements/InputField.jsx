const InputField = (props) => {
	return (
		<>
			<label
				htmlFor={props.label}
				className="block mb-2 text-sm font-medium text-darkgray_"
			>
				{props.label}
			</label>
			<input
				type="text"
				id={props.label}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
			/>
		</>
	);
};
export default InputField;
