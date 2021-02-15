/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import WorkerModel from '../../Models/WorkerModel';
import { useSelector, useDispatch } from 'react-redux';
import { showWorker } from '../redux/workersActions';

import './EditWorker.css';
const EditWorker = (): JSX.Element => {
  const { register, handleSubmit, errors } = useForm<WorkerModel>();
  const history = useHistory();
  let { id } = useParams<any>();

  const worker = useSelector((state) => state.Worker.worker);
  const dispatch = useDispatch();

  const getWorker = async () => {
    const result = await Axios.get<WorkerModel>(
      `http://localhost:3030/api/employees/${id}`
    );
    dispatch(showWorker(result.data));
  };

  useEffect(() => {
    getWorker();
  }, [worker]);

  const submit = async (data: WorkerModel) => {
    try {
      const result = await Axios.post<WorkerModel>(
        'http://localhost:3030/api/employees'
      );
      console.log('Worker has been edited');
      history.push('/HomePage');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditWorker">
      <h4>Edit worker: </h4>
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-groups">
          <div className="form-group">
            <label>Id: </label>
            <input
              defaultValue={worker?.id}
              name="id"
              ref={register({ required: true })}
            />
            {errors.id && <span className="err-msg">Missing id</span>}
          </div>

          <div className="form-group">
            <label>First Name:</label>
            <input
              defaultValue={worker?.firstName}
              name="firstName"
              ref={register({ required: true })}
            />
            {errors.firstName && (
              <span className="err-msg">Missing firstName</span>
            )}
          </div>

          <div className="form-group">
            <label>Last name:</label>
            <input
              defaultValue={worker?.lastName}
              name="lastName"
              ref={register({ required: true })}
            />
            {errors.lastName && (
              <span className="err-msg">Missing Last name:</span>
            )}
          </div>

          <div className="form-group">
            <label>Title: </label>
            <input
              defaultValue={worker?.title}
              name="title"
              ref={register({ required: true })}
            />
            {errors.title && <span className="err-msg">Missing title</span>}
          </div>

          <div className="form-group">
            <label>Country: </label>
            <input
              defaultValue={worker?.country}
              name="country"
              ref={register({ required: true })}
            />
            {errors.country && <span className="err-msg">Missing country</span>}
          </div>

          <div className="form-group">
            <label>City: </label>
            <input
              defaultValue={worker?.city}
              name="city"
              ref={register({ required: true })}
            />
            {errors.city && <span className="err-msg">Missing city</span>}
          </div>

          <div className="form-group">
            <label>birthDate: </label>
            <input
              defaultValue={worker?.birthDate}
              name="birthDate"
              ref={register({ required: true })}
            />
            {errors.birthDate && (
              <span className="err-msg">Missing birthDate</span>
            )}
          </div>

          <div className="form-group">
            <label>Image Name: </label>
            <input
              defaultValue={worker?.imageName}
              name="imageName"
              ref={register({ required: true })}
            />
            {errors.imageName && (
              <span className="err-msg">Missing imageName</span>
            )}
          </div>
        </div>
        <button type="submit" className="add-btn">
          Edit
        </button>
        <NavLink to={'/HomePage'}>Get Back</NavLink>
      </form>
    </div>
  );
};

export default EditWorker;
