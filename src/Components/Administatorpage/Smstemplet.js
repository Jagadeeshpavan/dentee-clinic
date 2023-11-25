import React, { useState } from 'react';
import './Smstemplet.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function YourComponent() {
  // Dummy data for SMS templates
  const initialTableData = [
    { title: 'Template 1', message: 'This is the first SMS template' },
    { title: 'Template 2', message: 'This is the second SMS template' },
    { title: 'Template 3', message: 'This is the third SMS template' },
    { title: 'Template 4', message: 'This is the first SMS template' },
    { title: 'Template 5', message: 'This is the second SMS template' },
    { title: 'Template 6', message: 'This is the third SMS template' },
    // Add more templates as needed
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [tableData, setTableData] = useState(initialTableData);
  const [editIndex, setEditIndex] = useState(null); // To track the index of the row being edited

  // Pagination settings
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTableData = tableData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= tableData.length;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditIndex(null); // Clear the edit index when closing the modal
  };

  const handleSave = () => {
    if (title && message) {
      if (editIndex !== null) {
        // If an edit is in progress, update the existing data
        const updatedData = [...tableData];
        updatedData[editIndex] = { title, message };
        setTableData(updatedData);
        setEditIndex(null); // Clear edit mode
      } else {
        // Otherwise, add new data
        const newData = { title, message };
        setTableData([...tableData, newData]);
      }
      closeModal();
      setTitle('');
      setMessage('');
    }
  };

  const handleEdit = (index) => {
    // Populate the popup fields with the data of the selected row for editing
    setTitle(tableData[index].title);
    setMessage(tableData[index].message);
    setEditIndex(index); // Set edit mode
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    // Remove the selected row from the tableData array
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincont-555'>
        <div className="container-555">
          <div className='patientdocument-head-555'>
            <div className='patient-icon-555'>
              <Link to="/Administator">
                <AiOutlineArrowLeft />
              </Link>
            </div>
            <div className='patient-heading-555'>Message/Manage Sms Template</div>
          </div>
          <br />
          <div className="header-555">
            <div className='search-container-555'>
              <input className='search-bar-555' type='text' placeholder='Search' />
              <button className='search-btn-555'><BiSearch /></button>
            </div>
            <button className="sms-button-555" onClick={openModal}>
              Add SMS
            </button>
          </div>
          <table className="table-555">
            <thead className='threadsmstemplete'>
              <tr className='trsmstemplete'>
                <th className="header-title">Title</th>
                <th className="header-title">Message</th>
                <th className="header-title">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map((data, index) => (
                <tr key={index}>
                  <td className='tds'>{data.title}</td>
                  <td className='tds'>{data.message}</td>
                  <td className='tds'>
                    <button className='smsbtn' onClick={() => handleEdit(index)}>Edit</button>
                &nbsp;
                    <button className='smsbtn' onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='pat-sms'>
            <button
              className='butp-sms'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='pat-but-sms'>{currentPage}</p>
            <button
              className='butp-sms'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-555">
          <div className="modal-content-555">
            <span className="close-555" onClick={closeModal}>
              &times;
            </span>
            <h2 className='modalh2-555'>{editIndex !== null ? 'Edit Template' : 'Add Template'}</h2>
            <div className="modal-input-555">
              <label className='modal-label-555' htmlFor="title">Title:</label>
              <input
                className='modal-type-555'
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="modal-input-555">
              <label className='modal-label-555' htmlFor="message">Message:</label>
              <textarea
                className='modal-area-555'
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="modal-save-555" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default YourComponent;
