import { useUser } from "@/store/user";
import { Button } from "@nextui-org/react";
import React from "react";

const Account: React.FC = () => {
	const { user, removeUser } = useUser();
	return (
		<div>
			<p>Name: {user?.name}</p>
			<br />
			<div className="space-x-2">
				<Button variant="bordered" color="success">
					save user
				</Button>
				<Button onClick={removeUser} variant="bordered" color="danger">
					Delete Account
				</Button>
			</div>
		</div>
	);
};

export default Account;
