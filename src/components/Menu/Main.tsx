import * as React from "react";
import { Link } from 'react-router-dom';

export const MainMenu = () => (
  <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
    <li>
      <Link to="/" className="block py-2 pr-4 pl-3 text-purple-800" aria-current="page">Home</Link>
    </li>
    <li>
      <Link to="/contact" className="block py-2 pr-4 pl-3 text-purple-300">Contact</Link>
    </li>
  </ul>
);
