import styled from "styled-components"

const Conainer = styled.div`
    margin: 40px 40px 40px 310px;
    background-image: linear-gradient(to top, #B873E8, #6667E1);

    display: flex;

    .left{
        padding: 50px 30px;

        h1{
            font-size: 20px;
            margin: 50px 0 40px 0;

            span{
                font-family: 'Indie Flower', cursive;
                font-size: 30px;
                color: #330033;
            }
        }

        h2{
            font-size: 25px;
            margin-bottom: 40px;
        }

        p{
            line-height: 25px;
            margin-bottom: 30px;
        }

        button{
            width: 170px;
            height: 35px;
            border: 1px solid #FFF;
            border-radius: 50px;
            font-size: 14px;
            background-color: transparent;
            color: #FFF;
        }

        button:hover{
            transition: 0.3s;
            font-size: 15px;
            box-shadow: 1px 1px 10px 1px rgba(255,153,255,0.55);
        }
    }

    .right{
        padding: 50px 30px;

        img{
            border-radius: 1000px;
            width: 300px;
            box-shadow: 0px 0px 15px 8px rgba(255,153,255,0.55);
        }
    }
            

`;

export default Conainer;