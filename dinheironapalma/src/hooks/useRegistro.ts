import { BackendRegistroAdapter } from "@/adapters/backend";
import {
  CriarNovoRegistro,
  DeletarRegistro,
  EditarRegistro,
  ObterRegistroPorId,
  Registro,
  RegistroDTO,
} from "@/core";
import { ObterRegistros } from "@/core/Registro/ObterRegistros";

export function useRegistro() {
  const backend = new BackendRegistroAdapter();

  async function novoRegistroController(registro: RegistroDTO) {
    const criarNovoRegistro = new CriarNovoRegistro(backend);
    try {
      return await criarNovoRegistro.executar({ registro });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

  async function getRegistrosController() {
    const obterRegistros = new ObterRegistros(backend);
    try {
      return await obterRegistros.executar();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

  async function getRegistroPorIdController(registro_id: number) {
    const obterRegistroPorId = new ObterRegistroPorId(backend);
    try {
      return await obterRegistroPorId.executar({ registro_id });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

  async function delRegistroController(registro_id: number) {
    const deleteRegistro = new DeletarRegistro(backend);
    try {
      deleteRegistro.executar({ registro_id });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

  async function editRegistroController(registro: Registro) {
    const editarRegistro = new EditarRegistro(backend);
    try {
      return await editarRegistro.executar({ registro });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }
  return {
    novoRegistroController,
    getRegistrosController,
    delRegistroController,
    editRegistroController,
    getRegistroPorIdController,
  };
}
