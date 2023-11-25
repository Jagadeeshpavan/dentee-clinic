import React, { useState } from 'react'; // Import useState from 'react'
import { AiOutlineReload } from 'react-icons/ai';
import { RiMessage2Line } from 'react-icons/ri';
import { FaFilter } from 'react-icons/fa';
import './OutstandingReport.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineCaretRight, AiOutlineStepForward } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function OutstandingReport() {
  const data = [
    {
      patientName: 'Sarah Johnson',
      caseId: '54321',
      mobileNumber: '555-555-5554',
      treatmentTotalCost: 800.00,
      treatmentBilledCost: 600.00,
      amountPaid: 400.00,
      treatmentBalance: 400.00,
      billedBalance: 200.00,
    },
    {
      patientName: 'Michael Brown',
      caseId: '98765',
      mobileNumber: '555-555-5553',
      treatmentTotalCost: 1200.00,
      treatmentBilledCost: 1000.00,
      amountPaid: 800.00,
      treatmentBalance: 400.00,
      billedBalance: 200.00,
    },
    {
      patientName: 'Emily Wilson',
      caseId: '24680',
      mobileNumber: '555-555-5552',
      treatmentTotalCost: 900.00,
      treatmentBilledCost: 700.00,
      amountPaid: 600.00,
      treatmentBalance: 300.00,
      billedBalance: 100.00,
    },
    {
      patientName: 'Matthew Davis',
      caseId: '13579',
      mobileNumber: '555-555-5551',
      treatmentTotalCost: 1100.00,
      treatmentBilledCost: 900.00,
      amountPaid: 700.00,
      treatmentBalance: 400.00,
      billedBalance: 200.00,
    },
    {
      patientName: 'Olivia Miller',
      caseId: '86420',
      mobileNumber: '555-555-5550',
      treatmentTotalCost: 950.00,
      treatmentBilledCost: 750.00,
      amountPaid: 550.00,
      treatmentBalance: 400.00,
      billedBalance: 200.00,
    },
    {
      patientName: 'William Smith',
      caseId: '12340',
      mobileNumber: '555-555-5549',
      treatmentTotalCost: 700.00,
      treatmentBilledCost: 500.00,
      amountPaid: 300.00,
      treatmentBalance: 400.00,
      billedBalance: 200.00,
    },
  ];
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentport = data.slice(indexOfFirstItem, indexOfLastItem);

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
      <div className='maincontoutstanding'>
        <br />
        <header className='conti73'>
          <div className='Outstanding-header'>
            <Link to='/Areport'>
              <AiOutlineArrowLeft />
            </Link>
            <h2 className='outsatanding-head'>Report/Outstandings</h2>
          </div>
        </header>
        <br />

        <div className='p2-hg19'>
          <label className='p7-bo71'>As of date</label>
          <input className="p3-ry47" type='date' />
          <input className="p4-kt65" type='search' placeholder='search' />
          <select className="p5-dc28">
            <option className='option-p5'>View</option>
            <option className='option-p5'>Tabular</option>
            <option className='option-p5'>Chart</option>
          </select>
          <button className="p6-jh53">
            <FaFilter />
          </button>
        </div>
        <br />
        <br />
        <div>
          <table className="p8-vz79">
            <tr className='th-p8'>
              <th className='th-p8'>Patient Name</th>
              <th className='th-p8'>CaseId</th>
              <th className='th-p8'>Mobile Number</th>
              <th className='th-p8'>Treatment Total Cost</th>
              <th className='th-p8'>Treatment Billed Cost</th>
              <th className='th-p8'>Amount Paid</th>
              <th className='th-p8'>Treatment Balance</th>
              <th className='th-p8'>Billed Balance</th>
              <th className='th-p8'>Action</th>
            </tr>

            {currentport.map((item, index) => (
              <tr key={index} className="p9-nb35">
                <td className='td-p9'>{item.patientName}</td>
                <td className='td-p9'>{item.caseId}</td>
                <td className='td-p9'>{item.mobileNumber}</td>
                <td className='td-p9'>{item.treatmentTotalCost.toFixed(2)}</td>
                <td className='td-p9'>{item.treatmentBilledCost.toFixed(2)}</td>
                <td className='td-p9'>{item.amountPaid.toFixed(2)}</td>
                <td className='td-p9'>{item.treatmentBalance.toFixed(2)}</td>
                <td className='td-p9'>{item.billedBalance.toFixed(2)}</td>
                <td className='td-p9'></td>
              </tr>
            ))}

            <tr className="p9-nb35">
              <td className='td-p9'></td>
              <td className='td-p9'></td>
              <td className='td-p9'>Total:</td>
              <td className='td-p9'>0.00</td>
              <td className='td-p9'>0.00</td>
              <td className='td-p9'>0.00</td>
              <td className='td-p9'>0.00</td>
              <td className='td-p9'>0.00</td>
              <td className='td-p9'></td>
            </tr>
          </table>
        </div>

        <div className='Prasad-3'>
          <button className='loki'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='Ramu'>{currentPage}</p>
          <button className='loki'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiOutlineStepForward />
          </button>
        </div>
        
      </div>
    </>
  );
}

export default OutstandingReport;
