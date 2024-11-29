"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import posts from "../../Templates/Data/posts";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const pages = [
    {
      title: "Community Engagement",
      path: "https://community-engagement.fuzhio.org/",
    },
    { title: "Blog", path: "/blog" },
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Agriculture", path: "/agriculture" },
    { title: "Fuzhio & Covid Response", path: "/fuzhio-covid-response" },
  ];

  useEffect(() => {
    const filterResults = () => {
      if (!searchQuery) {
        setFilteredResults([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      const pageResults = pages.filter((page) =>
        page.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const postResults = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredResults([...pageResults, ...postResults]);
      setIsLoading(false);
    };

    const debounceTimer = setTimeout(() => {
      filterResults();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleResultClick = (path, title) => {
    setSearchQuery("");
    setFilteredResults([]);
    setIsExpanded(false);

    if (path && typeof path === "string" && path.trim() !== "") {
      router.push(path);
    } else {
      console.error("Invalid URL: ", path);
    }
  };

  const isSpecialPage =
    router.pathname === "/blog" || router.pathname.startsWith("/posts/");

  return (
    <>
      <style>
        {`
          .search-container {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
            z-index: 1;
          }

          .search-container:hover {
            background-color: white;
            padding: 8px;
            padding-right: 0px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 50px;
          }

          .search-container.expanded {
            width: 250px;
          }

          .search-icon {
            font-size: 18px;
            color: ${isSpecialPage ? "black" : "#FFD0B3"};
            cursor: pointer;
            flex-shrink: 0;
            margin-right: 8px;
            z-index: 1;
          }

          .search-container:hover .search-icon {
            color: ${isSpecialPage ? "#333" : "#A0665F"};
          }

          .search-input {
            border: none;
            outline: none;
            display: none;
            width: 100%;
            font-size: 16px;
            color: #333;
            background: transparent;
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            transform: translateX(20px);
          }

          .search-container.expanded .search-input {
            opacity: 1;
            transform: translateX(0);
            display: block;
          }

          .search-input::placeholder {
            color: #aaa;
            font-style: italic;
          }

          .search-results {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            width: 100%;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            overflow: hidden;
            max-height: 200px;
            overflow-y: auto;
          }

          .search-result-item {
            padding: 10px 15px;
            border-bottom: 1px solid #f1f1f1;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .search-result-item:hover {
            background-color: #e6e8eb;
          }

          .search-result-item:last-child {
            border-bottom: none;
          }

          .search-bg-position {
            position: absolute !important;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 0;
          }
        `}
      </style>

      <div className="search-bg-position"></div>

      <div
        className={`search-container ${isExpanded ? "expanded" : ""}`}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <FaSearch
          className="search-icon"
          onMouseEnter={() => setIsExpanded(true)}
        />
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsExpanded(true)}
        />

        {isExpanded && (
          <div className="search-results">
            {searchQuery ? (
              isLoading ? (
                <div className="search-result-item">Loading...</div>
              ) : filteredResults.length > 0 ? (
                filteredResults.map((item, index) => {
                  const isPage = pages.some(
                    (page) => page.title === item.title
                  );
                  const path = isPage
                    ? item.path
                    : `/posts/${item.title.toLowerCase().replace(/\s+/g, "-")}`;

                  return (
                    <div
                      key={index}
                      className="search-result-item"
                      onClick={() => handleResultClick(path, item.title)}
                    >
                      {item.title}
                    </div>
                  );
                })
              ) : (
                <div className="search-result-item">No results found</div>
              )
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
