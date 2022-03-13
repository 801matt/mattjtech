import styled from "styled-components";

const StyledSection = styled.section`
  margin-top: 60px;
  text-align: center;
  display: flex;
  justify-content: center;

  .home-lead-text-content {
    padding: 0 20px;
    max-width: 750px;
  }

  .home-lead-text h2 {
    font-size: 32px;
    margin-bottom: 12px;
  }
`;

const HomeLeadText = () => {
  return (
    <StyledSection className="home-lead-text">
      <div className="home-lead-text-content">
        <h2>I always like a title.</h2>
        <p>
          Starting the page with a small paragraph not only looks good, but it
          adds thrilling interest into learning more about what your blog is
          about. It helps give context to your site visitors so they get a
          better sense of your site.
        </p>
      </div>
    </StyledSection>
  );
};

export default HomeLeadText;
