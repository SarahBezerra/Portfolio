import styled from "styled-components"

const SidebarStyle = styled.div`
    width: 270px;
    padding: 70px 20px;
    
    background-image: linear-gradient(to top, #B873E8, #6667E1);

    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    top: 0;
    bottom: 0;

    h1{
        margin-bottom: 70px;
        font-size: 30px;
        font-family: 'Poiret One', cursive;
    }

    li{
        height: 40px;
        font-size: 18px;
        padding: 10px 30px;
        margin: 8px 0;

        display: flex;
        align-items: center;

        font-weight: 300;

        ion-icon{
            font-size: 24px;
            margin-right: 12px;
        }
    }

    li:hover{
        transition: 0.3s;
        color: #330033;
        cursor: pointer;
        font-size: 22px;

        ion-icon{
            font-size: 30px;
        }
    }
`

export default SidebarStyle;