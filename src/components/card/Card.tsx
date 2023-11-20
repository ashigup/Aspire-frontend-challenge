import "./Card.css";
import eye from "../../assets/eye.svg";
import logo from "../../assets/logo_with_text.svg";
import visa from "../../assets/visa.svg";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCard } from "../../redux/cardSlice";
import { RootState } from "../../redux/store";

interface props {
  name: string;
  number: number;
  expiry: string;
  isFreezed: boolean;
}

const Card = (card: props) => {
  const dispatch = useDispatch();
  const {cards } = useSelector((state: RootState) => state.cards);

  const cardRef = useRef(null);
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [cardNumber, setCardNumber] = useState(
    card?.number.toString().slice(-4)
  );

  useEffect(() => {
    if (showCardNumber) {
      setCardNumber(
        card?.number.toString().slice(0, 4) +
          "   " +
          card?.number.toString().slice(4, 8) +
          "   " +
          card?.number.toString().slice(8, 12) +
          "   " +
          card?.number.toString().slice(12, 16)
      );
    } else {
      setCardNumber(card?.number.toString().slice(-4));
    }
  }, [card?.number, showCardNumber]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [cards]);

  const handleIntersection = (entries: any[]) => {
    entries.forEach((entry: { isIntersecting: any }) => {
      if (entry.isIntersecting) {
        dispatch(setActiveCard(card));
      }
    });
  };

  return (
    <>
      <div className="card" ref={cardRef}>
        <div className="show-number">
          <img className="eye-logo" src={eye} alt="" />
          <div
            className="show-number-text"
            style={{ color: showCardNumber ? "#d10101" : "#01D167" }}
            onClick={() => {
              setShowCardNumber((prev) => !prev);
            }}
          >
            {!showCardNumber ? "Show card number" : "Hide card Number"}
          </div>
        </div>
        <div className="cards">
          <div
            className="credit-card"
            style={{ backgroundColor: card.isFreezed ? "#fac0c0" : "#01D167" }}
          >
            <div className="aspire-logo">
              <img src={logo} alt="" />
            </div>
            <div className="name">{card.name}</div>
            <div className="card-number">
              {!showCardNumber && (
                <>
                  {" "}
                  <div className="first-four">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  <div className="first-four">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  <div className="first-four">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                </>
              )}

              <div className="year">{cardNumber}</div>
            </div>
            <div className="expire-cvv">
              <div className="expire">Thru {card.expiry}</div>
              <div className="cvv">
                CVV:
                <div className="asterisk">* * *</div>
              </div>
            </div>
            <div className="visa">
              <img src={visa} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
