import './Paragraph.scss'

export default ({size, children}) => {
    return(
        <div className="Paragraph" style={{ fontSize : `${size}px` }}>
            {children}
        </div>
    )
}