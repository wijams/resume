import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

const Div = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 2rem;
    padding: 2rem;
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-left: 2rem;
    cursor: pointer;
`

const BigLink = styled(StyledLink)`
    font-size: 2em;
`

const LittleLink = styled(StyledLink)`
    padding-top: .75rem;
`

function Header() {
    return (
        <Div>
            <BigLink to="/">Wesley Ijams</BigLink>
            <LittleLink to="/about">About</LittleLink>
            <LittleLink to="/resume">Resume</LittleLink>
            <LittleLink to="/cover-letter">Cover Letter</LittleLink>
            <LittleLink to="/letter-of-recommendation">Letter of Recommendation</LittleLink>
        </Div>
    )
}

export default Header