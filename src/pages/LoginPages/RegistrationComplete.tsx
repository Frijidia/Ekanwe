import { useNavigate } from "react-router-dom";
import logo from "../../assets/ekanwe-logo.png";
import { CheckCircle } from "lucide-react";
import React from "react";

export default function RegistrationComplete() {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/deals");
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/766b/e8b9/25ea265fc6d5c0f04e3e93b27ecd65cb?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EsyWng5rz5MuEwYQEk01lU7LKsfv2EWoe-0bq8GtYOwvCr3abuoIOUk5UIU3it2DcnrX49Xu~~t-IdgxVen0GevBunbegAqHR-Jki-XrC1EnR84TWM8CrfsNvORud11qi3me9rQJIApdEysnnnPqTq4wtpdrQF9Tho0kRwj7r4IJOftLpWgG4ktpqP2iCobbbxs1KxnwQ7328NMqGPkUlWZ~TPbIg4oFsIzp8xDvk-c3TXJvy8UqR96LNu5zX1BNr~~VsdBcufw5AO8sOty0qgnylO6Lfr0dN-bWqe9zDc~e6PfZRxRupZ-t3vGrHT-KpU3Y0C~pK11-xCM4Tug1rw__')",
      }}
    >
      <div className="bg-[#1A2C24]/90 text-white px-6 py-8 w-11/12 max-w-md rounded-lg shadow-lg">
        <div className="text-center flex flex-col items-center">
          <img src={logo} alt="Ekanwe logo" className="w-36 mb-10" />
          
          <div className="flex justify-center mb-6">
            <div className="bg-[#FF6B2E] rounded-full p-3">
              <CheckCircle size={64} className="text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">INSCRIPTION COMPLÉTÉE</h2>
          
          <div className="w-16 h-1 bg-[#FF6B2E] mb-6"></div>
          
          <p className="text-gray-300 mb-10">
            Félicitations ! Votre compte a été vérifié avec succès. Vous allez être redirigé vers la page d'accueil dans quelques secondes.
          </p>
          
          <div className="flex justify-center w-full mt-4">
            <button
              className="bg-[#FF6B2E] text-white px-10 py-3 rounded-lg text-sm font-semibold"
              // onClick={() => navigate("/deals")} ou onClick={() => navigate("/dealinfluenceur")}
              // pareil ici si il finit le login et il est commercant il ira sur deals si il est influenceur il ira sur dealsinfluenceur
              // il ira sur dealinfluenceur
            >
              CONTINUER
            </button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FF6B2E] rounded-full"></div>
            <div className="w-2 h-2 bg-white opacity-50 rounded-full"></div>
            <div className="w-2 h-2 bg-white opacity-50 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}