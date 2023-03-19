import React, {useState,useEffect} from 'react'
import CardForm from './components/CardForm'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'


function App() {

  const [cardInfo, setCardInfo]=useState({
    'cardName':'',
    'cardNumber':'',
    'month':'',
    'year':'',
    'cvv':'',
  })
  const [isValid, setIsValid]=useState({
    'numberFormat':false,
    'nullInput':false,
    'inputLength':false
  })

  function handleChange(event){
      const {name,value}=event.target

      setCardInfo(prev=>({
        ...prev,
        [name]:value
      }))
  }

  function handleConfirm(event){

    var cardNumber=cardInfo.cardNumber
    var cardName=cardInfo.cardName
    var cvv=cardInfo.cvv
    var mon=cardInfo.month
    var yr=cardInfo.year

    let temp=''

    for(let i=0;i<16;i++){
        if(i%4==0 && i!==0)
          temp+=' '
        else
          temp+=cardName.charAt(i)
    }

      cardName=temp
      console.log(cardName)
      // if(cardName===''||cardNumber===''|| cvv===''|| mon===''|| yr===''){
      //   setIsValid(prev=>({
      //     ...prev,
      //     'nullInput':true
      //   }))
      // }
      // if(cardNumber.length!==19 || cvv.length!==3 || mon.length!==2 || yr.length!==2){
      //   setIsValid(prev=>({
      //     ...prev,
      //     'inputLength':true
      //   }))
      // if()
      // }
  }
  //use for changing the form confirmation looks and other things
  

    return (
      <main>
        <div className='card-holder'>
          <CardFront
            cardFrontInfo={cardInfo}
            />
          <CardBack cardBackInfo={cardInfo}/>
        </div>
          <CardForm handleChange={handleChange} 
            cardInfo={cardInfo}
            confirm={handleConfirm}
            />

      </main>
    )
}

export default App
