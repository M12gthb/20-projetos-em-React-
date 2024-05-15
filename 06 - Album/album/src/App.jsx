import FotoAmpliada from "./components/FotoAmpliada";
import FotoList from "./components/FotoList";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fotos, setFotos] = useState([]);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [activateSearch, setActivateSearch] = useState(false);

  const fetchData = async ({ query, categoria }) => {
    const apiKey = import.meta.env.VITE_UNPLASH_API_KEY;

    // if (query || categoria) {
    //   let searchQuery = query;

    //   if (query || categoria) {
    //     searchQuery = `${query} ${categoria}`;
    //   } else if (categoria) {
    //     searchQuery = categoria;
    //   }
    //   const response = await axios.get(
    //     `https://api.unsplash.com/search/photos`,
    //     {
    //       params: {
    //         client_id: apiKey,
    //         count: searchQuery,
    //       },
    //     }
    //   );

    //   setFotos(response.data.results);
    // }

    // const response = await axios.get(`https://api.unsplash.com/photos/random`, {
    //   params: {
    //     client_id: apiKey,
    //     count: 10,
    //   },
    // });

    // setFotos(response.data);

    if (query || categoria) {
      let searchQuery = query;

      // Combina query com categoria se ambas existirem
      if (query && categoria) {
        searchQuery = `${query} ${categoria}`;
      } else if (categoria) {
        searchQuery = categoria;
      }

      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query: searchQuery,
              client_id: apiKey,
            },
          }
        );
        if (response.status === 200 && response.data && response.data.results) {
          setFotos(response.data.results);
        }
      } catch (error) {
        console.error("Ocorreu um erro ao buscar as fotos: ", error);
      }
      return;
    }

    // Se não tiver nem query nem categoria, busca fotos aleatórias
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random`,
        {
          params: {
            client_id: apiKey,
            count: 10,
          },
        }
      );
      if (response.status === 200 && response.data) {
        setFotos(response.data);
      }
    } catch (error) {
      console.error("Ocorreu um erro ao buscar as fotos aleatórias: ", error);
    }
  };

  useEffect(() => {
    fetchData(query, categoria);
  }, []);

  useEffect(() => {
    if (activateSearch) {
      fetchData({ query, categoria });
      setActivateSearch(false);
    }
  }, [activateSearch]);

  return (
    <div className="Container">
      <SearchBar
        setQuery={setQuery}
        setCategoria={setCategoria}
        setActivateSearch={setActivateSearch}
      />
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />
      {fotoAmpliada && (
        <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />
      )}
    </div>
  );
}

export default App;
