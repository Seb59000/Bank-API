import { useStore } from "react-redux";
import React, { useState } from 'react';
import { UpdateInfos } from '../../services/BDDManager'
import { Navigate } from 'react-router-dom';
import AccountInfoBar from '../../components/accountInfoBar/AccountInfoBar'

function Profil() {
    const store = useStore();
    const [showInputs, setShowInputs] = useState(false);
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');

    if (store.getState().token === '') {
        return <Navigate to='/login' />;
    }

    const EditName = () => {
        setShowInputs(true);
    };

    const CancelEditName = () => {
        setShowInputs(false);
    };

    const ChangeName = async (event) => {
        event.preventDefault();

        ///je modifie en BDD
        UpdateInfos(store.getState().token, newFirstName, newLastName)

        ///je modifie state
        store.dispatch({ type: 'MODIFIER_PRENOM', payload: newFirstName });
        store.dispatch({ type: 'MODIFIER_NOM', payload: newLastName });

        setShowInputs(false);
    };

    return (
        <main className="main bg-dark padding-main">
            <div className="header">
                <h1>Welcome back<br /><span id="firstName">{store.getState().firstName}</span> <span id="lastName">{store.getState().lastName}!</span></h1>
                {showInputs ? (
                    <form onSubmit={ChangeName} id="update-modale">
                        <div>
                            <input type="text" id="newFirstName" className="input-update-field" name="newFirstName" placeholder={store.getState().firstName} onChange={(e) => setNewFirstName(e.target.value)} required />
                            <input type="text" id="newLastName" className="input-update-field" name="newLastName" placeholder={store.getState().lastName} onChange={(e) => setNewLastName(e.target.value)} required />
                        </div>
                        <div>
                            <button type="submit" className="btn-update-field">Save</button>
                            <button type="button" className="btn-update-field" onClick={CancelEditName}>
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <div id="edit-field">
                        <button className="edit-button" onClick={EditName}>Edit Name</button>
                    </div>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountInfoBar title="Argent Bank Checking (x8349)" amount="$2,082.79" />
            <AccountInfoBar title="Argent Bank Savings (x6712)" amount="$10,928.42" />
            <AccountInfoBar title="Argent Bank Credit Card (x8349)" amount="$184.30" />
        </main>
    )
}

export default Profil