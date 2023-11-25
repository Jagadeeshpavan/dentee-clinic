import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';

function Viewport({ handleClose }) {
  const [patientType, setPatientType] = useState('existing');
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedChair, setSelectedChair] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [notes, setNotes] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [duration, setDuration] = useState('15');
  const [mobileNumber, setMobileNumber] = useState('');
  const [patientTitle, setPatientTitle] = useState('Mr.');

  const handlePatientTypeChange = (event) => {
    setPatientType(event.target.value);
  };

  const handleSave = () => {
    console.log('Saved');
  };

  const handleClosePopup = () => {
    handleClose();
  };

  const saveAppointment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/POP1', {
        patientType,
        patientName,
        date,
        selectedPatient,
        selectedDoctor,
        selectedChair,
        selectedTreatment,
        notes,
        startTime,
        endTime,
        duration,
        mobileNumber,
        patientTitle,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="asdd">
        <div className="Salam-11">
          <h1 className="Supriya-1">
            Appointment&nbsp;
            <AiOutlineClose className="Supriya-2" onClick={handleClosePopup} />
          </h1>
          <div className="View-sai-2">
            <label className="View-sai-2" style={{ color: 'black' }}>
              <input
                type="radio"
                value="existing"
                checked={patientType === 'existing'}
                onChange={handlePatientTypeChange}
              />
              Existing patient
            </label>
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            <label className="sai" style={{ color: 'black' }}>
              <input
                type="radio"
                value="new"
                checked={patientType === 'new'}
                onChange={handlePatientTypeChange}
              />
              New patient
            </label>
          </div>

          {patientType === 'existing' && (
            <div>
              <div className="sai-up">
                <div className="sai-up22">Patient</div>
                <select
                  className="Saivanitha-1"
                  onChange={(event) => setSelectedPatient(event.target.value)}
                  value={selectedPatient}
                >
                  <option value="select patient">Select patient</option>
                  <option value="s">sai</option>
                  <option value="st">swathi</option>
                  <option value="t">raju</option>
                  <option value="t">ravi</option>
                </select>
              </div>

              <div className="sai-up22-1">Doctor</div>
              <select
                className="Saivanitha"
                onChange={(event) => setSelectedDoctor(event.target.value)}
                value={selectedDoctor}
              >
                <option value="select doctor">Select doctor</option>
                <option value="s">Dr.Pavan</option>
                <option value="st">Dr.Gopi</option>
                <option value="t">Dr.Amith</option>
                <option value="t">Dr.Ratan</option>
              </select>

              <div className="sai-app-date">
                <div className="sai-app-time" style={{ color: 'black' }}>
                  Date$Time
                </div>
                <input type="date" className="sai-app-both" onChange={(event) => setDate(event.target.value)} value={date} />
                <input type="time" className="ans" onChange={(event) => setStartTime(event.target.value)} value={startTime} />
                <select
                  className="sai-app-mins"
                  onChange={(event) => setDuration(event.target.value)}
                  value={duration}
                >
                  <option>15mins</option>
                  <option>20mins</option>
                  <option>30mins</option>
                  <option>40mins</option>
                  <option>50mins</option>
                  <option>60mins</option>
                </select>
              </div>

              <div className="sai-chairs">
                <div className="sai-chairs-pop" style={{ color: 'black' }}>
                  Chairs
                </div>
                <select
                  className="sai-chairs-new"
                  onChange={(event) => setSelectedChair(event.target.value)}
                  value={selectedChair}
                >
                  <option value="select chair">Select chair</option>
                  <option value="s">Dr.Gopi</option>
                  <option value="st">Dr.Pavan</option>
                  <option value="t">Dr.Ratan</option>
                  <option value="t">Dr.Amith</option>
                </select>
              </div>

              <div className="sai-Selct-13">
                <div className="sai-Selct-pop" style={{ color: 'black' }}>
                  Treatment
                </div>
                <select
                  className="sai-Selct"
                  onChange={(event) => setSelectedTreatment(event.target.value)}
                  value={selectedTreatment}
                >
                  <option>Select Treatment</option>
                  <option>diabetes</option>
                  <option>HIV</option>
                  <option>Cancer</option>
                </select>
              </div>

              <div className="sai-Note">
                <div className="sai-Note-1">Notes</div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="Remarks-page-tnx">
                  <input
                    className="rectangle-box"
                    type="text"
                    onChange={(event) => setNotes(event.target.value)}
                    value={notes}
                  />
                </div>
              </div>

              <div className="sai-app-buttons">
                <button onClick={saveAppointment}>Save</button>
                <button className="sai-app-onclick" onClick={handleClosePopup}>
                  CLOSE
                </button>
              </div>
            </div>
          )}

          {patientType === 'new' && (
            <div>
              <div className="sai-app-direction">
                <div className="sai-app-flex">
                  <div className="sai-app-mobile" style={{ color: 'black' }}>
                    Mobile no
                  </div>
                  <div className="sai-app-pick">
                    +91
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="mobile.no"
                  className="sai-app-num"
                  onChange={(event) => setMobileNumber(event.target.value)}
                  value={mobileNumber}
                />
              </div>

              <div className="sai-app-sagar">
                <div className="sai-app-patient" style={{ color: 'black' }}>
                  Patient
                </div>
                <select
                  className="sai-app-field"
                  onChange={(event) => setPatientTitle(event.target.value)}
                  value={patientTitle}
                >
                  <option>Mr.</option>
                  <option>Miss</option>
                  <option>Mrs</option>
                </select>
                <input
                  type="text"
                  placeholder="patient name"
                  className="sai-app-patientbutton"
                  onChange={(event) => setPatientName(event.target.value)}
                  value={patientName}
                />
              </div>

              <div className="sai-app-select">
                <div className="sai-app-doc" style={{ color: 'black' }}>
                  Doctor
                </div>
                <select
                  className="sai-app-option"
                  onChange={(event) => setSelectedDoctor(event.target.value)}
                  value={selectedDoctor}
                >
                  <option>Dr.sagar</option>
                  <option>Dr.sunil</option>
                  <option>Dr.Pavan</option>
                  <option>Dr.Gopi</option>
                </select>
              </div>

              <div className="sai-app-date-1">
                <div className="sai-app-time-1" style={{ color: 'black' }}>
                  Date$Time
                </div>
                <input
                  type="date"
                  className="sai-app-both-1"
                  onChange={(event) => setDate(event.target.value)}
                  value={date}
                />
                <input
                  type="time"
                  className="ans-1"
                  onChange={(event) => setStartTime(event.target.value)}
                  value={startTime}
                />
                <select
                  className="sai-app-min-1"
                  onChange={(event) => setDuration(event.target.value)}
                  value={duration}
                >
                  <option>15mins</option>
                  <option>20mins</option>
                  <option>30mins</option>
                  <option>40mins</option>
                  <option>50mins</option>
                  <option>60mins</option>
                </select>
              </div>

              <div className="sai-app-chairs">
                <div className="sai-app-sit" style={{ color: 'black' }}>
                  Chairs
                </div>
                <select
                  className="sai-app-drop"
                  onChange={(event) => setSelectedChair(event.target.value)}
                  value={selectedChair}
                >
                  <option>Dr.Gopi</option>
                  <option>Dr.Pavan</option>
                  <option>Dr.Ratan</option>
                  <option>Dr.Amith</option>
                </select>
              </div>



              <div className="sai-Popup-close">
                <button onClick={saveAppointment}>Save</button>
                <button className="sai-Close" onClick={handleClosePopup}>
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}    

export default Viewport;