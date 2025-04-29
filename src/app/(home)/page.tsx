"use client";

import { Button } from "@/components/ui/button";
import useHomePage from "@/hooks/home/useHomePage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
	const { data, status } = useSession();
	useHomePage(data, status);

	return (
		<main className="flex h-full w-full flex-col items-center bg-stone-200 p-3">
			<Image
				className="top-0 h-12 w-24 lg:h-24 lg:w-52"
				src="/img/jefilogo.png"
				alt="Logo"
				width={200}
				height={200}
			/>
			<section className="flex h-full flex-col items-center justify-center gap-5">
				<Image
					className="h-24 w-16 lg:h-52 lg:w-36"
					src="/img/avatar.png"
					alt="Mascote"
					width={200}
					height={200}
				/>
				<h1 className="text-3xl font-black text-stone-800 lg:text-5xl">
					Bem vindo ao JEFI !
				</h1>
				<Button
					asChild
					className="w-full bg-sky-500 text-stone-100 hover:bg-sky-700 lg:w-fit"
				>
					<Link href="/auth/signin">Começar</Link>
				</Button>
			</section>
			<p className="text-sm text-sky-500 lg:text-base">
				Quer fazer parte do JEFI?{" "}
				<Link
					href="/aaaaa"
					target="_blank"
					className="underline transition-colors hover:text-sky-700"
				>
					Clique aqui!
				</Link>
			</p>
		</main>
	);
};

export default Page;
