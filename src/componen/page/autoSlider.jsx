import React from "react";
import Blogger from '../../assets/logo/blogger.svg'
import Canva from '../../assets/logo/canva.svg'
import Capcut from '../../assets/logo/capcut.svg'
import CorelDraw from '../../assets/logo/coreldraw.svg'
import Css from '../../assets/logo/css.svg'
import Excel from '../../assets/logo/excel.svg'
import Filmora from '../../assets/logo/filmora.svg'
import Html from '../../assets/logo/html.svg'
import Laravel from '../../assets/logo/laravel.svg'
import Mikrotik from '../../assets/logo/mikrotik.svg'
import Php from '../../assets/logo/php.svg'
import PowerPoint from '../../assets/logo/powerpoint.svg'
import Word from '../../assets/logo/word.svg'

function AutoSlide(){
    return(
        <>
            <div className="logo-slide">
                <img src={Laravel} alt="" />
                <img src={Capcut} alt="" />
                <img src={Filmora} alt="" />
                <img src={Canva} alt="" />
                <img src={CorelDraw} alt="" />
                <img src={Html} alt="" />
                <img src={Css} alt="" />
                <img src={Php} alt="" />
                <img src={Blogger} alt="" />
                <img src={Word} alt="" />
                <img src={Excel} alt="" />
                <img src={PowerPoint} alt="" />
                <img src={Mikrotik} alt="" />
            </div>

            <div className="logo-slide">
                <img src={Laravel} alt="" />
                <img src={Capcut} alt="" />
                <img src={Filmora} alt="" />
                <img src={Canva} alt="" />
                <img src={CorelDraw} alt="" />
                <img src={Html} alt="" />
                <img src={Css} alt="" />
                <img src={Php} alt="" />
                <img src={Blogger} alt="" />
                <img src={Word} alt="" />
                <img src={Excel} alt="" />
                <img src={PowerPoint} alt="" />
                <img src={Mikrotik} alt="" />
            </div>
        </>
    )
}

export default AutoSlide