import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import api from '../../api/api';
import { NavLink } from 'react-router-dom';


const fetchPost = async () => {
    const response = await api('https://jsonplaceholder.typicode.com/posts');
    const data = await response.data;
    console.log(data);
}

const Posts = (props) => {
    
    const [postList, setPostList] = useState([
        {id: 1, title: '써니사이드업 만들기', body: '취미는 게임'},
        {id: 2, title: '하하', body: '스마트폰은 아이폰'},
        {id: 3, title: '굿굿', body: '건강은 운동'}
    ]);

    return (
        <Container>
            <Title>{props.title}</Title>
            <PostList>
                    {postList.map((post) => (
                        
                            <Post key={post.id} to={`/post/${post.id}`}>
                                {/* <NavLink to={`/post/${post.id}`}>{post.title}</NavLink> */}
                                <h3>{post.title}</h3>
                            </Post>
                        
                    ))}
                
            </PostList>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Title = styled.h1`
    font-size: 44px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-family:"BMDOHYEON";
`

const PostList = styled.div`
    padding: 1rem;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Post = styled(NavLink)`
    width: 300px;
    height: 60px;
    border: 0.5px solid lightgrey;
    background: white;
    border-radius: 12px;
    text-decoration: none;
    margin-bottom: 30px;
    font-family:'KoPubWorldDotum';
    display: flex;
    align-items: center;
    justify-content: center;
    h3{
        text-align: center;
        font-size: 24px;
        color:#2196F3;
        margin : 0px;
    }

    & + &{
        margin-bottom: 30px;
    }
    -webkit-box-shadow: 5px 4px 6px -1px rgba(0,0,0,0.07); 
    box-shadow: 5px 4px 6px -1px rgba(0,0,0,0.07);
    transition: 0.2s;
    &:hover{
        transform: scale(1.04);
    }

`


export default Posts;