"use client";
import React, { useState } from "react";
import Grow from "./Components/Grow";

const Tabs = () => {
	const [activeTab, setActiveTab] = useState("grow");

	return (
		<div className="p-4 mt-52">
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold">Delivering more</h1>
				<p className="text-lg text-gray-600">
					When you think of DoorDash, you think of delivery — but the
					DoorDash Merchant Suite delivers many ways to help you grow.
				</p>
			</div>

			<div className="p-4 rounded-lg">
				<div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
					<button
						className={`py-2 px-4 rounded ${
							activeTab === "grow"
								? "bg-red-500 text-white"
								: "bg-gray-200 text-gray-700"
						}`}
						onClick={() => setActiveTab("grow")}
					>
						Grow your business
					</button>
					<button
						className={`py-2 px-4 rounded ${
							activeTab === "attract"
								? "bg-red-500 text-white"
								: "bg-gray-200 text-gray-700"
						}`}
						onClick={() => setActiveTab("attract")}
					>
						Attract new customers
					</button>
					<button
						className={`py-2 px-4 rounded ${
							activeTab === "increase"
								? "bg-red-500 text-white"
								: "bg-gray-200 text-gray-700"
						}`}
						onClick={() => setActiveTab("increase")}
					>
						Increase order volume & size
					</button>
					<button
						className={`py-2 px-4 rounded ${
							activeTab === "finance"
								? "bg-red-500 text-white"
								: "bg-gray-200 text-gray-700"
						}`}
						onClick={() => setActiveTab("finance")}
					>
						Access financing
					</button>
				</div>

				<div className="mt-4">
					{activeTab === "grow" && (
						<div>
							<Grow />
						</div>
					)}
					{activeTab === "attract" && (
						<div>
							<Grow />
						</div>
					)}
					{activeTab === "increase" && (
						<div>
							<h2 className="text-2xl font-bold">
								Increase order volume & size
							</h2>
							<p>Content for Increase order volume & size tab.</p>
						</div>
					)}
					{activeTab === "finance" && (
						<div>
							<h2 className="text-2xl font-bold">Access financing</h2>
							<p>Content for Access financing tab.</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Tabs;
