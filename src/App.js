import './App.css';
import { useEffect, useState } from 'react'
import Dogs from "./components/Dogs/Dogs"
import Footer from "./components/Footer/Footer"

function App() {

  const [dogs, setDogs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchDogs();
  }, []);

  function fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/40')
      .then(response => response.json())
      .then(data => {
        setDogs([data])
        setLoading(false);
      });
  }

  const handleClick = (e) => {
    e.preventDefault()
    fetchDogs()
  }

  return (
    <div className="background center text-center bg-blue-100">
      <h1 className=" text-4xl md:text-6xl lg:text-8xl font-bold p-10 text-white ">
        Dogs! Dogs! Dogs!
      </h1>
      <button className="
      p-3 m-3 text-white  hover:text-2xl hover:bg-grdiant-to-r hover:from-yellow-300 hover:to-yellow-700 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:bg-gradient-to-t md:from-emerald-500 md:to-rose-500 md:mb-8 lg:bg-gradient-to-l lg:from-purple-500 lg:via-zinc-200 lg:to-slate-500 shadow-2xl"
        onClick={handleClick}>more pups!</button>
      <div className="flex flex-col items-center">
        <div className="columns-1 md:columns-3 lg:columns-5 lg:max-w-6xl mx-10 m-20">
          <Dogs dogs={dogs} isLoading={isLoading} />
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
