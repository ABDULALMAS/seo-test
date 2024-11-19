/* eslint-disable */
import moment from "moment";
import NextLink from "next/link";

export const UserInfo = ({ user, createdAt, duration }: any) => {
  return (
    <div className="">
      <div className="flex gap-2">
        <p className="flex gap-2 font-normal cursor-pointer hover:underline">
          <NextLink href={`/profile/${user?.userId}`}>
            <span className="font-semibold">{user?.name}</span>
          </NextLink>
          |
        </p>
        <div className="font-normal">
          {moment(createdAt).format("MMMM D, YYYY")}
        </div>
      </div>
      <p className="font-medium ">{duration + " read"}</p>
    </div>
  );
};
