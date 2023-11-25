import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineStepBackward, AiOutlineCaretRight, AiOutlineStepForward } from 'react-icons/ai';
import './ReferReport.css';
import { BiSearch } from "react-icons/bi";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft } from "react-icons/ai";

function ReferReport() {
  const dummyData = [
    {
      select: 1,
      registrationDate: '2023-09-10',
      referrerName: 'Sample Bank',
      referredBy: 'Main Branch',
      mobileNumber: "John Doe's Account",
      emailAddress: 'john@example.com',
    },
    {
      select: 2,
      registrationDate: '2023-09-11',
      referrerName: 'ABC Clinic',
      referredBy: 'Dr. Smith',
      mobileNumber: "Jane's Account",
      emailAddress: 'jane@example.com',
    },
    {
      select: 3,
      registrationDate: '2023-09-12',
      referrerName: 'XYZ Hospital',
      referredBy: 'Dr. Johnson',
      mobileNumber: "Mary's Account",
      emailAddress: 'mary@example.com',
    },
    {
      select: 4,
      registrationDate: '2023-09-13',
      referrerName: 'Healthcare Center',
      referredBy: 'Dr. Brown',
      mobileNumber: "Robert's Account",
      emailAddress: 'robert@example.com',
    },
    {
      select: 5,
      registrationDate: '2023-09-14',
      referrerName: 'Sunshine Clinic',
      referredBy: 'Dr. Wilson',
      mobileNumber: "Sarah's Account",
      emailAddress: 'sarah@example.com',
    },
    {
      select: 6,
      registrationDate: '2023-09-15',
      referrerName: 'Wellness Hospital',
      referredBy: 'Dr. Martin',
      mobileNumber: "Chris' Account",
      emailAddress: 'chris@example.com',
    },
    {
      select: 7,
      registrationDate: '2023-09-16',
      referrerName: 'Medical Group',
      referredBy: 'Dr. Davis',
      mobileNumber: "Jennifer's Account",
      emailAddress: 'jennifer@example.com',
    },
    {
      select: 8,
      registrationDate: '2023-09-17',
      referrerName: 'City Clinic',
      referredBy: 'Dr. Jackson',
      mobileNumber: "Laura's Account",
      emailAddress: 'laura@example.com',
    },
    {
      select: 9,
      registrationDate: '2023-09-18',
      referrerName: 'Central Hospital',
      referredBy: 'Dr. White',
      mobileNumber: "David's Account",
      emailAddress: 'david@example.com',
    },
    {
      select: 10,
      registrationDate: '2023-09-19',
      referrerName: 'Wellness Clinic',
      referredBy: 'Dr. Allen',
      mobileNumber: "Patricia's Account",
      emailAddress: 'patricia@example.com',
    },
  ];

  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontrefer'>
        <div className='ReferReport-header'>
          <Link to='/Areport'>
            <div className='refer-icon'><AiOutlineArrowLeft className='refer-bckbtn' /></div>
          </Link>
          <h2 className='refer-heading'>Report/Referrer Report</h2>
        </div>
        <div className="doctor-form-group14">
          <label className='label-1111'></label>
          <select className="doctor-form-control14" name="specialization" required>
            <option className='option-control14'>Patient</option>
            <option className='option-control14'>Others</option>
            <option className='option-control14'>Doctor</option>
            <option className='option-control14'>External Referrer</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <select className="doctor-form-control14" name="specialization" required>
            <option className='option-control14'>Today</option>
            <option className='option-control14'>Last 7 Days</option>
            <option className='option-control14'>This Week</option>
            <option className='option-control14'>This year</option>
            <option className='option-control14'>Last Week</option>
            <option className='option-control14'>Last Month</option>
            <option className='option-control14'>Between</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className='button-refer'> View Report</button>
        </div>
        <div>
          <br />
          <br />
          <div className='search-containerrefer'>
            <input className='search-barrefer' type='text' placeholder='Search' />
            <button className='search-btnrefer'><BiSearch /></button>
          </div>
        </div>
        <br></br>
        <table className="table123">
          <thead className='refer-table-head'>
            <tr className='tr-to'>
              <th className="thsize">Select</th>
              <th className="thsize">Registration Date</th>
              <th className="thsize">Referrer Name</th>
              <th className="thsize">Referred By</th>
              <th className="thsize">Mobile Number</th>
              <th className="thsize">Email Address 1</th>
            </tr>
          </thead>
          <tbody className='body-main'>
            {currentData.map((item, index) => (
              <tr key={index} className='refer-table-data'>
                <td className='td-ata'>{item.select}</td>
                <td className='td-ata'>{item.registrationDate}</td>
                <td className='td-ata'>{item.referrerName}</td>
                <td className='td-ata'>{item.referredBy}</td>
                <td className='td-ata'>{item.mobileNumber}</td>
                <td className='td-ata'>{item.emailAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='sarala'>
          <button className='raji'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='janu'>{currentPage}</p>
          <button className='raji'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  )
};

export default ReferReport;
