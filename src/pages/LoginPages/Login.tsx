import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/ekanwe-logo.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    mail: "",
    motdepasse: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/766b/e8b9/25ea265fc6d5c0f04e3e93b27ecd65cb?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EsyWng5rz5MuEwYQEk01lU7LKsfv2EWoe-0bq8GtYOwvCr3abuoIOUk5UIU3it2DcnrX49Xu~~t-IdgxVen0GevBunbegAqHR-Jki-XrC1EnR84TWM8CrfsNvORud11qi3me9rQJIApdEysnnnPqTq4wtpdrQF9Tho0kRwj7r4IJOftLpWgG4ktpqP2iCobbbxs1KxnwQ7328NMqGPkUlWZ~TPbIg4oFsIzp8xDvk-c3TXJvy8UqR96LNu5zX1BNr~~VsdBcufw5AO8sOty0qgnylO6Lfr0dN-bWqe9zDc~e6PfZRxRupZ-t3vGrHT-KpU3Y0C~pK11-xCM4Tug1rw__')",
      }}
    >
      <div className="bg-[#1A2C24] bg-opacity-l70 text-white px-4 py-4 w-11/12 max-w-md rounded-lg shadow-lg">
        <div className="text-sm text-right"></div>

        <div className="text-center flex flex-col items-center mb-6">
          <img src={logo} alt="Ekanwe logo" className="w-36 mb-6" />
          <p className="text-sm tracking-widest text-gray-300 mb-6">Bienvenue</p>
          <h2 className="text-3xl font-bold">Connexion</h2>
        </div>

        <form className="flex flex-col gap-8">
          <input
            type="email"
            name="mail"
            placeholder="Mail"
            onChange={handleChange}
            className="bg-transparent border border-white rounded-md px-4 py-2.5 text-sm"
          />
          <input
            type="password"
            name="motdepasse"
            placeholder="Mot de passe"
            onChange={handleChange}
            className="bg-transparent border border-white rounded-md px-4 py-2.5 text-sm"
          />
        </form>

        <div className="flex justify-between mt-6">
          <button
            className="bg-transparent border border-white text-white px-6 py-2 rounded-lg text-sm"
            onClick={() => navigate("/connection")}
          >
            RETOUR
          </button>
          <button
            className="bg-[#FF6B2E] text-white px-6 py-2 rounded-lg text-sm font-semibold"
            // onClick={() => navigate("/deals")} ou onClick={() => navigate("/dealinfluenceur")}
            // ici si il finit le login et il est commercant il ira sur deals si il est influenceur il ira sur dealsinfluenceur
            // il ira sur dealinfluenceur
          >
            CONNEXION
          </button>
        </div>
      </div>
    </div>
  );
}
