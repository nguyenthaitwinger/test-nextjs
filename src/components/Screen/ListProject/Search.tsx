import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../../../../styles/Pages/ListProject.module.scss";
// import SearchIcons from "./images/Search.svg";
import Image from "next/image";

const cx = classNames.bind(styles);

interface Props {
  setS: (value: string) => void;
}

export default function Search(props: Props) {
  const [value, setValue] = useState("");
  const { setS } = props;

  const handleSearch = (event: any) => {
    event.preventDefault();
    setS(value);
  };

  return (
    <div className={cx("input-wrap")}>
      <div className={cx("input-group")}>
        <form onSubmit={handleSearch}>
          <input
            onChange={(event) => {
              setValue(event.target.value);
            }}
            type="text"
            placeholder="Search your projects"
          />
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
