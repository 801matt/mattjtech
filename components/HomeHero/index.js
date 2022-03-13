import styled from "styled-components";

const StyledSection = styled.section`
  height: 457px;
  background: #eee;
  /* background-image: url('home-hero.jpg');
background-repeat: no-repeat;
background-position: center center;
background-size: cover; */
  position: relative;
  border-bottom: solid 1px #dfdfdf;
  text-transform: uppercase;

  .hero-home--content {
    padding: 20px;
    height: 457px;
    display: flex;
    align-items: center;
    max-width: 1117px;
    margin: 0 auto;
    /* position: absolute; */
    /* bottom: 0; */
    /* left: 0; */
  }

  .hero-home--titles {
    /* margin-top: -20px; */
    /* margin-left: 80px; */
  }

  .hero-home--titles h1 {
    font-size: 32px;
    margin-bottom: 4px;
  }

  .hero-home--titles p {
    margin-bottom: 12px;
  }

  .hero-home--titles button {
    margin-top: 28px;
    width: 187px;
    height: 40px;
    text-transform: uppercase;
  }

  @media (min-width: 900px) {
    .hero-home--titles {
      margin-left: 80px;
    }
  }
`;

const HomeHero = () => {
  return (
    <StyledSection className="hero hero-home">
      <div className="hero-home--content">
        <div className="hero-home--titles">
          <h1>My creative stuff.</h1>
          {/* <p>Never settle with being inspired. Become inspiring.</p> */}
          {/* <p>"The True Enemy of Creativity is Good Sense"</p> */}
          <p>Creating is having a wild heart and a disciplined mind.</p>
          {/* <p>Design is the silent ambassador of your brand.</p> */}
          <button>Contact</button>
        </div>
      </div>
    </StyledSection>
  );
};

export default HomeHero;
