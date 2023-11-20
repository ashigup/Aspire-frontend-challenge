import "./CardCrud.css";
import { crudOps } from "../../constants/constants";
import group11889 from "../../assets/group11889.svg";
import downArrow from "../../assets/downArrow.svg";
import upArrow from "../../assets/upArrow.svg";
import transaction from "../../assets/transactions.svg";
import TransactionHistory from "../transaction-history/TransactionHistory";
import deactivateCard from "../../assets/deactivateCard.svg"

import Footer from "../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeCard, toggleCardStatus } from "../../redux/cardSlice";
import { RootState } from "../../redux/store";
import freezeLogo from "../../assets/freezeCard.svg";
import { useEffect, useState } from "react";

interface crudOperationProps {
  logo: string;
  text: string;
}

const CrudOperation = ({ logo, text }: crudOperationProps) => {
  return (
    <div className="ops">
      <div className="ops-logo">
        <img src={logo} alt={text} />
      </div>
      <div className="ops-text">{text}</div>
    </div>
  );
};

const CardCrud = () => {
  const card = useSelector((state: RootState) => state.cards.activeCard);
  const dispatch = useDispatch();
  const [statusText, setStatusText] = useState("Unfreeze Card");

  useEffect(() => {
    if (!card?.isFreezed) {
      setStatusText("Freeze Card");
    } else setStatusText("Unfreeze Card");
  }, [card]);

  return (
    <div className="card-info">
      <div className="card-ops">
        <div className="crud-ops-container">
          <div
            className="ops"
            onClick={() => {
              if (!card?.isFreezed) {
                setStatusText("Freeze Card");
              } else setStatusText("Unfreeze Card");

              dispatch(toggleCardStatus());
            }}
          >
            <div className="ops-logo">
              <img src={freezeLogo} alt="" />
            </div>
            <div className="ops-text">{statusText}</div>
          </div>

          {crudOps.map((ops) => (
            <CrudOperation
              key={ops.logo}
              logo={ops.logo}
              text={ops.text}
            />
          ))}

          <div
            className="ops"
            onClick={() => {
              if (!card?.isFreezed) {
                setStatusText("Freeze Card");
              } else setStatusText("Unfreeze Card");

              dispatch(removeCard(card));
            }}
          >
            <div className="ops-logo">
              <img src={deactivateCard} alt="" />
            </div>
            <div className="ops-text">Cancel Card</div>
          </div>
        </div>
      </div>
      <div className="card-details">
        <div className="details-header">
          <div className="group-logo">
            <img src={group11889} alt="" />{" "}
          </div>
          <div className="details-text">Card Details</div>
          <div className="down-arrow">
            <img src={downArrow} alt={downArrow} />
          </div>
        </div>
      </div>
      <div className="card-details">
        <div className="recent-trans">
          <div className="group-logo">
            <img src={transaction} alt="" />{" "}
          </div>
          <div className="trans-text">Recent Transactions</div>
          <div className="up-arrow">
            <img src={upArrow} alt={upArrow} />
          </div>
        </div>
      </div>
      <TransactionHistory />
      <div className="card-footer">
        <Footer />
      </div>
    </div>
  );
};

export default CardCrud;
