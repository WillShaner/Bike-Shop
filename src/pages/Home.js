import React, { useContext, useEffect } from 'react';
import '../style/Home.css';
import TopBikes from '../components/TopBikes';
import SearchBar from '../components/SearchBar';
import LandingSlider from '../components/LandingSlider';
import IMAGES from '../data/landingImages';
// import EmailSignUp from '../components/EmailSignUp';
import { CartContext } from '../context/CartContext';

function Home() {
  // const [welcomeUser, setWelcomeUser] = useState(false);
  // const [emailPopup, setEmailPopup] = useState(false);
  // const [effectRan, setEffectRan] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // eslint-disable-next-line consistent-return
  // useEffect(() => {
  //   if (!effectRan) {
  //     setTimeout(() => {
  //       setEmailPopup(true);
  //     }, 5000);

  //     return () => {
  //       setEffectRan(true);
  //     };
  //   }
  // }, []);
  const { openModal } = useContext(CartContext);

  // useEffect(() => {
  //   if (user) {
  //     setWelcomeUser(true);
  //     setTimeout(() => {
  //       setWelcomeUser(false);
  //     }, 3000);
  //   }
  // }, [user]);
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
      {/* {emailPopup && <EmailSignUp setEmailPopup={setEmailPopup} />} */}
    </main>
  );
}

export default Home;
