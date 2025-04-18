import { useNavigate } from "react-router-dom";
import commercant from "../../assets/commercant.png";
import influenceur from "../../assets/influenceur.png";

export default function Connection() {
const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#1A2C24] flex flex-col justify-between items-center overflow-hidden py-8">
      <div className="relative w-full flex justify-center mb-6">
        <img
          src={commercant}
          alt="Commerçant"
          className="w-4/5 max-w-md h-auto rounded-xl"
        />
        <button
          className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 bg-white/10 text-white text-sm  px-11 py-2 rounded-md backdrop-blur-md shadow-md border border-white/30"
          onClick={() => navigate("/loginOrconnect")}
        >
          COMMERCANT
        </button>
      </div>

      <div className="relative w-full flex justify-center mb-6">
        <img
          src={influenceur}
          alt="Influenceur"
          className="w-4/5 max-w-md h-auto rounded-xl"
        />
        <button
          className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 bg-white/10 text-white text-sm px-11 py-2 rounded-md backdrop-blur-md shadow-md border border-white/30"
          onClick={() => navigate("/loginOrconnect")}
        >
          INFLUENCEUR
        </button>
      </div>
    </div>
  );
}
