import './Managemedicine.css';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineArrowLeft,AiOutlineStepForward,AiOutlineStepBackward } from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const dummyData = [
  {
    medicineName: 'Medicine A',
    moleculeName: 'Molecule A',
    dosage: '5 mg',
    frequency: '0-0-1',
    duration: '10 days',
    favourite: true,
  },
  {
    medicineName: 'Medicine B',
    moleculeName: 'Molecule B',
    dosage: '10 mg',
    frequency: '0-1-0',
    duration: '15 days',
    favourite: false,
  },
  {
    medicineName: 'Medicine C',
    moleculeName: 'Molecule C',
    dosage: '20 mg',
    frequency: '1-0-1',
    duration: '30 days',
    favourite: true,
  },
  {
    medicineName: 'Medicine D',
    moleculeName: 'Molecule D',
    dosage: '15 mg',
    frequency: '1-1-0',
    duration: '20 days',
    favourite: false,
  },
  {
    medicineName: 'Medicine E',
    moleculeName: 'Molecule E',
    dosage: '25 mg',
    frequency: '1-1-1',
    duration: '45 days',
    favourite: true,
  },
  {
    medicineName: 'Medicine F',
    moleculeName: 'Molecule F',
    dosage: '30 mg',
    frequency: '0-1-1',
    duration: '25 days',
    favourite: false,
  },
];

function Managemedicine() {
  const [data, setData] = useState(dummyData);
  const [newMedicine, setNewMedicine] = useState({
    medicineName: '',
    moleculeName: '',
    dosage: '',
    frequency: '0-0-1',
    duration: '',
    favourite: false,
  });

  const [isAddingNewMedicine, setIsAddingNewMedicine] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewMedicine((prevMedicine) => ({
      ...prevMedicine,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddNewMedicine = () => {
    setIsAddingNewMedicine(true);
    setNewMedicine({
      medicineName: '',
      moleculeName: '',
      dosage: '',
      frequency: '0-0-1',
      duration: '',
      favourite: false,
    });
    setEditingIndex(-1);
  };

  const handleSaveNewMedicine = () => {
    if (editingIndex !== -1) {
      const updatedData = [...data];
      updatedData[editingIndex] = newMedicine;
      setData(updatedData);
    } else {
      setData([...data, newMedicine]);
    }

    setIsAddingNewMedicine(false);
    setEditingIndex(-1);
    setNewMedicine({
      medicineName: '',
      moleculeName: '',
      dosage: '',
      frequency: '0-0-1',
      duration: '',
      favourite: false,
    });
  };

  const handleCancelNewMedicine = () => {
    setIsAddingNewMedicine(false);
    setEditingIndex(-1);
    setNewMedicine({
      medicineName: '',
      moleculeName: '',
      dosage: '',
      frequency: '0-0-1',
      duration: '',
      favourite: false,
    });
  };

  const handleEdit = (index) => {
    const medicineToEdit = data[index];
    setNewMedicine({ ...medicineToEdit });
    setEditingIndex(index);
    setIsAddingNewMedicine(true);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handleSearch = () => {
    const filteredData = data.filter((medicine) =>
      Object.values(medicine).some((value) =>
        String(value).toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );
    setData(filteredData);
  };

  // Pagination code
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMedicine = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= data.length;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="medicine-table-container-an411">
        <div className='patientdocument-head-an41'>
          <div className='patient-icon-an41'><Link to="/Administator"><AiOutlineArrowLeft/></Link></div>
          <div className='patient-heading-an41'>Administrator / Manage Medicine</div>
        </div>
        <div className="search-bar-an41">
          <div className='search-containeran41'>
            <input className='search-baran41' type='text' placeholder='Search' value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
            <button className='search-btnan41' onClick={handleSearch}><BiSearch /></button>
          </div>
        </div>
        <div className="add-button-an41" onClick={handleAddNewMedicine}>
          + Add New Medicine
        </div>
        <div className="table-container-an41">
          <table className="medicine-table-an41">
            <thead>
              <tr>
                <th className='th-an41'>Medicine Name</th>
                <th className='th-an41'>Molecule Name</th>
                <th className='th-an41'>Dosage</th>
                <th className='th-an41'>Frequency</th>
                <th className='th-an41'>Duration</th>
                <th className='th-an41'>Favourite</th>
                <th className='th-an41'>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentMedicine.map((medicine, index) => (
                <tr key={indexOfFirstItem + index}>
                  <td className='td-an41'>{medicine.medicineName}</td>
                  <td className='td-an41'>{medicine.moleculeName}</td>
                  <td className='td-an41'>{medicine.dosage}</td>
                  <td className='td-an41'>{medicine.frequency}</td>
                  <td className='td-an41'>{medicine.duration}</td>
                  <td className='td-an41'>{medicine.favourite ? 'Yes' : 'No'}</td>
                  <td className='td-an41'>
                    <button className="edit-button-an41" onClick={() => handleEdit(indexOfFirstItem + index)}><MdOutlineModeEditOutline />
                      Edit
                    </button>
                    <button className="delete-button-an41" onClick={() => handleDelete(indexOfFirstItem + index)}><RxCross2 />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {isAddingNewMedicine && (
                <tr>
                  <td className='td-an41'>
                    <input
                      type="text"
                      name="medicineName"
                      placeholder="Medicine Name"
                      value={newMedicine.medicineName}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className='td-an41'>
                    <input
                      type="text"
                      name="moleculeName"
                      placeholder="Molecule Name"
                      value={newMedicine.moleculeName}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className='td-an41'>
                    <input
                      type="text"
                      name="dosage"
                      placeholder="Dosage"
                      value={newMedicine.dosage}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className='td-an41'>
                    <select
                      name="frequency"
                      className="frequency-dropdown-an41"
                      value={newMedicine.frequency}
                      onChange={handleInputChange}
                    >
                      <option value="0-0-1">0-0-1</option>
                      <option value="0-1-0">0-1-0</option>
                      <option value="0-1-1">0-1-1</option>
                      <option value="1-0-1">1-0-1</option>
                      <option value="1-1-0">1-1-0</option>
                      <option value="1-1-1">1-1-1</option>
                      <option value="1-0-0">1-0-0</option>
                    </select>
                  </td>
                  <td className='td-an41'>
                    <input
                      type="text"
                      name="duration"
                      placeholder="Duration"
                      value={newMedicine.duration}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className='td-an41'>
                    <input
                      type="checkbox"
                      name="favourite"
                      checked={newMedicine.favourite}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className='td-an41'>
                    <button className="edit-button-an41" onClick={handleSaveNewMedicine}>
                      Save
                    </button>
                    <button className="delete-button-an41" onClick={handleCancelNewMedicine}>
                      Cancel
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className='pat-md'>
          <button className='but-md' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-md'>{currentPage}</p>
          <button className='but-md' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default Managemedicine;
