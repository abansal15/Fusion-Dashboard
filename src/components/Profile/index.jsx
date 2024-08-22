import React, { useState } from 'react';
import profilePic from '../../assets/profile.webp'; // Adjust the path as needed

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
        background: '#D3B7F5', // Updated color similar to the uploaded image
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        textAlign: 'center',
    };

    const profilePicStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
    };

    const profileNameStyle = {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#000', // Text color white for better contrast against the background
    };

    const profileDetailsStyle = {
        fontSize: '1rem',
        color: '#000', // Light text color for better readability
        lineHeight: '1.6',
    };

    const modalOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '150%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    };

    const modalContentStyle = {
        backgroundColor: '#000',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        position: 'relative',
        maxWidth: '500px',
        width: '80%',
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '1.5rem',
        color: '#333',
        cursor: 'pointer',
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div style={containerStyle}>
            <img
                src={profilePic}
                alt="Profile"
                style={profilePicStyle}
                onClick={handleImageClick}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <h1 style={profileNameStyle}>Ajay</h1>
            <div style={profileDetailsStyle}>
                <p>ID: 22BCS017</p>
                <p>Email: 22bcs017@iiitdmj.ac.in</p>
                <p>Degree: BTECH</p>
                <p>Semester: V</p>
            </div>

            {isModalOpen && (
                <div style={modalOverlayStyle} onClick={() => setIsModalOpen(false)}>
                    <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                        <button style={closeButtonStyle} onClick={() => setIsModalOpen(false)}>
                            &times;
                        </button>
                        <img
                            src={profilePic}
                            alt="Profile"
                            style={{ ...profilePicStyle, width: '150px', height: '150px' }}
                        />
                        <h2 style={profileNameStyle}>Ajay</h2>
                        <div style={profileDetailsStyle}>
                            <p>ID: 22BCS017</p>
                            <p>Email: 22bcs017@iiitdmj.ac.in</p>
                            <p>Degree: BTECH</p>
                            <p>Semester: V</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
