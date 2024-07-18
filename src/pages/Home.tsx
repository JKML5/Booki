import Header from '../components/layouts/Header';
import '../assets/css/normalize.css';
import '../assets/css/style.css';
import Footer from '../components/layouts/Footer';
import SearchSection from '../components/sections/SearchSection';
import HeroSection from '../components/sections/HeroSection';
import FilterSection from '../components/sections/FilterSection';
import AccomodationsSection from '../components/sections/AccomodationsSection';
import MostPopularSection from '../components/sections/MostPopularSection';
import ActivitiesSection from '../components/sections/ActivitiesSection';

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SearchSection />
        <FilterSection />
        <p className="info">
          <i className="fa-solid fa-info"></i>
          Plus de 500 logements sont disponibles dans cette ville
        </p>
        <div id="results_wrapper">
          <AccomodationsSection />
          <MostPopularSection />
        </div>
        <ActivitiesSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
