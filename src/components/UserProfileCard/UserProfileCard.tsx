import type { UserProfileCardProps } from "../../types";
function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <section className="flex flex-col items-center mt-20 bg-gray-50 w-100 m-auto p-10 rounded-lg">
      <div className="flex items-center gap-[40px]">
        <img src={user.avatarUrl} alt="Profile picture" className="w-30 h-30"/>
        <div className="flex flex-col gap-[10px]">
          <p className="text-xl font-semibold">{user.name}</p>
          <p className="opacity-75 text-md">{showEmail ? user.email : ""}</p>
          <p className="opacity-75 text-md">{showRole ? user.role : ""}</p>
        </div>
      </div>
      {children}
      {onEdit && (
        <button
          onClick={function () {
            onEdit(user.id);
          }}
          className=" text-white bg-blue-500  hover:bg-blue-600 w-90 rounded-md pt-2 pb-2"
        >
          Edit Profile
        </button>
      )}
    </section>
  );
}
export default UserProfileCard;