import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-booki.png';

const Header: React.FC = () => {
  return (
    <header>
      <Link to="#" title="Accueil">
        <img src={logo} alt="Booki" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="#accomodations" title="Hébergements">
              Hébergements
            </Link>
          </li>
          <li>
            <Link to="#activities" title="Activités">
              Activités
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
