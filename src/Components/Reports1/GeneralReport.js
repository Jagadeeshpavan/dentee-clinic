import React, { useState } from 'react'; // Import useState
import { AiOutlineArrowLeft, AiOutlineStepForward, AiOutlineStepBackward } from 'react-icons/ai';
import { BsSearch, BsFileEarmarkExcelFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import './GeneralReport.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import * as XLSX from 'xlsx';
import { Link } from "react-router-dom";

const Generalreport = () => {
  const data = [
    ["Patient Name", "Mobile Number", "Registration Date", "Address", "Gender", "Email Address"],
    ["Karthik", "9390358812", "23/12/2023", "4-87,Tirupati", "M", "karthik@gmail.com"],
    ["John Doe", "1234567890", "24/12/2023", "123 Main St", "M", "johndoe@gmail.com"],
    ["Jane Smith", "9876543210", "25/12/2023", "456 Elm St", "F", "janesmith@gmail.com"],
    ["Alice Johnson", "5555555555", "26/12/2023", "789 Oak St", "F", "alicejohnson@gmail.com"],
    ["Bob Brown", "7777777777", "27/12/2023", "101 Pine St", "M", "bobbrown@gmail.com"],
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
  
  const exportExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "GeneralReport");
    XLSX.writeFile(wb, "GeneralReport.xlsx");
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontgeneral'>
        <div className='GeneralReportBody'>
          <div className='General'>
            <div className="Row">
              <div className='Report'>
                <Link to="/Areport"><AiOutlineArrowLeft className='icon-8' /></Link>
              </div>
              <div className="GeneralReport">
                Report / General Report
              </div>
            </div><br></br>
          </div>
          <div className='Row1'>
            <div className='Selecttype'>
              <select className="Dropdown" id="Dropdown" name="Selecttype">
                <option className='option-doe'>Select Type</option>
                <option className='option-doe' value="BirthDay Report">BirthDay Report</option>
              </select>
            </div>
            <div className='Date'>
              <select className="Today" id="Today" name="Today">
                <option className='option-doe' value="Today">Today</option>
                <option className='option-doe' value="">Last 7 Days</option>
                <option className='option-doe' value="">This Week</option>
                <option className='option-doe' value="">This Month</option>
                <option className='option-doe' value="">This Year</option>
                <option className='option-doe' value="">Last Week</option>
                <option className='option-doe' value="">Last Month</option>
                <option className='option-doe' value="">Between</option>
              </select>
            </div>
            <form className='formgene'>
              <input className='Search' type="text" placeholder='Search' />
            </form>
            <div className='Searchicon'>
              <button className='Searchicon1'><BsSearch className='icon' /></button>
            </div>
            <div className='Exel'>
              <button className='excel' type='submit' onClick={exportExcel}><BsFileEarmarkExcelFill className="Icon2" /></button>
            </div>
          </div><br></br>
          <div className='Talke'>
            <table className='daily-table'>
              <thead className='daily-thead'>
                <tr className='daily-headrow'>
                  {data[0].map((header, index) => (
                    <th key={index} className='Th'>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className='daily-tablebody'>
                {currentData.map((row, rowIndex) => (
                  <tr key={rowIndex} className='daily-tablerow'>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className='Th'>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='kasu'>
            <button className='rama'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='dora'>{currentPage}</p>
            <button className='rama'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Generalreport;
