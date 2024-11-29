import React, { useState } from 'react';

    const NewsSection = () => {
      const [activeTab, setActiveTab] = useState('Legal');

      const news = {
        Legal: [
          { title: 'Nueva Ley de THC', description: 'Descripción breve de la noticia.' },
          // Más noticias legales
        ],
        Recreacional: [
          { title: 'Uso Recreacional de CBD', description: 'Descripción breve de la noticia.' },
          // Más noticias recreacionales
        ],
        // Más categorías
      };

      return (
        <section className="news">
          <h2>Noticias</h2>
          <div className="tabs">
            {Object.keys(news).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
          <div className="news-cards">
            {news[activeTab].map((article, index) => (
              <div className="card" key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
    };

    export default NewsSection;
