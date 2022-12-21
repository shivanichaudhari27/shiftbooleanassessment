import { useState } from "react";
import "./interview.css";

const HomePage = (props) => {
  const { setArticles, articles } = props;
  const [formDisplay, setFormDisplay] = useState(false);
  const [formData, setFormData] = useState({});
  function post() {
    if (formData.title && formData.content) {
      setArticles([
        ...articles,
        {
          ...formData,
          id: Math.round(Math.random() * 234567),
          createdAt: new Date().toLocaleString(),
        },
      ]);
      setFormData({});
    }
  }
  return (
    <div>
      <button className="article" onClick={() => setFormDisplay(true)}>
        New Article
      </button>
      {formDisplay ? (
        <div className="form-data">
          <label>Article title</label>
          <input
            type="text"
            name="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title ? formData.title : ""}
            className="input-field"
          />
          <label>Article snippet context</label>
          <textarea
            className="input-field"
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            value={formData.content ? formData.content : ""}
          ></textarea>
          <button className="post-btn" onClick={post}>
            POST
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default HomePage;
