import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { FaSearch } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { FcBusinessman } from 'react-icons/fc';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft } from "react-icons/ai";
import './Bankdetails.css';

function Bankdetails() {
  const location = useLocation();
  const { username } = location.state || { username: 'Guest' };
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    //console.log('Search Query:', searchQuery);
  };

  const bankDepositData = [
    {
      id: 1,
      date: '2023-09-10',
      bankName: 'Sample Bank',
      branch: 'Main Branch',
      accountName: "John Doe's Account",
      transactionId: '1234567890',
      amount: '$1000.00',
    },
    {
      id: 2,
      date: '2023-09-10',
      bankName: 'Sample Bank',
      branch: 'Main Branch',
      accountName: "John Doe's Account",
      transactionId: '1234567890',
      amount: '$1000.00',
    },
    {
      id: 3,
      date: '2023-09-10',
      bankName: 'Sample Bank',
      branch: 'Main Branch',
      accountName: "John Doe's Account",
      transactionId: '1234567890',
      amount: '$1000.00',
    },
    {
      id: 4,
      date: '2023-09-10',
      bankName: 'Sample Bank',
      branch: 'Main Branch',
      accountName: "John Doe's Account",
      transactionId: '1234567890',
      amount: '$1000.00',
    },
    {
      id: 5,
      date: '2023-09-10',
      bankName: 'Sample Bank',
      branch: 'Main Branch',
      accountName: "John Doe's Account",
      transactionId: '1234567890',
      amount: '$1000.00',
    },
    {
      id: 6,
      date: '2023-09-10',
      bankName: 'Sample Bank',
      branch: 'Main Branch',
      accountName: "John Doe's Account",
      transactionId: '1234567890',
      amount: '$1000.00',
    },
    
  ];
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bankDepositData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= bankDepositData.length;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="wrapperwa">
        <div id="content-wrapper" className="main-content">
          <div id="content">
            <div className='main-headwra'>
              <div className='mainhead-iconwra'> <Link to='/Homepage'><AiOutlineArrowLeft /></Link></div>
              <div className='main-headingwra'>Accounts/ Bank Deposit</div>
            </div>
            <br></br>
            <div className="dashboardrowdate">
              <input
                type="date"
                className="inputField"
                placeholder="Search Patient"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <p className='tototo'>TO</p>&nbsp;&nbsp;
              <input
                type="date"
                className="inputField"
                placeholder="Search Patient"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="Bank">
              <div className='search-containerbank'>
                <input className='search-barbank' type='text' placeholder='Search' />
                <button className='search-btnbank'><BiSearch /></button>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/addbankdeposit">
                <button className="actionButtonvaa1">Add Bank Deposit</button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="actionButtonva">Delete Bank Deposit</button>
            </div>

            <table className="table11">
              <thead className="tableHeader">
                <tr className='trtablebank'>
                  <th className="tableColumn">Select</th>
                  <th className="tableColumn">Date</th>
                  <th className="tableColumn">Bank Name</th>
                  <th className="tableColumn">Branch</th>
                  <th className="tableColumn">Account Name</th>
                  <th className="tableColumn">Transaction Id</th>
                  <th className="tableColumn">Amount</th>
                </tr>
              </thead>
              <tbody>
              {currentItems.map((entry) => (
  <tr key={entry.id}>
    <td className="tableColumn">{entry.id}</td>
    <td className="tableColumn">{entry.date}</td>
    <td className="tableColumn">{entry.bankName}</td>
    <td className="tableColumn">{entry.branch}</td>
    <td className="tableColumn">{entry.accountName}</td>
    <td className="tableColumn">{entry.transactionId}</td>
    <td className="tableColumn">{entry.amount}</td>
  </tr>
))}

              </tbody>
            </table>
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
      </div>
    </>
  );
}

export default Bankdetails;
