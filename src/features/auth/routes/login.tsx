import { Button, Input } from "@nextui-org/react";
import React from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ErrorLabel from "@/components/ui/error-label";
import { useLogin } from "../api/login";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/store/user";
import { User } from "../types";

const schema = z.object({
	name: z.string().min(5).max(20),
	email: z
		.string()
		.min(8, { message: "Minimum 8 char" })
		.max(20, { message: "Maximum 20 char" }),
});

export type FormDataType = z.infer<typeof schema>;

const Login: React.FC = () => {
	const onSuccess = (user: User) => {
		navigate("/");
		addUser(user);
	};

	const navigate = useNavigate();
	const { addUser } = useUser();
	const { mutate, isPending } = useLogin({ onSuccess });
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormDataType>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: FormDataType) => {
		// console.log({ data });
		mutate(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-3">
				<div>
					<Input {...register("name")} placeholder="name ..." />
					<ErrorLabel message={errors?.name?.message} />
				</div>
				<div>
					<Input {...register("email")} placeholder="email ..." type="email" />
					<ErrorLabel message={errors?.email?.message} />
				</div>

				<Button
					isLoading={isPending}
					type="submit"
					variant="bordered"
					color="secondary"
				>
					Login
				</Button>
			</form>
		</div>
	);
};

export default Login;
