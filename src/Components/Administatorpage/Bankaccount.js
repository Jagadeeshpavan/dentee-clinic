import React, { useState } from 'react';
import './Bankaccount.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { ImSearch } from 'react-icons/im';
import { AiOutlineArrowLeft,AiOutlineStepBackward,AiOutlineStepForward } from "react-icons/ai";
import { TfiSettings } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import AddBankAccount from './AddBankAccount';

function BankAccountManagement() {
  const [showForm, setShowForm] = useState(false);
  const [bankAccounts, setBankAccounts] = useState([
    {
      bankName: 'Sample Bank 1',
      accountNumber: '1234567890',
      branch: 'Sample Branch A',
      city: 'Sample City X',
    },
    {
      bankName: 'Sample Bank 2',
      accountNumber: '9876543210',
      branch: 'Sample Branch B',
      city: 'Sample City Y',
    },
    {
      bankName: 'Sample Bank 3',
      accountNumber: '1234567890',
      branch: 'Sample Branch A',
      city: 'Sample City X',
    },
    {
      bankName: 'Sample Bank 4',
      accountNumber: '9876543210',
      branch: 'Sample Branch B',
      city: 'Sample City Y',
    },
    {
      bankName: 'Sample Bank 5',
      accountNumber: '1234567890',
      branch: 'Sample Branch A',
      city: 'Sample City X',
    },
    {
      bankName: 'Sample Bank 6',
      accountNumber: '9876543210',
      branch: 'Sample Branch B',
      city: 'Sample City Y',
    },



    // Your initial bank account data

  ]);

  const [selectedRows, setSelectedRows] = useState([]);
  const [openSettingsRow, setOpenSettingsRow] = useState(-1);
  const [editedRow, setEditedRow] = useState(null);

  const addBankAccount = (newBankAccount) => {
    setBankAccounts([...bankAccounts, newBankAccount]);
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleRowSelect = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleDeleteRow = (index) => {
    const updatedBankAccounts = bankAccounts.filter((_, i) => i !== index);
    setBankAccounts(updatedBankAccounts);
    setOpenSettingsRow(-1);
  };

  const deleteSelectedRows = () => {
    const updatedBankAccounts = bankAccounts.filter((_, index) => !selectedRows.includes(index));
    setBankAccounts(updatedBankAccounts);
    setSelectedRows([]);
    setOpenSettingsRow(-1);
  };

  const editRow = (index) => {
    setEditedRow(index);
    setOpenSettingsRow(-1);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  // Pagination logic
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBankAccounts = bankAccounts.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= bankAccounts.length;

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  return (
    <>  
    <Navbar />
    <Sidebar />
    <div className="bank-account-management-an12">
      <div className='patientdocument-head11A'>
        <div className='patient-icon11A'>
          <Link to="/Administator">
            <AiOutlineArrowLeft/>
          </Link>
        </div>
        <div className='patient-heading11A'>Administrator / Manage Bank Account</div>
      </div>

      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <div className="search-bar-an12">
        <input type="text" placeholder="Search Bank Account" className='search-bar-an1256'/>
        <button className='search-an12'><ImSearch /></button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/AddBankAccount">
          <button className='add-button-an12'>[+] Add Bank Account</button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className='add-button-an12' onClick={deleteSelectedRows}>[-] Delete Bank Account</button>
      </div>

      <table className='table-an12'>
        <thead>
          <tr className='tr-an12'>
            <th className='th-an12'>Select</th>
            <th className='th-an12'>Bank Name</th>
            <th className='th-an12'>Account Number</th>
            <th className='th-an12'>Branch</th>
            <th className='th-an12'>City</th>
            <th className='th-an12'>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentBankAccounts.map((account, index) => (
            <tr key={index} className={selectedRows.includes(index) ? 'selected-row' : ''}>
              <td className='td-an12'>
                <div>
                  <input
                    className='search-input345'
                    type="checkbox"
                    onChange={() => handleRowSelect(index)}
                    checked={selectedRows.includes(index)}
                  />
                </div>
              </td>
              <td className='td-an12'>{account.bankName}</td>
              <td className='td-an12'>{account.accountNumber}</td>
              <td className='td-an12'>{account.branch}</td>
              <td className='td-an12'>{account.city}</td>
              <td className='td-an12'>
                {openSettingsRow === index ? (
                  <div className="row-settings-an12">
                    <TfiSettings onClick={() => setOpenSettingsRow(-1)} />
                    <ul className="settings-menu-an12">
                      <Link >
                        <li className='li-an12' onClick={() => editRow(index)}>Edit</li>
                      </Link>
                      <li className='li-an12' onClick={() => handleDeleteRow(index)}>Delete</li>
                    </ul>
                  </div>
                ) : (
                  <div className='set'>
                    <TfiSettings onClick={() => setOpenSettingsRow(index)} />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && <AddBankAccount addBankAccount={addBankAccount} onCancel={handleCancel} />}
      
      <div className='pat-ba'>
        <button className='but-ba' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
          <AiOutlineStepBackward/>
        </button>
        <p className='pat-bot-ba'>{currentPage}</p>
        <button className='but-ba' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
          <AiOutlineStepForward/>
        </button>
      </div>
    </div>
    </>
  );
}

export default BankAccountManagement;
