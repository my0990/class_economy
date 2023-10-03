export default function SignBtn(props) {
    return(
        <button {...props} style={{width: '100%', height: '60px', backgroundColor: '#EBEF95', color: '#666666', fontWeight: '600'}}>{props.children}</button>
    )
}