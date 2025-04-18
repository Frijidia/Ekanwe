import { ArrowLeft, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BottomNavbar from "./BottomNavbar";

export default function DealDetailsPage() {
  const navigate = useNavigate();
  
  const [dealStatus] = useState('accepted');
  
  const timelineEvents = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt.",
      date: "Octobre 24, 05:00 pm"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt.",
      date: "Octobre 25, 10:30 am"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt.",
      date: "Octobre 26, 02:15 pm"
    }
  ];
  
  const getCurrentStep = () => {
    switch (dealStatus) {
      case 'sent': return 1;
      case 'accepted': return 2;
      case 'completed': return 3;
      default: return 1;
    }
  };

  return (
    <div className="bg-[#f7f6ed] min-h-screen flex flex-col">
      <div className="flex items-center p-4 text-[#FF6B2E] text-lg font-medium">
        <ArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} />
        <span className="ml-2">Deals</span>
      </div>
      
      <div className="w-full h-48">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="Commerçant"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="px-4 py-2">
        <div className="flex justify-between mb-1 text-[#1A2C24] items-center text-2xl font-semibold">
          <span>Commerçant</span>
          <span className="text-[#FF6B2E] text-sm">ID du Deal</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#FF6B2E] mb-4">
          <MapPin className="w-4 h-4" />
          <button>Localisation</button>
        </div>
        <div className="text-sm text-gray-600 mt-2 mb-5">
          <h3 className="font-semibold text-[#1A2C24] text-xl mb-2"> Description </h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <button className="text-[#1A2C24] font-medium">Voir plus...</button>
        </div>
      </div>
      
      <div className="px-4 mb-6">
        <ProgressRibbon currentStep={getCurrentStep()} />
      </div>
      
      <div className="px-4 mb-20">
        <h3 className="font-semibold text-xl text-[#1A2C24]">Autre détails</h3>
        <div className="pl-2 bg-[#F5F5E7]">
          <ul className="space-y-8 relative">
            <div className="absolute left-1.5 top-3 bottom-3 w-0.5 bg-gray-400"></div>
            {timelineEvents.map((event, index) => (
              <li key={index} className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#1A2C24] z-10">
                  <div className="absolute -inset-1 border border-[#1A2C24] rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-700">{event.text}</span>
                  <span className="text-xs text-gray-500 mt-1">{event.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BottomNavbar/>
    </div>
  );
};

const ProgressRibbon = ({ currentStep = 1 }) => {
  const steps = ["Envoyé", "Accepté", "Effectué"];
  
  return (
    <div className="w-full bg-[#1A2C24] rounded-lg p-3 relative">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <span className={`text-[#FF6B2E] ${index < currentStep ? 'font-bold' : 'opacity-70'}`}>
              {step}
            </span>
            
            {index < steps.length - 1 && (
              <div className="flex-1 mx-2 flex items-center">
                {index < currentStep - 1 ? (
                  <div className="h-0.5 bg-[#FF6B2E] w-12"></div>
                ) : index === currentStep - 1 ? (
                  <div className="w-12 flex space-x-1">
                    <div className="h-0.5 bg-[#FF6B2E] w-2"></div>
                    <div className="h-0.5 bg-[#FF6B2E] w-2"></div>
                    <div className="h-0.5 bg-[#FF6B2E] w-2"></div>
                    <div className="h-0.5 bg-[#FF6B2E] opacity-50 w-2"></div>
                    <div className="h-0.5 bg-[#FF6B2E] opacity-30 w-2"></div>
                  </div>
                ) : (
                  <div className="h-0.5 bg-[#FF6B2E] opacity-30 w-12"></div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};