import styled from "styled-components";
import Image from "next/image";

const StyledSection = styled.section`
  .blog-post--item {
    background: #eee;
    display: flex;
    align-items: center;
    height: 100px;
    margin-bottom: 20px;
  }
  .blog-post--excerpt {
    text-transform: uppercase;
    padding-left: 20px;
    width: calc(100% - 100px);
  }
  .blog-post--image {
    /* padding-right: 10px; */
    /* margin-right: 20px; */
    width: 100px;
    height: 100%;
  }
`;

const PostExcerpt = () => {
  return (
    <StyledSection>
      <h2>Recent Posts</h2>
      <div className="blog-posts">
        <div className="blog-post--item">
          <div className="blog-post--image">
            <Image
              src="/music_thumbnail.jpg"
              width="100px"
              height="100px"
              alt="music"
            />
          </div>
          <div className="blog-post--excerpt">
            How to make an intro in a future bass track
          </div>
        </div>

        <div className="blog-post--item">
          <div className="blog-post--image">
            <Image
              src="/music_thumbnail.jpg"
              width="100px"
              height="100px"
              alt="music"
            />
          </div>
          <div className="blog-post--excerpt">Why start with the drums?</div>
        </div>

        <div className="blog-post--item">
          <div className="blog-post--image">
            <Image
              src="/music_thumbnail.jpg"
              width="100px"
              height="100px"
              alt="music"
            />
          </div>
          <div className="blog-post--excerpt">Who cares about gold?</div>
        </div>
      </div>
    </StyledSection>
  );
};

export default PostExcerpt;
