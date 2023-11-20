import React from 'react'
import "./homePage.css"
import StatusBar from '../statusBar/StatusBar'
import Balance from '../account-balance/Balance'
import CardSlider from '../card-slider/CardSlider'
import CardCrud from '../card-change-and-history/CardCrud'

const HomePage = () => {
  return (
    <div className="main">
      <div className="fix-home">
     <StatusBar/>
     <Balance/>
     <CardSlider/>
     </div>
<CardCrud/>
    </div>
  )
}

export default HomePage