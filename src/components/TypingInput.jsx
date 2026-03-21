
function TypingInput ({value, onChange}) {
   return <input 
    type="text"
    className="input"
    value={value}
    onChange={onChange}
    placeholder="Друкуй!" />
}

export default TypingInput