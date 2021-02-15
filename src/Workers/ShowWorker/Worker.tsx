// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import WorkerModel from '../../Models/WorkerModel';

// import './Worker.css';
// const Worker = (): JSX.Element => {
//   let {id} = useParams<any>();

//   const [worker, setWorker] = useState<WorkerModel>();

//   const getWorker = async () => {
//     const result = await axios.get<WorkerModel>(
//       `http://localhost:3030/api/employees/${id}`
//     );
//     setWorker(result.data);
//   };


//   useEffect(() => {
//     getWorker();
//   }, [worker]);

//   return (
//     <div className="workerDetails">
//       <h4>Worker Details Page</h4>
//       <div className="workerDetails">

//         <div>First Name: {worker?.firstName}</div>
//         <div>Last Name: {worker?.lastName}</div>
//         <div>Title: {worker?.title}</div>
//         <div>Country: {worker?.country}</div>
//         <div>City: {worker?.city}</div>
//         <div>birthDate: {worker?.birthDate}</div>
//         <div>Image Name: {worker?.imageName}</div>
//       </div>


//       <NavLink to={'/HomePage'}>Get Back</NavLink>
//     </div>
//   );
// };

// export default Worker;


/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, {useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import WorkerModel from '../../Models/WorkerModel';
import { useSelector, useDispatch } from 'react-redux';
import { showWorker } from '../redux/workersActions';

import './Worker.css';
const Worker = (): JSX.Element => {
  let { id } = useParams<any>();
  const worker = useSelector((state) => state.Worker.worker);
  const dispatch = useDispatch();
  // const history = useHistory();

  const getWorker = async () => {
    const result = await axios.get<WorkerModel>(
      `http://localhost:3030/api/employees/${id}`
    );
    dispatch(showWorker(result.data));
  };

  useEffect(() => {
    getWorker();
  }, [worker]);

  return (
    <div className="workerDetails">
      <h4>Worker Details Page</h4>
      <div className="workerDetails">
        <div>First Name: {worker?.firstName}</div>
        <div>Last Name: {worker?.lastName}</div>
        <div>Title: {worker?.title}</div>
        <div>Country: {worker?.country}</div>
        <div>City: {worker?.city}</div>
        <div>birthDate: {worker?.birthDate}</div>
        <div>Image Name: {worker?.imageName}</div>
      </div>

      <NavLink to={'/HomePage'}>Get Back</NavLink>
      {/*   <button onClick={() => history.push('/HomePage')}>Go back</button> */}
    </div>
  );
};

export default Worker;
