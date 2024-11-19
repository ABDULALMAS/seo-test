import React from "react";
import { Metadata } from "next";
import ArticleDetails from "@/learn/components/article/articlePage";

export const generateMetadata = async ({ params }: any) => {
  // const { params } = context;
  const { tagId } = await params;
  const userId = null;
  const articleResponse: any = await fetch(
    `https://0zpqv5eu15.execute-api.us-west-2.amazonaws.com/nodejs-aws-lambda/server/api/articles/getArticleById/${tagId}/${userId}`
  );
  const article = await articleResponse.json();

  const metadata: Metadata = {
    title: article?.result?.article?.title,
    description: article?.result?.article?.description,
    openGraph: {
      title: article?.result?.article?.title,
      description: article?.result?.article?.description,
      url: `https://technokrax.com/articles/${article?.result?.article?.tagId}`,
      images: [
        {
          url: article?.result?.article?.selectedFile,
          width: 1200,
          height: 675,
        },
      ],
      type: "article",
    },
  };

  return metadata;
};

const ArticleDetailsPage = async ({ params }: any) => {
    const { tagId } = await params;
    const userId = null;
    const articleResponse: any = await fetch(
      `https://0zpqv5eu15.execute-api.us-west-2.amazonaws.com/nodejs-aws-lambda/server/api/articles/getArticleById/${tagId}/${userId}`
    );
    const article = await articleResponse.json();
  return <ArticleDetails articleDetails={article?.result} />;
};

export default ArticleDetailsPage;
