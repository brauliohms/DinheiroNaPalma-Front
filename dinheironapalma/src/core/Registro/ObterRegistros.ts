import { CasoDeUso } from "../common";
import { BackendRegistro } from "./BackendRegistro";
import { Registro } from "./Registro";

export class ObterRegistros implements CasoDeUso<void, Registro[]> {
  public constructor(private backend: BackendRegistro) {}
  async executar(dto: void): Promise<Registro[]> {
    const response = await this.backend.obterRegistros();
    if (!response) return [];

    return response;
  }
}
