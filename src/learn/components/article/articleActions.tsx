import { LikeButton } from "./actionButtons/likeButton";
import { CommentButton } from "./actionButtons/commentButton";
import { BookmarkButton } from "./actionButtons/bookMarkButton";
import { ShareButton } from "./actionButtons/shareButton";
import { AudioButton } from "./actionButtons/audioButton";
import { MoreOptionsButton } from "./actionButtons/moreActionsButton";
import { useArticleActions } from "../../hooks/useArticleActions";

export const ArticleActions = ({
  likes,
  comments,
  isBookmarked,
  tagId,
  commentsActive,
  setCommentsActive,
  setIsBookMarked,
  setIsShareDialogOpen,
  isShareDialogOpen,
  showAudioPlayer,
  setShowAudioPlayer,
  moreOptions,
  setMoreOptions,
}: any) => {
  const {
    handleLike,
    handleCommentToggle,
    handleBookMark,
    handleShareOpenDialog,
    handleAudioPlayerToggle,
    handleMoreOptionsToggle,
  } = useArticleActions();
  return (
    <div className="flex justify-between mt-3">
      <div className="flex gap-3 sm:gap-6">
        <LikeButton likes={likes} handleLike={handleLike} />
        <CommentButton
          comments={comments}
          onClick={() => handleCommentToggle(commentsActive, setCommentsActive)}
        />
      </div>
      <div className="flex gap-3 sm:gap-4">
        <BookmarkButton
          isBookmarked={isBookmarked}
          handleBookMark={handleBookMark}
          setIsBookMarked={setIsBookMarked}
          tagId={tagId}
        />
        <ShareButton
          handleShareOpenDialog={handleShareOpenDialog}
          isShareDialogOpen={isShareDialogOpen}
          setIsShareDialogOpen={setIsShareDialogOpen}
        />
        <AudioButton
          handleAudioPlayerToggle={handleAudioPlayerToggle}
          showAudioPlayer={showAudioPlayer}
          setShowAudioPlayer={setShowAudioPlayer}
        />
        <MoreOptionsButton
          moreOptions={moreOptions}
          setMoreOptions={setMoreOptions}
          handleMoreOptionsToggle={handleMoreOptionsToggle}
        />
      </div>
    </div>
  );
};
