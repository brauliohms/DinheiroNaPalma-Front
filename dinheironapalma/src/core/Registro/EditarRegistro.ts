import { CasoDeUso } from "../common";
import { BackendRegistro } from "./BackendRegistro";
import { Registro } from "./Registro";

type Entrada = { registro: Registro };

export class EditarRegistro implements CasoDeUso<Entrada, Response> {
  public constructor(private backend: BackendRegistro) {}
  async executar(dto: Entrada): Promise<Response> {
    return await this.backend.editar(dto.registro);
  }
}
