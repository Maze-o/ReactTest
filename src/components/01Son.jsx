import { useState } from 'react'

const SonComponent = ({ data, handleData2 }) => {
    const [phone, setPhone] = useState("")
    const [addr, setAddr] = useState("")
    
    const handleClick = () => {
        handleData2({phone : phone, addr : addr})
    }
    return (
        <div>
            <h2>자식 Component가 받은 DATA</h2>
            {data.name} <br />
            {data.age} <hr />

            <input type="text" name= "address" onChange={e => setPhone(e.target.value)} />
            <input type="text" name= "addr" onChange={e => setAddr(e.target.value)}/>
        
            <button onClick={handleClick}>부모에게 전달</button>
        </div>
    )
}

export default SonComponent;