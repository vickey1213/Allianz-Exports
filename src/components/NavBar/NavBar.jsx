import React,{useState} from "react";
import logo from "../../Assets/cropped_unfluke_full.148e5bfc.png";
import bell from "../../Assets/bell-icon.d99e8edc.png";
import coin from "../../Assets/coin.9bfaef7e.jpeg";
import profile from "../../Assets/monkey.5456259d.jpg";

const NavBar = () => {

  const [coins,setCoins] = useState(0);

  return(
    <div className="navbar-container">
      <img src={logo} alt="logo" className="logo" width={120} height={40}/>

      <div className="nb-right">
        <div className="bell">
          <img src={bell} alt="" width={26} height={26}/>
          <select id="dropdown" name="dropdown">
          </select>
        </div>
        <div className="coin">
          <img src={coin} alt="" width={26} height={26}/>
          <span>{coins}</span>
        </div>
        <div className="profile">
          <img src={profile} alt="" width={26} height={26}/>
          <select id="dropdown" name="dropdown">
          </select>
        </div>
      </div>
    </div>
  )
}

export default NavBar;