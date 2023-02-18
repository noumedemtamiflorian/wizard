// Importer le fichier App.css
import "./App.css";
// Importer le fichier bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Importer le composant WizardForm
import WizardForm from "./components/WizardForm";

// Déclarer la fonction App
function App() {
  // Retourner le code Jsx
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <WizardForm />
    </div>
  );
}

// Exporter le composant App
export default App;
