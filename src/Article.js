import { useState } from "react";
import "./Article.css";
const Articles = (props) => {
  const { articles, deleteArticle, updateArticle } = props;

  return articles.map((article, i) => {
    return (
      <Article
        key={i}
        article={article}
        deleteArticle={deleteArticle}
        updateArticle={updateArticle}
      />
    );
  });
};
export default Articles;

const Article = (props) => {
  const { article, deleteArticle, updateArticle } = props;
  const [formDisplay, setFormDisplay] = useState(false);

  const [formData, setFormData] = useState({ ...article });
  function update(id) {
    updateArticle(id, formData);
    setFormDisplay(false);
  }

  return (
    <div>
      <div className="title-content">
        <div className="title">{article.title}</div>
        <div className="content">{article.content}</div>
      </div>
      <button className="delete-btn" onClick={() => deleteArticle(article.id)}>
        Delete
      </button>
      <button className="edit-btn" onClick={() => setFormDisplay(true)}>
        Edit
      </button>
      {formDisplay ? (
        <div>
          <label>Article title</label>
          <input
            type="text"
            name="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            defaultValue={article.title}
          />
          <label>Article snippet context</label>
          <textarea
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            defaultValue={article.content}
          ></textarea>
          <button className="update-btn" onClick={() => update(article.id)}>
            update
          </button>
        </div>
      ) : null}
    </div>
  );
};
