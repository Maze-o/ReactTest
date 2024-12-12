import SonComponent1 from "./01Son"
import { useState } from 'react'

const ParentComponent = () => {

    const data = { name: "hong", age: 30 }
    const [data2, setData2] = useState({})
    const handleData2 = (data) => {


        setData2(data);
    }

    return (
        <div>
            <SonComponent1 data={data} handleData2={handleData2} />
            <hr />
            <h2>부모가 받은 데이터</h2>
            {data2 && (
                <>
                    {data2.phone} , {data2.addr}                
                </>

            )}

        </div>
    )
}

export default ParentComponent;