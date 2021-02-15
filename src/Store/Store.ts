import { createStore, combineReducers } from 'redux';
import { workersReducer } from '../Workers/redux/workersReducer';
import { workerReducer } from '../Workers/redux/workersReducer';
import { deleteWorkerIdReducer } from '../Workers/redux/workersReducer';

const allReducers = combineReducers({
  HomePage: workersReducer, // workersReducer will handle data in  this area; //אחמ״ש
  Worker: workerReducer,
  DeleteWorker: deleteWorkerIdReducer,
});

// בניה של הסטור בשילוב עם כל הרדיוסרים - פונקציות שנכתוב שיעשו שינוים על הסטור
export const store = createStore(allReducers);
