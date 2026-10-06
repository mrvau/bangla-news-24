import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";

const notoSansBengali = Noto_Sans_Bengali({
	variable: "--font-noto-sans-bengali",
	subsets: ["bengali"],
});

export const metadata: Metadata = {
	title: "Bangla News 24",
	description: "A news website to read all the latest news in Bangla.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${notoSansBengali.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Header />
				<Marquee />
				<main>{children}</main>
			</body>
		</html>
	);
}
