import { PlusCircleIcon } from "@/components/Icons";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex min-h-screen flex-col items-center p-24 text-white gap-y-8">
      <div className="flex items-center justify-between w-full px-24">
        <div>
          <h1 className="text-white font-bold text-3xl">Minhas Finanças</h1>
          <p className="text-white font-normal text-sm">
            Você possui 4 registros
          </p>
        </div>
        <div className="flex gap-x-12">
          <div>Filtrar por status</div>
          <button className="btn-primary flex items-center justify-between hover:bg-purple-600 transition">
            <PlusCircleIcon className="size-12 fill-white stroke-purple-700" />
            <span className="pr-4 font-semibold">Novo Registro</span>
          </button>
        </div>
      </div>
      <section className="flex flex-col gap-y-4">
        <Image
          src="/img/vazio.png"
          width={300}
          height={300}
          alt="Imagem pessoa Vazia"
        />
        <div className="flex flex-col text-center justify-center items-center gap-y-4">
          <h3 className="text-zinc-400 font-bold text-2xl">
            Nada para Mostrar
          </h3>
          <div className="text-zinc-600 font-normal text-sm">
            <p>
              Clique no botão <span className="font-bold">Novo Registro</span>
            </p>
            <p>para adicionar receitas ou despesas</p>
          </div>
        </div>
      </section>
    </section>
  );
}
