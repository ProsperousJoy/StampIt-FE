import './Button.scss'

export default ({onClick, width, children}) => {
    return(
        <button className="Button" style={{ width : `${width}px` }} onClick={onClick}>
            {children}
        </button>
    )
}