import React, { useState } from 'react';
import './Pettycash.css';
import { AiFillPrinter, AiOutlineFilePdf } from "react-icons/ai";
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { BsFileEarmarkExcel } from "react-icons/bs";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';

const Pettycash = () => {
  const [pettyCashData, setPettyCashData] = useState([
    {
      id: 1,
      date: '2023-10-19',
      voucherType: 'Sample Voucher 1',
      receipt: 'Sample Receipt 1',
      payment: 'Sample Payment 1',
      numberOfEntries: 5,
      narration: 'Sample Narration 1',
    },
    {
      id: 2,
      date: '2023-10-22',
      voucherType: 'Sample Voucher 2',
      receipt: 'Sample Receipt 2',
      payment: 'Sample Payment 2',
      numberOfEntries: 3,
      narration: 'Sample Narration 2',
    },
    {
      id: 3,
      date: '2023-10-23',
      voucherType: 'Sample Voucher 3',
      receipt: 'Sample Receipt 3',
      payment: 'Sample Payment 3',
      numberOfEntries: 3,
      narration: 'Sample Narration 3',
    },
    {
      id: 4,
      date: '2023-10-24',
      voucherType: 'Sample Voucher 4',
      receipt: 'Sample Receipt 4',
      payment: 'Sample Payment 4',
      numberOfEntries: 4,
      narration: 'Sample Narration 4',
    },
    {
      id: 5,
      date: '2023-10-25',
      voucherType: 'Sample Voucher 5',
      receipt: 'Sample Receipt 5',
      payment: 'Sample Payment 5',
      numberOfEntries: 5,
      narration: 'Sample Narration 5',
    },
  ]);

  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pettyCashData.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= pettyCashData.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(pettyCashData.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontpetty'>
        <div className='petty-head'>
          <div className='petty-icon'> <Link to='/HomePage'><AiOutlineArrowLeft /></Link></div>
          <div className='petty-acc-1'>Accounts / Petty Cash</div>
        </div>

        <div className='petty-selc'>
          <div><input type='date' className='petty-date-from'></input></div>
          <div className='petty-d-2'>to</div>
          <div><input type='date' className='petty-date-to'></input></div>
          <input type='number' className='petty-Voacher' placeholder='voucher Type'></input>
          <input className='petty-search' placeholder='search'></input>
          &nbsp;
          <select onChange={(e) => (window.location.href = e.target.value)} className='view-select'>
            <option>view data</option>
            <option value="/addvoucher">Add new voucher</option>
            <option value="/deletevoucher">Delete voucher</option>
          </select>
          <button className='petty-print'><AiFillPrinter style={{ color: 'blue', fontSize: '25px' }} /></button>
          <button className='petty-pdf'><AiOutlineFilePdf style={{ color: 'red', fontSize: '25px' }} /></button>
          <button className='petty-excel'><BsFileEarmarkExcel style={{ color: 'green', fontSize: '25px' }} /></button>
        </div>

        <div className='pe8'>
          <div className='pe9'>Opening Balance: 0</div>
          <div className='pe10'>Closing Balance: 0</div>
        </div>

        <div>
          <table className='petty-table-tnx'>
            <thead className='threadpetty'>
              <tr className='trpetty'>
                <th className='petty4'>Select</th>
                <th className='petty4'>Date</th>
                <th className='petty4'>Voucher Type</th>
                <th className='petty4'>Receipt</th>
                <th className='petty4'>Payment</th>
                <th className='petty4'>No. of Entries</th>
                <th className='petty4'>Narration</th>
                <th className='petty4'>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td className='petty5'>{item.id}</td>
                  <td className='petty5'>{item.date}</td>
                  <td className='petty5'>{item.voucherType}</td>
                  <td className='petty5'>{item.receipt}</td>
                  <td className='petty5'>{item.payment}</td>
                  <td className='petty5'>{item.numberOfEntries}</td>
                  <td className='petty5'>{item.narration}</td>
                  <td className='petty5'>Action</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='pat-foot'>
          <button
            className='but-page-1'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bottle'>{currentPage}</p>
          <button
            className='but-page-1'
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

export default Pettycash;
