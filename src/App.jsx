import { useEffect, useState, useMemo } from 'react'
import './index.css'
import TextDisplay from './components/TextDisplay'
import TypingInput from './components/TypingInput'
import StatsPannel from './components/StatsPannel'

function App() {

  const [typedText, setTypedText] = useState('')
  const text ='jvnfoindf indsfos dsfsfs'
  const [time, setTime] = useState(0)
  const [isStarted, setisStarted] = useState(false)
  const [isFinished, setisFinished] = useState(false)


  const handleChange = (e)=> {
    const value = e.target.value
    if (!isStarted && value.length>0) {
      setisStarted(true)
    }
    if (value.length<=text.length ){
      setTypedText(value)
    }

  }
  useEffect(()=>{
    if (!isStarted || isFinished) return

    const intervalId = setInterval(()=>{
      setTime((prevTime)=> prevTime+1)
    }, 1000)
    return ()=> clearInterval(intervalId)

  }, [isStarted, isFinished])
  
  useEffect(()=>{
    if (typedText.length === text.length && typedText.length>0) {
      setisFinished(true)
    }
  }, [text, typedText])

  const mistakes = useMemo(()=>{
    let count = 0
    for(let i = 0; i < typedText.length; i++){
      if (typedText[i] !== text[i]){
        count++
      }
    }

    return count
  }, [text, typedText])

  const speed = useMemo(()=>{
    if (time != 0) return Math.round((typedText.length/time)*60)
      return 0
  }, [time, typedText]
)

  const accuracy = useMemo(()=>{
    if (typedText.length === 0) return 100
    const correctChars = typedText.length-mistakes 
    return Math.round((correctChars/typedText.length)*100)
  }, [typedText, mistakes])

  return (
    <div className='app'>
      <div className='trainer'>
        <h1 className='title'>Trainer</h1>
          <p className='subTitle'>Надрукуй без помилок</p>
          <StatsPannel time = {time} mistakes={mistakes}  speed={speed} accuracy ={accuracy}/> 
          <TypingInput value={typedText} onChange={handleChange} />
            <TextDisplay text = {text} typedText = {typedText}/>
          

      </div>
    </div>
  )
}

export default App
