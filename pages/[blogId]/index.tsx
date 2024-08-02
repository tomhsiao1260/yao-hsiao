import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import fs from "fs/promises";
import path from "path";
import articles from "../../blogs/articles.json";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Navbar from "@/components/Navbar";
import styles from "@/blogs/styles.module.scss";

const blogRootPath = "blogs";

type Article = {
  title: string;
  date: string;
  route: string;
  description: string;
};

type PageProps = {
  source: MDXRemoteSerializeResult;
  article: Article;
};

export default function BlogIdPage(props: PageProps) {
  const { source, article } = props;

  return (
    <>
      <Head>
        <title>{article?.title}</title>
        <meta property="og:title" content={article?.title} key="title" />
        <meta
          property="og:description"
          content={article?.description.slice(0, 100)}
          key="description"
        />
      </Head>
      <Navbar />
      <div className={styles["blog-page"]}>
        <MDXRemote {...source} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogsFolders = await fs.readdir(path.join(process.cwd(), blogRootPath));

  const paths = blogsFolders
    .filter(
      (blogsFolder) =>
        !["/articles", "/styles"].includes("/" + blogsFolder.split(".")[0])
    )
    .map((blogsFolder) => "/" + blogsFolder.split(".")[0]);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogId = context.params?.blogId;
  // @tomhsiao1260 這邊你自己打 404 規則
  if (typeof blogId !== "string") return { notFound: true };

  const article = articles.find(({ route }) => route === blogId);
  const source = await fs.readFile(
    path.join(process.cwd(), blogRootPath, `${blogId}.mdx`)
  );

  const mdxSource = await serialize(source);
  return { props: { source: mdxSource, article } };
};
