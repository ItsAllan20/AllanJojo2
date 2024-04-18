import {Link} from 'react-router-dom'
import "./Navigation.css"

export default function Navigation(){
    return(
        <>
        <div className="chemins">
            <Link to="/Form"> Formulaire </Link>
            <Link to="/"> Accueil </Link>
            <Link to="/Api"> Api </Link>
        </div>
        </>
    )
}