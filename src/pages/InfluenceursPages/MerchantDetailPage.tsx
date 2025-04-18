import { ArrowLeft, ChevronRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import fillplus from "../../assets/fillplus.png";
import Navbar from './Navbar';

export default function MerchantDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 pt-10">
      <header className="bg-white px-4 py-3 flex items-center gap-4 shadow-sm">
        <button onClick={() => navigate("/dealinfluenceur")}>
          <ArrowLeft className="w-8 h-8 text-[#FF6B2E]" />
        </button>
        <span className="text-[#FF6B2E] text-3xl font-bold">Deals</span>
      </header>

      <main className="p-4">

        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">

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
        </div>


          <div className="p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-3xl font-bold text-[#1A2C24] mb-2">Commerçant</h2>
                
                <div className="flex items-center gap-2 text-sm text-[#FF6B2E] mb-5">
                  <MapPin className="w-4 h-4" />
                  <button>Edit</button>
                </div>

              </div>
              <div>
                <span className="text-[#FF6B2E] -ml-11 text-sm font-bold">000000</span>
              </div>
            </div>
            <h3 className="text-xl text-[#1A2C24] font-bold mb-4">Description</h3>
              <div className="mb-4">
                <div className="border border-[#1A2C24] bg-white/10 rounded-lg p-2">
                  <input 
                    placeholder="Edit" 
                    className="w-full bg-transparent text-sm text-[#1A2C24] outline-none resize-none h-12"
                  ></input> 
                </div>
              </div>

            <h3 className="text-xl text-[#1A2C24] font-bold mb-4">Intérets</h3>
            <div className="mb-8">
            <div className="border border-[#1A2C24] bg-white/10 rounded-lg p-2">
                <input 
                  placeholder="Edit" 
                  className="w-full bg-transparent text-sm text-[#1A2C24] outline-none resize-none h-4"
                ></input>
              </div>
            </div>
    
            <div className="divide-y d1ivide-black rounded-lg overflow-hidden">
              <button className="w-full flex items-center justify-between px-4 py-3 -ml-3 bg-gray-50">
                <span className="text-[#1A2C24] text-xl font-bold">Type de Contenu</span>
                <ChevronRight className="w-5 h-5 text-[#1A2C24]" />
              </button>
              <button className="w-full flex items-center justify-between px-4 py-3 -ml-3 bg-gray-50 border-black">
                <span className="text-[#1A2C24] text-xl font-bold">Date de Validité</span>
                <ChevronRight className="w-5 h-5 text-[#1A2C24]" />
              </button>
              <button className="w-full flex items-center justify-between px-4 py-3 -ml-3 bg-gray-50 border-black">
                <span className="text-[#1A2C24] text-xl font-bold ">Conditions</span>
                <ChevronRight className="w-5 h-5 text-[#1A2C24]" />
              </button>
              <button className="w-full flex items-center justify-between px-4 py-1 -ml-3 bg-gray-50 border-black">
              </button>
            </div>

            <div className="flex gap-2 mt-6">
              <button 
                className="flex-1 py-3 text-white font-medium bg-[#1A2C24] rounded-lg"
                onClick={() => navigate("/dealinfluenceur")}
              >
                RETOUR
              </button>
              <button className="flex-1 py-3 text-white font-medium bg-[#FF6B2E] rounded-lg">
                EXÉCUTER
              </button>
            </div>
          </div>
        </div>
      </main>
      <Navbar/>
    </div>
  );
}
