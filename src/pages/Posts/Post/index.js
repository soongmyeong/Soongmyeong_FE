import React from 'react';
import { styled } from 'styled-components';

const Post = (props) => {
    return (
        <Section>
            <Title>노인터</Title>

        </Section>
    );
};

const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F8F9FA;
    `;

const Title = styled.h1`
    font-size: 64px;
    font-family:"BMDOHYEON";
    text-align: center;
    color: black;
    margin:auto;
    margin-top: 30px;
`
const PostBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    `


export default Post;