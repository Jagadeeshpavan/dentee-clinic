import React, { useState } from 'react';
import './Customerview.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function Customerview() {
  // Dummy data for pagination
  const dummyPatients = [
    {
      customerview: 'Template1',
      category: '5',
      action: 'Description of Template 1',
    },
    {
      customerview: 'Template2',
      category: '5',
      action: 'Description of Template 2',
    },
    {
      customerview: 'Template3',
      category: '5',
      action: 'Description of Template 1',
    },
    {
      customerview: 'Template4',
      category: '5',
      action: 'Description of Template 2',
    },
    {
      customerview: 'Template5',
      category: '5',
      action: 'Description of Template 1',
    },
    {
      customerview: 'Template6',
      category: '5',
      action: 'Description of Template 2',
    },
    // Add more dummy data here
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPatients = dummyPatients.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= dummyPatients.length;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="Customerviewmain">
        <div className='main-head-customer'>
          <div className='mainhead-icon-customer'><Link to='/Administator'><AiOutlineArrowLeft /></Link></div>
          <div className='main-heading-customer'>Report / Patient Documents</div>
        </div>

        <div className='Customer-flow-56'>
          <div className='search-container-customer'>
            <input className='search-bar-customer' type='text' placeholder='Search' />
            <button className='search-btn-customer'><BiSearch /></button>
            <Link to="/Customerviewpage">
              <button className="add-button455">Add New Customerview</button>
            </Link>
          </div>
        </div>

        <table className="Customer-table455">
          <thead className='customer-thread'>
            <tr className='customer-tr'>
              <th className='customer-th'>Customerview</th>
              <th className='customer-th'>Category</th>
              <th className='customer-th'>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentPatients.map((patient, index) => (
              <tr key={index} className='customer-tr'>
                <td className='customer-td'>{patient.customerview}</td>
                <td className='customer-td'>{patient.category}</td>
                <td className='customer-td'>{patient.action}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='pat-cv'>
          <button className='but-cv'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-cv'>{currentPage}</p>
          <button className='but-cv'
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

export default Customerview;
