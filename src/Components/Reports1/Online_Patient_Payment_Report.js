import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import './Online_Patient_Payment_Report.css';
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

// Sample payment data
const paymentData = [
  {
    Patientname: 'John Doe',
    casenumber: '001',
    Recipitnumber: '12345',
    Date: '12-09-2023',
    Amount: '23000',
    Paymentsource: 'Credit Card',
    Paymentstatus: 'Paid',
  },
  {
    Patientname: 'Alice Smith',
    casenumber: '002',
    Recipitnumber: '12346',
    Date: '13-09-2023',
    Amount: '15000',
    Paymentsource: 'Cash',
    Paymentstatus: 'Paid',
  },
  {
    Patientname: 'Bob Johnson',
    casenumber: '003',
    Recipitnumber: '12347',
    Date: '14-09-2023',
    Amount: '18500',
    Paymentsource: 'Cheque',
    Paymentstatus: 'Paid',
  },
  {
    Patientname: 'Emma Wilson',
    casenumber: '004',
    Recipitnumber: '12348',
    Date: '15-09-2023',
    Amount: '27000',
    Paymentsource: 'Debit Card',
    Paymentstatus: 'Pending',
  },
  {
    Patientname: 'Michael Brown',
    casenumber: '005',
    Recipitnumber: '12349',
    Date: '16-09-2023',
    Amount: '19500',
    Paymentsource: 'Online Transfer',
    Paymentstatus: 'Paid',
  },
  {
    Patientname: 'Sophia Miller',
    casenumber: '006',
    Recipitnumber: '12350',
    Date: '17-09-2023',
    Amount: '30000',
    Paymentsource: 'Cash',
    Paymentstatus: 'Paid',
  },
  // You can add more data as needed
];

const itemsPerPage = 3;

function Online_Patient_Payment_Report() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currenttrain = paymentData.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= paymentData.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(paymentData.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontonline'>
        <div className='online-body'>
          <div className='onlinemain-head'>
            <div className='onlinemainhead-icon'>
              <Link to="/Areport">
                <AiOutlineArrowLeft />
              </Link>
            </div>
            <div className='onlinemain-heading'>Report / Online Patient Payment Report</div>
          </div>
          <div className='online-drop'>
            <select className='afd'>
              <option value="">Today</option>
              <option value="">last 7 days</option>
              <option value="">This week</option>
              <option value="">This month</option>
              <option value="">This year</option>
              <option value="">Last week</option>
              <option value="">Last month</option>
              <option value="">Between</option>
            </select>
            <label className='label-7777'>
              <input
                type="date"
                value=""
                className='dl'
              />
            </label>
            <label className='label-7777'>
              <input
                type="date"
                value=""
                className='ld'
              />
            </label>
            <button className='even'>View Report</button>
          </div>
          <div>
            <input type='search' placeholder='search' className='holder'></input>
          </div>
          <br></br>
          <div className='second'>
            <table className='tabledot'>
              <thead className='headdot'>
                <tr className='online-table-head'>
                  <th className='tt-head'>Patientname</th>
                  <th className='tt-head'>casenumber</th>
                  <th className='tt-head'>Recipitnumber</th>
                  <th className='tt-head'>Date</th>
                  <th className='tt-head'>Amount</th>
                  <th className='tt-head'>Paymentsource</th>
                  <th className='tt-head'>Paymentstatus</th>
                </tr>
              </thead>
              <tbody>
                {currenttrain.map((payment, index) => (
                  <tr key={index} className='online-payment-tabledata'>
                    <td className='td-tabledata'>{payment.Patientname}</td>
                    <td className='td-tabledata'>{payment.casenumber}</td>
                    <td className='td-tabledata'>{payment.Recipitnumber}</td>
                    <td className='td-tabledata'>{payment.Date}</td>
                    <td className='td-tabledata'>{payment.Amount}</td>
                    <td className='td-tabledata'>{payment.Paymentsource}</td>
                    <td className='td-tabledata'>{payment.Paymentstatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='chinna'>
            <button className='school'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='krishna'>{currentPage}</p>
            <button className='school'
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

export default Online_Patient_Payment_Report;
