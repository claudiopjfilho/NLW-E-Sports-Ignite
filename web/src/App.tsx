import { MagnifyingGlassPlus } from "phosphor-react";
import { GameBanner } from "./Components/GameBanner";


import logoImg from "./assets/Logo-esports-ignite.svg";
import CreateAdBanner from "./Components/CreateAdBanner";
import { useState } from "react";

function App() {
  
const [hasUserClickedOnButton, setHasUserClickedOnButton] = useState(false)

function handleButtonCLick() {
  setHasUserClickedOnButton(true)
}



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

<button onClick={handleButtonCLick}>

  Clique Aqui
</button>

{hasUserClickedOnButton ? 'Usuario clicou' : null}

      <GameBanner adsCount={4} bannerUrl={"../public/image1.png"} title={"LOL"} />
      <CreateAdBanner/>

    </div>
  );
}

export default App;
