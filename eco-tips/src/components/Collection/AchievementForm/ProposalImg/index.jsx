import PropTypes from 'prop-types';
import { useState } from 'react';

function ProposalImg({ onImageChange, title, base64Image }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="p-2 border border-opacity-50 border-gray-400 rounded">
      <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="image">Partagez une photo de votre réalisation</label>
      <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="file_input_help" id="image" type="file" onChange={handleImageChange} />
      <div className="flex items-center justify-center w-full h-36 bg-gray-300 rounded">
        {!base64Image ? (
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-200 w-12 h-12 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
          </svg>
        ) : (
          <img
            className="w-full h-32 object-contain"
            src={base64Image}
            alt={title}
          />
        )}
      </div>
    </div>
  );
}

ProposalImg.propTypes = {
  title: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  base64Image: PropTypes.string.isRequired,
};

export default ProposalImg;
