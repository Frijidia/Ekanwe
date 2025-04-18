import { ArrowLeft, MapPin, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import fillplus from "../../assets/fillplus.png";
import Navbar from "./Navbar";

export default function DealCandidatesPage() {
  // const [selectedCandidate, setSelectedCandidate] = useState(2);
  const navigate = useNavigate();
  const candidates = [
    {
      id: 1,
      username: "Username",
      rating: 4,
      status: "accepté",
      image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7"
    },
    {
      id: 2,
      username: "Username",
      rating: 3,
      status: "refusé",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
    },
    {
      id: 3,
      username: "Username",
      rating: 5,
      status: "en attente",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  const handleExecute = () => {
    console.log("Exécution de l'action");
  };

  const handleCandidateClick = (index: number ) => {
    console.log("Candidat sélectionné:", candidates[index].username);
  };

  const renderStars = (rating : number) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-sm ${i < rating ? 'text-[#FF6B2E]' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const handleAccept = (e: React.MouseEvent, id: string | number) => {
    e.stopPropagation();
    console.log("Accepter candidat:", id);
  };

  const handleReject = (e: React.MouseEvent, id: string | number) => {
    e.stopPropagation();
    console.log("Refuser candidat:", id);
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      <div className="bg-white py-3 px-4 flex items-center border-b">
        <button  onClick={() => navigate("/dealinfluenceur")}  className="flex items-center text-[#FF6B2E]">
          <ArrowLeft className="h-6 w-6 mr-1" />
          <span className="text-xl font-medium">Home</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
            alt="Restaurant interior"
            className="w-full h-48 object-cover"
          />
          <button className="absolute bottom-2 right-2 rounded-full p-1">
            <img src={fillplus} alt="Edit" className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 bg-white border-b">
          <div className="text-3xl  flex justify- items-center">
            <h1 className=" text-[#1A2C24] font-bold">Deals 878786 </h1>
          </div>

          <div className="flex items-center mt-2 text-gray-600">
            <MapPin className="h-5 w-5 mr-1 text-[#FF6B2E]" />
            <span className="text-[#FF6B2E]">Edit</span>
          </div>
        </div>

        <div className="bg-white">
          <button className="flex justify-between items-center w-full p-4 border-b">
                <span className="font-bold text-xl text-[#1A2C24]">Description</span>
                    <ChevronRight className="h-6 w-6 text-gray-600" />  
          </button>

          <div className="p-4 border-b">
            <h2 className="font-bold mb-2 text-xl text-[#1A2C24]">Candidats</h2>

            <div className="space-y-3">
              {candidates.map((candidate, index) => (
                <div
                  key={candidate.id}
                  className={`p-3 rounded-lg border border-black bg-gray-100 cursor-pointer`}
                  onClick={() => handleCandidateClick(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded overflow-hidden mr-3">
                        <img
                          src={candidate.image}
                          alt={candidate.username}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-[#1A2C24]">{candidate.username}</p>
                        <div className="flex mt-1">
                          {renderStars(candidate.rating)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex flex-col mr-3">
                        <button
                          onClick={(e) => handleAccept(e, candidate.id)}
                          className="bg-[#1A2C24] text-white text-xs border border-[#1A2C24] mb-2 font-medium py-1 px-3 rounded-xl"
                        >
                          ACCEPTER
                        </button>
                        <button
                          onClick={(e) => handleReject(e, candidate.id)}
                          className="bg-transparent text-[#1A2C24] border border-[#1A2C24] text-xs font-medium py-1 px-3 rounded-xl"
                        >
                          REFUSER
                        </button>
                      </div>

                      <button>
                        <ChevronRight className="h-6 w-6 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-4 border-[#1A2C24] mt-auto">
        <div className="flex">
          <button
            onClick={() => navigate("/dealinfluenceur")}
            className="flex-1 py-3 bg-[#1A2C24] text-white font-bold text-center"
          >
            RETOUR
          </button>
          <button
            onClick={handleExecute}
            className="flex-1 py-3 bg-[#FF6B2E] text-white font-bold text-center"
          >
            EXÉCUTER
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
}