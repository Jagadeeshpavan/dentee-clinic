import React, { useState } from 'react';
import { LuSettings } from 'react-icons/lu';
import { AiOutlineArrowLeft,AiOutlineStepBackward, AiOutlineStepForward  } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './Deviceaccess.css';

function Deviceaccess() {
  const staticData = [
    { username: 'User1', deviceid: '192.168.1.1', devicetype: 'Mobile', isallowed: 'Yes', action: '' },
    { username: 'User2', deviceid: '192.168.1.2', devicetype: 'Desktop', isallowed: 'NO', action: '' },
    { username: 'User3', deviceid: '192.168.1.3', devicetype: 'Desktop', isallowed: 'NO', action: '' },
    { username: 'User4', deviceid: '192.168.1.4', devicetype: 'Desktop', isallowed: 'NO', action: '' },
    { username: 'User5', deviceid: '192.168.1.5', devicetype: 'Desktop', isallowed: 'NO', action: '' },
    { username: 'User6', deviceid: '192.168.1.6', devicetype: 'Desktop', isallowed: 'NO', action: '' },
    { username: 'User7', deviceid: '192.168.1.7', devicetype: 'Desktop', isallowed: 'NO', action: '' },
    // Add more rows as needed
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = staticData.slice(indexOfFirstItem, indexOfLastItem);

  const [searchQuery, setSearchQuery] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);

  const filteredData = staticData.filter((item) =>
    item.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRowClick = (index) => {
    console.log(`Clicked row at index ${index}`);
  };

  const handleEnableDisableClick = () => {
    setIsEnabled(!isEnabled);
    const message = isEnabled ? 'Disabled' : 'Enabled';
    alert(`Button ${message}`);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= staticData.length;

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontgop11'>
        <div className='patientdocument-headgop11'>
          <div className='patient-icongop11'>
          <Link to='/Administator'>  <AiOutlineArrowLeft /></Link>
          </div>
          <div className='patient-headinggop11'>Administrator/ Device Access</div>
        </div>
        <br />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className='search-containergop11'>
            <input
              className='search-bargop11'
              type='text'
              placeholder='Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='search-btngop11'>
              <BiSearch />
            </button>
          </div>
          <button
            className={`enable-disable-button-ipog-7 ${isEnabled ? 'enabled' : 'disabled'}`}
            onClick={handleEnableDisableClick}
          >
            {isEnabled ? 'Disable' : 'Enable'}
          </button>
        </div>
        <table className='table-gop11' style={{ width: '100%' }}>
          <thead>
            <tr className='table-gop11'>
              <th className="table-heading-gop11">Username</th>
              <th className="table-heading-gop11">Device ID</th>
              <th className="table-heading-gop11">Device Type</th>
              <th className="table-heading-gop11">Is Allowed</th>
              <th className="table-heading-gop11">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(index)}
                className="table-row-gop11"
              >
                <td>{item.username}</td>
                <td>{item.deviceid}</td>
                <td>{item.devicetype}</td>
                <td>{item.isallowed}</td>
                <td>{item.action}<LuSettings /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pat-die'>
          <button
            className='but-die'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-die'>{currentPage}</p>
          <button
            className='but-die'
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

export default Deviceaccess;
