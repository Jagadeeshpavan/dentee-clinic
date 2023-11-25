import React, { useState } from 'react';
import './Managereferences.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function ManageReferences() {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [description, setDescription] = useState('');

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    // Clear form fields when closing the popup
    setName('');
    setEmail('');
    setMobileNum('');
    setDescription('');
  };

  const saveReference = () => {
    // Handle saving reference data here (e.g., send to an API)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNum);
    console.log('Description:', description);
    closePopup();
  };

  // Dummy data for pagination
  const dummyPatients = [
    {
      name: 'Dentee',
      mobileNum: '1234567890',
      email: 'ffgg@gmail.com',
      description: 'drhjkjklk',
    },
    {
      name: 'Dentee1',
      mobileNum: '1234567890',
      email: 'ffgg@gmail.com',
      description: 'drhjkjklk',
    },
    {
      name: 'Dentee2',
      mobileNum: '1234567890',
      email: 'ffgg@gmail.com',
      description: 'drhjkjklk',
    },
    {
      name: 'Dentee3',
      mobileNum: '1234567890',
      email: 'ffgg@gmail.com',
      description: 'drhjkjklk',
    },
    {
      name: 'Dentee4',
      mobileNum: '1234567890',
      email: 'ffgg@gmail.com',
      description: 'drhjkjklk',
    },
    {
      name: 'Dentee5',
      mobileNum: '1234567890',
      email: 'ffgg@gmail.com',
      description: 'drhjkjklk',
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
      <div className='maincontva1'>
        <div className="ref-Body">
          <div className='patientdocument-headva11'>
            <div className='patient-iconva11'>
              <Link to="/Administator">
                <AiOutlineArrowLeft />{' '}
              </Link>
            </div>
            <div className='patient-headingva11'>Administator/ Manage References</div>
          </div>

          <div className="ref-man"></div>
          <br></br>
          <div className="ref-search">
            <div className='search-container-ref'>
              <input className='search-bar-ref' type='text' placeholder='Search' />
              <button className='search-btn-ref'>
                <BiSearch />
              </button>
            </div>
            <button className="ref-excel" onClick={openPopup}>
              Add
            </button>
          </div>

          <div className="ref-table">
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>MOBILE NUM</th>
                  <th>EMAIL</th>
                  <th>Description</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentPatients.map((patient, index) => (
                  <tr key={index}>
                    <td>{patient.name}</td>
                    <td>{patient.mobileNum}</td>
                    <td>{patient.email}</td>
                    <td>{patient.description}</td>
                    <td>No-data</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showPopup && (
          <div className="ref-popup">
            <div className="ref-popup-content">
              <button className="ref-popup-close11" onClick={closePopup}>
                X
              </button>
              <div className='ref-add'>
                <h1>Add Reference</h1>
              </div>
              <hr></hr>&nbsp;
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={mobileNum}
                  onChange={(e) => setMobileNum(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
               
              </div>
              <button className="ref-popup-save" onClick={saveReference}>
                  Save
                </button>
            </div>
          </div>
        )}

        <div className='pat-mf'>
          <button className='but-mf' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-mf'>{currentPage}</p>
          <button className='but-mf' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default ManageReferences;
