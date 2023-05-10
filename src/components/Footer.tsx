import styled from '@emotion/styled';

const Div = styled.div`
    background-color: black;
    text-align: center;
    color: white;
    min-height: 2rem;
    padding: 2rem;
    margin-top: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
`

const Hyperlink = styled.a`
    color: white;
`

function Header() {
    return (
        <Div>
            <div>GitHub: <Hyperlink href="https://github.com/wijams">wijams</Hyperlink></div>
            <div>LinkedIn: <Hyperlink href="https://www.linkedin.com/in/wesley-ijams-923757270/">Wesley Ijams</Hyperlink></div>
        </Div>
    )
}

export default Header