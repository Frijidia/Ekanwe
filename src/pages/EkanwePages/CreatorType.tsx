import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/ekanwe-logo.png";
import character from "../../assets/character.png";

export default function CreatorType() {
  const navigate = useNavigate();
/*bg-[#1D2B20]*/
  useEffect(() => {
  }, [navigate]);

  return (
    <div className="min-h-screen  bg-[#1A2C24] flex flex-col justify-end items-center relative overflow-hidden">
      <img
        src={character}
        alt="Character"
        className="w-40 absolute"
        style={{
          bottom: "280px",
          left: " 30px",
          zIndex: 0,
          transform: "scaleX(-1)",
        }}
      />

      <div className="w-[95%] bg-[#1A2C24] rounded-2xl border-2 border-[#aec9b6] p-8 pb-8 text-white z-10 mb-8 relative">
        <h1 className="text-2xl font-bold mb-9">Créateurs de contenu</h1>
        <p className="text-sm mb-11">
          Tu crées du contenu ? Collabore avec des commerces locaux et rejoins les créateurs en vogue
        </p>

        <div className="flex space-x-2 mb-9">
          <span className="flex-1 h-1 bg-gray-500 rounded-full"></span>
          <span className="flex-1 h-1 bg-white rounded-full"></span>
          <span className="flex-1 h-1 bg-gray-500 rounded-full"></span>
        </div>

        <div className="flex items-center justify-between">
          <img src={logo} alt="Ekanwe" className="w-24" />
          <button
              onClick={() => navigate('/concept')}
              className="w-10 h-10 flex items-center justify-center bg-ekanwe-orange rounded-full text-white"
            >
              →
            </button>
        </div>
      </div>
    </div>
  );
}
