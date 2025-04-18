import sign from "../../assets/ekanwesign.png";
import loupe from "../../assets/loupe.png";
import menu from "../../assets/menu.png";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";

export default function NotificationPage() {
  const navigate = useNavigate();

  const Notification = [
    { id: 1, message: "Vous avez un nouveau message." },
    // { id: 2, message: "Vous avez un nouveau message." }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5E7] text-[#14210F] pb-32 pt-5">
      <div className="flex items-center justify-between px-4 py-4">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <div className="flex items-center space-x-4">
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
      </div>

      <div className="px-4">
        {Notification.length > 0 ? (
          Notification.map((notif, index) => (
            <div
              key={index}
              className="bg-[#F5F5E7] p-4 rounded-lg shadow-lg mb-4"
            >
              <p className="text-sm font-semibold">{notif.message}</p>
            </div>
          ))
        ) : (
          <div className="bg-[#F5F5E7] mt-20 p-2 rounded-lg shadow-lg mb-4">
            <p className="text-sm text-center text-gray-600">Aucune notification</p>
          </div>
        )}
      </div>
      <div className="px-4 mb-20 mt-20">
        <button onClick={() => navigate("/deals")}
        className="w-full border border-black py-3 rounded-lg text-base text-[#1A2C24] bg-white/10">
          Retour
        </button>
        </div> 
      <BottomNavbar />
    </div>
  );
}
