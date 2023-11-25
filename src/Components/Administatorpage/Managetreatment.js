import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from 'react';
import { AiOutlineArrowLeft,AiOutlineStepBackward,AiOutlineStepForward } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import './Managetreatment.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const dummyData = [
  {
    treatmentName: 'Treatment 1',
    treatmentCost: '₹50',
    favourite: true,
  },
  {
    treatmentName: 'Treatment 2',
    treatmentCost: '₹75',
    favourite: false,
  },
  {
    treatmentName: 'Treatment 3',
    treatmentCost: '₹60',
    favourite: true,
  },
  {
    treatmentName: 'Treatment 1',
    treatmentCost: '₹50',
    favourite: true,
  },
  {
    treatmentName: 'Treatment 2',
    treatmentCost: '₹75',
    favourite: false,
  },
  {
    treatmentName: 'Treatment 3',
    treatmentCost: '₹60',
    favourite: true,
  },
];

function Managetreatment() {
  const [data, setData] = useState(dummyData);
  const [newMedicine, setNewMedicine] = useState({
    treatmentName: '',
    treatmentCost: '',
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
      treatmentName: '',
      treatmentCost: '',
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
      treatmentName: '',
      treatmentCost: '',
      favourite: false,
    });
  };

  const handleCancelNewMedicine = () => {
    setIsAddingNewMedicine(false);
    setEditingIndex(-1);
    setNewMedicine({
      treatmentName: '',
      treatmentCost: '',
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
  const currentPatients = data.slice(indexOfFirstItem, indexOfLastItem);

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
      <div className="medicine-table-container-an51">
        <div className='patientdocument-head-an51'>
          <div className='patient-icon-an51'>
            <Link to="/Administator"><AiOutlineArrowLeft /></Link>
          </div>
          <div className='patient-heading-an51'>Administrator / Manage Treatments</div>
        </div>
        <div className='search-containeran51'>
          <input
            className='search-baran51'
            type='text'
            placeholder='Search'
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button className='search-btnan51' onClick={handleSearch}>
            <BiSearch />
          </button>
        </div>
        <br></br>
        <div className="add-button-an51" onClick={handleAddNewMedicine}>
          + Add New Medicine
        </div>
        <table className="medicine-table-an51">
          <thead>
            <tr className="tr-an51">
              <th className="th-an51">Treatment Name</th>
              <th className="th-an51">Treatment Cost</th>
              <th className="th-an51">Favourite</th>
              <th className="th-an51">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPatients.map((medicine, index) => (
              <tr key={index}>
                <td className="td-an51">{medicine.treatmentName}</td>
                <td className="td-an51">{medicine.treatmentCost}</td>
                <td className="td-an51">{medicine.favourite ? 'Yes' : 'No'}</td>
                <td className="td-an51">
                  <button className="edit-button-an51" onClick={() => handleEdit(index)}>
                    <MdOutlineModeEditOutline />
                    Edit
                  </button>
                  <button className="delete-button-an51" onClick={() => handleDelete(index)}>
                    <RxCross2 />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {isAddingNewMedicine && (
              <tr className="tr-an51">
                <td className="td-an51">
                  <input
                    type="text"
                    name="treatmentName"
                    placeholder="Treatment Name"
                    value={newMedicine.treatmentName}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="td-an51">
                  <input
                    type="text"
                    name="treatmentCost"
                    placeholder="Treatment Cost"
                    value={newMedicine.treatmentCost}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="td-an51">
                  <input
                    type="checkbox"
                    name="favourite"
                    checked={newMedicine.favourite}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="td-an51">
                  <button className="edit-button-an51" onClick={handleSaveNewMedicine}>
                    Save
                  </button>
                  <button className="delete-button-an51" onClick={handleCancelNewMedicine}>
                    Cancel
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className='pat-mt'>
          <button className='but-mt' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-mt'>{currentPage}</p>
          <button className='but-mt' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default Managetreatment;
