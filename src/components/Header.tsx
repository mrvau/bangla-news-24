import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
	const date = new Date().toLocaleDateString("bn-BD", {
		dateStyle: "full",
	});
	return (
		<header className="w-7xl max-w-7xl mx-auto py-4">
			<div>
				<div className="relative flex items-center justify-center">
					<Link href="/" className="flex items-center gap-2">
						<div>
							<Image src="/logo.webp" alt="Bangla News Logo" width={50} height={50} />
						</div>
						<div>
							<p className="text-3xl font-bold font-serif text-red-700">Bangla News 24</p>
							<p className="text-sm text-gray-600">{date}</p>
						</div>
					</Link>
					<div className="absolute top-0 right-0 flex items-center gap-4">
						<Link
							href="/sign-in"
							className="px-4 py-2 hover:text-red-700 hover:bg-gray-100 rounded-lg">
							সাইন ইন
						</Link>
						<Link
							href="/sign-up"
							className="px-4 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800">
							সাইন আপ
						</Link>
					</div>
				</div>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
