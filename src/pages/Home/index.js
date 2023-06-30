import React from 'react';
import styled from 'styled-components';
import Posts from '../Posts';
import Upload from '../Upload';


const Home = () => {
    return (
        <MainSection>
            <Title>블로그 제목</Title>
            <Upload></Upload>
            <PostsSection>
                <Posts title="취미"></Posts>
                <Posts title="스마트폰"></Posts>
                <Posts title="건강"></Posts>
            </PostsSection>
        </MainSection>
    );
};


const MainSection = styled.section`
    width: 100%;
    height: 100%;
    background: #F8F9FA;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 64px;
    text-align: center;
    color: black;
`

const PostsSection = styled.section`
    padding: 4em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
`

export default Home;