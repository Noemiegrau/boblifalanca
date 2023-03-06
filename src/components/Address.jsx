import React from "react";

const Address = () => {
  return (
    <ul>

      <li>
        <img className="svg" src="img/svg/mail.svg" alt="" />
        <span>
          <a href="mailto:ib-themes21@gmail.com">your@gmail.com</a>
        </span>
      </li>
      {/* End email */}
      <li>
        <img className="svg" src="img/svg/map.svg" alt="" />
        <span>
          Paris,  France
        </span>
      </li>
      {/* End location */}
      <li>
        <img className="svg" src="img/svg/facebook.svg" alt="" />
        <a href="https://www.facebook.com/rkinziondo" target="_blank">Facebook</a>
      </li>
      {/* End Facebook */}
      <li>
        <img className="svg" src="img/svg/tiktok.svg" alt="" />
        <a href="https://www.tiktok.com/@boblifalanca1" target="_blank">TikTok</a>
      </li>
      {/* End TikTok */}
      <li className="transform-scale-h">
        <img className="svg" src="img/svg/youtube.svg" alt="" />
        <a href="https://www.youtube.com/@robertkinziondo5950" target="_blank">YouTube</a>
      </li>
      {/* End YouTube */}
    </ul>
  );
};

export default Address;
