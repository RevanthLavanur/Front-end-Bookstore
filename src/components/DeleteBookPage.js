import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Footer';

const DeleteBookPage = () => {
    const [bookId, setBookId] = useState('');

    const handleDeleteBook = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`https://boo-store-project-1.onrender.com/bookstore/api/books/${bookId}`);
            alert('Book deleted successfully!');
            setBookId('');
        } catch (error) {
            console.error('Error deleting book:', error);
            alert('Error deleting book. Please try again.');
        }
    };

    return (
      <div id="Book_Container">
            <h1 id="form_heading">Delete Book</h1>
            <form id="form" onSubmit={handleDeleteBook}>
                <label id="formlabel_1">
                    Book ID:
                    </label><br/>
                    <input type="text" className='forminputtype' value={bookId} onChange={e => setBookId(e.target.value)} /><br/>           
               
                <button type="submit" className='forminputtype'>Delete Book</button><br/>
            </form>
            <Footer />
        </div>

    );
};

export default DeleteBookPage;
