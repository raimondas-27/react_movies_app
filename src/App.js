import './App.css';
import MovieTable from "./components/movieTable"
import Header from "./components/header";
// import Footer from "./components/footer";

function App() {
   return (
       <div className="App">
          <Header/>
          <MovieTable/>
          {/*<Footer/>*/}
       </div>
   );
}

export default App;
