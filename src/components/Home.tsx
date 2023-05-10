import styled from '@emotion/styled';
import Header from './Header'
import Footer from './Footer'
import picture from '../Images/Forest.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from 'react-router-dom';

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
    margin-bottom: 8rem;
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

    let navigate = useNavigate();

    let toAbout = () => {
        let path = `/about`;
        navigate(path);
    }

    let toResume = () => {
        let path = '/resume';
        navigate(path);
    }

    let toCoverLetter = () => {
        let path = '/cover-letter';
        navigate(path);
    }

    let toRecommendation = () => {
        let path = '/letter-of-recommendation';
        navigate(path);
    }

    return (
        <>
            <Header/>
            <Banner>
                <BannerImage src={picture} alt="A forest in mist"/>
            </Banner>
            <TextDiv>
                <HomeHeader>Wesley Ijams Portfolio</HomeHeader>
            </TextDiv>
            <LinkDiv>
                <IconDiv onClick={toAbout}>
                    <Icon icon={faUser}/>
                    <IconText>About</IconText>
                </IconDiv>
                <IconDiv onClick={toResume}>
                    <Icon icon={faBriefcase}/>
                    <IconText>Resume</IconText>
                </IconDiv>
                <IconDiv onClick={toCoverLetter}>
                    <Icon icon={faEnvelope}/>
                    <IconText>Cover Letter</IconText>
                </IconDiv>
                <IconDiv onClick={toRecommendation}>
                    <Icon icon={faCheckToSlot}/>
                    <IconText>Letter of Recommendation</IconText>
                </IconDiv>
            </LinkDiv>
            <Footer/>
        </>
    )
}

export default Home