import { useState } from "react";
import loupe from "../../assets/loupe.png";
import cloche from "../../assets/clochenotification.png";
import sign from "../../assets/ekanwesign.png";
import menu from "../../assets/menu.png";
import { ArrowRight } from "lucide-react";
import BottomNavbar from "./BottomNavbar";
import { useNavigate } from "react-router-dom";

const Suivis = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["Envoyé", "Accepté", "Refusé"];
  const deals = [
    {
      id: "ID du Deal",
      name: "Commerçant 1",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      description: "Lorem ipsum dolor sit amet, elit consectetur adipiscing. Suspendisse tincidunt urna",
      status: "accepted"
    },
    {
      id: "ID du Deal",
      name: "Commerçant 2",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      description: "Lorem ipsum dolor sit amet, elit consectetur adipiscing. Suspendisse tincidunt urna",
      status: "sent"
    },
    {
      id: "ID du Deal",
      name: "Commerçant 3",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
      description: "Lorem ipsum dolor sit amet, elit consectetur adipiscing. Suspendisse tincidunt urna",
      status: "accepted"
    },
  ];

const getProgressStyles = (status:string) => {
  const stages = ['sent', 'accepted', 'completed'];
  const currentStageIndex = stages.indexOf(status);
  
  return {
    sent: {
      text: "font-bold text-[#1A2C24]"
    },
    accepted: {
      text: currentStageIndex >= 1 ? "font-bold text-[#1A2C24]" : "text-gray-500"
    },
    completed: {
      text: currentStageIndex >= 2 ? "font-bold text-[#1A2C24]" : "text-gray-500"
    },
    // Define line styles based on progress
    line1: currentStageIndex >= 1 ? "bg-[#1A2C24] h-0.5 w-2 m-1" : "bg-gray-300 h-0.5 w-2 m-1 border-dashed",
    line2: currentStageIndex >= 2 ? "bg-[#1A2C24] h-0.5 w-2 m-1" : "bg-gray-300 h-0.5 w-2 m-1 border-dashed"
  };
};

  return (
    <div className="min-h-screen bg-[#F5F5E7] text-[#14210F] pb-32 pt-5">

      <div className="flex items-center justify-between px-4 py-4">
        <h1 className="text-3xl font-bold">Deals</h1>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate("/notification")}>
            <img src={cloche} alt="Notification" className="w-6 h-6" />
          </button>
          <img src={sign} alt="Ekanwe Sign" className="w-6 h-6" />
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="flex items-center bg-white/10 border border-black rounded-lg px-3 py-2">
          <div className="text-xl mr-3">
            <img src={loupe} alt="loupe" className="w-6 h-6" />
          </div>
          <input
            type="text"
            placeholder="Recherche"
            className="flex-grow outline-none bg-transparent text-2xs"
          />
          <div className="text-gray-400 text-lg ml-2">
            <img src={menu} alt="Menu" className="w-6 h-6" />
          </div>
        </div>

        <div className="flex space-x-2 mt-3 overflow-x-auto">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedFilter(item)}
              className={`border px-7 py-3 rounded-lg text-base ${
                selectedFilter === item
                  ? "bg-[#1A2C24] text-white"
                  : "border-[#14210F] text-[#14210F] bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      
      {deals.map((deal, index) => {
        const progressStyles = getProgressStyles(deal.status);
        
        return (
          <div
            key={index}
            className="flex border border-black rounded-lg overflow-hidden bg-white/10 m-4 items-start"
          >
            <img
              src={deal.image}
              alt={deal.name}
              className="w-32 h-32 object-cover m-1 rounded-lg"
            />

            <div className="flex-1 p-1 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-xl font-bold text-[#1A2C24]">{deal.name}</h2>
                  <span className="text-[#FF6B2E] text-xs font-bold mb-2">{deal.id}</span>
                  <p className="text-xs text-gray-600">{deal.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <div className="flex-1 mr-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${progressStyles.sent.text}`}>Envoyé</span>
                      <div className={`w-12 ${progressStyles.line1}`}></div>
                      <span className={`text-xs ${progressStyles.accepted.text}`}>Accepté</span>                      
                      <div className={`w-12 ${progressStyles.line2}`}></div>
                      
                      <span className={`text-xs ${progressStyles.completed.text}`}>Effectué</span>
                      <div className="ml-2"> 
                        <button  className="flex items-end justify-end" onClick={() => navigate("/dealdetailspage")}> 
                          <ArrowRight className="w-5 h-5 text-[#14210F]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="px-4 mt-4">
        <button className="w-full border border-black py-3 rounded-lg text-base text-[#1A2C24] bg-white/10">
          Read more
        </button>
      </div>

      <BottomNavbar/>
    </div>
  );
};

export default Suivis;