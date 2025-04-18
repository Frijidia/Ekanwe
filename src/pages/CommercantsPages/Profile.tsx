import React from 'react';
import { 
  Grid, 
  Share2, 
  Briefcase, 
  Settings, 
  Bookmark,
  Sparkles,
  Edit,
  Camera
} from 'lucide-react';
import { useState, useRef } from 'react';
import BottomNavbar from './BottomNavbar';
import sign from "../../assets/ekanwesign.png";

export default function Profile() {
const [profileImage, setProfileImage] = useState<string | null>(null);
const fileInputRef = useRef<HTMLInputElement>(null);

const handleImageClick = () => {
    fileInputRef.current?.click();
};

const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
    }
};
  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="flex items-center bg-white justify-between px-4 py-11">
        <h1 className="text-3xl text-[#1A2C24] font-bold">Profile</h1>
        <div className="flex items-center space-x-4">
          <img src={sign} alt="Ekanwe Sign" className="w-6 h-6" />
        </div>
      </div>
      <div className="max-w-md mx-auto -mt-11 bg-white min-h-screen flex flex-col">
      <div className="p-6 bg-neutral-50 border-b flex flex-col items-center text-center">
          <div 
            className="relative cursor-pointer group"
            onClick={handleImageClick}
          >
            <div 
              className="w-20 h-20 rounded-full overflow-hidden mb-3"
            >
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-900" />
              )}
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={24} className="text-white" />
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <h1 className="text-xl text-[#1A2C24] font-semibold mb-1">Username</h1>
          <div className="flex items-center gap-1 text-orange-500">
            <Sparkles size={16} />
            <span className="text-sm">En Roll</span>
          </div>
        </div>

        <div className="flex-1 p-4">
          <nav className="space-y-2">
            <MenuItem icon={Edit} label="Edit profile" />
            <MenuItem icon={Grid} label="Catégorie" />
            <MenuItem icon={Share2} label="Réseaux" />
            <MenuItem icon={Briefcase} label="Portfolio" />
            <MenuItem icon={Bookmark} label="Deals en Cours" />
            <MenuItem icon={Settings} label="Paramètre" />
          </nav>
        <div className="px-4 mb-20 mt-20">
        <button className="w-full border border-black py-3 rounded-lg text-base text-[#1A2C24] bg-white/10">
          Deconnexion
        </button>
        </div> 
      </div>

    <BottomNavbar/>
    </div>

    </div>
);
}

interface MenuItemProps {
    icon: React.ElementType;
    label: string;
  }
  
  function MenuItem({ icon: Icon, label }: MenuItemProps) {
    return (
      <button className="w-full flex items-center gap-3 p-3 border-b border-[#1A2C24]/60 hover:bg-neutral-50 transition-colors">
        <Icon size={20} className="text-neutral-600" />
        <span className="text-neutral-800">{label}</span>
      </button>
    );  
}
