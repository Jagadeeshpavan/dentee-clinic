import React, { useState } from 'react';
import './Emailpage.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const PromotionalEmailReport = () => {
  // Dummy data for promotional email reports
  const dummyReports = [
    {
      sentOn: '2023-09-10',
      deliveryOn: '2023-09-11',
      subject: 'Sample Email',
      emailCount: 100,
      isAttachment: 'No',
      attachmentCount: 0,
      createdBy: 'John Doe',
    },
    {
      sentOn: '2023-09-10',
      deliveryOn: '2023-09-11',
      subject: 'Sample Email',
      emailCount: 100,
      isAttachment: 'No',
      attachmentCount: 0,
      createdBy: 'John Doe',
    },
    {
      sentOn: '2023-09-10',
      deliveryOn: '2023-09-11',
      subject: 'Sample Email',
      emailCount: 100,
      isAttachment: 'No',
      attachmentCount: 0,
      createdBy: 'John Doe',
    },
    {
      sentOn: '2023-09-10',
      deliveryOn: '2023-09-11',
      subject: 'Sample Email',
      emailCount: 100,
      isAttachment: 'No',
      attachmentCount: 0,
      createdBy: 'John Doe',
    },
    {
      sentOn: '2023-09-10',
      deliveryOn: '2023-09-11',
      subject: 'Sample Email',
      emailCount: 100,
      isAttachment: 'No',
      attachmentCount: 0,
      createdBy: 'John Doe',
    },
    {
      sentOn: '2023-09-10',
      deliveryOn: '2023-09-11',
      subject: 'Sample Email',
      emailCount: 100,
      isAttachment: 'No',
      attachmentCount: 0,
      createdBy: 'John Doe',
    },
    // Your dummy report objects here
  ];

  // Pagination settings
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentReports = dummyReports.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= dummyReports.length;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincont333">
        <div className="promotional-email-report-333">
          <div className="patientdocument-head-333">
            <div className="patient-icon-333">
              <Link to="/Email">
                <AiOutlineArrowLeft />
              </Link>
            </div>
            <div className="patient-heading-333">Promotional Email Report</div>
          </div>

          <div className="search-container-333">
            <input className="search-bar-333" type="text" placeholder="Search" />
            <button className="search-btn-333">
              <BiSearch />
            </button>
          </div>
          
          <br></br>
          <table className="email-table-333">
            <thead>
              <tr>
                <th>Sent On</th>
                <th>Delivery On</th>
                <th>Subject</th>
                <th>Email Count</th>
                <th>Is Attachment</th>
                <th>Attachment Count</th>
                <th>Created By</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentReports.map((report, index) => (
                <tr key={index}>
                  <td>{report.sentOn}</td>
                  <td>{report.deliveryOn}</td>
                  <td>{report.subject}</td>
                  <td>{report.emailCount}</td>
                  <td>{report.isAttachment}</td>
                  <td>{report.attachmentCount}</td>
                  <td>{report.createdBy}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className='pat-mail'>
            <button
              className='but-mail'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='pat-mali'>{currentPage}</p>
            <button
              className='but-mail'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionalEmailReport;
