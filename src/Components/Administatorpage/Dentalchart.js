import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import React, { useState } from 'react';
import './Dentalchart.css';
import { BiArrowBack, BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function DentalChart() {
  const [selectedToothInvestigation, setSelectedToothInvestigation] = useState('');
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [data, setData] = useState([
    { title: 'Temp 1', id: 1 },
    { title: 'Temp 2', id: 2 },
    { title: 'Temp 3', id: 3 },
    { title: 'Temp 4', id: 4 },
    { title: 'Temp 5', id: 5 },
    { title: 'Temp 6', id: 6 },

  ]);

  const toothInvestigations = [
    'Allergies',
    'Dental History',
    'Diagnosis',
    'Dosage',
    'Empanet',
    'Receipt',
    'Frequency',
    'Payment',
  ];

  const handleToothInvestigationChange = (event) => {
    setSelectedToothInvestigation(event.target.value);
  };

  const handleEditClick = (index) => {
    setEditingRowIndex(index);
  };

  const handleUpdateClick = (index) => {
    // Update the data with the new value
    const newData = [...data];
    newData[index].title = selectedToothInvestigation;
    setData(newData);

    // Clear the editing state
    setEditingRowIndex(null);
    setSelectedToothInvestigation('');
  };

  const handleDeleteClick = (index) => {
    // Delete the data entry with the given index
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Define isLastPage based on the comparison of indexOfLastItem with the total data length
  const isLastPage = indexOfLastItem >= data.length;

  const handlePageChange = (pageNumber) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="Dentalchart22va122">
        <div className='Dental-head1'>
          <div className='Dental-icon2'>
            <Link to="/Administator">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className='Dental-heading3'>Administrator / Manage Dental Chart</div>
        </div>

        <div className='Dental-rowva12'>
          <div className='search-container12va'>
            <input className='search-bar12va' type='text' placeholder='Search' />
            <button className='search-btn12va'><BiSearch /></button>
          </div>

          <div className='dropdownva12'>
            <select
              className='data-inputva12'
              value={selectedToothInvestigation}
              onChange={handleToothInvestigationChange}
            >
              <option value="">Select Tooth Investigation</option>
              {toothInvestigations.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='Dental-recordva12'>
          <button className="add-button40va12" onClick={() => {
            // Add a new record
            setData([...data, { title: selectedToothInvestigation, id: data.length + 1 }]);
            setSelectedToothInvestigation('');
          }}>+ Add New record</button>
        </div>

        <table className="Dental-tableva">
          <thead>
            <tr>
              <th className='headingname'>Title</th>
              <th className='headingname'>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.id}>
                <td>
                  {editingRowIndex === index ? (
                    <input
                      type="text"
                      value={selectedToothInvestigation}
                      onChange={(e) => setSelectedToothInvestigation(e.target.value)}
                    />
                  ) : (
                    item.title
                  )}
                </td>
                <td>
                  {editingRowIndex === index ? (
                    <button onClick={() => handleUpdateClick(index)}>Update</button>
                  ) : (
                    <>
                      <div className='headingbutton'>
                        <button onClick={() => handleEditClick(index)}>Edit</button>&nbsp;
                        <button onClick={() => handleDeleteClick(index)}> Delete</button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <div className='pat-dc'>
        <button className='but-dc' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
          <AiOutlineStepBackward />
        </button>
        <p className='pat-bot-dc'>{currentPage}</p>
        <button className='but-dc' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
          <AiOutlineStepForward />
        </button>
      </div>
    </>
  );
}

export default DentalChart;