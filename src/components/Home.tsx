import styled from '@emotion/styled';
import Header from './Header'
import Footer from './Footer'
import picture from '../Images/Forest.jpeg'

const Banner = styled.div`
    overflow: hidden;
    height: 24rem;
`

const BannerImage = styled.img`
    width: 100%;
`

const HomeHeader = styled.h1`
    text-align: center;
`

const LinkDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const IconDiv = styled.div`
    border-radius: 30px;
    background-color: #dddddd;
    height: 20rem;
    width: 17rem;
    text-align: center;
    margin-right: 2rem;
`

function Home() {
    return (
        <>
            <Header/>
            <Banner>
                <BannerImage src={picture} alt="The website owner"/>
            </Banner>
            <HomeHeader>Wesley Ijams Portfolio</HomeHeader>
            <LinkDiv>
                <IconDiv>About</IconDiv>
                <IconDiv>Resume</IconDiv>
                <IconDiv>Cover Letter</IconDiv>
                <IconDiv>Letter of Recommendation</IconDiv>
            </LinkDiv>
            <Footer/>
        </>
    )
}

export default Home