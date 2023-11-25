import React, { useState } from 'react';
import './Revenue.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineCaretRight, AiOutlineStepForward } from 'react-icons/ai';
import { SlOptions } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const Revenue = () => {
  const dummyData = [
    {
      voucherType: 'Income',
      voucherDate: '2023-09-12',
      voucherNo: '013',
      refNo: '001',
      patientName: 'John',
      costCenter: 'None',
      debitLedger: 'None',
      debitAmount: 'None',
      creditLedger: 'None',
      creditAmount: 'None',
      narration: 'None',
    },
    {
      voucherType: 'Expense',
      voucherDate: '2023-09-14',
      voucherNo: '014',
      refNo: '002',
      patientName: 'Johnny',
      costCenter: 'None',
      debitLedger: 'None',
      debitAmount: 'None',
      creditLedger: 'None',
      creditAmount: 'None',
      narration: 'None',
    }, {
      voucherType: 'Income',
      voucherDate: '2023-09-15',
      voucherNo: '015',
      refNo: '003',
      patientName: 'Alice',
      costCenter: 'None',
      debitLedger: 'None',
      debitAmount: 'None',
      creditLedger: 'None',
      creditAmount: 'None',
      narration: 'None',
    },
    {
      voucherType: 'Income',
      voucherDate: '2023-09-16',
      voucherNo: '016',
      refNo: '004',
      patientName: 'Michael',
      costCenter: 'None',
      debitLedger: 'None',
      debitAmount: 'None',
      creditLedger: 'None',
      creditAmount: 'None',
      narration: 'None',
    },
    {
      voucherType: 'Expense',
      voucherDate: '2023-09-17',
      voucherNo: '017',
      refNo: '005',
      patientName: 'Olivia',
      costCenter: 'None',
      debitLedger: 'None',
      debitAmount: 'None',
      creditLedger: 'None',
      creditAmount: 'None',
      narration: 'None',
    },
    {
      voucherType: 'Income',
      voucherDate: '2023-09-18',
      voucherNo: '018',
      refNo: '006',
      patientName: 'William',
      costCenter: 'None',
      debitLedger: 'None',
      debitAmount: 'None',
      creditLedger: 'None',
      creditAmount: 'None',
      narration: 'None',
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentfan = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= dummyData.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(dummyData.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincontrevenue">
        <div className="revenuebody">
          <div className="revenuemain-head">
            <div className="revenuemainhead-icon">
              <Link to="/Areport">
                <AiOutlineArrowLeft />
              </Link>
            </div>
            <div className="revenuemain-heading">Report / Revenue Analysis</div>
            <div className="more-options">
              <SlOptions className="options-icon" />
            </div>
          </div>
          <div className="revenue-contents">
            <div className="revenue-top-contents">
              <select className="revenue-day-dropdown1">
                <option className="option-own1">Today</option>
                <option className="option-own1">Last 7 Days</option>
                <option className="option-own1">This Week</option>
                <option className="option-own1">This Month</option>
                <option className="option-own1">This Year</option>
                <option className="option-own1">Last Week</option>
                <option className="option-own1">Last Month</option>
                <option className="option-own1">Between</option>
              </select>
              <select className="revenue-payment-dropdown1">
                <option className="option-own1">View Payment</option>
                <option className="option-own1">View Bill</option>
                <option className="option-own1">View Payment</option>
              </select>
            </div>
            <div className="revnue-table-body">
              <table className="revenue-table_sunil">
                <thead className="thead-9999">
                  <tr className="revenue-table-header">
                    <th className="th-ade">Voucher Type</th>
                    <th className="th-ade">Voucher Date</th>
                    <th className="th-ade">Voucher No</th>
                    <th className="th-ade">Ref. No</th>
                    <th className="th-ade">Patient Name</th>
                    <th className="th-ade">Cost Center</th>
                    <th className="th-ade">Debit Ledger</th>
                    <th className="th-ade">Debit Amount</th>
                    <th className="th-ade">Credit Ledger</th>
                    <th className="th-ade">Credit Amount</th>
                    <th className="th-ade">Narration</th>
                  </tr>
                </thead>
                <tbody>
                  {currentfan.map((item, index) => (
                    <tr key={index} className="revenue-table-data">
                      <td className="td-ue">{item.voucherType}</td>
                      <td className="td-ue">{item.voucherDate}</td>
                      <td className="td-ue">{item.voucherNo}</td>
                      <td className="td-ue">{item.refNo}</td>
                      <td className="td-ue">{item.patientName}</td>
                      <td className="td-ue">{item.costCenter}</td>
                      <td className="td-ue">{item.debitLedger}</td>
                      <td className="td-ue">{item.debitAmount}</td>
                      <td className="td-ue">{item.creditLedger}</td>
                      <td className="td-ue">{item.creditAmount}</td>
                      <td className="td-ue">{item.narration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='kumari'>
              <button className='Kumari-11'
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={isFirstPage}
              >
                <AiOutlineStepBackward />
              </button>
              <p className='Ram'>{currentPage}</p>
              <button className='Kumari-11'
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={isLastPage}
              >
                <AiOutlineStepForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Revenue;
