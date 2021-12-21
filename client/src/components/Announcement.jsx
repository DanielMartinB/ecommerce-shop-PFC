import styled from "styled-components";


const Container = styled.div`
    height: 4vh;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500px;
`

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders $50
        </Container>
    )
}

export default Announcement
