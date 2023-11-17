import { useCounter } from "@/store/user";
import { Button } from "@nextui-org/react";
import React from "react";

const Register: React.FC = () => {
	const { count, incrementCount, decrementCount } = useCounter();
	return (
		<div>
			<h1 className="font-bold text-3xl">{count}</h1>

			<div className="space-x-2">
				<Button onClick={incrementCount} color="primary">
					Increment
				</Button>
				<Button onClick={decrementCount} color="danger">
					Decrement
				</Button>
			</div>
		</div>
	);
};

export default Register;
