/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// card component
import Card from '@/components/Card';
import Spinner from '@/components/Spinner';
import ButtonsControls from '@/components/Admin/ProposalValidation/ButtonsControls';
import SuccessNotifications from '@/components/SuccessNotifications';
// action creator
import { getAllProposals } from '@/actions/admin';

function ProposalValidation() {
  const dispatch = useDispatch();
  // Faire la vérification du role qui est = à 1 dans le useEffect
  // const { role } = useSelector((state) => state.user);
  const { proposals } = useSelector((state) => state.admin);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllProposals());
    setLoading(false);
  }, []);

  return (
    <>
      <div className="flex flex-col text-center my-3">
        <h1 className="text-2xl font-bold mb-6 text-center">Espace admnistrateur</h1>
        <h2 className="text-md mb-6 text-center">Gérer les propositions des nouvelles cartes</h2>
      </div>
      <div className="mx-auto bg-white p-8 rounded-md shadow-md">
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-wrap gap-3 m-6">
            {proposals.map((card) => (
              <div key={card.id} className="md:w-1/6">
                <Card {...card}>
                  <ButtonsControls {...card} />
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ProposalValidation;
