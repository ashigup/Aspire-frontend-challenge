import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Card {
  name: string;
  number: number;
  expiry: string;
  isFreezed: boolean;
}

interface Cards {
  cards: Array<Card>;
  activeCard: Card;
  value?: any;
}
const intialCards = [
  {
    name: "Mark Henry",
    number: 2345678965406789,
    expiry: "12/20",
    isFreezed: false,
  },
  {
    name: "Ashish Kumar",
    number: 123456767891234,
    expiry: "11/20",
    isFreezed: false,
  },
  {
    name: "Milton",
    number: 1267893111671234,
    expiry: "11/22",
    isFreezed: true,
  },
  {
    name: "Ramesh",
    number: 1231678911671114,
    expiry: "11/22",
    isFreezed: true,
  },
];
const initialState: Cards = {
  activeCard: intialCards[0],
  cards: intialCards,
  value : { name: 'Ashish'}
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<Card>) => {

      const index = state.cards.findIndex(card => card?.number=== action.payload?.number)
      const newCards = state.cards.filter(card => card?.number!== action.payload?.number)

      if(index === newCards.length){
       state.activeCard = newCards[0]
      }
      else{
      state.activeCard = newCards[index]
      }

      state.cards = newCards;


    },
    toggleCardStatus: (state) => {
      state.cards = state.cards.map((card) => {
        if (card?.number === state.activeCard?.number) {
          card.isFreezed = !card?.isFreezed;
        }
        return card;
      });
      state.activeCard.isFreezed = !state.activeCard?.isFreezed
    },
    setActiveCard: (state, action: PayloadAction<Card>) => {
      state.activeCard = action.payload;
    },
  },
});

export const { addCard, removeCard, toggleCardStatus, setActiveCard } =
  cardSlice.actions;

export default cardSlice.reducer;
