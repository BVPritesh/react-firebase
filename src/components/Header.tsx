import React from "react";

const Header = (): React.ReactElement => {
  return (
    <header className="py-8 bg-gray-300">
      <div className="custom-container flex items-center justify-between">
        <a href="/">Logo</a>

        <ul className="flex items-center gap-2 text-center">
          <li>
            <a className="px-4 hover:underline" href="/">Home</a>
          </li>
          <li>
            <a className="px-4 hover:underline" href="/about">About</a>
          </li>
          <li>
            <a className="px-4 hover:underline" href="/blogs">Blogs</a>
          </li>
          <li>
            <a className="px-4 hover:underline" href="/realtime-users">Realtime Users</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;