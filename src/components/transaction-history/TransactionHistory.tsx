import Transaction from "./Transaction";
import "./TransactionsHistory.css";
import fileStorage from "../../assets/fileStorage.svg"
import flights from "../../assets/flights.svg"
import megaphone from "../../assets/megaphone.svg"



const TransactionHistory = () => {
  return (
    <>
      <div className="transactions">
        <Transaction logo={fileStorage} priceColor="#01D167" logoBackgroundColor="#009DFF1A" />
        <Transaction logo={flights} priceColor="#222222" logoBackgroundColor="#00D6B51A"/>
        <Transaction logo={megaphone} priceColor="#222222" logoBackgroundColor="#F251951A"/>
        <Transaction logo={fileStorage} priceColor="#222222" logoBackgroundColor="#009DFF1A"/>
      </div>
      <div className="view-all-trans">View all card transactions</div>
      <div className="extra-spacing"></div>ing
    </>
  );
};

export default TransactionHistory;
