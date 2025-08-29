import S from "./Hex.module.css"
import {useState} from "react";
export function Hex() {
    const [ backgroundColor, inputHandler ] = useState('#FFFFFF')

    function hexToRgbString(hex) {
        hex = hex.replace(/^#/, '');
        if (!/^[0-9A-F]{6}$/i.test(hex) && !/^[0-9A-F]{3}$/i.test(hex)) {
            inputHandler('Неверный формат HEX цвета')
            throw new Error('Неверный формат HEX цвета');
        }
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        console.log(S.back.value)

        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return `rgb(${r}, ${g}, ${b})`;
    }

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