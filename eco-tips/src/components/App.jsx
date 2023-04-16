import { Routes, Route } from 'react-router-dom';

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
  return (

    <div>
      <Header />
      <BodyStyle>
        <Routes>
          <Route path="/" />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BodyStyle>
      <Footer />
    </div>
  );
}

export default App;
