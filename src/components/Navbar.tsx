import Link from "next/link";

interface NavLink {
	slug: string;
	title: string;
	topicId: string;
	url: string;
	scrapable: boolean;
}

const Navbar = async () => {
	const response = await fetch("https://news-api-v2.vercel.app/api/categories");

	const data = await response.json();

	const categories: NavLink[] = data.data;

	const filteredCategories = categories.filter((category) => category.scrapable);
	return (
		<nav className="py-4 flex items-center justify-center gap-4 text-gray-700">
			<Link href="/" className="hover:text-red-700">
				হোম
			</Link>
			{filteredCategories.map((category, index) => (
				<Link key={index} href={`/category/${category.slug}`} className="hover:text-red-700">
					{category.title}
				</Link>
			))}
		</nav>
	);
};

export default Navbar;
