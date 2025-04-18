import { useNavigate } from "react-router-dom";
import logo from "../../assets/ekanwe-logo.png";
import usingLaptop from "../../assets/characterWorkingOnLaptop.png";

export default function LoginOrConnect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1A2C24] relative flex flex-col items-center justify-between p-6">
      <div className="w-full text-white text-xs mb-4">
        Une communauté qui offre ensemble une visibilité qui circule. <br />
        Rejoins le mouvement EKANWE.
      </div>
      <div className="relative w-[95%] bg-[#1A2C24] rounded-2xl border-2 border-[#aec9b6] p-8 pb-6 text-white z-10 mb-8">
        <img src={logo} alt="Ekanwe" className="w-24 mb-4" />
        <p className="text-xs mb-6">
          Ton contenu a de la valeur. Échange-le contre des offres locales. Inscris-toi gratuitement.
        </p>
        <button className="w-full text-xs rounded-xl border border-[#aec9b6] p-2 mb-6"
        onClick={() => navigate("/login")}
        >
          CONNEXION
        </button>
        <p className="text-xs text-center">
          Ou ?{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-bold underline"
          >
            S'inscrire
          </button>
        </p>
      </div>

      <img
        src={usingLaptop}
        alt="Character"
        className="w-40 absolute"
        style={{
          bottom: "250px",
          left: "30px",
          zIndex: 0,
        //   transform: "scaleX(-1)",
        }}
      />
    </div>
  );
}
