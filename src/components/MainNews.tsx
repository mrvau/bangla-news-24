import Image from "next/image";

interface News {
	id: string;
	title: string;
	description: string | null;
	imageUrl: string;
	imageAlt: string;
	category: string;
	firstPublished: string;
	lastPublished: string;
	source: string;
}

const MainNews = async () => {
	const response = await fetch(
		"https://news-api-v2.vercel.app/api/news?category=প্রধান+খবর&limit=6",
	);

	const data = await response.json();

	const [news, ...mainNews]: News[] = data.data;

	console.log(news);

	const newsDate = new Date(news.firstPublished).toLocaleTimeString("bn-BD", {
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		timeZone: "UTC",
	});

	return (
		<div>
			<div>
				<div>
					<Image src={news.imageUrl} alt={news.imageAlt} width={500} height={300} />
				</div>
				<div>
					<span>{news.category}</span>
					<h1>{news.title}</h1>
					<p>{news.description}</p>
					<span>{newsDate}</span>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default MainNews;
