import React from 'react';
import styled from 'styled-components';


const Upload = () => {
    return (
        <Container>
            <Header>
                <h2>임시 카테고리</h2>
                <TitleInput placeholder='제목을 입력해 주세요.'></TitleInput>
                <button>임시버튼</button>
            </Header>
            <DescInput placeholder="내용을 입력해 주세요."></DescInput>
        </Container>
    );
};

const Container = styled.div`
    width: 1600px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const Header = styled.div`
    width: 60%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    `

const TitleInput = styled.input`
    width: 40%;
    height: 100%;
    border: 1px solid black;
    `

const DescInput = styled.input`
    width: 60%;
    height: 100%;
    border: 1px solid black;
`


export default Upload;