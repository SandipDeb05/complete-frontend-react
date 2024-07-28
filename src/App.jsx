import "./App.css";
import Basic from "./components/Basic";
import FormValidYup from "./components/FormValidYup";
import NewsletterForm from "./components/NewsletterForm";

function App() {
  return (
    <div className="container">
      <h1>Formik and Yup</h1>
      <FormValidYup />
    </div>
  );
}

export default App;
