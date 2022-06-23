import Nav from './App/components/Nav';
import Hero from './App/components/Hero';
import MovieList from "./App/components/MovieList/index";

function App() {
  return (
    <div className='bg-gray-900 min-h-screen'>
    <div className='max-w-5xl mx-auto px-5'>
    <Nav/>
    <Hero/>
    <MovieList 
    title="Top rated Movie 🔥" 
    filter="sorty_by=rating"
    carousel={true}
    />
    <MovieList 
    title="Action 🔫" 
    filter="genre=action"
    />
    <MovieList 
    title="Thriller 🤺" 
    filter="genre=thriller"
    />
     <MovieList 
    title="Drama 🧺" 
    filter="genre=drama"
    />
     <MovieList 
    title="Romance🌹" 
    filter="genre=romance"
    />
     <div className='text-gray-400 text-center py-2'>Build with by 😊 <a className="underline" href="https://www.linkedin.com/in/morshidul-rahman-03b57620a/">Morshidul Rahman</a></div>
    </div>
    </div>
  );
}

export default App;
