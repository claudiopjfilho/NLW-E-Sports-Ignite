import logoImg from "./assets/Logo-esports-ignite.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white  font-black mt-20">
        Seu{" "}
        <span className="text-transparent  bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">
              League Of Legends
            </strong>

            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">
              League Of Legends
            </strong>

            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">
              League Of Legends
            </strong>

            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">
              League Of Legends
            </strong>

            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">
              League Of Legends
            </strong>

            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image7.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">
              League Of Legends
            </strong>

            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className=" bg-[#2a2634] px-8 py-6 mt-8  "></div>
      </div>
    </div>
  );
}

export default App;
