import "./Footer.css"
import profile from "../../assets/profile.svg"
import boldUpArrow from "../../assets/boldUpArrow.svg"
import payments from "../../assets/payments.svg"
import pay from "../../assets/pay.svg"
import homeLogo from "../../assets/homeLogo.svg"
const Footer = () => {
  return (
    <>
    <div className="card-options">
        <div className="first-option">
        <div className="card-options-logo">
            <img src={homeLogo} alt="home" />
        </div>
        <div className="card-options-text">Home</div>
        </div>
        <div className="first-option">
        <div className="card-options-logo">
            <img src={pay} alt="home" />
        </div>
        <div className="card-options-text">Card</div>
        </div>
        <div className="first-option">
        <div className="card-options-logo">
            <img src={payments} alt="home" />
        </div>
        <div className="card-options-text">Payments</div>
        </div>
        <div className="first-option">
        <div className="card-options-logo">
            <img src={boldUpArrow} alt="home" />
        </div>
        <div className="card-options-text">Credit</div>
        </div>
        <div className="first-option">
        <div className="card-options-logo">
            <img src={profile} alt="home" />
        </div>
        <div className="card-options-text">Profile</div>
        </div>
    </div>
    </>
  )
}

export default Footer