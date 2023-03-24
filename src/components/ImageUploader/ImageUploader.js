import React, { useState } from 'react';

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      // Do something with the selected file, such as uploading it to a server
      console.log(selectedFile);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select an image:
        <input type="file" onChange={handleFileInputChange} />
      </label>
      <br />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploader;