import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../../styles/Pages/ListProject.module.scss";
import Search from "../../src/components/Screen/ListProject/Search";
import Filter from "../../src/components/Screen/ListProject/Filter";
import Tags from "../../src/components/Screen/ListProject/Tags";
import ListProjectC from "../../src/components/Screen/ListProject/ListProjectC";
import { InferGetServerSidePropsType } from "next";
import { getListProject } from "../../src/queries/api/project";

const cx = classNames.bind(styles);

const ListProject = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [page, setPage] = useState(1);
  const [s, setS] = useState("");
  const [orderBy, setOrderBy] = useState("createdAt");

  const [filter, setFilter] = useState({});

  return (
    <div className={cx("home-wrapper")}>
      <div className={cx("heading")}>Project</div>
      <Search />
      <Filter filters={filter} setSort={setOrderBy} setFilter={setFilter} />

      <button
        onClick={() => {
          setPage((pre) => pre + 1);
        }}
      >
        a
      </button>

      <div className={cx("content")}>
        <Tags />
        <ListProjectC
          listProject={props.data?.data}
          total={props.data?.total}
        />
      </div>
    </div>
  );
};

export default ListProject;

export async function getServerSideProps(context: any) {
  try {
    const data = await getListProject();
    return {
      props: {
        data: data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
