import React, { useState } from 'react';
import './AppointmentR.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { FaFilter } from 'react-icons/fa';
import { PiPrinterFill, PiDotsThreeOutlineFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const data = [
  {
    caseNumber: '1',
    doctorName: 'Dr. John Doe',
    patientName: 'Alice',
    mobile: '123-456-7890',
    status: 'Scheduled',
    appointmentDate: '2023-10-21',
    arrivalTime: '10:00 AM',
    operationTime: '11:30 AM',
    completeTime: '12:15 PM',
    cancelledDate: '',
  },
  {
    caseNumber: '2',
    doctorName: 'Dr. Sarah Smith',
    patientName: 'Bob',
    mobile: '987-654-3210',
    status: 'Completed',
    appointmentDate: '2023-10-22',
    arrivalTime: '09:30 AM',
    operationTime: '10:45 AM',
    completeTime: '11:30 AM',
    cancelledDate: '',
  },
  {
    caseNumber: '3',
    doctorName: 'Dr. Michael Johnson',
    patientName: 'Charlie',
    mobile: '555-123-4567',
    status: 'Scheduled',
    appointmentDate: '2023-10-23',
    arrivalTime: '11:15 AM',
    operationTime: '12:30 PM',
    completeTime: '01:15 PM',
    cancelledDate: '',
  },
  {
    caseNumber: '4',
    doctorName: 'Dr. Emily Brown',
    patientName: 'David',
    mobile: '111-333-5555',
    status: 'Cancelled',
    appointmentDate: '2023-10-24',
    arrivalTime: '',
    operationTime: '',
    completeTime: '',
    cancelledDate: '2023-10-23',
  },
  {
    caseNumber: '5',
    doctorName: 'Dr. Olivia Wilson',
    patientName: 'Ella',
    mobile: '888-777-6666',
    status: 'Completed',
    appointmentDate: '2023-10-25',
    arrivalTime: '10:30 AM',
    operationTime: '11:45 AM',
    completeTime: '12:30 PM',
    cancelledDate: '',
  },
  {
    caseNumber: '6',
    doctorName: 'Dr. Daniel Davis',
    patientName: 'Frank',
    mobile: '444-222-9999',
    status: 'Scheduled',
    appointmentDate: '2023-10-26',
    arrivalTime: '10:15 AM',
    operationTime: '11:30 AM',
    completeTime: '12:15 PM',
    cancelledDate: '',
  },
];


const itemsPerPage = 3; 

const AppointmentReport = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincontappo">
        <div className="appo-total">
          <div className="appomain-head">
            <div className="appomainhead-icon">
              <Link to="/Areport">
                <AiOutlineArrowLeft />{' '}
              </Link>
            </div>
            <div className="appo-heading">Report / Appointment Report</div>
            <PiPrinterFill className="appo-icon-1" />
            <button className="appo-button-2">
              <PiDotsThreeOutlineFill />
            </button>
          </div>
          <select className='appo-select'>
            <option className='appo-option'>Today</option>
            <option className='appo-option'>Last 7 Days</option>
            <option className='appo-option'>This Week</option>
            <option className='appo-option'>This Month</option>
            <option className='appo-option'>This Year</option>
            <option className='appo-option'>Last Week</option>
            <option className='appo-option'>Last Month</option>
            <option className='appo-option'>Between</option>
          </select>
          <input type="text" placeholder="Search" className="appo-input"></input>
          <select className='appo-select1'>
            <option className='appo-option'>View</option>
            <option className='appo-option'>Tabular</option>
          </select>
          <button className="appo-button-1">
            <FaFilter />
          </button>
          <table className="appo-table">
            <thead className="appo-table-head">
              <tr className="tr-appo">
                <th className="th-appo">Case Number</th>
                <th className="th-appo">Doctor Name</th>
                <th className="th-appo">Patient Name</th>
                <th className="th-appo">Mobile</th>
                <th className="th-appo">Status</th>
                <th className="th-appo">Appointment Date</th>
                <th className="th-appo">Arrival Time</th>
                <th className="th-appo">Operation Time</th>
                <th className="th-appo">Complete Time</th>
                <th className="th-appo">Cancelled Date</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.caseNumber}</td>
                  <td>{item.doctorName}</td>
                  <td>{item.patientName}</td>
                  <td>{item.mobile}</td>
                  <td>{item.status}</td>
                  <td>{item.appointmentDate}</td>
                  <td>{item.arrivalTime}</td>
                  <td>{item.operationTime}</td>
                  <td>{item.completeTime}</td>
                  <td>{item.cancelledDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button className='vanitha-sai'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <AiOutlineStepBackward />
            </button>
            <p className="rajuz">{currentPage}</p>
            <button className='vanitha-sai'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentReport;
