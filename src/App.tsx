import React, { useState } from 'react';
import { Play, Info, Bell, Search, ChevronDown } from 'lucide-react';

// Mock data for movies
const movies = {
  trending: [
    { id: 1, title: "Stranger Things", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500" },
    { id: 2, title: "The Crown", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500" },
    { id: 3, title: "Dark", image: "https://images.unsplash.com/photo-1618945524163-32451704cbb8?w=500" },
    { id: 4, title: "Bridgerton", image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=500" },
  ],
  popular: [
    { id: 5, title: "Money Heist", image: "https://images.unsplash.com/photo-1615986201152-7686a4867f30?w=500" },
    { id: 6, title: "Wednesday", image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500" },
    { id: 7, title: "Squid Game", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500" },
    { id: 8, title: "The Witcher", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500" },
  ]
};

function MovieRow({ title, movies }: { title: string; movies: typeof movies.trending }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-none w-64 transform hover:scale-105 transition-transform duration-200">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-36 object-cover rounded-md"
            />
            <p className="text-white mt-2">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed w-full z-50 flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black to-transparent">
      <div className="flex items-center space-x-8">
        <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">TV Shows</a>
          <a href="#" className="text-white hover:text-gray-300">Movies</a>
          <a href="#" className="text-white hover:text-gray-300">New & Popular</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="w-6 h-6 text-white cursor-pointer" />
        <Bell className="w-6 h-6 text-white cursor-pointer" />
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
            alt="Profile"
            className="w-8 h-8 rounded"
          />
          <ChevronDown className="w-4 h-4 text-white" />
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1600"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        </div>
        
        <div className="relative pt-48 px-8">
          <h1 className="text-6xl font-bold text-white mb-4">Stranger Things</h1>
          <p className="text-white text-lg max-w-xl mb-8">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center px-8 py-2 bg-white rounded-md hover:bg-gray-200 transition-colors"
            >
              <Play className="w-6 h-6 mr-2" />
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button className="flex items-center px-8 py-2 bg-gray-500 bg-opacity-70 text-white rounded-md hover:bg-opacity-60 transition-colors">
              <Info className="w-6 h-6 mr-2" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Movie Sections */}
      <div className="px-8 -mt-32 relative z-10">
        <MovieRow title="Trending Now" movies={movies.trending} />
        <MovieRow title="Popular on Netflix" movies={movies.popular} />
      </div>
    </div>
  );
}

export default App;