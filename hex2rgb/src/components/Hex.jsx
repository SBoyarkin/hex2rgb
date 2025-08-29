import S from "./Hex.module.css"
import {useState} from "react";
import {hexToRgbString} from "../scripts.js";
export function Hex() {
    const [ backgroundColor, inputHandler ] = useState('#AAAAAA')
    return(
        <>
            <div className={S.back} style={{ backgroundColor }}>
                <div className={S.form}>
                    <input className={S.boxHEX}  type="text"
                           onInput={ (e) => {
                               inputHandler(hexToRgbString(e.target.value))
                           }}/>
                    <div className={S.boxRGB}>{ backgroundColor }</div>

                </div>

            </div>
        </>)

    }