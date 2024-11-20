"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaSearch, FaTimesCircle } from "react-icons/fa"; // Importing React Icons
import posts from "../../Templates/Data/posts"; // Import local data
import { useRouter } from "next/router"; // Import useRouter from Next.js

function SearchModal() {
  const [openModal, setOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [resultCount, setResultCount] = useState(0);
  const router = useRouter(); // Get the router object

  // Check if we are on the /blog page
  const isOnBlogPage = router.pathname === "/blog";

  useEffect(() => {
    const filterResults = () => {
      if (!searchQuery) {
        setFilteredResults([]); // Clear results if query is empty
        setResultCount(0);
        return;
      }

      const results = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(results);
      setResultCount(results.length);
    };

    const debounceTimer = setTimeout(() => {
      filterResults();
    }, 300); // Adjust debounce time if needed

    return () => clearTimeout(debounceTimer); // Cleanup timer
  }, [searchQuery]);

  return (
    <div>
      {/* Search Button */}
      <Link href="" className="" onClick={() => setOpenModal(true)}>
        <FaSearch style={{ color: isOnBlogPage ? "black" : "#ffd0b3" }} /> {/* Conditionally set icon color */}
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
              <div className="modal-header">
                <input
                  type="text"
                  id="search"
                  className="form-control"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  required
                />
                <Link
                  href=""
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setOpenModal(false)}
                >
                  <FaTimesCircle style={{ color: "black" }} />{" "}
                  {/* Set close icon color to black */}
                </Link>
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
                    {filteredResults.map((post, index) => {
                      // Create a slug, replace spaces with hyphens, retain colons
                      const slug = post.title
                        .toLowerCase()
                        .replace(/\s+/g, "-"); // Replace spaces with hyphens

                      // Build the URL with "post/" prefix
                      const dynamicUrl = `/posts/${slug}`; 

                      return (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <Link
                            href={dynamicUrl}
                            onClick={() => setOpenModal(false)}
                          >
                            <span>{post.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  searchQuery && <p className="text-muted">No results found.</p>
                )}
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setOpenModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchModal;
