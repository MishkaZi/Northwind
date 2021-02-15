const initStateWorkers = { workers: [] };
export const workersReducer = (state = initStateWorkers, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'SHOW_ALL_WORKERS':
      newState.workers = action.payload;
      break;
  }
  return newState;
};

const initStateWorker = { worker: {} };
export const workerReducer = (state = initStateWorker, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'SHOW_WORKER':
      newState.worker = action.payload;
      break;
    case 'EDIT_WORKER':
      newState.worker = action.payload;
      break;

    // case 'ADD_WORKER':
    //   newState.worker = action.payload;
    //   break;
  }
  return newState;
};

const initDeleteId = { id: [] };
export const deleteWorkerIdReducer = (state = initDeleteId, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'DELETE_ID':
      newState.id = action.payload;
      break;
  }
  return newState;
};
