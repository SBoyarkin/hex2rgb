import S from "./Hex.module.css"
export function Hex({hex}) {
    return(
        <>
            <div className={S.back} >
                <form className={S.form}>
                    <input className={S.boxHEX} type="text"/>
                    <div className={S.boxRGB}>text</div>
                </form>
            </div>
        </>)

}