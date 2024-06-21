import { Header, Table, Vazio } from "@/components/Home";

export default function Home() {
  // Variavel apenas para inicio da implementação logica de mostrar listagem registros
  const registros = true;
  return (
    <section className="w-full flex min-h-screen flex-col items-center p-24 text-white gap-y-8">
      <Header />
      {registros ? <Table /> : <Vazio />}
    </section>
  );
}
