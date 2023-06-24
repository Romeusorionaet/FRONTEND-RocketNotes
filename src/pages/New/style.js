import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    >main{
        grid-area: content;
        overflow-y: auto;
        width: 100%;

        display: flex;
        justify-content: center;
    }

    .tags{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    width: 100%;
    padding: 60px;

    >header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 36px;

        button{
            font-size:  20px;
            color: ${({theme})=>theme.COLORS.GRAY_100};
        }
    }

    >button {
        width: 260px;
    }

    @media (max-width: 800px) {
        padding: 20px;
    }
`;
