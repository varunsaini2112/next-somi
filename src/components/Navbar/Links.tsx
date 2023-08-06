import { LinkType } from "@/types/Navbar";
import Link from "../Link";

const Links = ({ linksList }: { linksList: LinkType[] }) => {
	return (
		<nav className="flex px-2">
			{linksList.map((link) => {
				const { title, href, icon } = link;

				return <Link key={title} title={title} href={href} icon={icon} />;
			})}
		</nav>
	);
};

export default Links;
