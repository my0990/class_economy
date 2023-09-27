export default function LoginMenuBtn(props){
    return(
        <button {...props} style={{fontSize: "24px", marginRight:"16px"}}>{props.children}</button>
    )
}