import { CasoDeUso } from "../common";
import { BackendRegistro } from "./BackendRegistro";
import { Registro } from "./Registro";

type Entrada = { registro_id: number };

export class ObterRegistroPorId implements CasoDeUso<Entrada, Registro | null> {
  public constructor(private backend: BackendRegistro) {}
  async executar(dto: Entrada): Promise<Registro | null> {
    return await this.backend.obterRegistroPorId(dto.registro_id);
  }
}
