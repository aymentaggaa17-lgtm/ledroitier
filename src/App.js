import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <span className="logo-mark">L</span>
          <span className="logo-text">EDROITIER</span>
        </div>

        <nav>
          <a href="#rapports-rejets">Rapports Rejets</a>
        </nav>
      </header>

      <main>
        <section id="rapports-rejets" className="section">
          <h1>Rapports Rejets</h1>
          <p>
            Visualisation Power BI basée sur la requête de rejets Oracle.
          </p>

          <div className="report-container">
            <iframe
              title="Rapport Rejets"
              src="COLLE_ICI_L_URL_SRC_DU_IFRAME_POWER_BI"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
