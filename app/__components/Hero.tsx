import React from "react";

const DoorDashPromo: React.FC = () => {
	return (
		<div className="relative flex flex-col lg:flex-row items-center justify-between bg-red-600 p-6 lg:p-12 h-screen">
			<div className="relative lg:w-1/2">
				<h1 className="text-white text-3xl lg:text-5xl font-bold mb-64 -top-9 z-30 relative">
					Unlock more sales with DoorDash
				</h1>
				<div className="absolute lg:top-0 top-16 bg-white p-6 rounded z-10 shadow-lg lg:w-4/5 lg:right-[-1rem] right-0">
					<h1 className="text-2xl lg:text-3xl font-bold mb-4">
						0% commissions for up to 30 days
					</h1>
					<p className="text-lg mb-6">
						Partner with DoorDash to help drive growth and take your
						business to the next level.
					</p>
					<form className="space-y-4">
						<input
							type="text"
							placeholder="Business Name"
							className="w-full p-3 rounded border border-gray-300"
						/>
						<input
							type="text"
							placeholder="Business Address"
							className="w-full p-3 rounded border border-gray-300"
						/>
						<input
							type="email"
							placeholder="Email Address"
							className="w-full p-3 rounded border border-gray-300"
						/>
						<input
							type="tel"
							placeholder="Business Phone"
							className="w-full p-3 rounded border border-gray-300"
						/>
						<select className="w-full p-3 rounded border border-gray-300">
							<option>Select your business type</option>
							{/* Add other options as needed */}
						</select>
						<button className="w-full bg-red-600 text-white p-3 rounded">
							Get started
						</button>
					</form>
					<p className="text-sm mt-4 text-gray-600">
						By clicking "Get started," I agree to receive marketing
						electronic communications from DoorDash.
					</p>
				</div>
			</div>
			<div className="hidden lg:block lg:w-1/2 relative">
				<img
					src="/assets/hero.jpg"
					alt="How Spread Bagelry drives higher margins with DoorDash"
					className="w-full h-auto rounded"
				/>
			</div>
		</div>
	);
};

export default DoorDashPromo;
