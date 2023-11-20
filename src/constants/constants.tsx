import setSpendLimit from "../assets/setSpendLimit.svg"
import GPay from "../assets/GPay.svg"
import replaceCard from "../assets/replaceCard.svg"

interface crudOperationProps {
    logo: string;
    text: string;
  }
export const crudOps:Array<crudOperationProps> = [
    {
        logo:setSpendLimit,
        text:"Set spend limit",
    },
    {
        logo: GPay,
        text:"Add to Gpay",
    },
    {
        logo:replaceCard,
        text:"Replace Card",
    },
]