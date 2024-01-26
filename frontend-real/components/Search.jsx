'use client'
import { React, useState } from "react";

//import List from "./Components/List"
import "./Search.css";

const Search = () => {
    return (
        <div className="ui search">
          <div className="ui icon input ">
            <input
            //   value={props.contactsValue}
            //   onChange={props.onChangeHandler}
              className="prompt rounded-lg"
              type="text"
              placeholder="       Search Events..."
            />
            <i className="search icon" />
          </div>
          <div className="results" />
        </div>
      );
}

export default Search
