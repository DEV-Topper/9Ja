import React from "react";
import Hero from "./__components/Hero";
import Company from "./__components/Tabs";
import HIW from "./__components/HIW";
import Services from "./__components/Services";
import Benefits from "./__components/Benefits";
import Subscription from "./about/__components/Subscribe";
import Testimonials from "./pricing/Testimonials";

const page = () => {
	return (
		<div className="">
			<Hero />
			<Company />
			<HIW />
			<Services />
			<Benefits />
			<Testimonials />
			<Subscription />
		</div>
	);
};

export default page;
