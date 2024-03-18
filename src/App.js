import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [content, setContent] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSendClick = (e) => {
    e.preventDefault();
    fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token123",
      },
      body: JSON.stringify({ content }),
    });
  };

  return (
    <>
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>

      <div>
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button onClick={onSendClick}>Send</button>
      </div>
    </>
  );
}

export default App;
