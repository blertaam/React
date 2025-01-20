import React, { useState } from 'react';
import './App.css';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import BottomIcons from './BottomIcons';
import Feed from './Feed';
import Modal from './Modal';

function App() {
  const [apiData, setApiData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Handle API open
  const handleApiOpen = () => {
    fetch('https://api.example.com/data') // Replace with actual API URL
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error('API fetch error:', error));
  };

  // Toggle the modal (show two screens)
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="App">
      <Feed />
      <BottomIcons
        onApiClick={handleApiOpen}
        onModalClick={toggleModal}
      />
      {showModal && <Modal />}
      {apiData && (
        <div className="api-response">
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
