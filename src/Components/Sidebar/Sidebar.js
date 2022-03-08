import SidebarStyle from "./SidebarStyle"

export default function Sidebar(){
    return(
        <SidebarStyle>
            <h1>PORTFÓLIO</h1>
            <ol>
                <li><ion-icon name="home-outline"></ion-icon>Início</li>
                <li><ion-icon name="person-circle-outline"></ion-icon>Sobre</li>
                <li><ion-icon name="construct-outline"></ion-icon>Tecnologias</li>
                <li><ion-icon name="chatbox-ellipses-outline"></ion-icon>Contatos</li>
            </ol>
        </SidebarStyle>
    )
}