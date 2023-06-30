import React from 'react';
import styled from 'styled-components';
import DropDownIcon from '../Upload/assets/dropdown.png';

const Upload = () => {

    const [category, setCategory] = React.useState('글 종류')
    const [isOpen, setIsOpen] = React.useState(false)
    const onClickMenu = (e) => {
        setCategory(e.target.innerText);
        setIsOpen(false);
    }
    return (
        <Container>
            <Header>
                <CategoryBox onClick={
                        () => {
                            setIsOpen(!isOpen);
                        }
                    }>
                    <h3 style={{display: !isOpen ? 'flex' : 'none'}}>{category}</h3>
                    {isOpen && (<MenuList>
                        <h3 onClick={onClickMenu}>건강</h3>
                        <h3 onClick={onClickMenu}>스마트폰</h3>
                        <h3 onClick={onClickMenu}>취미</h3>
                    </MenuList>)}
                    <DropDown src={DropDownIcon} style={{display: !isOpen ? 'flex' : 'none'}}></DropDown>
                </CategoryBox>
                <TitleInput placeholder='제목을 입력해 주세요.'></TitleInput>
                <UploadButton>글 올리기</UploadButton>
            </Header>
            <DescInput placeholder="내용을 입력해 주세요."></DescInput>
        </Container>
    );
};

const Container = styled.div`
    width: wrap-content;
    height: wrap-content;
    display: flex;
    flex-direction: column;
    align-items: start;
    `

const Header = styled.div`
    width: 1005px;
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    `

const CategoryBox = styled.div`
    width: 170px;
    height: 60px;
    display: flex;
    justify-content:center;
    /* border: 1.5px solid #2196F3; */
    border: 0.5px solid lightgrey;
    border-radius: 3px;
    h3{
        margin: auto;
        font-size: 26px;
        font-weight: 200;
        color:#2196F3;
        text-align: center;
        font-family:"BMDOHYEON";
        &:hover{
            cursor: pointer;
            background: #f2f2f2;
        }
    }

    &:hover{
        cursor: pointer;
        border: 1px solid #2196F3;
    }
    `

const MenuList = styled.li`
    border-radius: 3px;
    height: 160px;
    border: 1px solid lightgrey;
    h3{
        width: 150px;
        padding: 10px;
        font-size: 26px;
        font-weight: 200;
        margin:0px;
        background: white;
        &+&{
            margin-top: 10px;
        }

    }
    position: relative;
    display: flex;
    flex-direction: column;

`

const DropDown = styled.img`
    width: 33px;
    height: 35px;
    margin-top: 12px;
    margin-right: 9px;
    `

const TitleInput = styled.input`
    width: 70%;
    height: 56px;
    font-size: 22px;
    font-weight: 800;
    padding:5px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    margin-left: 5px;
    font-family: 'KoPubWorldDotum';
    `

const UploadButton = styled.button`
    width: 150px;
    height: 66px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    border-radius: 3px;
    margin-left: 10px;
    background: #2196F3;
    outline: none;
    border: none;
    transition: 0.2s;
    &:hover{
        transform: scale(1.04);
    }
    `

const DescInput = styled.textarea`
width: 970px;
height: 200px;
padding: 20px;
border: none;
font-weight: 600;
font-size: 22px;
line-height: 26px;
border-radius: 3px;
resize: none;
/* outline: black solid 1px; */
transition: all 0.1s ease-in-out;
font-family: 'KoPubWorldDotum';
&:focus{
    outline: black solid 1px;
    height: 600px !important;
};
`



export default Upload;