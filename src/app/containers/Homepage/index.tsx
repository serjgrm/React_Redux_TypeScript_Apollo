import React, { useEffect } from "react";
import {Dispatch} from 'redux';
import styled from "styled-components";
import animeService from "../../services/animeService";
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";
import { setAnimePage } from './homePageSlice';


interface IHomePageProps {
}

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
`;




const actionDispatch = (dispatch: Dispatch) =>({
    setAnimePage:(page: GetAnimePage["Page"]) => dispatch(setAnimePage(page))
})


export function HomePage(props:IHomePageProps) {



    const fetchAnimePage = async () => { 
        const animePage = await animeService.getAnimePage(0).catch(console.log);

         console.log(animePage);
    }
   
    useEffect(()=>{
        fetchAnimePage();
    },[])


    return <Container>
        <h1> Anime </h1>
    </Container>
}