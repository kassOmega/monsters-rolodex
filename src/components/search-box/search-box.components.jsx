import React, { Component } from "react";
import "./search-box.styles.css";

export const SearcBox = ({ placeholder, onChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={onChange}
  />
);
