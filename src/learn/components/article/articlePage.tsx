/* eslint-disable */
"use client";
import { useState, useEffect } from "react";

import { useParams } from "next/navigation";

import ArticleDetailsSkeleton from "./articlePageSkeleton";
import { ArticleHeader } from "./articleHeader";
import { ArticleBanner } from "./articleBanner";
import Footer from "../Footer";
import { ArticleEditor } from "./articleEditor";
import { useArticleEditor } from "../../hooks/useEditor";

const ArticleDetails = ({ articleDetails }: any) => {

  const [commentsActive, setCommentsActive] = useState(false);
  const { tagId }: any = useParams();

  const [isBookMarked, setIsBookMarked] = useState(false);
  const [commentsState, setCommentsState] = useState([]);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const { editor } = useArticleEditor(articleDetails?.content);

  useEffect(() => {
    if (articleDetails?.content) {
      console.log("articleDetails:",articleDetails)
      editor?.commands.setContent(articleDetails?.content);
      setLikes(articleDetails?.likes);
      setCommentsState(articleDetails?.comments);
    }
    window.scrollTo(0, 0);
  }, [articleDetails?.content, editor, tagId]);

  return (
    <>
      {articleDetails?.content ? (
        <ArticleDetailsSkeleton />
      ) : (
        <div className="text-black overflow-hidden">
          <div className="mx-[5%] md:mx-[15%] lg:mx-[20%] xl:mx-[24%] 2xl:mx-[28%]">
            {articleDetails?.content && (
              <ArticleHeader article={articleDetails} />
            )}

            <ArticleBanner image={articleDetails?.article?.selectedFile} />

            <ArticleEditor content={articleDetails?.article?.content} />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ArticleDetails;
