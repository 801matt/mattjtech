import styled from "styled-components";

const StyledSection = styled.section`

.hero-page--content {
    height: calc(100vh - 108px);
    color: white;
    text-transform: uppercase;
    background-image: url("page-hero.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    padding: 20px;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px #dfdfdf;
}
`;

const HomeHero = ({title}) => {
    return (
    <StyledSection className="hero hero-page">
        <div className="hero-page--content">
            <h1>{title}</h1>
        </div>
    </StyledSection>
    );
};

export default HomeHero