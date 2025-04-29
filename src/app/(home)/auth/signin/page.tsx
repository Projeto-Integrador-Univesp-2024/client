import SignInForm from "@/components/auth/signin/form";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
	return (
		<main className="flex h-full w-full flex-col items-center bg-stone-200 p-3">
			<Image
				className="h-12 w-24 lg:h-24 lg:w-52"
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
				<SignInForm />
			</section>
			<div className="flex w-full flex-col gap-4 py-4 text-center">
				<p className="text-sm text-sky-500 lg:text-base">
					Não possui cadastro?{" "}
					<Link
						href="/auth/signup"
						className="underline transition-colors hover:text-sky-700"
					>
						Criar conta!
					</Link>
				</p>
				<Link href="/" className="text-stone-800">
					Voltar
				</Link>
			</div>
		</main>
	);
};

export default SignIn;
