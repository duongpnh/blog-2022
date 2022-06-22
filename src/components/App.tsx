import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact } from "../modules/contact";
import { Dashboard } from "../modules/dashboard";
import { Navbar } from "./Navbar";

const index = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={
          <main style={{ padding: '1rem' }}>
            <p>Page not found!</p>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  </div>
)

export default index