import { LinkType } from "@/types/Navbar";

const Link = ({ title, href = "#", icon }: LinkType) => {
	return (
		<a
			href={href}
			className="flex items-center p-4 duration-500 text-slate-500 hover:text-slate-950 hover:scale-110"
		>
			<div className="pr-1">{icon}</div>
			{title}
		</a>
	);
};

export default Link;
