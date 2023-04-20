/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllTags } from '@/actions/collection';

function ProposalForm() {
  const { logged, firstname, lastname } = useSelector((state) => state.user);
  const { tags: allTags } = useSelector((state) => state.collection);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTags());
  }, [firstname]);

  // state
  const [tags, setTags] = useState([...allTags]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [economyRating, setEconomyRating] = useState(0);
  const [ecologyRating, setEcologyRating] = useState(0);
  const [valueInput, setValueInput] = useState('');
  const [base64Image, setBase64Image] = useState('');

  // display ratings value
  const handleEconomyRatingChange = (event) => {
    setEconomyRating(event.target.value);
  };
  const handleEcologyRatingChange = (event) => {
    setEcologyRating(event.target.value);
  };
  const handlevalueInput = (number) => {
    if (number >= 0 && number <= 20) {
      setValueInput(number);
    } else if (number < 1) {
      setValueInput(1);
    } else if (number > 20) {
      setValueInput(20);
    }
  };
  const decrement = () => {
    if (valueInput > 1) {
      setValueInput(valueInput - 1);
    }
  };

  const increment = () => {
    if (valueInput < 20) {
      setValueInput(valueInput + 1);
    }
  };

  const handleTags = (event) => {
    const idTag = event.target.value;
    // refuse more than 3 tags
    if (selectedTags.length < 4) {
      const selectedTagFound = tags.find((tag) => tag.id === Number(idTag));
      if (selectedTagFound) {
        // updates the display of the selected tags
        setSelectedTags((prevSelectedTags) => [
          ...prevSelectedTags,
          selectedTagFound,
        ]);
        // updates the display of tags on the selected
        const newTagsOptions = tags.filter((tag) => tag.id !== Number(idTag));
        setTags(newTagsOptions);
      }
    } else {
      alert('impossible de mettre + de 4 tags');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    // update selectedTags returning an array without the deleted tag
    setSelectedTags((prevSelectedTags) => prevSelectedTags.filter((tag) => tag.id !== tagToRemove.id));
    // update tags option with tag remove
    setTags((prevTags) => [...prevTags, tagToRemove]);
  };

  // reset form with initial state and DOM element
  const resetForm = () => {
    setSelectedTags([]);
    setTags([...allTags]);
    setEconomyRating(0);
    setEcologyRating(0);
    setBase64Image('');
    setValueInput(0);
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('economy_rating').value = 0;
    document.getElementById('ecology_rating').value = 0;
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBase64Image(reader.result);
      };
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    formValues.tags = selectedTags.map((tag) => tag.id);
    formValues.image = base64Image;
    console.log(formValues);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-2 text-center">Proposer votre carte</h1>
      <form
        className="w-full max-w-md mx-auto bg-white p-4 rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          {/* image input */}
          <div className="p-2 border border-opacity-50 border-gray-400 rounded">
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="image">Télécharger votre image</label>
            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="file_input_help" id="image" type="file" onChange={handleImageChange} />
            <p className="mt-1 text-sm text-gray-500" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
          </div>
          {/* title input */}
          <div className="p-2 border border-opacity-50 border-gray-400 rounded">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Titre</label>
            <textarea name="title" id="title" rows="1" className="block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Écrivez votre titre ici..." />
          </div>

          {/* tags input add */}
          <div className="p-2 border border-opacity-50 border-gray-400 rounded">
            <label
              htmlFor="tags"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Sélectioner une catégorie
            </label>
            <select
              id="tags"
              defaultValue="Choisir une catégorie"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleTags}
            >
              <option value="Choisir une catégorie" disabled>Choisir une catégorie</option>
              {tags.map((tag) => <option key={tag.id} value={tag.id}>{tag.title}</option>)}
            </select>
            <div className="flex flex-wrap gap-1 mt-2 mx-2">
              {selectedTags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex gap-1 text-bold text-white text-sm p-1 rounded"
                  style={{ backgroundColor: tag.color }}
                  value={selectedTags}
                  name="tags"
                >
                  {tag.title}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <div />
            <div className="flex flex-wrap gap-1 mt-2" />
          </div>

          {/* rating economy input */}
          <div className="p-2 border border-opacity-50 border-gray-400 rounded">
            <label htmlFor="economy_rating" className="block mb-2 text-sm font-medium text-gray-900">
              Note économique:
              {' '}
              {economyRating}
            </label>
            <input id="economy_rating" name="economy_rating" type="range" min="0" max="5" value={economyRating} step="1" className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer " onChange={handleEconomyRatingChange} />

            {/* rating ecology input */}
            <label htmlFor="ecology_rating" className="block mb-2 text-sm font-medium text-gray-900">
              Note écologique:
              {' '}
              {ecologyRating}
            </label>
            <input id="ecology_rating" name="ecology_rating" type="range" min="0" max="5" value={ecologyRating} step="1" className="h-2 bg-gray-200  appearance-none cursor-pointer" onChange={handleEcologyRatingChange} />
          </div>
          {/* description input */}
          <div className="p-2 border border-opacity-50 border-gray-400 rounded">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description :</label>
            <textarea name="description" id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Votre description..." />
          </div>
          {/* card number input */}
          <div className="p-2 border border-opacity-50 border-gray-400 rounded">
            <label htmlFor="value" className="mb-2 text-sm font-medium text-gray-900">
              Valeur :
            </label>
            <div className="flex flex-row w-1/3 rounded-lg relative bg-transparent mt-1 h-9">
              <button
                type="button"
                data-action="decrement"
                className="bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 rounded-l cursor-pointer border-opacity-50 border-gray-400"
                onClick={decrement}
              >
                <span className="m-auto text-xl">−</span>
              </button>
              <input
                type="number"
                min="1"
                max="20"
                className="bg-gray-50 hover:bg-gray-200 flec text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 cursor-pointer border-opacity-50 border-gray-400"
                id="value"
                name="value"
                value={valueInput}
                onChange={(event) => handlevalueInput(Number(event.target.value))}
              />
              <button
                type="button"
                data-action="increment"
                className="bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 rounded-r cursor-pointer border-opacity-50 border-gray-400"
                onClick={increment}
              >
                <span className="text-xl">+</span>
              </button>
            </div>
          </div>
          {/* author  */}
          <div className="p-2 border border-opacity-50 border-gray-400 rounded text-gray-500 text-xs">
            Par
            {' '}
          </div>

          <div className="flex items-center place-content-evenly py-2">
            <button type="submit" className="py-1 px-2 font-bold green-button green-button:hover button-active active:animate-buttonAnimation">
              Valider
            </button>
            <button type="button" onClick={resetForm} className="py-1 px-2 font-bold red-button red-button:hover button-active active:animate-buttonAnimation">
              Annuler
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProposalForm;
