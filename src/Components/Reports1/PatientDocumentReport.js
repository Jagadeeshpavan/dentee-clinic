import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiFillStepBackward, AiFillStepForward, IoCaretBackOutline, AiOutlineCaretRight, IoMdArrowDropdown } from 'react-icons/ai';
import { BiSearch } from "react-icons/bi";
import './PatientDocumentReport.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';

const PatientDocumentReport = () => {
  const data = [
    ["Patient Name", "Mobile Number", "File Name", "Description", "Virtual File Path", "Created On"],
    ["John", "8889991234", "013", "Admitted", "Path", "12/09/2023"],
    ["Alice", "7778889999", "002", "Test Report", "Report Path", "11/09/2023"],
    ["Bob", "5556667777", "005", "Prescription", "Prescription Path", "10/09/2023"],
    ["Jane", "1234567890", "009", "Medical History", "History Path", "09/09/2023"],
    ["Ella", "9876543210", "007", "Lab Results", "Results Path", "08/09/2023"],
    ["David", "1112223333", "012", "Scan Report", "Scan Path", "07/09/2023"],
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

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
      <div className='mainconttotal'>
        <div className='Totalbody'>
          <div className='main-headpdocument'>
            <div className='mainhead-iconpdocument'>
              <Link to='/Areport'><AiOutlineArrowLeft /></Link>
            </div>
            <div className='main-headingpdocument'>Report / Patient Documents</div>
          </div>
          <div className='patient-contents'>
            <select className='patient-select1'>
              <option className='option-a1'>All</option>
              <option className='option-a1'>Testimonials</option>
              <option className='option-a1'>Scanned Image</option>
              <option className='option-a1'>Patient Report</option>
              <option className='option-a1'>Unassign</option>
            </select>

            <select className='patient-select2'>
              <option className='option-a1'>Today</option>
              <option className='option-a1'>Last 7 Days</option>
              <option className='option-a1'>This Week</option>
              <option className='option-a1'>This Month</option>
              <option className='option-a1'>This Year</option>
              <option className='option-a1'>Last Week</option>
              <option className='option-a1'>Last Month</option>
              <option className='option-a1'>Between</option>
            </select>

            <button className='patient-view-btn'>View Report</button>
          </div>
          <div className='patient-search-container'>
            <input className='patient-search-bar' type='text' placeholder='Search' />
            <button className='patient-search-btn'><BiSearch /></button>
          </div>
        </div>
        <div>
          <table className='patient-table-sunil'>
            <thead className='head-ue'>
              <tr className='tr-ue'>
                {data[0].map((header, index) => (
                  <th key={index} className='patient-table-head'>{header}</th>
                ))}
              </tr>
            </thead>
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex} className="patientsome">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className='ttd'>{cell}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className='raka'>
          <button className='sati'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiFillStepBackward />
          </button>
          <p className='bapu'>{currentPage}</p>
          <button className='sati'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiFillStepForward />
          </button>
        </div>
      </div>
    </>
  )
}

export default PatientDocumentReport;
