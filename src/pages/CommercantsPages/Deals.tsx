import { useRef, useState } from "react";
import cloche from "../../assets/clochenotification.png";
import sign from "../../assets/ekanwesign.png";
import loupe from "../../assets/loupe.png";
import menu from "../../assets/menu.png";
import { MutableRefObject } from "react";
import { useNavigate} from "react-router-dom";
import BottomNavbar from "./BottomNavbar";
import save from "../../assets/save.png";
import fullsave from "../../assets/fullsave.png";

export default function Deals() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [savedDeals, setSavedDeals] = useState<number[]>([]);
  const filters = ["All", "Sport", "Foods"];

  const popularRef = useRef(null);
  const otherRef = useRef(null);

  const scroll = (
    ref: MutableRefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -370 : 370,
        behavior: "smooth",
      });
    }
  };
  
  const dealData = [
    {
      title: "Commerçant",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse...",
    },
    {
      title: "Restaurant",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa...",
    },
    {
      title: "Boutique Sport",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
      description: "Matériel haut de gamme pour tous les passionnés de sport...",
    },
  ];

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
              className={`border px-10 py-3 rounded-lg text-sm ${
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

      <div className="flex items-center px-4 justify-between mb-2">
        <h2 className="text-2xl font-bold">Populaire</h2>
        <div className="flex space-x-4 text-2xl">
          <button onClick={() => scroll(popularRef, "left")}>←</button>
          <button onClick={() => scroll(popularRef, "right")}>→</button>
        </div>
      </div>

      <div
        ref={popularRef}
        className="px-4 mb-6 flex space-x-4 overflow-x-auto scrollbar-hide"
      >
        {dealData.map((deal, index) => (
          <div
            key={index}
            className="min-w-full bg-[#1A2C24] rounded-xl overflow-hidden shadow-lg"
          >
            {/* <img
              src={deal.image}
              alt={deal.title}
              className="w-full p-4 rounded-lg h-40 object-cover"
            /> */}
            <div className="relative w-full h-40">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
              <button
                className="absolute bottom-2 right-2"
                onClick={() =>
                  setSavedDeals((prev) =>
                    prev.includes(index)
                      ? prev.filter((i) => i !== index)
                      : [...prev, index]
                  )
                }
              >
                <img 
                  src={savedDeals.includes(index) ? fullsave : save} 
                  alt={savedDeals.includes(index) ? "Saved" : "Save"} 
                  className="w-6 h-6"
                />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg text-white font-bold mb-1">{deal.title}</h3>
              <p className="text-sm text-white mb-3">{deal.description}</p>
              
              <div className="flex justify-between mt-8">
                <button className="text-white border border-white rounded-lg px-4 py-2 text-sm"
                  onClick={() => navigate("/dealSeeMore")}
                  >
                  Voir plus
                </button>
                <button className="bg-[#FF6B2E] border border-white text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Dealer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold">Autre deals</h2>
          <div className="flex space-x-4 text-2xl">
            <button onClick={() => scroll(otherRef, "left")}>←</button>
            <button onClick={() => scroll(otherRef, "right")}>→</button>
          </div>
        </div>

        <div
          ref={otherRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
        >
          {dealData.map((deal, index) => (
            <div
              key={index}
              className="min-w-full bg-[#1A2C24] rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-40">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  <button
                    className="absolute bottom-2 right-2"
                    onClick={() =>
                      setSavedDeals((prev) =>
                        prev.includes(index)
                          ? prev.filter((i) => i !== index)
                          : [...prev, index]
                      )
                    }
                  >
                    <img
                      src={save}
                      alt="Save"
                      className={`w-6 h-6 ${
                        savedDeals.includes(index) ? "filter-orange" : "opacity-60"
                      }`}
                    />
                  </button>
                </div>

              <div className="p-4">
                <h3 className="text-lg text-white font-bold mb-1">{deal.title}</h3>
                <p className="text-sm text-white mb-3">{deal.description}</p>
                <div className="flex justify-between mt-8">
                  <button className="text-white border border-white rounded-lg px-4 py-2 text-sm">
                    Voir plus
                  </button>
                  <button className="bg-[#FF6B2E] border border-white text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Dealer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <BottomNavbar/>
      </div>
    </div>
  );
}
