import styled from "styled-components";

const StyledSection = styled.section`
max-width: 750px;
margin: 0 auto;
padding: 20px;
font-size: 18px;
font-weight: 300;
line-height: 1.5em;
color: red
h2 {
    font-size: 24px;
}
`;

const PageContent = ({children}) => {
    return (
        <StyledSection>{children}</StyledSection>
    )
}

export default PageContent;