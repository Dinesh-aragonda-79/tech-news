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
      console.log('API Key:', process.env.REACT_APP_NEWSAPI_KEY);
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            category: 'technology',
            language: 'en',
            apiKey: process.env.REACT_APP_NEWSAPI_KEY,
          },
        });
        console.log('News fetched:', response.data.articles);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        if (error.response) {
          console.error('Error fetching news:', error.response.data);
          if (error.response.status === 401) {
            setError('Unauthorized: Check your API key.');
          } else if (error.response.status === 426) {
            setError('Upgrade Required: Check the API documentation.');
          } else {
            setError(`Error: ${error.response.statusText}`);
          }
        } else if (error.request) {
          console.error('Error fetching news:', error.request);
          setError('No response from server. Please try again later.');
        } else {
          console.error('Error fetching news:', error.message);
          setError('Error setting up the request. Please try again.');
        }
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
