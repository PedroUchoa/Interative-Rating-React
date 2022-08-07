import React, { useState } from 'react'
import './FirstPage.css'
import IconStar from '../Imgs/icon-star.svg'
import ListButtons from '../ListButtons/ListButtons'
import { useNavigate } from "react-router-dom";

function FirstPage() {
    const [active, setActive] = useState(0)
    
    let navigate = useNavigate();

    function handleClick(event) {
        if (active === event.target.id) {
            setActive(0)
        } else {
            setActive(event.target.id)
        }
    }

    function isOn(){
        if (active !== 0) {
            navigate('/SecondPage', {state:{value: active}})
        }
    }

    return (
        <div className='First-Page'>
            <div className='Img-Container'>
                <img src={IconStar} alt='Icone de Estela' />
            </div>
            <div className='Text-Container'>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with you support request. All feedback is appreciated to help us improve our offering</p>
            </div>
            <div className='List-Container'>
                <ul>
                    <ListButtons
                        className={active === '1' ? 'Active' : 'No-Active'}
                        handleClick={handleClick}
                        value='1'
                        id={1}
                        keyValue={1}
                    />

                    <ListButtons
                        className={active === '2' ? 'Active' : 'No-Active'}
                        handleClick={handleClick}
                        value='2'
                        id={2}
                        keyValue={2}
                    />
                    <ListButtons
                        className={active === '3' ? 'Active' : 'No-Active'}
                        handleClick={handleClick}
                        value='3'
                        id={3}
                        keyValue={3}
                    />
                    <ListButtons
                        className={active === '4' ? 'Active' : 'No-Active'}
                        handleClick={handleClick}
                        value='4'
                        id={4}
                        keyValue={4}
                    />
                    <ListButtons
                        className={active === '5' ? 'Active' : 'No-Active'}
                        value='5'
                        handleClick={handleClick}
                        id={5}
                        keyValue={5}
                    />
                </ul>
            </div>
            <div className='Button-wrapper'>
                <button onClick={isOn} className='Button-Redirect'>SUBMIT</button>
            </div>
        </div>
    )
}

export default FirstPage