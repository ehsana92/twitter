import React from 'react';
import useStyle from './styles'
import RightSidebar from "../rightSidebar/RightSidebar";
import Divider from "@material-ui/core/Divider";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import LeftSidebarClassCommponenent from "../leftSidebar/LeftSidebarClassCommponenent";

const Layout = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <RightSidebar />
      <Divider orientation={"vertical"} className={classes.divider} />
      <div className={classes.content}>
        {props.children}
      </div>
      <Divider orientation={"vertical"} className={classes.divider} />
      {/* <LeftSidebarClassCommponenent /> */}
      <LeftSidebar />
    </div>
  );
};

export default Layout;