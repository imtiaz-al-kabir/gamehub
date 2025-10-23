import { use } from "react";
import GameCard from "../Components/GameCard";
import { DataContext } from "../Context/DataContext";

const Games = () => {
  const { games } = use(DataContext);
  return (
    <div className="py-10 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </div>
      {}
    </div>
  );
};

export default Games;
