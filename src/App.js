import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StyledBackground from './components/StyledBackground';
import NewsItem from './components/NewsItem';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      console.log('Fetching news...');
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            category: 'technology',
            language: 'en', // Fetch news in English only
            apiKey: process.env.REACT_APP_NEWSAPI_KEY, // Use the environment variable
          },
        });
        console.log('News fetched:', response.data.articles);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <StyledBackground>
      <div>
        <h1>Tech News</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="news-grid">
            {articles.map((article, index) => (
              <NewsItem key={index} article={article} />
            ))}
          </div>
        )}
      </div>
    </StyledBackground>
  );
};

export default App;
