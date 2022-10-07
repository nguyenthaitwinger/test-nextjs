import classNames from "classnames/bind";
import moment from "moment";
import Router from "next/router";
import styles from "../../../../styles/Pages/ListProject.module.scss";
import { ProjectItem } from "../../../config/interface";

const cx = classNames.bind(styles);
const Bg1 = "/images/Project.png";
const title = "Hộp đựng giấy lá chuối - Greenhopcom.com";

interface Props {
  listProject: ProjectItem[];
  isLoading: boolean;
  isError: boolean;
  total: number;
}

const ListProject: React.FC<Props> = ({
  listProject,
  total,
  isLoading,
  isError,
}) => {
  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <div className={cx("list-project-wrap")}>
      <div className={cx("title")}>{total} projects found</div>
      <div className={cx("list-project")}>
        <div className={`row g-0 ${cx("project-row")}`}>
          {listProject?.map((project: any, index: number) => {
            return (
              <div
                key={index}
                className={`col-md-6 col-lg-4 ${cx("project-col")}`}
              >
                <div className={cx("project-item")}>
                  <div
                    style={{ backgroundImage: `url('${project.logo || Bg1}')` }}
                    className={cx("project-bg")}
                    onClick={() => {
                      Router.push(`/project-item/${project._id}`);
                    }}
                  >
                    <div className={cx("img")}>
                      {/* <img src={Cup} alt="Cup" className={cx("cup")} />
                      <img src={Share} alt="Share" className={cx("share")} /> */}
                    </div>
                  </div>
                  <div className={cx("project-content")}>
                    <h3 className={cx("title")}>{project.fullName || title}</h3>
                    <div className={cx("list-tag")}>
                      {project?.coSecondaryCategories?.map(
                        (itemTag: any, index: number) => {
                          return (
                            <div key={index} className={cx("item")}>
                              {itemTag.name}
                            </div>
                          );
                        }
                      )}
                      <div key={index} className={cx("item")}>
                        {project?.coPrimaryCategory?.name}
                      </div>
                    </div>
                    <div className={cx("desc")}>{project.tagline}</div>
                  </div>
                  <div className={cx("project-footer")}>
                    <div className={cx("date")}>
                      {/* <img src={Calender} alt="calendar" /> */}
                      <span>
                        {moment(project.createdAt).format("DD/MM/YYYY")}
                      </span>
                    </div>
                    <div className={cx("follow")}>
                      <button>Follow</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProject;
