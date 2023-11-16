import React, { FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar: React.FC = () => {
	const navigate = useNavigate();
	const [searchParams, setSearch] = useSearchParams({ q: "vab" });

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formElement = e.target as HTMLFormElement;
		const inp = formElement.elements.namedItem("search") as HTMLInputElement;
		if (inp) {
			setSearch((prev) => {
				prev.set("q", inp.value);
				return prev;
			});
			navigate("/search?" + searchParams.toString());
		}
	};
	return (
		<div className="flex-1">
			<form onSubmit={handleSearch}>
				<input
					type="search"
					id="search"
					placeholder="search movie ..."
					className="border outline-none px-4 py-2 rounded-xl w-full"
				/>
			</form>
		</div>
	);
};

export default SearchBar;
