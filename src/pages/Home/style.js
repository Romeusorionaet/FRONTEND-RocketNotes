import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    overflow: hidden;

    .wrapper {
        width: 100%;
        height: 100vh;

        display: grid;
        grid-template-columns: 250px auto;
        grid-template-rows: 105px 128px auto 64px;
        grid-template-areas: 
        "brand header"
        "menu search"
        "menu content"
        "newnote content";
    }

    .sidebar {
        width: 100%;
        height: 100vh;

        display: grid;
        grid-template-columns: 250px auto;
        grid-template-rows: 105px 128px auto 64px;
        grid-template-areas: 
        "brand header"
        "menu search"
        "menu content"
        "newnote content";
    }

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};

    .inputSvg {
        display: none;
    }


    @media (max-width: 800px) {
        .wrapper {
            grid-template-columns: 0 auto;
            grid-template-areas: 
            "brand header"
            "menu search"
            "menu content"
            "menu newnote";
        }

        .rotate180 {
            transform: rotate(180deg);
        }

        .inputSvg {
            display: block;
            position: absolute;
            z-index: 1;

            padding: 12px;

            >div {
                width: 30px;
                height: 30px;
                z-index: 1;

                input {
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                }

                svg {
                    position: absolute;
                    top: 6px;
                    left: 6px;
                    font-size: 40px;
                    z-index: -1;
                }
            }
        }
    }
`;

export const Brand = styled.div`
    grid-area: brand;
    
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=>theme.COLORS.BACKGROUND_700};

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};

    h1{
        font-size: 24px;
        color: ${({theme})=>theme.COLORS.ORANGE};
    }
`;

export const Menu = styled.li`
    grid-area: menu;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};

    padding-top: 64px;
    text-align: center;
    list-style: none;

    overflow: auto;
`;

export const Search = styled.div`
    grid-area: search;
    padding: 64px 64px 0;
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;
`;

export const NewNote = styled(Link)`
    grid-area: newnote;
    
    background-color: ${({theme})=>theme.COLORS.ORANGE};
    color: ${({theme})=>theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;

    >svg{
        margin-right: 8px;
    }
`;