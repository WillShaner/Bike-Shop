import React, { useContext, useEffect } from 'react';
import TopBikes from '../../components/TopBikes';
import SearchBar from '../../components/SearchBar';
import LandingSlider from '../../components/LandingSlider';
import IMAGES from '../../data/landingImages';
import EmailSignUp from '../../components/EmailSignUp';
import { CartContext } from '../../context/CartContext';
import './Home.css';

function Home() {
  // const [welcomeUser, setWelcomeUser] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // eslint-disable-next-line consistent-return

  const { openModal, emailPopup, setEmailPopup } = useContext(CartContext);

  return (
    <main className="d-flex align-items-center flex-column">
      {/* {welcomeUser
        && (
        <div className="welcome-banner">
          <h2>
            Welcome back,
            {' '}
            {user}
          </h2>
        </div>
        )} */}
      <SearchBar openModal={openModal} />
      <LandingSlider arr={IMAGES} />
      <TopBikes />
      {emailPopup && <EmailSignUp setEmailPopup={setEmailPopup} />}
    </main>
  );
}

export default Home;
