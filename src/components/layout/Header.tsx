import React from "react";
import { Data } from "../../App";

type HeaderProps = {
	selectedItems: Data[];
	handleDelete: () => void;
};

const Header: React.FC<HeaderProps> = ({ selectedItems, handleDelete }) => {
	const totalSelectedItems = selectedItems.length;
	return (
		<div className="flex justify-between py-5 border-b sticky top-0 z-50 bg-white ">
			{totalSelectedItems > 0 ? (
				<>
					<button>
						<input
							defaultChecked={true}
							type="checkbox"
							id="select"
							className="mr-2"
						/>
						<label htmlFor="select">
							{`${totalSelectedItems} ${
								totalSelectedItems > 1 ? "Files" : "File"
							}`}{" "}
							selected
						</label>
					</button>
					<button
						onClick={handleDelete}
						className="font-medium text-lg text-rose-500 hover:underline hover:underline-offset-2"
					>
						Delete {totalSelectedItems > 1 ? "Files" : "File"}
					</button>
				</>
			) : (
				<div className="font-bold text-xl">Gallery</div>
			)}
		</div>
	);
};

export default Header;
