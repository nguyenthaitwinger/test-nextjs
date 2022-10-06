import React from "react";
import classNames from "classnames/bind";
import styles from "../../styles/Pages/ListProject.module.scss";
import Search from "../../src/components/Screen/ListProject/Search";
import Filter from "../../src/components/Screen/ListProject/Filter";
import Tags from "../../src/components/Screen/ListProject/Tags";
import ListProjectC from "../../src/components/Screen/ListProject/ListProjectC";

const cx = classNames.bind(styles);

const listProject = [
  {
    _id: "6319fa4fffb57d001e753c55",
    fullName: "Tam Test",
    slug: "tam-test",
    coSecondaryCategories: [],
    coPrimaryCategory: {
      _id: "cryptocurrency",
      name: "Cryptocurrency",
    },
    country: {
      _id: "vn",
      name: "Vietnam",
    },
    logo: null,
    coStage: null,
    city: null,
    cityName: "",
    tagline: null,
    coTechnologies: [],
    phone: "",
    email: "tam.pnh@gmail.com",
    createdAt: 1662646863,
    introduction: "",
    isFeatured: false,
    investorOnHomepage: false,
    isActive: true,
    coProductPhotos: [],
    translation: {
      en: {},
      vi: {},
    },
    foundationDate: 1662646867,
    badge: [],
    priorityPoint: null,
  },
  {
    _id: "627e03f16e3c67001c60bd79",
    fullName: "Hai Tran Test 3",
    slug: "hai-tran-test-3-copy-421",
    coSecondaryCategories: [],
    coPrimaryCategory: {
      _id: "3d_technology",
      name: "3D Technology",
    },
    country: {
      _id: "al",
      name: "Albania",
    },
    logo: null,
    coStage: null,
    city: null,
    cityName: "",
    tagline: null,
    coTechnologies: [],
    phone: null,
    email: null,
    createdAt: 1652425713,
    introduction: "",
    isFeatured: false,
    investorOnHomepage: false,
    isActive: false,
    coProductPhotos: [],
    translation: {
      en: {},
      vi: {},
    },
    foundationDate: 1652425712,
    badge: [],
    priorityPoint: null,
  },
];

export default function ListProject() {
  return (
    <div className={cx("home-wrapper")}>
      <div className={cx("heading")}>Project</div>
      <Search />
      <Filter />

      <div className={cx("content")}>
        <Tags />
        <ListProjectC listProject={listProject} total={10} />
      </div>
    </div>
  );
}
