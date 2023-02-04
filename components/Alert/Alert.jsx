const Alert = () => {
	return (
		<>
			<div className="bg-purple_ p-3 rounded-lg mr-6">
				<div className="flex flex-row relative">
					<img src="/info_icon.svg" className="ml-2" />
					<div className="flex flex-col ml-5">
						<p className="text-white text-sm font-medium">
							Please Complete the KYC
						</p>
						<p className="text-xs text-gray-100">
							Please follow the instructions in the email to complete account
							verification. Make sure to check your promotions/spam as well.
						</p>
					</div>
					<div className="absolute right-0 mr-3 mt-2 cursor-pointer">
						<img src="/close_icon.svg" />
					</div>
				</div>
			</div>
		</>
	);
};
export default Alert;
