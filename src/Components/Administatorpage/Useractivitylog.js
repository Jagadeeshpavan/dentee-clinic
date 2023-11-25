import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import './Useractivitylog.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [additionalDropdown, setAdditionalDropdown] = useState('');
  const [searchText, setSearchText] = useState('');
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, [selectedOption, startDate, endDate, additionalDropdown, searchText, currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5002/useractivitylogs', {
        params: {
          selectedOption,
          startDate,
          endDate,
          additionalDropdown,
          searchText,
          currentPage,
          itemsPerPage,
        },
      });
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterData = (data) => {
    return data.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.createdOn.toLowerCase().includes(searchText.toLowerCase()) ||
        item.usernamePatientName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.eventTypeName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.eventDetails.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  const filteredTableData = filterData(tableData);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAdditionalDropdownChange = (event) => {
    setAdditionalDropdown(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = (currentPage * itemsPerPage) >= filteredTableData.length;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincont-777'>
        <div className='main-head-777'>
          <div className='mainhead-icon-777'>
            <Link to="/Administator">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className='main-heading-777'>Administator / User Activity Log</div>
        </div>
        <br></br>
        <div className='mainbox-777'>
          <div className='search-container-777'>
            <input className='search-bar-777' type='text' placeholder='Search' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button className='search-btn-777'><BiSearch /></button>
            <div><button className='button7772'>View Report</button></div>
          </div>

          <div className="tables-container-777">
            <table className="table777">
              <thead className='threadusera'>
                <tr className='trusera'>
                  <th className='th-heading-777'>Name</th>
                  <th className='th-heading-777'>Created On</th>
                  <th className='th-heading-777'>Username/Patient Name</th>
                  <th className='th-heading-777'>Event Type Name</th>
                  <th className='th-heading-777'>Event Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredTableData.map((item, index) => (
                  <tr key={index}>
                    <td className="td-777">{item.name}</td>
                    <td className="td-777">{item.createdOn}</td>
                    <td className="td-777">{item.usernamePatientName}</td>
                    <td className="td-777">{item.eventTypeName}</td>
                    <td className="td-777">{item.eventDetails}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='pat-ua'>
            <button className='but-ua' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
              <AiOutlineStepBackward />
            </button>
            <p className='pat-b0t-ua'>{currentPage}</p>
            <button className='but-ua' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
