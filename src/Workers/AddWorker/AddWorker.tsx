/* eslint-disable @typescript-eslint/no-unused-vars */
import Axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';
import WorkerModel from '../../Models/WorkerModel';

import './AddWorker.css';
const AddWorker = (): JSX.Element => {
  const { register, handleSubmit, errors } = useForm<WorkerModel>();
  const history = useHistory();

  const submit = async (data: WorkerModel) => {
    try {
      const result = await Axios.post<WorkerModel>(
        'http://localhost:3030/api/employees'
      );
      console.log('Worker has been added with data: '+ data);
      history.push('/HomePage');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addWorker">
      <h4>Add worker: </h4>
      <NavLink to={'/HomePage'}>Get Back</NavLink>
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-groups">
          <div className="form-group">
            <label>Id: </label>
            <input name="id" ref={register({ required: true })} />
            {errors.id && <span className="err-msg">Missing id</span>}
          </div>

          <div className="form-group">
            <label>First Name:</label>
            <input name="firstName" ref={register({ required: true })} />
            {errors.firstName && (
              <span className="err-msg">Missing firstName</span>
            )}
          </div>

          <div className="form-group">
            <label>Last name:</label>
            <input name="lastName" ref={register({ required: true })} />
            {errors.lastName && (
              <span className="err-msg">Missing Last name:</span>
            )}
          </div>

          <div className="form-group">
            <label>Title: </label>
            <input name="title" ref={register({ required: true })} />
            {errors.title && <span className="err-msg">Missing title</span>}
          </div>

          <div className="form-group">
            <label>Country: </label>
            <input name="country" ref={register({ required: true })} />
            {errors.country && <span className="err-msg">Missing country</span>}
          </div>

          <div className="form-group">
            <label>City: </label>
            <input name="city" ref={register({ required: true })} />
            {errors.city && <span className="err-msg">Missing city</span>}
          </div>

          <div className="form-group">
            <label>birthDate: </label>
            <input name="birthDate" ref={register({ required: true })} />
            {errors.birthDate && (
              <span className="err-msg">Missing birthDate</span>
            )}
          </div>

          <div className="form-group">
            <label>Image Name: </label>
            <input name="imageName" ref={register({ required: true })} />
            {errors.imageName && (
              <span className="err-msg">Missing imageName</span>
            )}
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddWorker;
