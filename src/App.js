import "./App.css";
import HomePage from "./interview";
import { useState } from "react";
import Articles from "./Article";

function App() {
  const [articles, setArticles] = useState([]);
  function deleteArticle(id) {
    let newArticles = [...articles];
    newArticles = newArticles.filter((article) => article.id !== id);
    setArticles(newArticles);
  }
  function updateArticle(id, article) {
    let newArticles = [...articles];
    newArticles = newArticles.map((art) => {
      if (id === art.id) {
        return {
          ...art,
          title: article.title,
          content: article.content,
        };
      }
      return art;
    });
    setArticles(newArticles);
  }
  return (
    <div className="App">
      <Articles
        articles={articles}
        deleteArticle={deleteArticle}
        updateArticle={updateArticle}
      />
      <HomePage setArticles={setArticles} articles={articles} />
    </div>
  );
}

export default App;
