import { ChevronLeftIcon } from "@/components/Icons";
import Link from "next/link";

const URL_HOME = process.env.NEXT_PUBLIC_PAGE_HOME || "";

export function FormRegistro() {
  return (
    <section className="w-full flex min-h-screen flex-col items-center p-24 text-white gap-y-8">
      <Link
        className="flex w-full justify-start items-center text-zinc-400 gap-x-2"
        href={URL_HOME}
      >
        <ChevronLeftIcon className="size-5 hover:stroke-zinc-400 stroke-zinc-500 transitions" />
        <span className="text-lg font-medium">Voltar</span>
      </Link>
      <form action="" className="w-full flex flex-col gap-y-4">
        <div className="w-full bg-zinc-900 rounded-md flex items-center justify-between px-8 py-4">
          pt1
        </div>
        <div className="w-full bg-zinc-900 rounded-md flex items-center justify-between px-8 py-4">
          pt2
        </div>
        <div className="w-full bg-zinc-900 rounded-md flex items-center justify-start px-8 py-4 gap-x-2">
          <button type="submit" className="btn-primary  px-4 py-2">
            Salvar
          </button>
          <button type="button" className="btn-secondary">
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}
