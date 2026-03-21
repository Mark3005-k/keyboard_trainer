import { useState } from 'react'
import './index.css'
import TextDisplay from './components/TextDisplay'
import TypingInput from './components/TypingInput'

function App() {

  const [typedText, setTypedText] = useState('')
  const text ='jvnfoindf indsfos dsfsfs'



  return (
    <div className='app'>
      <div className='trainer'>
        <h1 className='title'>Trainer</h1>
          <p className='subTitle'>Надрукуй без помилок</p>
          <TypingInput value={typedText} onChange={(e)=>setTypedText(e.target.value)} />
            <TextDisplay text = {text} typedText = {typedText}/>
          

      </div>
    </div>
  )
}

export default App
