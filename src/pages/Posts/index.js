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
        {id: 1, title: '테스트', body: '취미는 게임'},
        {id: 2, title: '하하', body: '스마트폰은 아이폰'},
        {id: 3, title: '굿굿', body: '건강은 운동'}
    ]);

    return (
        <Container>
            <Title>{props.title}</Title>
            <PostList>
                    {postList.map((post) => (
                        <NavLink to={`/post/${post.id}`}>
                            <Post key={post.id}>
                                <h3>{post.title}</h3>
                            </Post>
                        </NavLink>
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
    font-size: 1.5em;
`

const PostList = styled.div`
    padding: 1rem;
    border: 1px solid black;
    width: 30%;
`

const Post = styled.div`
    width: 300px;
    height: 150px;
`


export default Posts;