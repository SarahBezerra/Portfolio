import styled from 'styled-components';

export default function HomePage(){
    return(
    <Container>
        <div className="sidebar">
            <h1>PORTFÓLIO</h1>
            <ol>
                <li><ion-icon name="home-outline"></ion-icon>Início</li>
                <li><ion-icon name="person-circle-outline"></ion-icon>Sobre</li>
                <li><ion-icon name="construct-outline"></ion-icon>Tecnologias</li>
                <li><ion-icon name="chatbox-ellipses-outline"></ion-icon>Contatos</li>
            </ol>
        </div>
    </Container>
    )
}

const Container = styled.div`
min-height: 100vh;
display: flex;
font-family: 'Spartan', sans-serif;

    .sidebar{
        width: 270px;
        padding: 70px 20px;
        
        background-image: linear-gradient(to top, #FFB6C1, #E889C8);

        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            margin-bottom: 70px;
            font-size: 28px;
            color: #B53E3F;
            font-weight: 500;
        }

        li{
            font-size: 18px;
            padding: 10px 30px;
            margin: 8px 0;
            border-radius: 50px;

            display: flex;
            align-items: center;

            color: #2B011D;

            ion-icon{
                font-size: 24px;
                margin-right: 12px;
            }
        }

        li:hover{
            background-color: rgba(192,192,192, 0.4);
            color: #FFF;
        }
    }
`;