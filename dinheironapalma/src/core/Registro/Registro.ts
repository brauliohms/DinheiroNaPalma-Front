import { Entidade } from "../common";

export interface Registro extends Entidade {
  descricao: string;
  data: Date;
  tipo: RegistroTipo;
  valor: number;
  status: RegistroStatus;
}

export type RegistroTipo = "despesa" | "receita";

export type RegistroStatus = "consolidado" | "pendente" | "cancelado";

export interface RegistroDTO extends Omit<Registro, "id"> {}
