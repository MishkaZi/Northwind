/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import WorkerModel from '../Models/WorkerModel';
import Axios from 'axios';
import './HomePage.css';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { showALLWorkerS } from '../Workers/redux/workersActions';
import { deleteWorkerWithId } from '../Workers/redux/workersActions';

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const workers = useSelector<any>((state) => state.HomePage.workers);
  const deleteId = useSelector<any>((state) => state.DeleteWorker.id);


  const getAllWorkers = async () => {
    try {
      const result = await Axios.get<WorkerModel[]>(
        'http://localhost:3030/api/employees'
      );

      dispatch(showALLWorkerS(result.data));
    } catch (error) {
      console.log(error);
    }
  };

  const removeMessage = async () => {
    try {
      const result = await Axios.delete<WorkerModel>(
        `http://localhost:3030/api/employees/${deleteId}`
      );

      alert(`Message Deleted Successfully`);
    } catch (err) {
      alert(`Ooopsi ${err}`);
    }
  };

  useEffect(() => {
    getAllWorkers();
  }, []);

  useEffect(() => {
    if (deleteId) {
      removeMessage();
    }
  }, [deleteId]);

  return (
    <div className="HomePage">
      <NavLink to="/add-worker">Add Worker</NavLink>
      <h1>List of all workers:</h1>

      <div className="workers-container">
        {workers?.map((worker, index) => {
          return (
            <div key={index} className="worker-item">
              <button
                onClick={() => dispatch(deleteWorkerWithId(worker.id))}
                className="del"
              >
                X
              </button>
              <br />
              <NavLink to={`/worker/edit/${worker.id}`}>Edit</NavLink>
              <br />
              <NavLink to={`/worker/${worker.id}`}>Show worker</NavLink>

              <p>worker ID: {worker.id}</p>
              <p>Worker First name: {worker.firstName}</p>
              <p>Worker Last name: {worker.lastName}</p>
              <p>Title: {worker.title}</p>
              <p>Country: {worker.country}</p>
              <p>City: {worker.city}</p>
              <p>birthDate: {worker.birthDate}</p>
              <p>ImageName: {worker.imageName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
