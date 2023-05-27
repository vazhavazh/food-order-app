import React from "react";
import aboutImage from "../assets/images/about-image.png";
export const About = () => {
	return (
		<div className="bg-white">
			<div className="p-24 grid grid-cols-2">
				<h2 className="text-2xl  font-medium">About Us</h2>
				<p className="text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
					delectus voluptate doloribus vitae consequatur vero commodi iste!
					Ipsum, corrupti in hic natus cumque nobis? Animi atque blanditiis
					suscipit ullam ratione. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Suscipit unde assumenda nihil excepturi explicabo
					saepe, mollitia atque cumque quam illo esse libero? Ipsum, quaerat.
					Similique consequuntur at deserunt sapiente ex.
				</p>
				<div className="flex items-center justify-center">
					<img
						src={aboutImage}
						alt=""
						className=" object-cover"
					/>
				</div>
			</div>
		</div>
	);
};
