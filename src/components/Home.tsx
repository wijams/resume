import styled from '@emotion/styled';
import Header from './Header'
import Footer from './Footer'
import picture from '../Images/Forest.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons'

const Banner = styled.div`
    overflow: hidden;
    height: 27rem;
`

const BannerImage = styled.img`
    width: 100%;
`

const TextDiv = styled.div`
    width: 100%;
    height: 19rem;
    background-color: #efecea;
    margin-bottom: 2rem;
`

const HomeHeader = styled.h1`
    padding-top: 7rem;
    text-align: center;
    font-size: 50px;
`

const LinkDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;
`

const IconDiv = styled.div`
    border-radius: 15px;
    cursor: pointer;
    background-color: #efecea;
    height: 17rem;
    width: 19rem;
    text-align: center;
    margin-right: 2rem;
    &:hover {
        opacity: 0.5;
    }
`

const Icon = styled(FontAwesomeIcon)`
    margin-top: 3rem;
    height: 7rem;
`

const IconText = styled.p`
    font-size: 25px;
`

function Home() {
    return (
        <>
            <Header/>
            <Banner>
                <BannerImage src={picture} alt="The website owner"/>
            </Banner>
            <TextDiv>
                <HomeHeader>Wesley Ijams Portfolio</HomeHeader>
            </TextDiv>
            <LinkDiv>
                <IconDiv>
                    <Icon icon={faUser}/>
                    <IconText>About</IconText>
                </IconDiv>
                <IconDiv>
                    <Icon icon={faBriefcase}/>
                    <IconText>Resume</IconText>
                </IconDiv>
                <IconDiv>
                    <Icon icon={faEnvelope}/>
                    <IconText>Cover Letter</IconText>
                </IconDiv>
                <IconDiv>
                    <Icon icon={faCheckToSlot}/>
                    <IconText>Letter of Recommendation</IconText>
                </IconDiv>
            </LinkDiv>
            <Footer/>
        </>
    )
}

export default Home