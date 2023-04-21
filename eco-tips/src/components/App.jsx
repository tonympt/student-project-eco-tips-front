import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// action creator
import { setAuthToken, fetchProfileData } from '@/actions/user';
// core components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BodyStyle from '@/components/BodyStyle';
import NotFoundPage from '@/components/NotFoundPage';
import ProfilePage from '@/components/ProfilePage';
import ProposalForm from '@/components/ProposalForm';
// collection component
import Collection from '@/components/Collection';
// authentification component
import SignIn from '@/components/Authentification/SignIn';
import SignUp from '@/components/Authentification/SignUp';
// spinner component
import Spinner from '@/components/Spinner';

function App() {
  const { logged } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [hasTokenSent, setHasTokenSent] = useState(true);

  // checked if user is connected and update token to store
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setAuthToken(token));
      dispatch(fetchProfileData());
      setHasTokenSent(false);
    } else {
      setHasTokenSent(false);
    }
  }, []);

  return (
    <div>
      <Header />
      { hasTokenSent ? (<Spinner />) : (
        <BodyStyle>
          <Routes>
            {logged && <Route path="/profile" element={<ProfilePage />} />}
            <Route
              path="/sign-in"
              element={logged ? <Navigate to="/" /> : <SignIn />}
            />
            <Route
              path="/sign-up"
              element={logged ? <Navigate to="/" /> : <SignUp />}
            />
            {logged && <Route path="/collection" element={<Collection />} /> }
            {logged && <Route path="/me/proposal" element={<ProposalForm />} />}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BodyStyle>
      )}
      <Footer />
    </div>
  );
}

export default App;
