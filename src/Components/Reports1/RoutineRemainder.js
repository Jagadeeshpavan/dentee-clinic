import React, { useState, useEffect } from 'react';
import './RoutineRemainder.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { SiMicrosoftexcel } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';

const itemsPerPage = 3;

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className='pat-footer55pat1'>
      <button
        className='butpagenation-ak55'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        <AiOutlineStepBackward />
      </button>
      <p className='pat-bottom-num55pat2'>
         {currentPage} 
      </p>
      
      <button
        className='butpagenation-ak55'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        <AiOutlineStepForward />
      </button>
    </div>
  );
};

const Routine_Remainder = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    // Fetch data from your API or another data source and set it to the 'data' state.
    // For now, use sample data:
    const sampleData = [
      {
        lastTreatmentDate: '01-02-23',
        patientName: 'Jerry',
        emailAddress1: 'jerry@example.com',
        emailAddress2: 'jerry2@example.com',
        address: '123 Elm Street',
        mobileNumber: '+9112345678',
        contactNo: '+9112345678',
      },
      {
        lastTreatmentDate: '01-02-23',
        patientName: 'Alice',
        emailAddress1: 'alice@example.com',
        emailAddress2: 'alice2@example.com',
        address: '456 Oak Avenue',
        mobileNumber: '+9223456789',
        contactNo: '+9223456789',
      },
      {
        lastTreatmentDate: '01-02-23',
        patientName: 'Bob',
        emailAddress1: 'bob@example.com',
        emailAddress2: 'bob2@example.com',
        address: '789 Pine Road',
        mobileNumber: '+9334567890',
        contactNo: '+9334567890',
      },
      {
        lastTreatmentDate: '01-02-23',
        patientName: 'Eve',
        emailAddress1: 'eve@example.com',
        emailAddress2: 'eve2@example.com',
        address: '101 Cedar Lane',
        mobileNumber: '+9445678901',
        contactNo: '+9445678901',
      },
      {
        lastTreatmentDate: '01-02-23',
        patientName: 'Char',
        emailAddress1: 'charlie@example.com',
        emailAddress2: 'charlie2@example.com',
        address: '303 Birch Street',
        mobileNumber: '+9556789012',
        contactNo: '+9556789012',
      },
      {
        lastTreatmentDate: '01-02-23',
        patientName: 'Grace',
        emailAddress1: 'grace@example.com',
        emailAddress2: 'grace2@example.com',
        address: '505 Maple Avenue',
        mobileNumber: '+9667890123',
        contactNo: '+9667890123',
      },
      {
        lastTreatmentDate: '01-02-23',
        patientName: 'David',
        emailAddress1: 'david@example.com',
        emailAddress2: 'david2@example.com',
        address: '707 Willow Lane',
        mobileNumber: '+9778901234',
        contactNo: '+9778901234',
      },
      {
        lastTreatmentDate: '01-02-23',
        patientName: 'Fiona',
        emailAddress1: 'fiona@example.com',
        emailAddress2: 'fiona2@example.com',
        address: '909 Oak Street',
        mobileNumber: '+9889012345',
        contactNo: '+9889012345',
      },
      {
        lastTreatmentDate: '01-02-23',
        patientName: 'Henry',
        emailAddress1: 'henry@example.com',
        emailAddress2: 'henry2@example.com',
        address: '111 Pine Avenue',
        mobileNumber: '+9990123456',
        contactNo: '+9990123456',
      },
      // Add more data items as needed
    ];

    setData(sampleData);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = data.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className='maincontroutine-nk'>
        <div className='routine-TotalBody-nd'>
          <div className='routine-head'>
            <Link to='/Areport'>
              <div className='routine-icon'>
                <AiOutlineArrowLeft />
              </div>
            </Link>
            <div className='routine-heading'>
              Report / Routine Remainder Report
            </div>
          </div>

          <div className='routine-body'>{/* ... (existing code) */}</div>

          <div className='routine-se-1'>
            <div className='search-containerremainder'>
              <input
                className='search-barremainder'
                type='text'
                placeholder='Search'
              />
              <button className='search-btnremainder'>
                <BiSearch />
              </button>
            </div>
            <div>
              <SiMicrosoftexcel className='routine-excel-icon' />
            </div>
          </div>

          <div>
            <table className='routine-table-detail'>
              <thead className='headerto-444'>
                <tr className='true-6668'>
                  <th className='th-routine-table-head'>LastTreatmentDate</th>
                  <th className='th-routine-table-head'>Patient Name</th>
                  <th className='th-routine-table-head'>EmailAddress1</th>
                  <th className='th-routine-table-head'>EmailAddress2</th>
                  <th className='th-routine-table-head'>Address</th>
                  <th className='th-routine-table-head'>Mobile Number</th>
                  <th className='th-routine-table-head'>Contact No</th>
                </tr>
              </thead>
              <tbody>
                {itemsToDisplay.map((dataItem, index) => (
                  <tr key={index} className='routine-some'>
                    <td className='td-so'>{dataItem.lastTreatmentDate}</td>
                    <td className='td-so'>{dataItem.patientName}</td>
                    <td className='td-so'>{dataItem.emailAddress1}</td>
                    <td className='td-so'>{dataItem.emailAddress2}</td>
                    <td className='td-so'>{dataItem.address}</td>
                    <td className='td-so'>{dataItem.mobileNumber}</td>
                    <td className='td-so'>{dataItem.contactNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default Routine_Remainder;