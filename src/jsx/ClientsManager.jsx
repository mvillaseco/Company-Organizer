import React, { PropTypes } from 'react';
import AddClient from './AddClient.jsx';
import RemoveClient from './RemoveClient.jsx';
import '../App.css';


const ClientsManager = () => {
    return (
        <div className="clients-manager ">
            <p>Clients Manager</p>
            <div className="items-container">
                <AddClient></AddClient>
                <RemoveClient></RemoveClient>
            </div>
        </div>
    );
}


export default ClientsManager;