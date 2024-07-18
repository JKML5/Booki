import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="content">
        <ul>
          <li>A propos</li>
          <li>
            <a href="#">Fonctionnement du site</a>
          </li>
          <li>
            <a href="#">Conditions générales de vente</a>
          </li>
          <li>
            <a href="#">Données et confidentialité</a>
          </li>
        </ul>
        <ul>
          <li>Nos hébergements</li>
          <li>
            <a href="#">Charte qualité</a>
          </li>
          <li>
            <a href="#">Soumettre votre hôtel</a>
          </li>
        </ul>
        <ul>
          <li>Assistance</li>
          <li>
            <a href="#">Nous contacter</a>
          </li>
          <li>
            <a href="#">Centre d'aide</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
