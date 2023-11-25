import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io'; 
import axios from 'axios';
import './Dynamicconsent.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function DynamicConsentForm() {
  const [forms, setForms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [showActions, setShowActions] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5002/Dynamicconsent');
      setForms(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const handleEdit = (form) => {
    console.log('Editing form:', form);
  };

  const handleDelete = (form) => {
    console.log('Deleting form:', form);
  };


  const handleAddForm = async () => {
    try {
    
    } catch (error) {
      console.error('Error adding form:', error);
    }
  };

  const handleIconClick = (form) => {
    setShowActions(true);
    setSelectedItem(form);
  };

  const filteredForms = forms.filter((form) => {
    const { title, category, date, action } = form;
    const searchTextLower = searchTerm.toLowerCase();

    return (
      title.toLowerCase().includes(searchTextLower) ||
      category.toLowerCase().includes(searchTextLower) ||
      date.toLowerCase().includes(searchTextLower) ||
      action.toLowerCase().includes(searchTextLower)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentForms = filteredForms.slice(indexOfFirstItem, indexOfLastItem);
  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= filteredForms.length;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincont-ipog-89'>
        <div className='main-head-ipog-89'>
          <div className='mainhead-icon-ipog-89'>
            <Link to="/Administator">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className='main-heading-ipog-89'> Administrator/Dynamic Consent Form</div>
          <Link to="/Dynamicconsentform">
            <Button className="dynamicbutton-ipog-89" onClick={handleAddForm}>
              Add Dynamic Consent Form
            </Button>
          </Link>
        </div>
        <br />
        <div className='search-container-ipog-89'>
          <input
            className='search-bar-ipog-89'
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='search-btn-ipog-89'>
            <BiSearch />
          </button>
        </div>
        <table className='dynamic-ipog-89' striped bordered hover>
          <thead className='dynamic-ipog-99'>
            <tr className='dynamc-ipog-00923'>
              <th className='dynamc-ipog-099'>Title</th>
              <th className='dynamc-ipog-099'>Category</th>
              <th className='dynamc-ipog-099'>Date</th>
              <th className='dynamc-ipog-099'>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentForms.map((form, index) => (
              <tr key={index}>
                <td className='dynamc-ipog-079'>{form.title}</td>
                <td className='dynamc-ipog-079'>{form.category}</td>
                <td className='dynamc-ipog-079'>{form.date}</td>
                <td className='dynamc-ipog-079'>
                  <button className='setting-option-but' onClick={() => handleIconClick(form)}>
                    <IoMdSettings />
                  </button>
                  {showActions && selectedItem && selectedItem === form && (
                    <div className='action-buttons'>
                      <button className='edit-button' onClick={() => handleEdit(form)}>
                        Edit
                      </button>
                      <button className='delete-button' onClick={() => handleDelete(form)}>
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pat-dyc'>
          <button
            className='but-dyc'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-dyc'>{currentPage}</p>
          <button
            className='but-dyc'
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

export default DynamicConsentForm;
