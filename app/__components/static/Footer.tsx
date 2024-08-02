import React from "react";
import { FiSend } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="bg-[#1c1959] text-white py-8">
			<div className="container mx-auto px-4 flex flex-wrap justify-between">
				<div className="w-full md:w-1/4 px-4 mb-8">
					<div className="text-xl font-bold mb-4 flex">About</div>
					<p className="text-sm mb-4">
						203 Fake St. Mountain View, San Francisco, California, USA
					</p>
					<p className="text-sm mb-4">+1 404942 9047</p>
					<p className="text-sm mb-4">
						topkemcleaningservices@gmail.com
					</p>
					<form className="flex">
						<input
							type="email"
							placeholder="Enter email address"
							className="w-full p-2 rounded-l-lg text-black outline-none"
						/>
						<button
							type="submit"
							className="bg-blue-500 p-2 rounded-r-lg"
						>
							<FiSend className="w-6 h-6 text-white" />
						</button>
					</form>
				</div>
				<div className="w-full md:w-1/4 px-4 mb-8">
					<h3 className="text-xl font-bold mb-4">Latest News</h3>
					<ul className="text-sm">
						<li className="mb-4">
							<a
								href="/blog"
								className="hover:text-blue-500 \"
							>
								<img
									src="/assets/clean.jpg"
									alt="News"
									className="inline-block mr-4 w-12 h-12 rounded-md"
								/>
								Even the all-powerful Pointing has no control about
								<br />
								<span className="text-gray-400">
									June. 17, 2024 Admin 19
								</span>
							</a>
						</li>
						<li>
							<a
								href="/blog"
								className="hover:text-blue-500"
							>
								<img
									src="/assets/clean.jpg"
									alt="News"
									className="inline-block mr-4 w-12 h-12 rounded-md"
								/>
								Even the all-powerful Pointing has no control about
								<br />
								<span className="text-gray-400">
									June. 17, 2024 Admin 19
								</span>
							</a>
						</li>
					</ul>
				</div>
				<div className="w-full md:w-1/4 px-4 mb-8">
					<h3 className="text-xl font-bold mb-4">Information</h3>
					<ul className="text-sm">
						<li className="mb-2">
							<a
								href="/about"
								className="hover:text-blue-500"
							>
								About
							</a>
						</li>
						<li className="mb-2">
							<a
								href="#"
								className="hover:text-blue-500"
							>
								Products
							</a>
						</li>
						<li className="mb-2">
							<a
								href="/blog"
								className="hover:text-blue-500"
							>
								Blog
							</a>
						</li>
						<li className="mb-2">
							<a
								href="#"
								className="hover:text-blue-500"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-blue-500"
							>
								Help & Support
							</a>
						</li>
					</ul>
				</div>
				<div className="w-full md:w-1/4 px-4 mb-8">
					<h3 className="text-xl font-bold mb-4">Instagram</h3>
					<div className="grid grid-cols-2 gap-1">
						<a
							href="https://www.instagram.com/topkemcleaningservice/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/assets/topkem.webp"
								alt="Instagram"
								className="w-full rounded-md"
							/>
						</a>
						<a
							href="https://www.instagram.com/topkemcleaningservice/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/assets/topkemone.jpg"
								alt="Instagram"
								className="w-full rounded-md"
							/>
						</a>
						<a
							href="https://www.instagram.com/topkemcleaningservice/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/assets/topkemOne.webp"
								alt="Instagram"
								className="w-full rounded-md"
							/>
						</a>
						<a
							href="https://www.instagram.com/topkemcleaningservice/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/assets/topkemOne.webp"
								alt="Instagram"
								className="w-full rounded-md"
							/>
						</a>
					</div>
				</div>
			</div>
			<div className="border-t border-gray-700 py-4">
				<div className="container mx-auto text-center">
					<p className="text-sm text-gray-400">
						Copyright ©2024 All rights reserved. This is made with ♥
						by
						<a
							href="https://ekene-folio.vercel.app/"
							className="text-blue-500"
						>
							{" "}
							EKENE
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
