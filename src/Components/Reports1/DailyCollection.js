import React, { useState } from 'react';
import './DailyCollection.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineCaretRight, AiOutlineStepForward } from 'react-icons/ai';
import { FaFilter } from 'react-icons/fa';
import { GrRefresh } from 'react-icons/gr';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const DailyCollection = () => {
  const data = [
    {
      treatmentDate: '11/09/23',
      name: 'Suresh',
      modeOfPayment: 'Online',
      treatmentPayment: 10000,
      receiptName: 'Receipt 1',
    },
    {
      treatmentDate: '12/09/23',
      name: 'Harish',
      modeOfPayment: 'Online',
      treatmentPayment: 20000,
      receiptName: 'Receipt 2',
    },
    {
      treatmentDate: '13/09/23',
      name: 'Priya',
      modeOfPayment: 'Cash',
      treatmentPayment: 15000,
      receiptName: 'Receipt 3',
    },
    {
      treatmentDate: '14/09/23',
      name: 'John',
      modeOfPayment: 'Credit Card',
      treatmentPayment: 18000,
      receiptName: 'Receipt 4',
    },
    {
      treatmentDate: '15/09/23',
      name: 'Alice',
      modeOfPayment: 'Online',
      treatmentPayment: 22000,
      receiptName: 'Receipt 5',
    },
    {
      treatmentDate: '16/09/23',
      name: 'David',
      modeOfPayment: 'Cash',
      treatmentPayment: 12000,
      receiptName: 'Receipt 6',
    },
  ];
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currenttrain = data.slice(indexOfFirstItem, indexOfLastItem);

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
      <div className="maincontdaily">
        <div className="daily-head">
          <Link to="/Areport">
            <div className="daily-icon">
              <AiOutlineArrowLeft />
            </div>
          </Link>
          <div className="daily-acc-1">Report / Daily Collection</div>
          {/* <button className="daily-buttonmenu">
            <BsThreeDots />
          </button> */}
        </div>
        <div className="daily-total">
          <select className="daily-select">
            <option className="option-t">Daily</option>
            <option className="option-t">Monthly</option>
            <option className="option-t">Yearly</option>
          </select>
          <input type="date" className="dailydate-1" />
          <div className="daily-to">to</div>
          <input type="date" className="dailydate-2" />
          <button className="daily-button">
            <FaFilter />
          </button>
        </div>
        <div>
          <table className="daily-table">
            <thead className="daily-thead">
              <tr className="daily-headrow">
                <th className="th1">Treatment Date</th>
                <th className="th1">Name</th>
                <th className="th1">Mode of Payment</th>
                <th className="th1">Treatment Payment</th>
                <th className="th1">Receipt Name</th>
              </tr>
            </thead>
            <tbody className="daily-tablebody">
              {currenttrain.map((item, index) => (
                <tr key={index} className="daily-tablerow">
                  <td className="td-tablebody">{item.treatmentDate}</td>
                  <td className="td-tablebody">{item.name}</td>
                  <td className="td-tablebody">{item.modeOfPayment}</td>
                  <td className="td-tablebody">{item.treatmentPayment}</td>
                  <td className="td-tablebody">{item.receiptName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='Venky-11'>
          <button className='loyola'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='Ram-chadara'>{currentPage}</p>
          <button className='loyola'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default DailyCollection;
