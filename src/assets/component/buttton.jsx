function BtnComponent({btnText, className , onClick}) {
    return(
        <button className={className} onClick={onClick}>{btnText}</button>
    )
}
export default BtnComponent