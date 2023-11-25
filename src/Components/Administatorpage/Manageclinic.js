import React, { useState,useEffect } from 'react';
import './Manageclinic.css';
import {AiFillSetting} from "react-icons/ai";
import axios from 'axios';
import Popup from 'reactjs-popup';
import { AiOutlineArrowLeft, AiOutlineStepForward, AiOutlineStepBackward } from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function ManageClinicChair() {
  const [showPopup, setShowPopup] = useState(false);  
  
  useEffect(() => {
    // Fetch bank account data from the server
    axios.get('http://localhost:5004/Addbank') // Use the same endpoint defined in the server
      .then((response) => {
        setClinicChairs(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch bank accounts:', error);
      });
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Dummy data for clinic chairs
  const [clinicChairs, setClinicChairs] = useState([
   
  ]);

  // Pagination logic
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClinicChairs = clinicChairs.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= clinicChairs.length;

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincont221-1'>
        <div className='maincont-ad-11'>
          <div className='main40'>
            <div className='main-headmanage'>
              <div className='mainhead-iconmanage'>
                <Link to='/Administator'>
                  <AiOutlineArrowLeft />
                </Link>
              </div>
              <div className='main-headingmanage'>Administrator/ManageClinicChair</div>
            </div>

            <div className='Manage-button-flexrow'></div>

            <div className='Manage-Delet-chair'>
              <button className="Manage-add-button41" onClick={openPopup}>Add Chairs</button>
              <button className="Manage-add-button43">Delete Chairs</button>
            </div>

            <table className="Manage-table">
              <thead>
                <tr>
                  <th className='mc-mc'>Select all</th>
                  <th className='mc-mc'>Chair</th>
                  <th className='mc-mc'>Description</th>
                  <th className='mc-mc'>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentClinicChairs.map((chair, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        className='search-input345'
                        type="checkbox"
                      />
                    </td>
                    <td>{chair.chairName}</td>
                    <td>{chair.description}</td>
                    <td>
                  
                    <Popup trigger=
                    {<div className='manage-text-4'><AiFillSetting /></div>}
                                    position ='bottom center'>
                <div className='manage-popup-box'>
                    <Popup trigger=
                    {<div className='manage-delete'>Delete</div>}
                    modal nested>
                        <div className='manage-delete-confirm'>
                            <div className='confirm-1'><div className='confirm'>Confirm</div></div>
                            <div className='delete-user'>Are you sure you want to delete user</div>
                            <div className='yes-no'>
                                <button className='delete-yes'>YES</button>
                                <button className='delete-no'>NO</button>
                            </div>
                        </div>
                       
                    </Popup>
                    
                    </div>
                    </Popup>
              
                    
                    
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {showPopup && (
              <div className="Manage-popup">
                <div className="Manage-popup-content">
                  <button className="Manage-close-button" onClick={closePopup}>X</button>
                  <h3>Add Chairs</h3>
                  <hr></hr>
                  <form className='vamanage11'>
                    <div className='Manage-data123'>
                      <label className='manage1va' htmlFor="chairName">Chair name:</label>
                      <input className='manage1vaa1' type="text" id="chairName" name="chairName" />

                      <label className='manage1va' htmlFor="description">Description:</label>
                      <input className='manage1vaa1' type="text" id="description" name="description" />
                    </div>
                    <button className='but-va-11' type="submit">Save</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='pat-mc'>
        <button
          className='but-mc'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isFirstPage}
        >
          <AiOutlineStepBackward />
        </button>
        <p className='pat-bot-mc'>{currentPage}</p>
        <button
          className='but-mc'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isLastPage}
        >
          <AiOutlineStepForward />
        </button>
      </div>
    </>
  );
}

export default ManageClinicChair;