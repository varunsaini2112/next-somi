import { Navbar } from "@/components";
import Image from "next/image";
import shoppingCart from "../../public/shopping-cart.png";

const Home = () => {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<div className="flex grow p-16 items-center justify-between border-2">
				<div className="flex flex-col items-start p-6 text-amber-600">
					<div className="text-6xl mb-2">Welcome</div>
					<div className="border border-amber-400 px-8 py-4 rounded-e-full hover:bg-amber-400 hover:text-amber-900">
						Get Started
					</div>
				</div>
				<div>
					<Image
						alt="Shopping Cart"
						src={shoppingCart}
						style={{ width: "100%" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
