import { useState, useEffect } from 'react'

const Timer = () => {

    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000) // 1초단위로 반복
        return () => clearInterval(interval)
    }, [seconds])

    return (

        <div>
            TIME : {seconds}
        </div>
    )
}

export default Timer