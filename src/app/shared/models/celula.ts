import { Endereco } from './endereco';
import { Lider } from './lider';

export interface Celula {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  horario: string;
  endereco: Endereco;
  lider: Lider;
}
