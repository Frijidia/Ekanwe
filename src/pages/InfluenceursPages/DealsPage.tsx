import { useRef, useState } from "react";
import cloche from "../../assets/clochenotification.png";
import sign from "../../assets/ekanwesign.png";
import loupe from "../../assets/loupe.png";
import menu from "../../assets/menu.png";
import Navbar from "./Navbar";
import plus from "../../assets/plus.png";
import save from "../../assets/save.png";
import fullsave from "../../assets/fullsave.png";
import { useNavigate } from "react-router-dom";

export default function DealsPage() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("Deals");
  const [savedItems, setSavedItems] = useState<Record<number, boolean>>({});
  const filters = ["Deals", "Influenceurs"];

  const propositionRef = useRef(null);
  const influencerRef = useRef(null);

  const scroll = (
    ref: React.RefObject<HTMLElement>,
    direction: 'left' | 'right'
  ) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -370 : 370,
        behavior: "smooth",
      });
    }
  };
  
  const toggleSave = (index: number) => {
    setSavedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const dealData = [
    {
      title: "Username",
      image:
        "https://images.unsplash.com/photo-1600861194942-f883de0dfe96",
      id: "Id du deal",
      description:
        " Service-offert",
      rating: 4,
    },
    {
      title: "Username",
      image:
        "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9",
      id: "Id du deal",
      description:
        " Service-offert",
      rating: 5,
    },
    {
      title: "Username",
      image:
        "https://images.unsplash.com/photo-1590086782957-93c06ef21604",
      id: "Id du deal",
      description: " Service-offert",
      rating: 3,
    },
  ];

  const influencerData = [
    {
      username: "Username",
      image:
        "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7",
    },
    {
      username: "Username",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    },
    {
      username: "Username",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  ];

  const renderStars = (rating : number) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-lg ${i < rating ? 'text-[#FF6B2E]' : 'text-gray-300'}`}>
          ★ 
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-[#F5F5E7] text-[#14210F] pb-32 pt-5">
      <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-3xl font-bold">Deals</h1>
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate("/notifypage")}>
              <img src={cloche} alt="Notify" className="w-6 h-6" />
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
              className={`border px-12 py-3 rounded-lg text-sm ${
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

      <div className="px-4 py-2">
        <button 
        className="w-full flex gap-2 items-center justify-between p-3 border border-black bg-[#FF6B2E] text-[#1A2C24] font-bold py-1 rounded-lg"
        onClick={() => navigate("/dealCandidates")}
        >
          Faire un deal
          <img src={plus} alt="plus" className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center px-4 justify-between mb-2 mt-4">
        <h2 className="text-xl font-bold">Proposition de deal</h2>
        <div className="flex space-x-4 text-2xl">
          <button onClick={() => scroll(propositionRef, "left")}>←</button>
          <button onClick={() => scroll(propositionRef, "right")}>→</button>
        </div>
      </div>

      <div
        ref={propositionRef}
        className="px-4 mb-6 flex space-x-4 overflow-x-auto scrollbar-hide"
      >
        {dealData.map((deal, index) => (
          <div
            key={index}
            className="min-w-[80%] bg-[#1A2C24] rounded-xl overflow-hidden shadow-lg flex flex-col"
          >
            <div className="flex p-4">
              <div className="w-1/2 pr-2">
                <div className="h-32 rounded-lg overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-1/2 pl-2 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg text-white font-bold mb-1">{deal.title}</h3>
                  <button 
                    className="focus:outline-none" 
                    onClick={() => toggleSave(index)}
                  >
                    <img 
                      src={savedItems[index] ? fullsave : save} 
                      alt={savedItems[index] ? "Saved" : "Save"} 
                      className="w-6 h-6"
                    />
                  </button>
                </div>
                <p className="text-xs text-white mb-5">{deal.id}</p>
                <p className="text-xs text-white mb-2">
                  <span className="font-bold">Contrepartie :</span> {deal.description}
                </p>
                <div className="flex mt-auto">
                  {renderStars(deal.rating)}
                </div>
              </div>
            </div>

            <div className="p-4 pt-0 mt-auto">
              <div className="flex justify-between">
                <button 
                  className="text-white border border-white rounded-lg px-4 py-2 text-sm"
                  onClick={() => navigate("/merchantdetailpage")}
                >
                  Voir plus
                </button>
                <button className="bg-[#FF6B2E] border border-white text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Ajouter deals
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold">Influenceurs</h2>
          <div className="flex space-x-4 text-2xl">
            <button onClick={() => scroll(influencerRef, "left")}>←</button>
            <button onClick={() => scroll(influencerRef, "right")}>→</button>
          </div>
        </div>

        <div
          ref={influencerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
        >
          {influencerData.map((influencer, index) => (
            <div
              key={index}
              className="min-w-[80%] bg-[#1A2C24] rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-40">
                <img
                  src={influencer.image}
                  alt={influencer.username}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg text-white font-bold mb-1">{influencer.username}</h3>
                  <button 
                    className="focus:outline-none" 
                    onClick={() => toggleSave(index + 100)} // Using offset to differentiate from deals
                  >
                    <img 
                      src={savedItems[index + 100] ? fullsave : save} 
                      alt={savedItems[index + 100] ? "Saved" : "Save"} 
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Navbar/>
    </div>
  );
}