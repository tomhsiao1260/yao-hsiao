import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs/promises";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import SwitchDarkmode from "@/components/SwitchDarkmode";
import styles from "../../blogs/styles.module.scss";

const blogRootPath = "blogs";

type PageProps = {
  source: MDXRemoteSerializeResult;
};

export default function BlogIdPage(props: PageProps) {
  const { source } = props;

  return (
    <div className={styles["blog-page"]}>
      <SwitchDarkmode />
      <MDXRemote {...source} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogsFolders = await fs.readdir(path.join(process.cwd(), blogRootPath));

  const paths = blogsFolders.map(
    (blogsFolder) => "/" + blogsFolder.split(".")[0]
  );
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogId = context.params?.blogId;
  // @tomhsiao1260 這邊你自己打 404 規則
  if (typeof blogId !== "string") return { notFound: true };

  const source = await fs.readFile(
    path.join(process.cwd(), blogRootPath, `${blogId}.mdx`)
  );

  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
};
