import React, { useState, useEffect } from 'react';

const FileList = () => {
    const [files, setFiles] = useState([]);

    // Fetch the uploaded files from the server
    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await fetch('http://localhost:5000/files');
                if (response.ok) {
                    const fileList = await response.json();
                    setFiles(fileList);
                } else {
                    console.error('Error fetching files');
                }
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        };

        fetchFiles();
    }, []);

    return (
        <div className="file-list-container">
            <h3>Uploaded Files</h3>
            {files.length > 0 ? (
                <ul className="file-list">
                    {files.map((file) => (
                        <li key={file.id} className="file-item">
                            <div className="file-info">
                                <strong>Name:</strong> {file.filename} <br />
                                <strong>Date:</strong> {new Date(file.upload_date).toLocaleDateString()}
                            </div>
                            <div className="file-preview">
                                {/* Check if the file is an image */}
                                {file.filename.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                                    <img src={`http://localhost:5000/${file.file_path}`} alt={file.filename} className="file-image" />
                                ) : (
                                    <span>No Preview</span> // For non-image files like PDF
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No files uploaded yet.</p>
            )}
        </div>
    );
};

export default FileList;
