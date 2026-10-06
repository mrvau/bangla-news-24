import Link from "next/link";
import MarqueeText from "react-marquee-text";

interface Headline {
	id: string;
	title: string;
}

const Marquee = async () => {
	const response = await fetch("https://news-api-v2.vercel.app/api/news?category=প্রধান+খবর");

	const data = await response.json();

	const headlines: Headline[] = data.data;

	return (
		<div className="bg-red-700 text-white">
			<div className="flex items-center w-7xl max-w-7xl mx-auto">
				<div className="bg-red-800 px-4 py-2">সর্বশেষ</div>
				<MarqueeText direction="right" duration={10}>
					{headlines.map((headline) => (
						<Link href={`/news/${headline.id}`} key={headline.id} className="hover:underline">
							<span>{headline.title}</span>
							<span className="mx-5">|</span>
						</Link>
					))}
				</MarqueeText>
			</div>
		</div>
	);
};

export default Marquee;
