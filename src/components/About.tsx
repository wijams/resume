import styled from '@emotion/styled';
import Header from './Header'
import Footer from './Footer'
import picture from '../Images/WorkPicture.jpg'

const OwnerHeader = styled.h1`
    padding-top: 8rem;
    text-align: center;
`

const InfoDiv = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
`

const ImageDiv = styled.div`
    height: 20rem;
    overflow: hidden;
`

const OwnerImage = styled.img`
    margin-left: 25rem;
    height: 24rem;
`

const OwnerText = styled.p`
    margin-left: 2rem;
    width: 30rem;
`

function About() {
    return (
        <>
            <Header/>
            <OwnerHeader>About Me</OwnerHeader>
            <InfoDiv>
                <ImageDiv>
                    <OwnerImage src={picture} alt="The website owner"/>
                </ImageDiv>
                <OwnerText>I'm a recently graduated developer from Vancouver, Washington trying to start a career in software engineering.
                    I have 1 year of experience in web development and 2 years of experience in IT support.
                    I'm passionate about creating a positive user experience and designing interfaces that accomodate various demographics and disabilities.
                    When I'm not at work, I enjoy spending time with my wife and trying new recipes.
                </OwnerText>
            </InfoDiv>
            <Footer/>
        </>
    )
}

export default About