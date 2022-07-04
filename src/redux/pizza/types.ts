import IPizza from '../../utils/interfaces/IPizza';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface PizzasState {
  items: IPizza[];
  status: Status;
}
