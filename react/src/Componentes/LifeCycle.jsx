import React, { useEffect, useState } from 'react';

const LifeCycle = () => {

    const [text, setText] = useState("")

    // componentDidMount
    useEffect(() => {
        console.log("Componente cargado")
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log("Componente actualizado")
    }, [text])

    // componentWillUnmount
    useEffect(() => {
        return () => console.log("Componente desmontado")
    }, [])

    // Siempre mount || update
    useEffect(() => {
        console.log("Componente siempre")
    })

    return (
        <>
        <div>LifeCycle</div>
        <input type = "text" value={text} onChange={(e) => setText(e.target.value)}/>
        </>
    )
}

export default LifeCycle