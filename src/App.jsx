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
  const [isValid, setIsValid]=useState(false)

  function handleChange(event){
      const {name,value}=event.target

      setCardInfo(prev=>({
        ...prev,
        [name]:value
      }))
  }

  function handleConfirm(event){
    if(cardInfo.cardNumber.length==16 && cardInfo.cardName.length!==0 && cardInfo.month.length==2 && cardInfo.year.length==2 && cardInfo.cvv.length==3){
        setIsValid(true)
    }
    else{
      setIsValid(false)
    }
    console.log(isValid)
  }
  //use for changing the form confirmation looks and other things
  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  

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
