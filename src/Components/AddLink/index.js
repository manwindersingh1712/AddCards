import { useState } from "react";
import "./index.css";

function AddLink({ data, setData }) {
  const [url, setUrl] = useState("");

  const addLink = (e) => {
    e.preventDefault();
    if (url === "") {
      window.alert("You haven't entered any url");
    } else {
      setUrl("");
      setData([...data, url]);
    }
  };

  return (
    <div className="addLink_container">
      <form onSubmit={addLink}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https//www.abc......."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddLink;
