import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './AddBankAccount.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function AddBankAccount({ addBankAccount, onCancel }) {
  const [bankAccount, setBankAccount] = useState({
    bankName: '',
    accountNumber: '',
    branch: '',
    city: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBankAccount({ ...bankAccount, [name]: value });
  };

  const handleSave = () => {
    const newBankAccount = {
      bankName: bankAccount.bankName,
      accountNumber: bankAccount.accountNumber,
      branch: bankAccount.branch,
      city: bankAccount.city,
    };

    addBankAccount(newBankAccount);
  };
  

  return (

    <>  
    <Navbar/>
    <Sidebar/>
    <div className="add-bank-account-an12">
      <div className="container-an12">
        <div className="grid-columns-3-an12">
          <h1 className="top-right-heading-an12">Bank Account Details</h1>
          <div className='inputs-grids456-an12'>
            <input
              className='input-field567-an12'
              type="text"
              name="bankName"
              placeholder='Bank Name'
              value={bankAccount.bankName}
              onChange={handleInputChange}
            />
            <input
             className='input-field567-an12'
              type="text"
              name="accountNumber"
              placeholder='Account Number'
              value={bankAccount.accountNumber}
              onChange={handleInputChange}
            />
            <input
              className='input-field567-an12'
              type="text"
              name="branch"
              placeholder='Branch'
              value={bankAccount.branch}
              onChange={handleInputChange}
            />
            <input
              className='input-field567-an12'
              type="text"
              name="city"
              placeholder='City'
              value={bankAccount.city}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="buttons-456-an12">
        <button className='button-an12' onClick={handleSave}>Save</button>
       &nbsp; <Link to='/bankaccount'><button  className='button-an12' onClick={onCancel}>Cancel</button></Link>
      </div>
    </div>
    </>  
  );
}

export default AddBankAccount;



