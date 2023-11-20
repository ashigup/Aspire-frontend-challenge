import "./Balance.css";
import box from"../../assets/box.svg"
import logo from"../../assets/Logo.svg"
import AddCard from "../add-card/AddCard";
import { useState } from "react";

const Balance = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
    <AddCard isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
    <div className="balance">
      <div className="text-and-logo">
        <div className="balance-text">Account Balance</div>
        <div className="logo">
            <img src={logo} alt="aspire-logo" />
        </div>
      </div>
      <div className="balance-and-add-card">
        <div className="symbol-money">
          <div className="dollar-symbol">S$</div>
          <div className="money">3,000</div>
        </div>
        <div className="add-card">
            <div className="card-symbol">
                <img src={box} alt="add-symbol" />
            </div>
            <div className="card-text" onClick={() =>setModalOpen(true)}>New Card
            </div>
        </div>
      </div>
    </div>
    <div className="all-card-header">
      <div className="all-cards">My debit cards</div>
      <div className="company-cards-text">All company cards</div>
    </div>
    </>

  );
};

export default Balance;
