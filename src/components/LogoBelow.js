import { Link } from "react-router-dom";
const LogoBelow = () => {
    return (
      <footer className="bg-white hidden text-gray-700 px-6 py-4 justify-center md:flex   ">
        <nav className="flex justify-center space-x-4">
          <Link to="#" className="hover:text-black">SHOP BY</Link>
          <Link to="#" className="hover:text-black">CRAFTS OF TELANGANA</Link>
          <Link to="#" className="hover:text-black">NORTH</Link>
          <Link to="#" className="hover:text-black">SOUTH</Link>
          <Link to="#" className="hover:text-black">EXCLUSIVELY GOSUJATHA</Link>
        </nav>
      </footer>
    );
  };
  
  export default LogoBelow 
  