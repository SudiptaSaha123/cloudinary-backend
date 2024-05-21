import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [tags, setTags] = useState('');
    const [email, setEmail] = useState('');
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleTagsChange = (e) => {
        setTags(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('tags', tags);
        formData.append('email', email);
        formData.append('imageFile', file);

        try {
            await axios.post('http://localhost:4000/api/v1/upload/imageUpload', formData);
            // Optionally, you can reset the form fields after successful upload
            setFile(null);
            setName('');
            setTags('');
            setEmail('');
            setUploadStatus(response.data.message);
        } catch (error) {
            console.error(error);
            // Handle error if needed
            setUploadStatus('Something went wrong');

        }
    };

    return (
        <div>
            <h2>Image Upload</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Tags:</label>
                    <input type="text" value={tags} onChange={handleTagsChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Choose Image:</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                </div>
                <button type="submit">Upload</button>
            </form>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
}

export default ImageUpload;