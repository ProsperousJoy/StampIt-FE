import './Header.scss'

export default ({size, children}) => {
    return(
        <div className="Header" style={{ fontSize : `${size}px` }}>
            {children}
        </div>
    )
}