import React, { useState } from 'react';
import './Managemaster.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom'; 
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function DentalChart() {
  const [selectedToothInvestigation, setSelectedToothInvestigation] = useState('');
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [data, setData] = useState([
    { title: 'Template 1', id: 1 },
    { title: 'Template 2', id: 2 },
    { title: 'Template 3', id: 3 },
    { title: 'Template 4', id: 4 },
    { title: 'Template 5', id: 5 },
    { title: 'Template 6', id: 6 },
    // Add more data here
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

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= data.length;

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

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="Dentalchart22va1212">
        <div className="Dental-head">
          <div className="Dental-icon">
          <Link to="/Administator"> {/* Wrap the back arrow with Link */}
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className="Dental-heading">Administrator / Manage Master</div>
        </div>

        <div className="Dental-rowva">
          <div className="search-boxva">
            <input className="search-barva" type="text" placeholder="Search Dental chart" />
            <button className="search-bar-buttonva"><BiSearch /></button>
          </div>

          <div className="dropdownva">
            <select
              className="data-inputva"
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
        <div className="Dental-recordva">
          <button className="add-button40va" onClick={() => {
            // Add a new record
            setData([...data, { title: selectedToothInvestigation, id: data.length + 1 }]);
            setSelectedToothInvestigation('');
          }}>+ Add New record</button>
        </div>

        <table className="Dental-tableva">
          <thead>
            <tr>
              <th className="headingname">Title</th>
              <th className="headingname">Action</th>
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
                      <div className="headingbutton">
                        <button onClick={() => handleEditClick(index)}>Edit</button>&nbsp;
                        <button onClick={() => handleDeleteClick(index)}>X Delete</button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pat-mm">
        <button className="but-mm" onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
          <AiOutlineStepBackward />
        </button>
        <p className="pat-bot-mm">{currentPage}</p>
        <button className="but-mm" onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
          <AiOutlineStepForward />
        </button>
      </div>
    </>
  );
}

export default DentalChart;