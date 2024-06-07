import {useEffect, useState} from 'react'
import './App.css'

const App = () => {
    const [input, setInput] = useState('')
    const [calculate, setCalculate] = useState('')

    const buttons = ['AC', '( )', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', 'C', '=']

  useEffect(() => {
      try {
        if (input !== '') {
        setCalculate(eval(input))
        }
      }
        catch (error) {
        console.log(error)
        }
  }, [input]);


    const key = (key) => {

            if (key === 'AC') {
                setInput('')
              setCalculate('')
            } else if (key === '( )') {

            } else if (key === 'C') {
                // setInput(input => input.slice(0, -1))
            } else if (key === '=') {
              setCalculate('')
              
              setInput(eval(input))
              
            }
            else if (key !== '=') {
                setInput(input => input + key)
            }
        }



    return (
        <>
            <div className={'w-screen h-screen flex items-center  justify-center'}>
                <div className={'w-80'}>
                    <div className={'flex flex-col bg-indigo-600 rounded-3xl p-5'} >
                        <div className={' flex flex-col h-28 bg-indigo-500 rounded-2xl p-6 '}>
                            <input className={'w-full self-start outline-0 text-end text-3xl bg-transparent'} type={'text'} value={input}
                                   onChange={(e) => setInput(e.target.value)} readOnly={true}/>
                            {/* <input className={'w-full self-end outline-0 text-end text-lg bg-transparent pe-1 opacity-60'} type={'text'} value={calculate} readOnly={true}/> */}
                          <span className={'w-full self-end outline-0 text-end text-lg bg-transparent pe-1 opacity-60'}> {calculate} </span>
                          
                        </div>

                        <div className={'grid grid-cols-4 gap-3 p-3 mt-3'}>
                            {
                                buttons.map(button =>
                                    <div className={'flex items-center justify-center'} key={button}>
                                        <button className={'w-[3.5rem] h-[3.5rem] rounded-full bg-indigo-800 text-2xl'} onClick={() => key(button)}>{button}</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default App
