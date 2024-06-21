import { CriarNovoRegistro, RegistroDTO } from "@/core";

export class CriarNovoRegistroController {
  public constructor(
    private registro: RegistroDTO,
    private casoDeUso: CriarNovoRegistro
  ) {
    this.casoDeUso.executar({ registro: this.registro });
  }
}
