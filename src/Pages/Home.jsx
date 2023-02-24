import {useState} from 'react'

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (ev) => {
        setInputValue(ev.target.value);
    }

    return <div>
        <div>{inputValue}</div>
        <input type='text' value={inputValue} onChange={onInputChange} />
        <button type='button' onClick={()=>
        {
          setInputValue( "Lina");
        }}>Update input</button>
    </div>
}

export default Home;