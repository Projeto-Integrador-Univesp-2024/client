import SignUpForm from "@/components/auth/signup/form";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
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
        <h1 className="text-2xl font-black text-stone-800 lg:text-5xl">
          Cadastre-se no JEFI !
        </h1>
        <p className="px-4 text-center text-sm text-stone-500">
          Peca a um responsavel para estar efetuando o cadastro
        </p>
        <SignUpForm />
      </section>
      <div className="flex w-full flex-col gap-4 py-4 text-center">
        <p className="text-sm text-sky-500 lg:text-base">
          Ja possui cadastro?{" "}
          <Link
            href="/auth/signin"
            className="underline transition-colors hover:text-sky-700"
          >
            Entrar!
          </Link>
        </p>
        <Link href="/" className="text-stone-800">
          Voltar
        </Link>
      </div>
    </main>
  );
};

export default SignUp;
