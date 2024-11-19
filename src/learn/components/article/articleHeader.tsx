import { UserAvatar } from "./userAvatar";
import { UserInfo } from "./userInfo";

export const ArticleHeader = ({ article }: any) => {
  return (
    <div className="flex text-[16px] gap-2 mt-6 mb-4 ">
      <div className="flex items-center gap-2">
        <UserAvatar
          user={article?.article?.createdBy}
       
        />
        <UserInfo
          user={article?.article?.createdBy}
          createdAt={article?.article?.createdAt}
          duration={article?.article?.duration}
        />
      </div>
    </div>
  );
};
