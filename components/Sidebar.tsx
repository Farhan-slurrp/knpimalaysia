import React from "react";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <div className="border-l border-gray-400">
      <div className="p-4">
        <p>Visit Our Facebook</p>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&width=350&show_text=true&height=328&appId"
          width="350"
          height="328"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Sidebar;
