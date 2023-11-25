import './Payment.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import React, { useState } from 'react';

function Payment() {
  // Dummy payment data
  const dummyData = [
    {
      receiptDate: '07-09-2023',
      receiptNumber: '001',
      patientName: 'John',
      treatmentPayment: 200,
      statusDescription: 'Active',
    },
    {
      receiptDate: '09-09-2023',
      receiptNumber: '002',
      patientName: 'Bob',
      treatmentPayment: 150,
      statusDescription: 'Active',
    },
    {
      receiptDate: '08-09-2023',
      receiptNumber: '003',
      patientName: 'Alice',
      treatmentPayment: 300,
      statusDescription: 'Inactive',
    },
    {
      receiptDate: '08-09-2023',
      receiptNumber: '004',
      patientName: 'Alice',
      treatmentPayment: 300,
      statusDescription: 'Inactive',
    },
    {
      receiptDate: '08-09-2023',
      receiptNumber: '005',
      patientName: 'Alice',
      treatmentPayment: 300,
      statusDescription: 'Inactive',
    }
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= dummyData.length;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <div className="pay-Body">
          <div className='pay-head'>
            <div className='pay-icon'><Link to='/HomePage'><AiOutlineArrowLeft /></Link></div>
            <div className='pay-acc-1'>Accounts / Payments</div>
          </div>
          <div className='pay-selc'>
            <div><input type='date' className='pay-date-from'></input></div>
            <div className='pay-d-2'>to</div>
            <div><input type='date' className='pay-date-to'></input></div>
            <button className='pay-view-re'> View Receipt</button>
            <button className='pay-excel'>Export To Excel</button>
            <Link to="/Addpayment"><button className='pay-newpay'>Add New Payment</button></Link>
          </div>

          <div className='search-containerpayment'>
            <input className='search-barpayment' type='text' placeholder='Search' />
            <button className='search-btnpayment'><BiSearch /></button>
          </div>

          <div>
            <table className='pay-table-nikhil'>
              <thead className='payment-thread'>
                <tr className='payment-tr'>
                  <th className='pay-table-head'>Receipt Date</th>
                  <th className='pay-table-head'>Receipt Number</th>
                  <th className='pay-table-head'>Patient Name</th>
                  <th className='pay-table-head'>Treatment Payment</th>
                  <th className='pay-table-head'>Status Description</th>
                  <th className='pay-table-head'>Action</th>
                </tr>
              </thead>
              {currentItems.map((payment, index) => (
                <tr key={index} className="pay-some-1">
                  <td>{payment.receiptDate}</td>
                  <td>{payment.receiptNumber}</td>
                  <td>{payment.patientName}</td>
                  <td>{payment.treatmentPayment}</td>
                  <td>{payment.statusDescription}</td>
                  <td>none</td>
                </tr>
              ))}
            </table>
          </div>
          <div className='pay-total'>
            Grand Total:
            <input type='text' disabled value={calculateTotal(currentItems)}/>
          </div>

          {/* Pagination */}
          <div className='pat-foot'>
          <button className='but-page-1'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
           <AiOutlineStepBackward/>
          </button>
          <p className='pat-bottle'>{currentPage}</p>
          <button className='but-page-1'
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


function calculateTotal(data) {
  return data.reduce((total, payment) => total + payment.treatmentPayment, 0);
}

export default Payment;
