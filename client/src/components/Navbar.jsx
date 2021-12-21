import { Badge } from '@material-ui/core'
import { PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { logout } from "../redux/apiCalls"

const Container = styled.div`
    height: 8vh;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding : "10px 0px" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ display: "none" })}
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ display: "none" })}
`

const Input = styled.input`
    border: none;
    outline: none;
`

const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${mobile({ textAlign: "left", marginLeft: "10px" })}
`

const Logo = styled.img`
    height: 3vh;
    ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({ justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 15px;
    text-decoration: none;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Vr = styled.div`
    border-left: 1px solid lightgray;
    height: 4vh;
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        logout(dispatch);
        window.location.reload(true);
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to = "/">
                        <Logo src = "https://hoomu.es/img/provisional/hoomu-tech-blanco.svg"/>
                    </Link>
                </Left>
                <Center>
                    <Link to = "/products/man">
                        <MenuItem>Man</MenuItem>
                    </Link>
                    <Link to = "/products/woman">
                        <MenuItem>Woman</MenuItem>
                    </Link>
                    <Link to = "/products/collabs">
                        <MenuItem>Collabs</MenuItem>
                    </Link>
                    <Link to = "/products/accesories">
                        <MenuItem>Accesories</MenuItem>
                    </Link>
                </Center>
                <Right>
                    <MenuItem onClick={handleClick}>
                        LOGOUT
                    </MenuItem>
                    <Link to = "/login">
                        <MenuItem>
                            <PersonOutlineOutlined/>
                        </MenuItem>
                    </Link>
                    <MenuItem>
                        <Vr/>
                    </MenuItem>
                    <Link to = "/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
