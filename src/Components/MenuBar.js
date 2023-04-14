import { Link } from "react-router-dom";

const MenuBar = [
  {
    title: "Home",
    logoSrc: "/images/home.png",
    link: "/",
  },
  {
    title: "Explore",
    logoSrc: "/images/hashtag.png",
    link: "/explore",
  },
  {
    title: "Communities",
    logoSrc: "/images/community.png",
  },
  {
    title: "Notifications",
    logoSrc: "/images/notification.png",
  },

  {
    title: "Messages",
    logoSrc: "/images/message.png",
  },
  {
    title: "Bookmarks",
    logoSrc: "/images/-bookmark.png",
  },
  {
    title: "Profile",
    logoSrc: "/images/account.png",
  },
  {
    title: "More",
    logoSrc: "/images/more.png",
    link: "/explore",
  },
];
function RenderMenuBar() {
  return MenuBar.map((item) => (
    <div className=" p-2 pl-4 h-13 w-44	 bg-colors-black hover:bg-colors-slate-900 hover:duration-400 rounded-full  ">
      <Link className=" text-[19px]  font-revert" to={item.link}>
        <img className="inline mr-3  h-7 " src={item.logoSrc} alt="logo"></img>
        {item.title}
      </Link>
    </div>
  ));
}

export default RenderMenuBar;
