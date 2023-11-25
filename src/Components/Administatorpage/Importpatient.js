import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Importpatient.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi"; 
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";

const Importpatient = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchText, setSearchText] = useState('');
  const [tableData, setTableData] = useState([
    {
      fileName: 'File 1',
      fileType: 'PDF',
      requestDate: '2023-09-08',
      uploadOnDentee: '2023-09-08',
      conformByUser: 'User 1',
      undoDone: 'No',
      cancelled: 'No',
    },
    {
      fileName: 'File 2',
      fileType: 'Word',
      requestDate: '2023-09-10',
      uploadOnDentee: '2023-09-10',
      conformByUser: 'User 2',
      undoDone: 'Yes',
      cancelled: 'No',
    },
    {
      fileName: 'File 3',
      fileType: 'Word',
      requestDate: '2023-09-10',
      uploadOnDentee: '2023-09-10',
      conformByUser: 'User 2',
      undoDone: 'Yes',
      cancelled: 'No',
    },
    {
      fileName: 'File 4',
      fileType: 'Word',
      requestDate: '2023-09-10',
      uploadOnDentee: '2023-09-10',
      conformByUser: 'User 2',
      undoDone: 'Yes',
      cancelled: 'No',
    },
    {
      fileName: 'File 5',
      fileType: 'Word',
      requestDate: '2023-09-10',
      uploadOnDentee: '2023-09-10',
      conformByUser: 'User 2',
      undoDone: 'Yes',
      cancelled: 'No',
    },
    {
      fileName: 'File 6',
      fileType: 'Word',
      requestDate: '2023-09-10',
      uploadOnDentee: '2023-09-10',
      conformByUser: 'User 2',
      undoDone: 'Yes',
      cancelled: 'No',
    },
    // Add more data as needed
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTableData = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleViewDetailsClick = () => {
    // Implement your logic for the "View Search Details" button click here
    // You can use the startDate, endDate, and searchText values
    // to perform your desired actions.
  };

  const handlePageChange = (pageNumber) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= tableData.length;

  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className="container-666">
      <div className='patientdocument-head-666'>
        <div className='patient-icon-666'>
          <Link to="/Administator"><AiOutlineArrowLeft/></Link>
        </div>
        <div className='patient-heading-666'>Manage Import Data Request</div>
      </div>
      <br/>
      <div className="top-left-inputs-666">
        <div className="input-group-666">
          <input
            className='date-adjustments06'
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <span>TO</span>
        <div className="input-group-666">
          <input
            type="date"
            className='date-adjustments06'
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="input-group-666">
          <button onClick={handleViewDetailsClick} className="button-666">
            View Search Details
          </button>
        </div>
      </div>
      <div className="search-bar567">
        <input
          className='inut789'
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <div className='search-icon-65'><HiOutlineSearch/></div>
        <div className="action-buttons-left-666">
          <Link to='/Importpatientpage'><button className="action-buttons-666">import patient</button></Link>
        </div>
      </div>
      <table className="data-table-666">
      <thead>
  <tr className='data-table-666'> {/* Correct class name */}
    <th>File Name</th>
    <th>File Type</th>
    <th>Request Date</th>
    <th>Upload on Dentee</th>
    <th>Conformed by User</th>
    <th>Undo Done</th>
    <th>Cancelled</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  {currentTableData.map((item, index) => (
    <tr key={index}>
      <td>{item.fileName}</td>
      <td>{item.fileType}</td>
      <td>{item.requestDate}</td>
      <td>{item.uploadOnDentee}</td>
      <td>{item.conformByUser}</td>
      <td>{item.undoDone}</td>
      <td>{item.cancelled}</td>
      <td> {/* Action column content */}
        {/* Add action buttons or links here */}
      </td>
    </tr>
  ))}
</tbody>

      </table>
      <div className="pat-ip">
        <button
          className="but-ip"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isFirstPage}
        >
          <AiOutlineStepBackward />
        </button>
        <p className="pat-bot-ip">{currentPage}</p>
        <button
          className="but-ip"
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

export default Importpatient;
