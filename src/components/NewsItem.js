import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NewsCard = styled.div`
  background: linear-gradient(135deg, #141e30, #243b55);
  border-radius: 15px;
  padding: 30px;
  margin: 20px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.6s ease-out;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const NewsTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.75em;
  margin: 15px 0;
  color: #ffffff;
  text-align: center;
`;

const NewsDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.1em;
  margin: 10px 0;
  color: #d3d3d3;
  line-height: 1.6;
  text-align: center;
`;

const NewsLink = styled.a`
  color: #00bfff;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-top: 20px;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

const NewsItem = ({ article }) => {
  return (
    <NewsCard>
      {article.urlToImage && <NewsImage src={article.urlToImage} alt={article.title} />}
      <NewsTitle>{article.title}</NewsTitle>
      <NewsDescription>{article.description}</NewsDescription>
      <NewsLink href={article.url} target="_blank" rel="noopener noreferrer">
        Read more <FontAwesomeIcon icon={faExternalLinkAlt} />
      </NewsLink>
    </NewsCard>
  );
};

export default NewsItem;
