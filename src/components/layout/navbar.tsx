import React from "react";
import SearchBar from "./section/search-bar";
import ProfileAvatar from "./section/profile-avatar";

const Navbar: React.FC = () => {
	return (
		<nav
			id="navbar"
			className="flex items-center justify-between p-5 bg-zinc-100 sticky top-0 z-30"
		>
			<div>
				<img src="/amd.png" className="w-10 h-10" alt="" />
			</div>

			<div className="flex gap-5 w-[50%] items-center">
				<SearchBar />
				<ProfileAvatar />
			</div>
		</nav>
	);
};

export default Navbar;
