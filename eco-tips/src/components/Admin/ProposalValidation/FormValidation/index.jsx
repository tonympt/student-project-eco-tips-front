/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllTags, sendProposal } from '@/actions/collection';
// form components
import ProposalImg from '@/components/Admin/ProposalValidation/FormValidation/ProposalImg';
import ProposalTitle from '@/components/Admin/ProposalValidation/FormValidation/ProposalTitle';
import ProposalRating from '@/components/Admin/ProposalValidation/FormValidation/ProposalRating';
import ProposalDescription from '@/components/Admin/ProposalValidation/FormValidation/ProposalDescription';
import ProposalValue from '@/components/Admin/ProposalValidation/FormValidation/ProposalValue';
import AuthorForm from '@/components/Admin/ProposalValidation/FormValidation/AuthorForm';
import ErrorNotifications from '@/components/ErrorNotifications';
// Spinner component
import Spinner from '@/components/Spinner';
// SuccessNotifications component
import SuccessNotifications from '@/components/SuccessNotifications';

function FormValidation() {
  // fake data :
  const cardObject = {
    author: 'Laura Teur',
    description: 'fffffffffffffffffffffffffffffffffffffffff',
    economic_rating: 4,
    environmental_rating: 5,
    id: 63,
    image: 'cfdfffffffffffffffffffffff.png',
    tags: [
      {
        name: 'Numérique',
        color: '#6366f1',
      },
    ],
    title: 'cfdfffffffffffffffffffffff',
    value: 3,
  };

  // store
  const { successText } = useSelector((state) => state.success);
  // store
  const { tags: allTags } = useSelector((state) => state.collection);
  // state
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState(cardObject.tags);
  const [economyRating, setEconomyRating] = useState(cardObject.economic_rating);
  const [ecologyRating, setEcologyRating] = useState(cardObject.environmental_rating);
  const [valueInput, setValueInput] = useState(cardObject.value);
  const [imagePreview, setImagePreview] = useState('');
  const [base64Image, setBase64Image] = useState('');
  const [title, setTitle] = useState(cardObject.title);
  const [description, setDescription] = useState(cardObject.description);
  // hooks
  const dispatch = useDispatch();
  const location = useLocation();
  const handleImageChange = (imageData) => {
    setBase64Image(imageData);
  };
  useEffect(() => {
    dispatch(getAllTags());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (allTags.length > 0) {
      // Compare selectedTags with allTags and add missing ids
      const updatedSelectedTags = selectedTags.map((selectedTag) => {
        const matchingTag = allTags.find((tag) => tag.name === selectedTag.name);
        if (matchingTag) {
          return {
            name: selectedTag.name,
            id: matchingTag.id,
            color: matchingTag.color,
          };
        }
        return selectedTag;
      });
      // Filter allTags to remove tags already in selectedTags
      const filteredTags = allTags.filter((tag) => !updatedSelectedTags.some((selectedTag) => selectedTag.name === tag.name));

      // Set state
      setTags(filteredTags);
      setSelectedTags(updatedSelectedTags);
    }
  }, [loading, allTags]);

  function handleTags(event) {
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
  }

  const handleRemoveTag = (tagToRemove) => {
    // update selectedTags returning an array without the deleted tag
    setSelectedTags((prevSelectedTags) => prevSelectedTags.filter((tag) => tag.id !== tagToRemove.id));
    // update tags option with tag remove
    setTags((prevTags) => [...prevTags, tagToRemove]);
  };

  const onImagePreview = (image) => {
    setImagePreview(image);
  };
  // created formData for api
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
    // dispatch(sendProposal(formValues));
  };

  // reset form with initial state and DOM element
  const resetForm = () => {
    setSelectedTags([]);
    setTags([]);
    setEconomyRating(0);
    setEcologyRating(0);
    setTitle('');
    setBase64Image('');
    setImagePreview('');
    setValueInput(0);
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('economicrating').value = 0;
    document.getElementById('environmentalrating').value = 0;
  };

  useEffect(() => {
    if (successText) {
      resetForm();
      window.scroll(0, 0);
    }
  }, [successText, location]);

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
            <SuccessNotifications notification="Votre carte a bien été proposé, nous l'avons soumis à un Admin 😀" />
            <ProposalImg onImageChange={handleImageChange} onImagePreview={onImagePreview} />
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
            <AuthorForm author={cardObject.author} />
            <div className="flex items-center place-content-evenly py-2">
              <button type="submit" className="py-1 px-2 font-bold green-button green-button:hover button-active active:animate-buttonAnimation">
                Valider
              </button>
              <button type="button" onClick={resetForm} className="py-1 px-2 font-bold red-button red-button:hover button-active active:animate-buttonAnimation">
                Réinitialiser
              </button>
            </div>
          </div>

        </form>
        { imagePreview && (
        <div className="bg-white p-4 rounded-md shadow-md h-full w-1/4">
          <p className="text-xl font-bold mb-2 text-center">Prévisualisation de l'image :</p>
          <img src={imagePreview} alt="preview" />
        </div>
        )}
      </div>
    </>
  );
}

export default FormValidation;
