import React, { useState } from "react";

export default function NoteSearch({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    setKeyword(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Cari catatan"
      value={keyword}
      onChange={handleSearch}
    />
  );
}
