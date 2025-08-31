import React, { useState, useEffect } from "react";
import "./BlogDashboard.css";
import axios from "axios";

const BlogDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Example categories
  const categories = ["All", "Market Analysis", "Crypto Guides", "Coin Reviews", "Technical Analysis"];

  // Fetch crypto news from an API (using NewsAPI or placeholder data)
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Example using NewsAPI placeholder
        const { data } = await axios.get("https://api.sampleapis.com/crypto-news/crypto-news");
        setArticles(data);
      } catch (err) {
        console.error(err);
        // Fallback hardcoded articles
        setArticles([
          {
            id: 1,
            title: "Bitcoin Hits New All-Time High",
            category: "Market Analysis",
            author: "Alice Smith",
            authorImg: "https://i.pravatar.cc/40?img=1",
            readTime: "5 min read",
            publishedAt: "2025-08-28",
            thumbnail: "https://via.placeholder.com/150",
            summary: "Bitcoin has reached a new peak as institutional investors continue to enter the market...",
            views: 1200,
          },
          {
            id: 2,
            title: "Ethereum 2.0 Upgrade Explained",
            category: "Crypto Guides",
            author: "John Doe",
            authorImg: "https://i.pravatar.cc/40?img=2",
            readTime: "7 min read",
            publishedAt: "2025-08-27",
            thumbnail: "https://via.placeholder.com/150",
            summary: "Ethereum's latest upgrade introduces proof-of-stake and scalability improvements...",
            views: 980,
          },
        ]);
      }
    };
    fetchArticles();
  }, []);

  // Filter articles by search and category
  const filteredArticles = articles.filter(
    (article) =>
      (article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.summary.toLowerCase().includes(search.toLowerCase())) &&
      (selectedCategory === "All" || article.category === selectedCategory)
  );

  return (
    <div className="blog-dashboard p-4">
      <h1 className="text-3xl font-bold mb-4">Crypto Blog Dashboard</h1>

      {/* Search & Category Filter */}
      <div className="flex gap-4 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded flex-1 min-w-[200px]"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Articles */}
      <div className="articles grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredArticles.map((article) => (
          <div key={article.id} className="article-card border rounded p-4 hover:shadow-lg transition">
            <img src={article.thumbnail} alt="" className="w-full h-40 object-cover rounded mb-2"/>
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-gray-600 text-sm">{article.summary}</p>
            <div className="flex justify-between mt-2 items-center text-gray-500 text-sm">
              <span>{article.readTime}</span>
              <span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <img src={article.authorImg} alt="" className="w-8 h-8 rounded-full"/>
              <span>{article.author}</span>
            </div>
            <span className="inline-block mt-2 px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">{article.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDashboard;
