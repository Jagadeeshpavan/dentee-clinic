import React, { useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import './WaitingAnalysis.css';
import { Link } from 'react-router-dom';
import { AiOutlineStepBackward, AiOutlineCaretRight, AiOutlineStepForward } from 'react-icons/ai';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const data = [
  {
    date: '13-09-2023',
    patientName: 'Karthik',
    casenumber: '1233445',
    reciptnumber: '10:00 AM',
    appointmentTime: '30MIN',
    checkIn: '10:10 AM',
    waitingTime: '10:40 AM',
    treatmentStartTime: '10:10 AM',
    treatmentCompletedTime: '10:40 AM',
    treatment: 'Blood Test',
    // name: 'John Doe',
  },

  {
    date: '13-09-2023',
    patientName: 'abhi',
    casenumber: '1233445',
    reciptnumber: '10:00 AM',
    appointmentTime: '30MIN',
    checkIn: '10:10 AM',
    waitingTime: '10:40 AM',
    treatmentStartTime: '10:10 AM',
    treatmentCompletedTime: '10:40 AM',
    treatment: 'Blood Test',
    // name: 'John Doe',
  },

  {
    date: '13-09-2023',
    patientName: 'siva',
    casenumber: '1233445',
    reciptnumber: '10:00 AM',
    appointmentTime: '30MIN',
    checkIn: '10:10 AM',
    waitingTime: '10:40 AM',
    treatmentStartTime: '10:10 AM',
    treatmentCompletedTime: '10:40 AM',
    treatment: 'Blood Test',
    // name: 'John Doe',
  },
  // Add other data here
];

const itemsPerPage = 2;

function WaitingAnalysis() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= data.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontza'>
        <div className='zara-112'>
          <div className='zamain-head'>
            <div className='zamainhead-icon'>
              <Link to="/Areport">
                <AiOutlineArrowLeft /> 
              </Link>
            </div>
            <div className='zamain-heading'>Report / Waiting Area</div>
          </div>
          <div className='qbcont-113'>
            <select className='qchead-114'>   
              <option className='option-qc'>Today</option>
              <option className='option-qc'>This week</option>
              <option className='option-qc'>Last month</option>
              <option className='option-qc'>Next month</option>
              <option className='option-qc'>Two months</option>
              <option className='option-qc'>Three months</option>
            </select>
            <select className='qddot-334'>
              <option className='option-qc'>Doctor list</option> 
              <option className='option-qc'> select all Doctors</option>
              <option className='option-qc'> pavan kumar</option>
              <option className='option-qc'>ok</option>
              <option className='option-qc'>Cancel</option> 
            </select>
            <button className='qeseq-5556'>view Report</button>
          </div>
          <table className='qfrow-9998'> 
            <thead className='qgcol-0008'>
              <tr className='tr-cr'>
                <th className='th-qg'>Date</th>
                <th className='th-qg'>patientName</th>
                <th className='th-qg'>Casenumber</th>
                <th className='th-qg'>Reciptnumber</th>
                <th className='th-qg'>AppointmentTime</th>
                <th className='th-qg'>CheckIn</th>
                <th className='th-qg'>WaitingTime(min)</th>
                <th className='th-qg'>TreatmentStartTime</th>
                <th className='th-qg'>TreatmentCompleted Time</th>
                <th className='th-qg'>Treatment</th>
                {/* <th className='th-qg'>name</th> */}
              </tr>
            </thead>
            <tbody className='body-true'>
              {currentData.map((item, index) => (
                <tr key={index} className='tr-cr'>
                  <td className='td-midd'>{item.date}</td>
                  <td className='td-midd'>{item.patientName}</td>
                  <td className='td-midd'>{item.casenumber}</td>
                  <td className='td-midd'>{item.reciptnumber}</td>
                  <td className='td-midd'>{item.appointmentTime}</td>
                  <td className='td-midd'>{item.checkIn}</td>
                  <td className='td-midd'>{item.waitingTime}</td>
                  <td className='td-midd'>{item.treatmentStartTime}</td>
                  <td className='td-midd'>{item.treatmentCompletedTime}</td>
                  <td className='td-midd'>{item.treatment}</td>
                  {/* <td className='td-midd'>{item.name}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <div className='lovaraju'>
            <button className='vanitha'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='Rohani'>{currentPage}</p>
            <button className='vanitha'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WaitingAnalysis;
