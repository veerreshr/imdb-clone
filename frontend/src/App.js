import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieListScreen from "./screens/MovieListScreen";
import EditScreen from "./screens/EditScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActorsListScreen from "./screens/ActorsListScreen";
import ProducersListScreen from "./screens/ProducersListScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Route path="/" exact component={MovieListScreen} />
        <Route path="/actors" exact component={ActorsListScreen} />
        <Route path="/producers" exact component={ProducersListScreen} />
        <Route path="/editMovie/:id" exact component={EditScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
