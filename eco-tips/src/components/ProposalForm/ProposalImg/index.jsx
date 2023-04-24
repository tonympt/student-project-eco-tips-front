import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ProposalImg({ onImageChange, onImagePreview }) {
  const [img, setImg] = useState('');
  useEffect(() => {
    onImagePreview(img);
  }, [img]);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result);
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="p-2 border border-opacity-50 border-gray-400 rounded">
      <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="image">Télécharger votre image</label>
      <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="file_input_help" id="image" type="file" onChange={handleImageChange} />
      <p className="mt-1 text-sm text-gray-500" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
    </div>
  );
}

ProposalImg.propTypes = {
  onImageChange: PropTypes.func.isRequired,
  onImagePreview: PropTypes.func.isRequired,
};

export default ProposalImg;
