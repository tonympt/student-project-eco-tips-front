/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import { useRef, useEffect, useState } from 'react';
import { Accordion } from 'flowbite';
import PropTypes from 'prop-types';

function AccordionTemplate({ items, options, width }) {
  const accordionRef = useRef();
  // const [accordion, setAccordion] = useState();

  useEffect(() => {
    if (accordionRef.current) {
      const accordionItems = items.map((item) => ({
        id: item.id,
        triggerEl: accordionRef.current.querySelector(`#${item.id}`),
        targetEl: accordionRef.current.querySelector(`#${item.bodyId}`),
        active: item.active,
      }));

      const accordionInstance = new Accordion(accordionItems, options);
      // setAccordion(accordionInstance);
    }
  }, [accordionRef, items, options]);

  return (
    <div ref={accordionRef} id="accordion-collapse" data-accordion="collapse">
      {items.map((item) => (
        <>
          <h2 id={item.id}>
            <button
              type="button"
              className="flex justify-between text-lg p-2 shadow-md text-white font-extrabold bg-gradient-to-r to-green-400 from-emerald-600 border-b-4 border-green-500 rounded-t-lg w-full"
              data-accordion-target={`#${item.bodyId}`}
              aria-expanded={item.active}
              aria-controls={item.bodyId}
            >
              <span>{item.title}</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </h2>
          <div id={item.bodyId} className={item.active ? '' : 'hidden'} aria-labelledby={item.id}>
            {item.content}
          </div>
        </>
      ))}
    </div>
  );
}

AccordionTemplate.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      bodyId: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      active: PropTypes.bool,
    }),
  ).isRequired,
  options: PropTypes.shape({
    alwaysOpen: PropTypes.bool,
    activeClasses: PropTypes.array,
    inactiveClasses: PropTypes.array,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onToggle: PropTypes.func,
  }),
  width: PropTypes.string,
};

AccordionTemplate.defaultProps = {
  options: {},
  width: null,
};

export default AccordionTemplate;
