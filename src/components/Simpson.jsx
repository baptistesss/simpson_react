function AvatarSimpson(props) {
    return(
 <div className="containers">
    <img className="img" src={props.image}/>
       
    <h1>{props.firstname} {props.lastname}</h1>

</div>
    )

}

export default AvatarSimpson 