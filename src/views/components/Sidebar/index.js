import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import BookIcon from "@material-ui/icons/Book";
import AlbumIcon from "@material-ui/icons/Album"

import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow Icon={AlbumIcon} title="All" />
      <SidebarRow Icon={PeopleIcon} title="Users" />
      <SidebarRow Icon={BookIcon} title="Posts" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={ExpandMoreIcon} title="More" />
    </div>
  );
}

export default Sidebar