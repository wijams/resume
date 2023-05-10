import styled from '@emotion/styled'

const Div = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const H1 = styled.h1`
    cursor: pointer;    
`

const P = styled.p`
    padding-top: 1rem;
    margin-left: 2rem;
    cursor: pointer;
`

function Header() {
    return (
        <Div>
            <H1>Wesley Ijams</H1>
            <P>About</P>
            <P>Resume</P>
            <P>Cover Letter</P>
            <P>Letter of Recommendation</P>
        </Div>
    )
}

export default Header