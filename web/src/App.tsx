import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import logoImg from "./assets/Logo-esports-ignite.svg";

import { GameBanner } from "./Components/GameBanner";
import CreateAdBanner from "./Components/CreateAdBanner";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then(response => response.json())
      .then(data => {
        setGames(data);
      });
  }, []);

  return (
    <div className="xl:max-w-3xl 2xl:max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white  font-black mt-20">
        Seu{" "}
        <span className="text-transparent  bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              adsCount={game._count.ads}
              bannerUrl={game.bannerUrl}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/80 inset-0 fixed" />
          <Dialog.Content>
            <Dialog.Title>Publique um anúncio</Dialog.Title>

            <Dialog.Content>fowlkipwfojkwfpokjfw</Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
