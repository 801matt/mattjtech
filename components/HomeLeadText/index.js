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
        <h2>Professional Digital Production Studios</h2>
        <p>
          I love creating and producing digital productions. When I&apos;m
          chilling, I usually have my Macbook opened up and I&apos;m usually
          creating digital art, EDM music or something imaginiative and similar.
          Come join together with me and let&apos;s produce high quality digital
          content that the world gets inspired by and enjoys at the same time.
        </p>
      </div>
    </StyledSection>
  );
};

export default HomeLeadText;
