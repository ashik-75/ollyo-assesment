import React from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { arrayMoveImmutable } from "array-move";
import defaultData from "./data.json";
import Header from "./components/layout/Header";

export type Data = {
	name: string;
	url: string;
};

function App() {
	const [items, setItems] = React.useState<Data[]>(defaultData);
	const [selectedItems, setSelectedImage] = React.useState<Data[]>([]);

	const handleSelect = (info: Data) => {
		if (!selectedItems.find((item) => item.name === info.name)) {
			setSelectedImage((prev) => [...prev, info]);
		} else {
			setSelectedImage((prev) => prev.filter((it) => it.name !== info.name));
		}
	};

	const handleDelete = () => {
		setItems((prev) => {
			return prev.filter((item) => {
				if (selectedItems.find((it) => it.name === item.name)) return false;
				return true;
			});
		});
		setSelectedImage([]);
	};

	const onSortEnd = (oldIndex: number, newIndex: number) => {
		setItems((array) => arrayMoveImmutable(array, oldIndex, newIndex));
	};

	return (
		<div className="container mx-auto space-y-5">
			<Header selectedItems={selectedItems} handleDelete={handleDelete} />
			<SortableList
				onSortEnd={onSortEnd}
				className={
					"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 select-none gap-5 p-5 sm:p-0"
				}
			>
				{items.map(({ name, url }, index) => {
					const isItemSelected = Boolean(
						selectedItems.find((item) => item.name === name)
					);
					return (
						<SortableItem key={name}>
							<div
								className={`cursor-grab select-none border rounded-xl overflow-hidden relative group ${
									index === 0 ? "sm:row-span-2 sm:col-span-2" : ""
								}`}
							>
								<img
									className={"pointer-events-none"}
									alt={name}
									src={`/images/${url}`}
								/>

								{/* hovered element */}
								<div
									className={`absolute top-0 left-0 p-5 w-full h-full opacity-0 bg-zinc-950/20 group-hover:opacity-100  ${
										isItemSelected ? "opacity-60" : ""
									}`}
								>
									<input
										type="checkbox"
										defaultChecked={isItemSelected}
										onChange={() => handleSelect({ name, url })}
									/>
								</div>
							</div>
						</SortableItem>
					);
				})}
			</SortableList>
		</div>
	);
}

export default App;
