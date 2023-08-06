import { LinkType } from "@/types/Navbar";
import { BiHomeAlt2, BiShoppingBag } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";

import Links from "./Links";

const links: LinkType[] = [
	{ title: "Home", icon: <BiHomeAlt2 /> },
	{ title: "Shop", icon: <BiShoppingBag /> },
	{ title: "About", icon: <BsInfoCircle /> },
	{ title: "Contact", icon: <IoIosCall /> }
];

const Navbar = () => {
	return (
		<div className="flex items-center bg-white justify-between px-16 py-4">
			<Links linksList={links} />
			<div className="flex space-x-8">
				<div>Cart (0)</div>
				<a href="#">Login</a>
			</div>
		</div>
	);
};

export default Navbar;
