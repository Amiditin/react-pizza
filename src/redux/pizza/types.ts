import IPizza from '../../utils/interfaces/IPizza';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface PizzasState {
  items: IPizza[];
  status: Status;
}
