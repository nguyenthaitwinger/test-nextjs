import { InferGetStaticPropsType } from "next";
import React from "react";
import { getListProject, getProjectById } from "../../src/queries/api/project";

type Props = {};

function ProjectItem(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { project } = props;

  return (
    <div className="text-center">
      <div className="text-center p-5 display-5">Project Detail</div>
      <div>{project.data?.fullName}</div>
      <div>{project.data?.slug}</div>
      <div>{project.data?._id}</div>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const project = await getProjectById(context.params._id);

  return {
    props: { project },
  };
}

export async function getStaticPaths() {
  const path = await getListProject();

  const paths = path.data.map((post: any) => ({
    params: { _id: post._id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default ProjectItem;
