/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTags, sendProposal } from '@/actions/collection';
// form components
import ProposalImg from '@/components/ProposalForm/ProposalImg';
import ProposalTitle from '@/components/ProposalForm/ProposalTitle';
import ProposalRating from '@/components/ProposalForm/ProposalRating';
import ProposalDescription from '@/components/ProposalForm/ProposalDescription';
import ProposalValue from '@/components/ProposalForm/ProposalValue';
import AuthorForm from '@/components/ProposalForm/AuthorForm';
import ErrorNotifications from '@/components/ErrorNotifications';
// Spinner component
import Spinner from '@/components/Spinner';

function ProposalForm() {
  // store
  const { tags: allTags } = useSelector((state) => state.collection);
  // state
  const [base64Image, setBase64Image] = useState('');
  const [tags, setTags] = useState([...allTags]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [economyRating, setEconomyRating] = useState(0);
  const [ecologyRating, setEcologyRating] = useState(0);
  const [valueInput, setValueInput] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleImageChange = (imageData) => {
    setBase64Image(imageData);
  };

  useEffect(() => {
    dispatch(getAllTags());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (allTags.length > 0) {
      setTags([...allTags]);
    }
  }, [loading, allTags]);

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
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    // update selectedTags returning an array without the deleted tag
    setSelectedTags((prevSelectedTags) => prevSelectedTags.filter((tag) => tag.id !== tagToRemove.id));
    // update tags option with tag remove
    setTags((prevTags) => [...prevTags, tagToRemove]);
  };
  // created formData for api
  const handleSubmit = (event) => {
    event.preventDefault();
    // if (selectedTags.length === 0) {
    //   alert('Veuillez sélectionner au moins une catégorie.');
    //   return;
    // }
    const formData = new FormData(event.target);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    formValues.tag = selectedTags.map((tag) => tag.id);
    formValues.image = base64Image;
    console.log(formValues);
    dispatch(sendProposal(formValues));
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

  return (
    <>
      <h1 className="text-2xl font-bold mb-2 text-center">Proposer votre carte</h1>
      <form
        className="w-full max-w-md mx-auto bg-white p-4 rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <ErrorNotifications />
          <ProposalImg onImageChange={handleImageChange} />
          <ProposalTitle />
          {/* handle Tags */}
          { loading ? (<Spinner />) : (
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
                {tags.map((tag) => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
              </select>
              <div className="flex flex-wrap gap-1 mt-2 mx-2">
                {selectedTags.map((tag) => (
                  <div
                    key={tag.id}
                    className="flex gap-1 text-bold text-white text-sm p-1 rounded"
                    style={{ backgroundColor: tag.color }}
                    value={selectedTags}
                  >
                    {tag.name}
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
          )}

          {/* ratings input */}
          <div className="p-2 border border-opacity-50 border-gray-400 rounded">
            <ProposalRating
              label="economicrating"
              value={economyRating}
              onChange={setEconomyRating}
            />
            <ProposalRating
              label="environmentalrating"
              value={ecologyRating}
              onChange={setEcologyRating}
            />
          </div>
          <ProposalDescription />
          <ProposalValue value={valueInput} onValueChange={setValueInput} />
          <AuthorForm />
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
