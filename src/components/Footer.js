import React from "react";

const Footer = () => {
  return (
    <div className="footer fixed-bottom">
      <p>
        done with{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-heart"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#ff2825"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </span>
        by the amazing: Syed, Ashik, Mohammad, Dries and Jose
      </p>
    </div>
  );
};
export default Footer;
