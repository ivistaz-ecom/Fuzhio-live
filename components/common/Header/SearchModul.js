"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa"; // Importing React Icons
import { IoMdClose } from "react-icons/io";
import posts from "../../Templates/Data/posts"; // Import local data
import { useRouter } from "next/router"; // Import useRouter from Next.js
import { IoArrowBack } from "react-icons/io5";

function SearchModal() {
  const [openModal, setOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [resultCount, setResultCount] = useState(0);
  const router = useRouter(); // Get the router object

  // Check if we are on the /blog page
  const isOnBlogPage = router.pathname === "/blog";

  // List of pages to include in search
  const pages = [
    { title: "Blog", path: "/blog" },
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Agriculture", path: "/agriculture" },
    { title: "Fuzhio & Covid Response", path: "/fuzhio-covid-response" },
    {
      title: "Community Engagement",
      path: "https://community-engagement.fuzhio.org/",
    },
  ];

  useEffect(() => {
    const filterResults = () => {
      if (!searchQuery) {
        setFilteredResults([]); // Clear results if query is empty
        setResultCount(0);
        return;
      }

      // Filter posts
      const postResults = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Filter pages
      const pageResults = pages.filter((page) =>
        page.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredResults([...postResults, ...pageResults]); // Combine post and page results
      setResultCount(postResults.length + pageResults.length);
    };

    const debounceTimer = setTimeout(() => {
      filterResults();
    }, 300); // Adjust debounce time if needed

    return () => clearTimeout(debounceTimer); // Cleanup timer
  }, [searchQuery]);

  const handleResultClick = (path) => {
    setOpenModal(false); // Close modal
    router.push(path); // Navigate to the selected path
  };

  return (
    <>
      <style>
        {`
          .arrow-icon {
            color: #b34738 !important;
          }
          .link-text {
            color: #b34738 !important;
          }
          .hover-effect {
            transition: color 0.3s ease;
          }

          .hover-effect:hover .arrow-icon,
          .hover-effect:hover .link-text {
            color: black !important;
          }
        `}
      </style>
      <div>
        {/* Search Button */}
        <Link href="" onClick={() => setOpenModal(true)}>
          <FaSearch style={{ color: isOnBlogPage ? "black" : "#ffd0b3" }} />{" "}
          {/* Conditionally set icon color */}
        </Link>

        {/* Modal */}
        {openModal && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            aria-hidden={!openModal} // aria-hidden for accessibility
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header position-relative flex gap-3">
                  <input
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                  />
                  <IoMdClose
                    className="top-0 end-0 p-1"
                    style={{
                      color: "black",
                      cursor: "pointer",
                      fontSize: "1.5rem",
                      marginLeft: "1rem",
                    }}
                    aria-label="Close"
                    onClick={() => setOpenModal(false)}
                  />
                </div>

                {/* Modal Body */}
                <div className="modal-body">
                  {resultCount > 0 && (
                    <p>
                      Total <strong>{resultCount}</strong> results found.
                    </p>
                  )}
                  {filteredResults.length > 0 ? (
                    <ul className="list-group">
                      {filteredResults.map((item, index) => {
                        // Determine if item is a post or a page
                        const isPage = pages.some(
                          (page) => page.title === item.title
                        );
                        const path = isPage
                          ? item.path // Use page path for pages
                          : `/posts/${item.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`; // Generate slug for posts

                        return (
                          <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                          >
                            <span
                              onClick={() => handleResultClick(path)}
                              style={{ cursor: "pointer" }}
                            >
                              {item.title}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    searchQuery && (
                      <div className="text-center">
                        <p className="text-muted mb-3">No results found.</p>
                        <div className="hover-effect">
                          <IoArrowBack className="arrow-icon" />
                          <Link
                            href="/"
                            onClick={() => setOpenModal(false)}
                            className="link-text"
                          >
                            Back to home
                          </Link>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchModal;
