import React from "react";
import { Home, CreatePost } from "./pages";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full border-b flex justify-between items-center sm:px-4 px-4 py-4">
        <Link to="/">
          <img className="object-contain w-28" src={logo} alt="open ai logo" />
        </Link>
        <Link to="/create-post" className=" text-white px-2 py-1 rounded-lg font-medium font-inter bg-[#6469ff]" >Create</Link>
      </header>
      <main className="w-full min-h-[calc(100vh-73px] sm:p-8 px-4 py-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
