function DelayButtons() {
  return (
    <div className="flex flex-wrap justify-between gap-2 m-2">
      <button type="button" className="w-[48%] py-1 px-2 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation">
        1 semaine
      </button>
      <button type="button" className="w-[48%] py-1 px-2 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation">
        2 semaines
      </button>
      <button type="button" className="w-[48%] py-1 px-2 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation">
        1 mois
      </button>
      <button type="button" className="w-[48%] py-1 px-2 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation">
        3 mois
      </button>
    </div>
  );
}

export default DelayButtons;
