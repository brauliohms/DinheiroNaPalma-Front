import { CasoDeUso } from "../common";
import { BackendRegistro } from "./BackendRegistro";
import { RegistroDTO } from "./Registro";

// type Entrada = { registro: Partial<Registro> };
// type Entrada = { registro: Omit<Registro, "id"> };
type Entrada = { registro: RegistroDTO };

export class CriarNovoRegistro implements CasoDeUso<Entrada, Response> {
  public constructor(private backend: BackendRegistro) {}
  async executar(dto: Entrada): Promise<Response> {
    return await this.backend.criar(dto.registro);
  }
}
