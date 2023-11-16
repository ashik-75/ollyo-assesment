import React from "react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Avatar,
} from "@nextui-org/react";
import { useUser } from "@/store/user";
import { useNavigate } from "react-router-dom";

const ProfileAvatar: React.FC = () => {
	const { user, removeUser } = useUser();
	const navigate = useNavigate();

	if (!user) {
		return null;
	}

	return (
		<>
			<Dropdown placement="bottom-end">
				<DropdownTrigger>
					<Avatar
						isBordered
						as="button"
						className="transition-transform"
						src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
					/>
				</DropdownTrigger>
				<DropdownMenu aria-label="Profile Actions" variant="flat">
					<DropdownItem key="profile" className="h-14 gap-2">
						<p className="font-semibold">Signed in as</p>
						<p className="font-semibold">{user?.name}@gmail.com</p>
					</DropdownItem>
					<DropdownItem key="account" onClick={() => navigate("/account")}>
						My Account
					</DropdownItem>
					<DropdownItem key="team_settings">Team Settings</DropdownItem>
					<DropdownItem key="analytics">Analytics</DropdownItem>
					<DropdownItem key="system">System</DropdownItem>
					<DropdownItem key="configurations">Configurations</DropdownItem>
					<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
					<DropdownItem key="logout" color="danger" onClick={removeUser}>
						Log Out
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	);
};

export default ProfileAvatar;
