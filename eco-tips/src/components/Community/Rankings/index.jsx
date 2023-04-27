import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Spinner from '@/components/Spinner';

function Rankings() {
  const { token } = useSelector((state) => (state.user));
  const [rankingScore, setRankingScore] = useState('');
  const [rankingCreation, setRankingCreation] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;
  const getMedalEmoji = (index) => {
    switch (index) {
      case 0:
        return '🥇';
      case 1:
        return '🥈';
      case 2:
        return '🥉';
      default:
        return index + 1;
    }
  };
  useEffect(() => {
    axios
      .get(`${apiUrl}/ranking/score`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setRankingScore(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${apiUrl}/ranking/creation`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setRankingCreation(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);
  return (
    <div className="bg-white p-8 rounded-md shadow-md flex-col inline-flex">
      <h1 className="text-l font-bold inline-flex mb-3">
        <span className="border-b-4 border-green-500 text-xl">Classements</span>
      </h1>
      <div className="flex flex-wrap gap-8">
        {rankingScore ? (
          <div className="flex flex-col">
            <h2 className="inline-flex mb-1">
              <span className="text-sm italic">Classement par Score</span>
            </h2>
            <div className="relative overflow-x-auto rounded-lg shadow-md">
              <table className="text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-2 py-3">
                      Rang
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Utilisateur
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rankingScore.map((ranking, index) => (
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                        {getMedalEmoji(index)}
                      </th>
                      <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {ranking.user}
                      </th>
                      <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                        {ranking.score}
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
        {rankingCreation ? (
          <div className="flex flex-col">
            <h2 className="inline-flex mb-1">
              <span className="text-sm italic">Classement par nombre de cartes créées</span>
            </h2>
            <div className="relative overflow-x-auto rounded-lg shadow-md">
              <table className="text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-2 py-3">
                      Rang
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Utilisateur
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Nombre de cartes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rankingCreation.map((ranking, index) => (
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                        {getMedalEmoji(index)}
                      </th>
                      <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {ranking.user}
                      </th>
                      <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                        {ranking.cards_created}
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Rankings;
