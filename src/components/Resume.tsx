import styled from '@emotion/styled';
import Header from './Header'
import Footer from './Footer'

const StyledHeader = styled.h1`
    padding-top: 8rem;
    text-align: center;
`

const RowDiv = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    margin-left: 6rem;   
`

const ContactDiv = styled.div`
    background-color: #efecea;
    border-radius: 15px;
    width: 20rem;
    margin-right: 1rem;
    height: 12rem;
    padding-left: 2rem;
`

const ContactText = styled.p`
    margin-top: 1rem;
    margin-left: 2rem;
`

const SkillsDiv = styled.div`
    background-color: #efecea;
    border-radius: 15px;
    width: 60rem;
    height: 12rem;
    padding-left: 2rem;
`

const SmallHeader = styled.h2`
    padding-top: 1rem;
`

const WrapList = styled.ul`
    columns: 4;
    margin-left: 2rem;
    margin-top: .5rem;
`

const WorkDiv = styled.div`
    background-color: #efecea;
    border-radius: 15px;
    width: 83rem;
    padding-left: 2rem;
    padding-bottom: 1rem;
`

const JobDiv = styled.div`
    margin-left: 2rem;
    margin-top: 1rem;
`

const TopRow = styled.div`
    width: 60rem;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    margin-bottom: .5rem;
`

const Employer = styled.p`
    font-weight: bold;
`

const JobTitle = styled.p`
    font-style: italic;
`

const AccomplishList = styled.ul`
    margin-left: 2rem;
`

const Accomplishment = styled.li`
    margin-top: 1rem;
`

function Resume() {
    return (
        <>
            <Header/>
            <StyledHeader>My Resume</StyledHeader>
            <RowDiv>
                <ContactDiv>
                    <SmallHeader>Contact</SmallHeader>
                    <ContactText>Phone: (360) 953 - 1825</ContactText>
                    <ContactText>Email: smaji.yelsew@gmail.com</ContactText>
                </ContactDiv>
                <SkillsDiv>
                    <SmallHeader>Skills</SmallHeader>
                    <WrapList>
                        <li>Conversant in Bulgarian</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Vue.js</li>
                        <li>React.js</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>C</li>
                        <li>Android Studios</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>Dart</li>
                        <li>Flutter</li>
                        <li>AWS</li>
                        <li>Docker</li>
                        <li>Figma</li>
                        <li>GitLab</li>
                        <li>GitHub</li>
                    </WrapList>
                </SkillsDiv>
            </RowDiv>
            <RowDiv>
                <WorkDiv>
                    <SmallHeader>Experience</SmallHeader>
                    <JobDiv>
                        <TopRow>
                            <Employer>Brigham Young University Center for Teaching and Learning</Employer>
                            <p>May 2022 - May 2023</p>
                        </TopRow>
                        <TopRow>
                            <JobTitle>Web Developer</JobTitle>
                            <p>Provo, Utah</p>
                        </TopRow>
                        <AccomplishList>
                            <Accomplishment>Developed a user-friendly web interface for a multilevel file system</Accomplishment>
                            <Accomplishment>Implemented a group management page from the specification stage to bug testing</Accomplishment>
                            <Accomplishment>Wrote blueprints and unit tests to improve reliability and maintainability</Accomplishment>
                        </AccomplishList>
                    </JobDiv>
                </WorkDiv>
            </RowDiv>
            <Footer/>
        </>
    )
}

export default Resume