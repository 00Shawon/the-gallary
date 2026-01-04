import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ArtworkCard from "../../Component/ArtworkCard/ArtworkCard";
import { Fade } from "react-awesome-reveal";
import { FaSearch } from "react-icons/fa";

const ExploreArtwork = () => {
  const loaderData = useLoaderData();

  // DATA
  const [artworks, setArtworks] = useState(loaderData.artworks);
  const [loading, setLoading] = useState(false);

  // SEARCH & SORT
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(loaderData.currentPage);
  const [totalPages, setTotalPages] = useState(loaderData.totalPages);

  // MODE: all | search | sort
  const [mode, setMode] = useState("all");

  /* ---------------- FETCH FUNCTIONS ---------------- */

  const fetchArtworks = async (page = 1) => {
    setLoading(true);

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/publicArtwork?page=${page}`
    );
    const data = await res.json();

    setArtworks(data.artworks);
    setCurrentPage(data.currentPage);
    setTotalPages(data.totalPages);
    setLoading(false);
  };

  const fetchSearch = async (page = 1) => {
    setLoading(true);

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/search?search=${searchText}&page=${page}`
    );
    const data = await res.json();

    setArtworks(data.artworks);
    setCurrentPage(data.currentPage);
    setTotalPages(data.totalPages);
    setLoading(false);
  };

  const fetchSort = async (page = 1, order) => {
    setLoading(true);

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/sort?search=${searchText}&sortOrder=${order}&page=${page}`
    );
    const data = await res.json();

    setArtworks(data.artworks);
    setCurrentPage(data.currentPage);
    setTotalPages(data.totalPages);
    setLoading(false);
  };

  /* ---------------- HANDLERS ---------------- */

  const handleSearch = (e) => {
    e.preventDefault();
    setMode("search");
    fetchSearch(1);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    setMode("sort");
    fetchSort(1, order);
  };

  const handlePageChange = (page) => {
    if (mode === "search") {
      fetchSearch(page);
    } else if (mode === "sort") {
      fetchSort(page, sortOrder);
    } else {
      fetchArtworks(page);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-[1400px] w-11/12 mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <h1 className="text-3xl font-bold text-purple-600">
            Explore Artworks
          </h1>

          {/* Search + Sort */}
          <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="outline-none"
              />
            </form>

            <select
              value={sortOrder}
              onChange={(e) => handleSort(e.target.value)}
              className="select select-sm"
            >
              <option value="">Sort By</option>
              <option value="asc">Price: Low → High</option>
              <option value="desc">Price: High → Low</option>
            </select>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center mt-20">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
          </div>
        ) : artworks.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-24 text-gray-500">
            <p className="text-xl font-semibold">No related items found</p>
            <p className="text-sm mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Fade cascade damping={0.1} triggerOnce>
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork._id} artwork={artwork} />
              ))}
            </Fade>
          </div>
        )}


        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="btn btn-sm"
          >
            Prev
          </button>

          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              className={`btn btn-sm ${
                currentPage === page + 1 ? "btn-primary" : ""
              }`}
            >
              {page + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="btn btn-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreArtwork;
