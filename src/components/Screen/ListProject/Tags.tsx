import classNames from "classnames/bind";
import React from "react";
// import CloseIcons from "../../../assets/images/Close";
import styles from "../../../../styles/Pages/ListProject.module.scss";

const cx = classNames.bind(styles);

export default function Tags(props: any) {
  return (
    <div className={cx("list-tags")}>
      <div className={cx("tag-item")}>
        <span>Tagssss</span>
        <div>
          <img src={"/images/Close.png"} alt="Close" />
        </div>
      </div>
      <div className={cx("tag-item")}>
        <span>Tagssss</span>
        <div>
          <img src={"/images/Close.png"} alt="Close" />
        </div>
      </div>
      <div className={cx("tag-item")}>
        <span>Tagssss</span>
        <div>
          <img src={"/images/Close.png"} alt="Close" />
        </div>
      </div>
      <div className={cx("tag-item")}>
        <span>Tagssss</span>
        <div>
          <img src={"/images/Close.png"} alt="Close" />
        </div>
      </div>
    </div>
  );
}
