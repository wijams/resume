import styled from '@emotion/styled';
import Header from './Header'
import picture from '../Images/Forest.jpeg'

const Banner = styled.div`
    overflow: hidden;
    height: 24rem;
`

const BannerImage = styled.img`
    width: 100%;
`

function Home() {
    return (
        <>
            <Header/>
            <Banner>
                <BannerImage src={picture} alt="The website owner"/>
            </Banner>
        </>
    )
}

export default Home