import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// action creator
import { setAuthToken } from '@/actions/user';
// core components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BodyStyle from '@/components/BodyStyle';
import NotFoundPage from '@/components/NotFoundPage';
// collection component
import Collection from '@/components/Collection';
// authentification component
import SignIn from '@/components/Authentification/SignIn';
import SignUp from '@/components/Authentification/SignUp';

function App() {
  const { logged } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // checked if user is connected and update token to store
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setAuthToken(token));
    }
  }, []);

  return (
    <div>
      <Header />
      <BodyStyle>
        <Routes>
          <Route path="/" />
          <Route
            path="/sign-in"
            element={logged ? <Navigate to="/" /> : <SignIn />}
          />
          <Route
            path="/sign-up"
            element={logged ? <Navigate to="/" /> : <SignUp />}
          />
          {logged && <Route path="/collection" element={<Collection />} /> }
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BodyStyle>
      <Footer />
    </div>
  );
}

export default App;
