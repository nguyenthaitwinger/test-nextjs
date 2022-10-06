import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../../../../styles/Pages/ListProject.module.scss";
// import SearchIcons from "./images/Search.svg";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function Search(props: any) {
  return (
    <div className={cx("input-wrap")}>
      <div className={cx("input-group")}>
        <form>
          <input type="text" placeholder="Search your projects" />
        </form>
        <Image
          src="/images/Search.png" // Route of the image file
          height={12} // Desired size with correct aspect ratio
          width={12} // Desired size with correct aspect ratio
          alt="Your Name"
        />

        {/* <SearchIcons width={12} height={12} /> */}
      </div>
    </div>
  );
}
