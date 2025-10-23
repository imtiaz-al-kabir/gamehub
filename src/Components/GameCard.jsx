import { Link } from "react-router";

const GameCard = ({ game }) => {
  const { id, title, coverPhoto, ratings, category, developer, downloadLink } =
    game;
  return (
    <Link to={`/games/${id}`} >
      <div className="bg-[#0e0e10] border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-600/40 hover:scale-[1.03] transition-all duration-300">
        <div className="relative">
          <img
            src={coverPhoto}
            alt={title}
            className="w-full h-52 object-cover"
          />
          <div className="absolute top-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded-lg">
            ⭐ {ratings}
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-orbitron font-bold text-white mb-2">
            {title}
          </h2>
          <p className="text-gray-400 text-sm mb-3">
            {game.description.slice(0, 80)}...
          </p>

          <div className="flex justify-between items-center text-sm mb-3">
            <span className="text-red-500 font-semibold">{category}</span>
            <span className="text-gray-400">{developer}</span>
          </div>

          <Link
            to={downloadLink}
            target="_blank"
            className="block text-center bg-gradient-to-r from-red-600 to-red-400 text-white py-2 rounded-lg font-semibold hover:from-red-500 hover:to-pink-500 transition-all duration-300"
          >
            Download Now
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
