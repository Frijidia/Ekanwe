import { useState, useRef, useEffect } from "react";
import save from "../../assets/save.png";
import fullsave from "../../assets/fullsave.png";
import cloche from "../../assets/clochenotification.png";
import sign from "../../assets/ekanwesign.png";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { 
  ChevronRight, 
  MoreHorizontal, 
  // MoreVertical,
  Heart,
  Eye,
  Share2,
  TrendingUp,
  TrendingDown,
  // Bookmark
} from "lucide-react";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [savedItems, setSavedItems] = useState<Record<number, boolean>>({});
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const influencersContainerRef = useRef<HTMLDivElement>(null);
  const toggleSave = (index: number) => {
    setSavedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const influencers = [
    {
      id: 1,
      username: "Username",
      deal: "15",
      contrepartie: "Service offert",
      rating: 3,
      image: "https://images.unsplash.com/photo-1549068106-b024baf5062d",
      likes: "500",
      views: "12099",
      shares: "89738",
      trending: "up"
    },
    {
      id: 2,
      username: "Username",
      deal: "23",
      contrepartie: "Service offert",
      rating: 4,
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
      likes: "780",
      views: "19032",
      shares: "67421",
      trending: "down"
    },
    {
      id: 3,
      username: "Username",
      deal: "8",
      contrepartie: "Service offert",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7",
      likes: "320",
      views: "8763",
      shares: "45987",
      trending: "up"
    },
    {
      id: 4,
      username: "Username",
      deal: "31",
      contrepartie: "Service offert",
      rating: 3,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      likes: "629",
      views: "21543",
      shares: "73281",
      trending: "down"
    }
  ];
  
  const dashboardOptions = [
    {
      id: "stats",
      title: "Statistiques Générales",
      hasDetails: true
    },
    {
      id: "engagement",
      title: "Engagement et Visibilité",
      hasDetails: true
    },
    {
      id: "feedback",
      title: "Feedback et Amélioration",
      hasDetails: true
    },
    {
      id: "impact",
      title: "Impact",
      hasDetails: true
    }
  ];
  
  const renderStars = (rating:number) => {
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

  useEffect(() => {
    if (influencersContainerRef.current) {
      const windowHeight = window.innerHeight;
      influencersContainerRef.current.style.maxHeight = `${windowHeight * 0.5}px`;
    }
  }, []);

  const handleInfluencerClick = (id:number) => {
    console.log(`Clicked on influencer ${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5E7] text-[#14210F]">
      <div className="bg-[#F5F5E7] mt-2 py-2 px-4 flex items-center mb-5 justify-between">
        <h1 className="text-3xl text-[#1A2C24] font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/notifypage')} >
            <img src={cloche} alt="cloche" className="w-7 h-7" />
          </button>
          <img src={sign} alt="Ekanwe Sign" className="w-7 h-7" />
        </div>
      </div>

      <div className="px-4 mb-11">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl text-[#1A2C24] font-bold">Influenceurs</h2>
          <div className="flex items-center justify-center bg-[#14210F] text-white h-6 w-6 rounded-full text-xs">
            <MoreHorizontal className="h-4 w-4" />
          </div>
        </div>
        
        <div 
          ref={influencersContainerRef}
          className="space-y-4 overflow-y-auto border border-gray-200 rounded-lg p-7 bg-gray-400 bg-opacity-20"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#1A2C24 #1A2C24" }}
        >
          {influencers.map((influencer, index) => (
            <div 
              key={influencer.id} 
              className="bg-[#1A2C24] rounded-lg text-white mb-2 overflow-hidden cursor-pointer shadow-sm"
              onClick={() => handleInfluencerClick(influencer.id)}
            >
              <div className="flex p-2">
                <div className="w-1/4">
                  <div className="h-16 w-16 rounded-lg overflow-hidden">
                    <img 
                      src={influencer.image} 
                      alt={influencer.username} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-3/4 pl-2 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-bold">{influencer.username}</h3>
                    <button className="focus:outline-none" 
                    onClick={() => toggleSave(index)}>
                    <img 
                      src={savedItems[index] ? fullsave : save} 
                      alt={savedItems[index] ? "Saved" : "Save"} 
                      className="w-6 h-6"
                    />

                    </button>
                  </div>
                  
                  <div className="my-1">
                    <p className="text-xs text-gray-300">Deal : {influencer.deal}</p>
                    <p className="flex items-center mt-1 text-xs">
                      <span className="font-bold mr-1">Contrepartie :</span>
                      <span>{influencer.contrepartie}</span>
                    </p>
                  </div>
                  
                  <div className="flex">
                    {renderStars(influencer.rating)}
                  </div>
                </div>
              </div>
    
              <div className="flex items-center justify-between bg-[#F5F5E7] text-[#14210F] px-3 py-2 text-xs">
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  <span className="font-medium">{influencer.likes}</span>
                </div>
                
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  <span className="font-medium">{influencer.views}</span>
                  {influencer.trending === "up" ? (
                    <TrendingUp className="h-3 w-3 ml-1 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 ml-1 text-red-500" />
                  )}
                </div>
                
                <div className="flex items-center">
                  <Share2 className="h-4 w-4 mr-1" />
                  <span className="font-medium">{influencer.shares}</span>
                  {influencer.trending === "up" ? (
                    <TrendingDown className="h-3 w-3 ml-1 text-red-500" />
                  ) : (
                    <TrendingUp className="h-3 w-3 ml-1 text-green-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mb-16">
        {dashboardOptions.map((option) => (
          <button 
            key={option.id}
            onClick={() => setSelectedSection(option.id)}
            className={`flex justify-between items-center w-full ${selectedSection == option.id } p-3 border-b border-[#1A2C24]`}
          >
            <span className="text-xl font-bold">{option.title}</span>
            {option.hasDetails && (
              <ChevronRight className="h-5 w-5 text-gray-600" />
            )}
          </button>
        ))}
      </div>
      <Navbar />
    </div>
  );
}