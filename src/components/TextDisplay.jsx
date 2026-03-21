function TextDisplay({text, typedText}) {
    const characters = text.split('')
    

return (
    <p className="textDisplay">
       { characters.map((char, index)=>{
        let character = 'char'
        if (index < typedText.length){
            character = typedText[index] === char ? 'char correct' : 'char incorrect'
        } else if (index == typedText.length){
            character = 'char current'
        }
        return (
            <span key={index} className={character}>{char}</span>
        )
       })}
    </p>
)
}

export default TextDisplay