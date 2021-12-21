import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`
const Input = styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    cursor: pointer;
`

const Newsletter = () => {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        //register(dispatch, email)
    }
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input name = "email" placeholder = 'Your Email' onChange = {(e) => setEmail(e.target.value)} />
                <Button onClick = {handleClick}>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
