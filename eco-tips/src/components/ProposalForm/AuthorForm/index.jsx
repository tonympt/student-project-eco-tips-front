import { useSelector } from 'react-redux';

function AuthorForm() {
  const { firstname, lastname } = useSelector((state) => state.user);
  return (
    <div className="p-2 border border-opacity-50 border-gray-400 rounded text-gray-500 text-xs">
      Par
      {` ${firstname} ${lastname}`}
    </div>
  );
}

export default AuthorForm;
