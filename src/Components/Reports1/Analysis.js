import React, { useState } from 'react'; // Import useState from 'react'
import './Analysis.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { CgProfile } from 'react-icons/cg';
import { FaFileExcel } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Analysis = () => {
  // Sample patient data
  const patientData = [
    {
      id: 1,
      patientCode: 23390,
      patientName: 'Ram',
      gender: 'Male',
      mobileNumber: '9876543214',
      emailAddress: 'ram7777@gmail.com',
      age: 34,
      registrationDate: '11/09/2023',
    },
    {
      id: 2,
      patientCode: 23876,
      patientName: 'Krish',
      gender: 'Male',
      mobileNumber: '9123409876',
      emailAddress: 'krish123@gmail.com',
      age: 26,
      registrationDate: '11/09/2023',
    },
    {
      id: 3,
      patientCode: 34215,
      patientName: 'Alice',
      gender: 'Female',
      mobileNumber: '1234567890',
      emailAddress: 'alice@example.com',
      age: 29,
      registrationDate: '11/09/2023',
    },
    {
      id: 4,
      patientCode: 45872,
      patientName: 'John',
      gender: 'Male',
      mobileNumber: '9876123450',
      emailAddress: 'john@example.com',
      age: 41,
      registrationDate: '11/09/2023',
    },
    {
      id: 5,
      patientCode: 55433,
      patientName: 'Emily',
      gender: 'Female',
      mobileNumber: '7890123456',
      emailAddress: 'emily@example.com',
      age: 35,
      registrationDate: '11/09/2023',
    },
  ];
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const current = patientData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= patientData.length;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <div className="analysis-total">
          <div className="analysis-head">
            <Link to="/Areport">
              <div className="analysis-icon">
                <AiOutlineArrowLeft />
              </div>
            </Link>
            <div className="analysis-acc-1">Report / Patient Analysis</div>
            <div className="analysis-profileicon">
              <CgProfile />
            </div>
            <div className="analysis-excelicon">
              <FaFileExcel />
            </div>
            <div className="analysis-info">
              <ImProfile />
            </div>
            <button className="analysis-filter">
              <FiFilter />
            </button>
          </div>
          <div>
            <table className="analysis-table">
              <thead className="analysis-th">
                <tr className="analysis-tablerow">
                  <th className="analysis-th1">Patient Code</th>
                  <th className="analysis-th1">Patient Name</th>
                  <th className="analysis-th1">Gender</th>
                  <th className="analysis-th1">Mobile Number</th>
                  <th className="analysis-th1">Email Address</th>
                  <th className="analysis-th1">Age</th>
                  <th className="analysis-th1">Registration Date</th>
                </tr>
              </thead>
              <tbody className="analysis-tbody">
                {current.map((patient) => (
                  <tr className="analysis-tablerow" key={patient.id}>
                    <td className="analysis-tabletd">{patient.patientCode}</td>
                    <td className="analysis-tabletd">{patient.patientName}</td>
                    <td className="analysis-tabletd">{patient.gender}</td>
                    <td className="analysis-tabletd">{patient.mobileNumber}</td>
                    <td className="analysis-tabletd">{patient.emailAddress}</td>
                    <td className="analysis-tabletd">{patient.age}</td>
                    <td className="analysis-tabletd">{patient.registrationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='pat-gopi-11'>
            <button className='but-gopi-22'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='pat-bottle-21'>{currentPage}</p>
            <button className='but-gopi-22'
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
};

export default Analysis;
