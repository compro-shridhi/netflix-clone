import React,{useState, useEffect} from 'react'
import './Nav.css';

function Nav() {
    const [show, setshow] = useState(false)

    const TransitionBar =() =>{
        if(window.scrollY>100){
            setshow(true);
        }
        else{
            setshow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",TransitionBar);
        return () => window.removeEventListener("scroll",TransitionBar);
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <img
                    className="nav_logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix Logo" />

                <img
                    className="nav_avatar"
                    src="data:image/png;base64,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"
                    alt="Netflix Avatar Logo" />
            </div>
        </div>
    )
}

export default Nav
