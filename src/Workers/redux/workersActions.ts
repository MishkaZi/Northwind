export const CounterActionType = {
  ADD_WORKER: 'ADD_WORKER',
  EDIT_WORKER: 'EDIT_WORKER',
  SHOW_WORKER: 'SHOW_WORKER',
  SHOW_ALL_WORKERS: 'SHOW_ALL_WORKERS',
  DELETE_WORKER: 'DELETE_WORKER',
  DELETE_ID: 'DELETE_ID',
};

export interface CounterAction {
  type: string;
  payload?: any;
}

export const showALLWorkerS = (workers): CounterAction => {
  return {
    type: CounterActionType.SHOW_ALL_WORKERS,
    payload: workers,
  };
};

export const showWorker = (worker): CounterAction => {
  return {
    type: CounterActionType.SHOW_WORKER,
    payload: worker,
  };
};

export const addWorker = (): CounterAction => {
  return {
    type: CounterActionType.ADD_WORKER,
  };
};

export const editWorker = (): CounterAction => {
  return {
    type: CounterActionType.EDIT_WORKER,
  };
};

export const deleteWorkerWithId = (id: number): CounterAction => {
  return {
    type: CounterActionType.DELETE_ID,
    payload: id,
  };
};
