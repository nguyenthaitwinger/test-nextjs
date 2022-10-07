import classNames from "classnames/bind";
import React from "react";
import styles from "../../../../styles/Pages/ListProject.module.scss";
const cx = classNames.bind(styles);

const listFilter = [
  {
    name: "category",
    option: ["3D Technology", "3D Printing", "Ad Exchange", "A/B Testingss"],
  },
  {
    name: "technologies",
    option: [
      "Agricultural robotics",
      "Advanced materialss",
      "Agriculture machines",
      "Airless tires",
    ],
  },
  { name: "location", option: ["Afghanistan", "Albania", "Vietnam"] },
  { name: "badge", option: ["Lab2Market", "Marketing Competition"] },
];

type Props = {
  setSort: (state: any) => void;
  setFilter: (state: any) => void;
  filters: any;
};

const Filter: React.FC<Props> = ({ setSort, setFilter, filters }) => {
  return (
    <div className={cx("filter-wrapper")}>
      <h3 className={cx("title")}>Filters</h3>
      <div className={cx("list-filter")}>
        {listFilter.map((filter, index) => {
          return (
            <div key={index} className={cx("filter-item")}>
              <select
                name={filter.name}
                value={filters[filter.name]}
                defaultValue=""
                className={cx("filter-select")}
                onChange={(event) => {
                  setFilter((preState: object) => {
                    return {
                      ...preState,
                      [event.target.name]: event.target.value,
                    };
                  });
                }}
              >
                <option value="" hidden>
                  {filter.name}
                </option>
                {filter?.option.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <img
                src={"/images/Filter.png"}
                alt="filter"
                width={12}
                height={12}
              />
            </div>
          );
        })}

        {/* sort */}
        <div className={cx("last-item")}>
          <div className={cx("separation")}></div>
          <div className={cx("filter-item")}>
            <select
              defaultValue=""
              id="select"
              className={cx("filter-select")}
              onChange={(event) => {
                setSort(event.target.value);
              }}
            >
              <option value="" hidden>
                Sort by
              </option>
              <option value="createdAt">Mới nhất</option>
              <option value="fullName">Tiêu đề</option>
              <option value="followers">Phổ biến</option>
            </select>
            {/* <img
              src={require("../../../assets/images/Filter.png")}
              alt="filter"
              width={12}
              height={12}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
