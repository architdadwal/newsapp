import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=6db2ffd286b0439db07fb6831e234f0d"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles);
        setNews(data.articles);
      });
  }, []);

  return (
    <div className="App">
      <h1>How are you today?</h1>
      <div className="container my-5">
        <div className="row text-center">
          {news.map((val, index) => {
            return (
              <div className="col-md-3 mb-4" key={index}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={val.urlToImage} />
                  <Card.Body>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>{val.description}</Card.Text>
                    <a href={val.url} target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-primary">Read More</button>
                    </a>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
