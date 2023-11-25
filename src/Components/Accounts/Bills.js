import './Bill.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import React, { useState } from 'react';

function Bill() {
  // Dummy bill data
  const billData = [
    {
      billDate: '07-09-2023',
      billNumber: '001',
      patientName: 'John',
      billAmount: 200,
      status: 'Active',
    },
    {
      billDate: '07-09-2023',
      billNumber: '002',
      patientName: 'Vaneey',
      billAmount: 200,
      status: 'Active',
    },
    {
      billDate: '08-09-2023',
      billNumber: '003',
      patientName: 'Abhi',
      billAmount: 500,
      status: 'Active',
    },
    {
      billDate: '09-09-2023',
      billNumber: '004',
      patientName: 'Sai',
      billAmount: 100,
      status: 'Active',
    }
  ];
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentstock = billData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= billData.length; // Fixed the variable name here

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <div className="bill-Body">
          <div className='bill-head'>
            <div className='bill-icon'><Link to='/HomePage'><AiOutlineArrowLeft /></Link></div>
            <div className='bill-acc-1'>Accounts / Bills</div>
          </div>
          <div className='bill-selc'>
            <div><input type='date' className='bill-date-from'></input></div>
            <div className='bill-d-2'>to</div>
            <div><input type='date' className='bill-date-to'></input>
              &nbsp;
              <button className='bill-view-re'> View Receipt</button> &nbsp;
              <button className='bill-excel'>Export To Excel</button>
              &nbsp;&nbsp;
              <Link to="/addbills">
                <button className='bill-newpay'>Add New Payment</button></Link></div>
          </div>

          <div className='search-containerbills'>
            <input className='search-barbills' type='text' placeholder='Search' />
            <button className='search-btnbills'><BiSearch /></button>
          </div>

          <div className='bill-table'>
            <table className='bill-table-sunil'>
              <thead className='threadbills'>
                <tr className='trbills'>
                  <th className='thbills'>Bill Date</th>
                  <th lassName='thbills'>Bill Number</th>
                  <th lassName='thbills'>Patient Name</th>
                  <th lassName='thbills'>Bill Amount</th>
                  <th lassName='thbills'>Status</th>
                  <th lassName='thbills'>Action</th>
                </tr>
              </thead>
              {currentstock.map((bill, index) => (
                <tr key={index} className='trbills1'>
                  <td>{bill.billDate}</td>
                  <td>{bill.billNumber}</td>
                  <td>{bill.patientName}</td>
                  <td>${bill.billAmount}</td>
                  <td>{bill.status}</td>
                  <td>none</td>
                </tr>
              ))}
            </table>
          </div>
          <div className='bill-total'>Grand Total :<input type='text' /></div>
          <div className='Bill-pat'>
            <button className='Bill-22'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward/>
            </button>
            <p className='Bill-page'>{currentPage}</p>
            <button className='Bill-22'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bill;
