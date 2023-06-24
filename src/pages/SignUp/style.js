import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    .text_top {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .text_top h1{
        font-size: 48px;
        color: ${({theme})=>theme.COLORS.ORANGE};
    }

    .text_top h2{
        font-size: 24px;
        margin-bottom: 50px;
    }

    .text_top p{
        font-size: 14px;
        color: ${({theme})=>theme.COLORS.GRAY_100};
    }

    a{
        margin-top: 50px;
        color: ${({theme})=>theme.COLORS.ORANGE};
    }

    .wrapper_inputs {
        width: 100%;
    }

    @media (max-width: 800px) {
        padding: 0 50px;

        .text_top h1{
            font-size: 38px;
        }

        .text_top h2{
            font-size: 20px;
        }
    }
`;

export const Background= styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;
