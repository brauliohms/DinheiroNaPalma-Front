import { ObterRegistros } from "@/core";

export class ObterRegistrosController {
  public constructor(private casoDeUso: ObterRegistros) {
    const fn = async () => {
      try {
        const data = await this.casoDeUso.executar();
        return data;
      } catch (error) {
        console.error("Erro controller", error.message);
      }
    };

    fn();
  }
}
