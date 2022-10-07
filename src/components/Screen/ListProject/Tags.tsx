import classNames from "classnames/bind";
import Image from "next/image";
import React from "react";
// import CloseIcons from "../../../assets/images/Close";
import styles from "../../../../styles/Pages/ListProject.module.scss";

const cx = classNames.bind(styles);

interface Props {
  filter: any;
  setFilter: (newFilter: object) => void;
}

export default function Tags(props: Props) {
  const { filter, setFilter } = props;

  const listTags = [];

  for (let index in filter) {
    listTags.push({
      key: index,
      value: filter[index],
    });
  }

  const handleRemoveTags = (key: string) => {
    setFilter((preState: any) => {
      delete preState[key];
      return { ...preState };
    });
  };

  return (
    <div className={cx("list-tags")}>
      {listTags.map((tag, index) => {
        return (
          <div key={index} className={cx("tag-item")}>
            <span>{tag.value}</span>
            <div
              onClick={() => {
                handleRemoveTags(tag.key);
              }}
            >
              <img src={"/images/Close.png"} alt="Close" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
