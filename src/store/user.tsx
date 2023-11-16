import { create } from "zustand";

type User = {
	id?: string;
	name: string;
	role: "user" | "admin";
	token: number;
};

type UserStore = {
	user: User | null;
	addUser: (user: Omit<User, "id">) => void;
	removeUser: () => void;
};

export const useUser = create<UserStore>((set) => ({
	user: null,
	addUser: (payload) => set({ user: payload }),
	removeUser: () => set({ user: null }),
}));
