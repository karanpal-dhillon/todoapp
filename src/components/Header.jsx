import React from "react";

export default function Header() {
  return (
    <>
      <div className="bg-sky-950 p-4">
        <div className="max-w-[1240px] py-[8px] items-center flex justify-between border-black mx-auto">
          <div className="text-1xl font-bold bg-white">TodoList</div>
          <ul className="flex text-white gap-10">
            <li>Home</li>
            <li>Company</li>
            <li>Resource</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
