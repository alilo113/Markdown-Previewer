import React, { useState } from "react";
import { marked } from "marked";

function App() {
  const [content, setContent] = useState("");

  // Convert Markdown to HTML using marked
  const getMarkdownText = () => {
    const rawMarkup = marked(content, { sanitize: false });
    return { __html: rawMarkup };
  };

  return (
    <div className="bg-red-500 min-h-screen">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="h-60 w-full p-3 text-white bg-gray-800 mb-20"
        placeholder="Type Markdown here..."
      />
      <button
        className="bg-blue-600 text-white m-3 p-3 hover:bg-blue-800"
      >
        Preview
      </button>
      <div
        className="p-3 bg-gray-900 text-white whitespace-pre-wrap"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
}

export default App;