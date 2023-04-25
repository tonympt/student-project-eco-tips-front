/* eslint-disable max-len */
// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// Action creator to fetch
import { getAllTags, sendProposal } from '@/actions/collection';
// Form components
import ProposalImg from '@/components/ProposalForm/ProposalImg';
import ProposalTitle from '@/components/ProposalForm/ProposalTitle';
import ProposalRating from '@/components/ProposalForm/ProposalRating';
import ProposalDescription from '@/components/ProposalForm/ProposalDescription';
import ProposalValue from '@/components/ProposalForm/ProposalValue';
import AuthorForm from '@/components/ProposalForm/AuthorForm';
// Tools components
import Spinner from '@/components/Spinner';
import SuccessNotifications from '@/components/SuccessNotifications';
import ErrorNotifications from '@/components/ErrorNotifications';

function ProposalForm() {
  // Store
  const { isOpen } = useSelector((state) => state.success);
  const { tags: allTags } = useSelector((state) => state.collection);
  // STATE
  // State loading to fetch allTags
  const [loading, setLoading] = useState(true);
  // State input form
  const [base64Image, setBase64Image] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [description, setDescription] = useState('');
  const [economyRating, setEconomyRating] = useState(0);
  const [ecologyRating, setEcologyRating] = useState(0);
  const [valueInput, setValueInput] = useState(0);

  // Hooks
  const dispatch = useDispatch();
  const location = useLocation();
  // === HANDLE TAGS ===
  // Fetch allTags
  useEffect(() => {
    dispatch(getAllTags());
    setLoading(false);
  }, []);
  // set allTags
  useEffect(() => {
    if (allTags.length > 0) {
      setTags([...allTags]);
    }
  }, [loading, allTags]);
  // add Tags
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
  // Remove Tags
  const handleRemoveTag = (tagToRemove) => {
    // update selectedTags returning an array without the deleted tag
    setSelectedTags((prevSelectedTags) => prevSelectedTags.filter((tag) => tag.id !== tagToRemove.id));
    // update tags option with tag remove
    setTags((prevTags) => [...prevTags, tagToRemove]);
  };

  // Created formData for api
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    formValues.tags = selectedTags.map((tag) => tag.id);
    formValues.image = base64Image;
    dispatch(sendProposal(formValues));
  };

  // reset form with initial state and DOM element
  const resetForm = () => {
    setBase64Image('');
    setTitle('');
    setSelectedTags([]);
    setTags([]);
    setEconomyRating(0);
    setEcologyRating(0);
    setDescription('');
    setValueInput(0);
  };
  // Scroll on the top page
  useEffect(() => {
    if (isOpen) {
      resetForm();
      window.scroll(0, 0);
    }
  }, [isOpen, location]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-2 text-center">Proposer votre carte</h1>
      <div className="flex gap-5 justify-center">
        <form
          className="w-full max-w-md bg-white p-4 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <ErrorNotifications />
            <SuccessNotifications />
            <ProposalImg onImageChange={setBase64Image} />
            <ProposalTitle title={title} onChangeTitle={setTitle} />
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
                      name="tags"
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
                label="Note économique"
                name="economicrating"
                value={economyRating}
                onChange={setEconomyRating}
              />
              <ProposalRating
                label="Note environnementale"
                name="environmentalrating"
                value={ecologyRating}
                onChange={setEcologyRating}
              />
            </div>
            <ProposalDescription description={description} onChangeDescription={setDescription} />
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
        { base64Image && (
        <div className="bg-white p-4 rounded-md shadow-md h-full w-1/4">
          <p className="text-xl font-bold mb-2 text-center">Prévisualisation de l'image :</p>
          <img src={base64Image} alt="preview" />
        </div>
        )}
      </div>
    </>
  );
}

export default ProposalForm;
