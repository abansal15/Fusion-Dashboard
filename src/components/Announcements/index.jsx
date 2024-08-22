import React, { useState } from 'react';

const Announcements = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const containerStyle = {
        backgroundColor: '#e3f2fd',
        borderRadius: '15px',
        padding: '25px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100% - 300px)', 
        overflowY: 'hidden', 
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
    };

    const titleStyle = {
        fontSize: '1.8rem',
        marginBottom: '15px',
        color: '#0d47a1',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px #bbdefb',
    };

    const listStyle = {
        fontSize: '1.1rem',
        color: '#1e88e5',
        listStyleType: 'square',
        paddingLeft: '25px',
    };

    const popupStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#ffffff',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        width: '40vw', 
        height: '40vh', 
        overflowY: 'auto',
        transition: 'opacity 0.3s ease-in-out',
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(33, 150, 243, 0.5)',
        zIndex: 999,
        backdropFilter: 'blur(5px)',
    };

    const closeButtonStyle = {
        display: 'block',
        marginLeft: 'auto',
        marginTop: '-10px',
        marginBottom: '20px',
        cursor: 'pointer',
        fontSize: '1.4rem',
        color: '#e53935',
        border: 'none',
        background: 'none',
    };

    return (
        <>
            <div style={containerStyle} onClick={togglePopup}>
                <h2 style={titleStyle}>Important Updates</h2>
                <ul style={listStyle}>
                    <li>Check out the new feature!</li>
                    <li>Stay tuned for more...</li>
                </ul>
            </div>

            {isPopupVisible && (
                <>
                    <div style={overlayStyle} onClick={togglePopup}></div>
                    <div style={popupStyle}>
                        <button style={closeButtonStyle} onClick={togglePopup}>
                            &times;
                        </button>
                        <h2 style={titleStyle}>Important Updates</h2>
                        <ul style={listStyle}>
                            <li>Check out the new feature!</li>
                            <li>Stay tuned for more...</li>
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default Announcements;
