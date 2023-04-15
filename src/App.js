import './styles/main.css';
import IntroHeroUnit from './components/IntroHeroUnit';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';
import { Fragment } from 'react';

const App = () => {
  return (
  <Fragment>
    <main id="mainAppWrapper">
        <IntroHeroUnit />
        <SignupForm />
    </main>
    <Footer />
  </Fragment>
  );
}

export default App;