"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";

interface SidebarProps {
	children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	const pathname = usePathname();
	const routes = useMemo(
		() => [
			{ icon: HiHome, label: "Home", active: pathname !== "search", href: "/" },
			{
				icon: BiSearch,
				label: "Search",
				active: pathname == "search",
				href: "/search",
			},
		],
		[pathname]
	);
	return (
		<div className="felx h-full">
			<div className="hidden h-full w-[300px] flex-col gap-y-2 bg-black p-2 md:flex">
				<Box>Sidebar Navigation</Box>
			</div>
		</div>
	);
};

export default Sidebar;
