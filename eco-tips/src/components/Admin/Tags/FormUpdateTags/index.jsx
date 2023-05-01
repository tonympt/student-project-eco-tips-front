import { useEffect, useState } from 'react';
import ButtonsUpdate from '@/components/Admin/Tags/ButtonsUpdate';

function FormUpdateTags({ ...updateTag }) {
  const { id, name, color } = updateTag;
  const [textValue, setTextValue] = useState(name);
  const [currentColor, setCurrentColor] = useState(color);

  useEffect(() => {
    setTextValue(name);
    setCurrentColor(color);
  }, [name, color]);

  return (
    <form className="flex flex-col gap-8">
      <div className="flex gap-3 items-center">
        <textarea
          name="name"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          className="text-center min-w-[2rem] p-2 text-xs resize-none text-white font-bold w-48 rounded"
          style={{ backgroundColor: currentColor }}
          rows="1"
          maxLength="40"
        />
        <input
          type="color"
          name="color"
          value={currentColor}
          onChange={(e) => setCurrentColor(e.target.value)}
          className="cursor-pointer rounded border-none"
        />
      </div>
      <ButtonsUpdate id={id} color={currentColor} name={textValue} />
    </form>
  );
}

export default FormUpdateTags;
