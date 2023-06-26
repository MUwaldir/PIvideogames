
import { useSelector } from 'react-redux';
import "./Home.css";
function Home() {
  const videogames = useSelector((state) => state.VideoGames);

  return (
    <>
      <h1>Lista de videojuegos</h1>
    <div className="containerVideogames">
      {videogames.map((el) => (
        return <Card nombre={el.nombre} image={el.image}/>
      ))}
    </div>
    </>
  );
}

export default Home;