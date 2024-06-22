import { Registro, RegistroDTO } from "./Registro";

export interface BackendRegistro {
  criar(registro: RegistroDTO): Promise<Response>;
  obterRegistroPorId(registro_id: number): Promise<Registro | null>;
  deletar(registro_id: number): Promise<void>;
  editar(registro: Registro): Promise<Response>;
  obterRegistros(): Promise<Registro[] | null>;
}
