import { Pagination } from "antd";
import classNames from "classnames/bind";
import { useState } from "react";
import Filter from "../../src/components/Screen/ListProject/Filter";
import ListProjectC from "../../src/components/Screen/ListProject/ListProjectC";
import Search from "../../src/components/Screen/ListProject/Search";
import Tags from "../../src/components/Screen/ListProject/Tags";
import { QueryProjet } from "../../src/queries/hooks/project";
import styles from "../../styles/Pages/ListProject.module.scss";

const cx = classNames.bind(styles);

const ListProject = () => {
  const [page, setPage] = useState(1);
  const [s, setS] = useState("");
  const [orderBy, setOrderBy] = useState("createdAt");

  const [filter, setFilter] = useState({});

  const {
    data: listProject,
    isError,
    isLoading,
  } = QueryProjet({ page, s, orderBy, ...filter });
  // const { mutate: filterMutate } = QueryFilterProject();

  return (
    <div className={cx("home-wrapper")}>
      <div className={cx("heading")}>Project</div>
      <Search setS={setS} />
      <Filter filters={filter} setSort={setOrderBy} setFilter={setFilter} />

      <div className={cx("content")}>
        <Tags filter={filter} setFilter={setFilter} />
        <ListProjectC
          listProject={listProject?.data}
          total={listProject?.total}
          isLoading={isLoading}
          isError={isError}
        />
        <div className={cx("pagination")}>
          <Pagination
            onChange={(page) => {
              setPage(page);
            }}
            defaultCurrent={page}
            total={Math.ceil(listProject?.total / 6) * 10}
          />
        </div>
      </div>
    </div>
  );
};

export default ListProject;
