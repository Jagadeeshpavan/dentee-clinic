import React, { useState } from 'react';
import './ConsultantBilling.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";
import { AiOutlineStepBackward, AiOutlineCaretRight, AiOutlineStepForward } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';

const ConsultantBilling = () => {
  // Dummy data
  const consultantData = [
    {
      doctorName: 'John',
      patientNumber: 'jerry',
      receiptNo: '001',
      date: '12/09/2023',
      amount: '₹2000',
    },
    {
      doctorName: 'Alice',
      patientNumber: 'smith',
      receiptNo: '002',
      date: '13/09/2023',
      amount: '₹2500',
    },
    {
      doctorName: 'Bob',
      patientNumber: 'johnson',
      receiptNo: '003',
      date: '14/09/2023',
      amount: '₹3000',
    },
    {
      doctorName: 'Emma',
      patientNumber: 'wilson',
      receiptNo: '004',
      date: '15/09/2023',
      amount: '₹3500',
    },
    {
      doctorName: 'Michael',
      patientNumber: 'brown',
      receiptNo: '005',
      date: '16/09/2023',
      amount: '₹4000',
    },
    {
      doctorName: 'Sophia',
      patientNumber: 'miller',
      receiptNo: '006',
      date: '17/09/2023',
      amount: '₹4500',
    },
    {
      doctorName: 'Oliver',
      patientNumber: 'davis',
      receiptNo: '007',
      date: '18/09/2023',
      amount: '₹5000',
    },
    {
      doctorName: 'Liam',
      patientNumber: 'martin',
      receiptNo: '008',
      date: '19/09/2023',
      amount: '₹5500',
    },
    {
      doctorName: 'Ava',
      patientNumber: 'smith',
      receiptNo: '009',
      date: '20/09/2023',
      amount: '₹6000',
    },
    {
      doctorName: 'Mia',
      patientNumber: 'jackson',
      receiptNo: '010',
      date: '21/09/2023',
      amount: '₹6500',
    },
  ] ;

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = consultantData.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= consultantData.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(consultantData.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };
  const data = [
    ['Patient Name', 'Category Name', 'Order No', 'LabWork Date', 'Supplier Name', 'Cost'],
    ['John', 'None', '013', '12/09/2023', 'sai', '₹2000'],
    ['John', 'jerry', '013', '12/09/2023', 'sai', '₹2000'],
  ];const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Labwork Data');
    XLSX.writeFile(wb, 'labwork_data.xlsx');
  };
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontconsul'>
        <div className='ConsultantTotalBody'>
          <div className='consultant-head'>
            <Link to='/Areport'>
              <div className='consultant-icon'><AiOutlineArrowLeft /></div>
            </Link>
            <div className='consultant-heading'>Report / Consultant Billing Report</div>
          </div>
          <div className='consultant-bill-contents'>
            <select className='consultant-bill-select'>
              <option className='opop'>Today</option>
              <option className='opop'>Last 7 Days</option>
              <option className='opop'>This Week</option>
              <option className='opop'>This Month</option>
              <option className='opop'>This Year</option>
              <option className='opop'>Last Week</option>
              <option className='opop'>Last Month</option>
              <option className='opop'>Between</option>
            </select>
            <select className='consultant-view-report'>
              <option className='opop-1'>
                View Report
              </option>
            </select>
            <button className="petty" onClick={exportToExcel}>
                <SiMicrosoftexcel style={{ color: 'green' }} className='nanaji' />
              </button>
          </div>
          <div>
            <div className='search-containerbreport'>
              <input className='search-barbreport' type='text' placeholder='Search' />
              <button className='search-btnbreport'><BiSearch /></button>
            </div>
            <table className='patient-table-sunil'>
              <thead className='th4t'>
                <tr className='trtr'>
                  <th className='consultant-table-head'>Doctor Name</th>
                  <th className='consultant-table-head'>Patient Number</th>
                  <th className='consultant-table-head'>Receipt No</th>
                  <th className='consultant-table-head'>Date</th>
                  <th className='consultant-table-head'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((consultant, index) => (
                  <tr key={index} className="consultantsome">
                    <td className='tdtd'>{consultant.doctorName}</td>
                    <td className='tdtd'>{consultant.patientNumber}</td>
                    <td className='tdtd'>{consultant.receiptNo}</td>
                    <td className='tdtd'>{consultant.date}</td>
                    <td className='tdtd'>{consultant.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
  )
}

export default ConsultantBilling;
