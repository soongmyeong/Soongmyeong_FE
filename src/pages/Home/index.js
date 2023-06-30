import React from 'react';
import styled from 'styled-components';
import Posts from '../Posts';
import Upload from '../Upload';
import Dropdown from './assets/dropdown.png';


const Home = () => {

    const [toggle, setToggle] = React.useState(false);

    const onToggle = () => {
        setToggle(!toggle);
    }


    return (
        <Section>
            <SpreadButton src={Dropdown} onClick={onToggle} style={{transform : toggle ? 'rotate(90deg) translateY(-200px)' : 'rotate(270deg)'}}></SpreadButton>
            <Title>노인터</Title>
            <Content>
                <SideBar style={{display: toggle ? 'flex' : 'none'}} {...(toggle ? {show : true} : {})}>
                    <SideBarTitle>내가 쓴 글</SideBarTitle>
                    <MyPosts>
                        <h2>내가 쓴 글</h2>
                        <h2>내가 쓴 글</h2>
                        <h2>내가 쓴 글</h2>
                    </MyPosts>
                </SideBar>

                <MainSection>
                    <Upload></Upload>
                    <PostsSection>
                        <Posts title="취미"></Posts>
                        <Posts title="스마트폰"></Posts>
                        <Posts title="건강"></Posts>
                    </PostsSection>
                </MainSection>
            </Content>
        </Section>
    );
};

const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #F8F9FA;
    align-items: start;
    `

const Content = styled.div`
    width: wrap-content;
    height: 100%;
    display: flex;
    padding: 20px;
    margin-top:30px;
    flex-direction: row;
    background: #F8F9FA;
    justify-content: center;
`



const SideBar = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    width: 15%;
    margin-right: 30px;
    font-family:"BMDOHYEON";
    @keyframes show_anim {
    0% {
        opacity: 0;
        transform: translateX(-260px) rotate(0deg);
    }
    100% {
        opacity: 1;
        transform: translateX(0px);
    } 
} 

    &.show{
        animation: show_anim 0.5s ease-in;
    }

    transition: 0.5s;
`

const MyPosts = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgrey;
`

const SideBarTitle = styled.h1`
    font-size: 32px;
    margin-bottom: 31px;
    margin-top: 0px;
    `

const MainSection = styled.div`
    width: 60%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 64px;
    font-family:"BMDOHYEON";
    text-align: center;
    color: black;
    margin:auto;
    margin-top: 30px;
`

const PostsSection = styled.section`
    display: flex;
    /* grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr; */
    justify-content: start;
    align-items: start;
    flex-direction: row;
    width: 65%;
    & + &{
        margin-left:20px;
    }
`

const SpreadButton = styled.img`
    width: 50px;
    height: 50px;
    position: sticky;
    left: 30px;
    top: 50%;
    transform: rotate(270deg);
    border: 1px solid white;
    border-radius: 50%;
    font-family:"BMDOHYEON";
    &:hover{
        cursor: pointer;
        /* background: white; */
        background-color: white;
        
    }
`


export default Home;