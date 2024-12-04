import React, { useState } from "react";
import searchicon from '../../img/svg/search-icon.svg';

const CourseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    {
      title: "Microsoft Office Suite",
      link: "courses/microsoft-office-tools.html",
      img: "img/ms office course.png",
    },
    {
      title: "Google Suite",
      link: "courses/google-suite-tools.html",
      img: "img/G-Suite.png",
    },
    {
      title: "Canvas for Educators",
      link: "courses/canva-for-educators.html",
      img: "img/Canva for Educators Image.png",
    },
    {
      title: "Kahoot for Educators",
      link: "courses/kahoot-for-educators.html",
      img: "img/Kahoot for Educators Image.png",
    },
    {
      title: "Microsoft Innovative Educators Programme",
      link: "courses/microsoft-innovative-programme.html",
      img: "img/Microsoft Office Suite Image.png",
    },
    {
      title: "Social Media Tools for Educators",
      link: "courses/social-media-tools.html",
      img: "img/social.png",
    },
    {
      title: "AI Tools for Educators",
      link: "courses/ai-tools.html",
      img: "img/ai-tools.png",
    },
    {
      title: "Virtual Learning Platforms",
      link: "courses/virtual-learning-platform.html",
      img: "img/virtual-learning.png",
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="search"
        id="searchInput"
        placeholder="Search for your preferred course"
        value={searchTerm}
        onChange={handleSearch}
      />
      <img src={searchicon} alt="Search Icon" />

      <ul id="itemList">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className={!searchTerm ? "hidden" : ""}>
              <a href={item.link}>
                <img src={item.img} alt={item.title} /> {item.title}
              </a>
            </li>
          ))
        ) : searchTerm ? (
          <p id="noResultsMessage">
            <span className="fa-regular fa-face-frown" /> No courses found
          </p>
        ) : null}
      </ul>
    </div>
  );
};

export default CourseSearch;
