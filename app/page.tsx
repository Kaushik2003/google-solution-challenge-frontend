
import { FaHome } from "react-icons/fa";
import Mainpage from "./components/Mainpage";
import { FloatingDock } from "./components/ui/FloatingNav";
;



export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl">
        <FloatingDock items={[{ title:"home", icon: <FaHome/>, href: "/" }]}/>
        <Mainpage/>
      </div>
      
    </main>
  );
}
//
