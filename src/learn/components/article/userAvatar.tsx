export const UserAvatar = ({ user, onMouseEnter, onMouseLeave }:any) => {
    if (user?.photo) {
      return (
        <img
          className="w-8 h-8 rounded-full cursor-pointer hover:shadow-lg transition-shadow duration-300"
          src={user.photo}
          alt={user.name || "User Photo"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    }
  
    return (
      <div
        className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-bold cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {user?.name ? user.name.charAt(0).toUpperCase() : ""}
      </div>
    );
  };