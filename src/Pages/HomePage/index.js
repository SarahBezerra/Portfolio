import Conainer from "./HomeStyle.js"
import profilePicture from "../../Images/profilePicture.png"

export default function HomePage(){
    return(
    <Conainer>
        <div className="left">
            <h1>Olá, meu nome é <span>Sarah Bezerra da Silva</span></h1>
            <h2>Eu sou Desenvolvedora Web Full-Stack</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <button>SAIBA MAIS</button>
        </div>
        <div className="right">
            <img src={profilePicture} alt="Foto de Perfil de Sarah" />
        </div>
    </Conainer>
    )
}