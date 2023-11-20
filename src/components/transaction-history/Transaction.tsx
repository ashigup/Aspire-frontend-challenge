import "./Transaction.css"
import businessFinance from "../../assets/businessFinance.svg"
import next from "../../assets/next.svg"

interface props{
    logo: string,
    logoBackgroundColor: string,
    priceColor:string
}
const Transaction = ({logo, logoBackgroundColor, priceColor}:props) => {
  return (
    <div className="transaction">
        <div className="transaction-logo" style={{backgroundColor: logoBackgroundColor}}>
            <img src={logo} alt="" />
        </div>
        <div className="transaction-details">
            <div className="transaction-details-name">Hamleys</div>
            <div className="transaction-details-date">20 May 2020</div>
            <div className="transaction-details-return">
                <div className="transaction-details-return-logo">
                    <img src={businessFinance} alt="" />
                </div>
                <div className="transaction-details-return-text">Refund on debit card</div>
            </div>
        </div>
        <div className="transaction-price transaction-price-debited" style={{color: priceColor}}>
            +S$ 155
        </div>
        <div className="transaction-right-arrow">
            <img src={next} alt="" />
        </div>
    </div>
  )
}

export default Transaction