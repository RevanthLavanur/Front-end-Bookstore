import React from 'react';
import BookLogo from '../components/Images/BookStore.jpg';
import '../components/Book.css';
import Footer from '../Footer';

const LandingPage = () => {
    return (
        <div>
            
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h1 style={{ fontSize: "48px", color: "#333" }}>Welcome to the Bookstore Application</h1>
                <img src={BookLogo} style={{ width: "400px", height: "400px" }} alt="BookImage" />
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
