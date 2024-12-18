import './Paragraph.scss'

export default ({ size, children, onClick }) => {
    return(
        <span className="Paragraph" style={{ fontSize : `${size}px`, cursor: onClick ? 'pointer' : 'text', textDecoration: onClick ? 'underline' : 'none', }} onClick={onClick}>
            {children}
        </span>
    )
}