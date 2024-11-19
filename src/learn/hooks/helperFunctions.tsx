/* eslint-disable */
import moment from "moment";

const TimeAgo = ({ commentedAt }:any) => {
  const time = moment(commentedAt);
  const differenceInMinutes = moment().diff(time, "minutes");

  if (differenceInMinutes < 1) {
    return <span>just now</span>;
  } else if (differenceInMinutes < 60) {
    return <span>about {differenceInMinutes} minute{differenceInMinutes !== 1 ? "s" : ""} ago</span>;
  } else if (differenceInMinutes < 1440) {
    const hours = Math.floor(differenceInMinutes / 60);
    return <span>about {hours} hour{hours !== 1 ? "s" : ""} ago</span>;
  } else {
    const days = Math.floor(differenceInMinutes / 1440);
    return <span>about {days} day{days !== 1 ? "s" : ""} ago</span>;
  }
};

export default TimeAgo;
