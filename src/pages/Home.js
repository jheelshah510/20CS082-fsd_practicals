import React, { useState } from "react";
import { Card } from "@mui/material";
import { TreeItem, TreeView } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import cspitLogo from "../assets/CSPIT_Final (1).png";
import deptLogo from "../assets/unnamed.jpg";
import pdpias from "../assets/download.png";
import rpcp from "../assets/RPCP_Final.png";

const Home = () => {
  const [showCspit, setshowCspit] = useState(true);
  const [showDept, setshowDept] = useState(true);
  const [showPdpis, setshowPdpis] = useState(true);
  const [showRpcp, setShowRpcp] = useState(true);
  return (
    <div style={{ display: "inline-flex" }}>
      {showCspit && (
        <Card
          sx={{
            width: 275,
            marginTop: 25,
            height: "300px",
            paddingTop: "30px",
            borderWidth: "5px",
            marginLeft: 10,
            display: "flex",
            justifyContent: "center",
          }}
          variant="outlined"
        >
          <TreeView
            aria-label="multi-select"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
            sx={{ height: 216, width: 200 }}
          >
            <img src={cspitLogo} alt="" width="150" height="100" />
            <TreeItem nodeId="1" label="CSPIT">
              <TreeItem
                nodeId="2"
                label="CSE"
                onClick={() => {
                  setshowDept(false);
                  setShowRpcp(false);
                  setshowPdpis(false);
                }}
              />
              <TreeItem
                nodeId="3"
                label="CE"
                onClick={() => {
                  setshowDept(false);
                  setShowRpcp(false);
                  setshowPdpis(false);
                }}
              />
              <TreeItem
                nodeId="4"
                label="EC"
                onClick={() => {
                  setshowDept(false);
                  setShowRpcp(false);
                  setshowPdpis(false);
                }}
              />
            </TreeItem>
          </TreeView>
        </Card>
      )}
      {showDept && (
        <Card
          sx={{
            width: 275,
            marginTop: 25,
            height: "300px",
            paddingTop: "30px",
            borderWidth: "5px",
            marginLeft: 10,
            display: "flex",
            justifyContent: "center",
          }}
          variant="outlined"
        >
          <TreeView
            aria-label="multi-select"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
            sx={{ height: 216, width: 200 }}
          >
            <img src={deptLogo} alt="" width="100" height="100" />
            <TreeItem nodeId="1" label="DEPSTAR">
              <TreeItem
                nodeId="2"
                label="IT"
                onClick={() => {
                  setshowCspit(false);
                  setShowRpcp(false);
                  setshowPdpis(false);
                }}
              />
              <TreeItem
                nodeId="3"
                label="EE"
                onClick={() => {
                  setshowCspit(false);
                  setShowRpcp(false);
                  setshowPdpis(false);
                }}
              />
              <TreeItem
                nodeId="4"
                label="ME"
                onClick={() => {
                  setshowCspit(false);
                  setShowRpcp(false);
                  setshowPdpis(false);
                }}
              />
            </TreeItem>
          </TreeView>
        </Card>
      )}

      {showPdpis && (
        <Card
          sx={{
            width: 275,
            marginTop: 25,
            height: "300px",
            paddingTop: "30px",
            borderWidth: "5px",
            marginLeft: 10,
            display: "flex",
            justifyContent: "center",
          }}
          variant="outlined"
        >
          <TreeView
            aria-label="multi-select"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
            sx={{ height: 216, width: 200 }}
          >
            <img src={pdpias} alt="" width="100" height="100" />
            <TreeItem nodeId="1" label="PDPIS">
              <TreeItem
                nodeId="2"
                label="EE"
                onClick={() => {
                  setshowCspit(false);
                  setShowRpcp(false);
                  setshowDept(false);
                }}
              />
              <TreeItem
                nodeId="3"
                label="CIVIL"
                onClick={() => {
                  setshowCspit(false);
                  setShowRpcp(false);
                  setshowDept(false);
                }}
              />
              <TreeItem
                nodeId="4"
                label="BCA"
                onClick={() => {
                  setshowCspit(false);
                  setShowRpcp(false);
                  setshowDept(false);
                }}
              />
            </TreeItem>
          </TreeView>
        </Card>
      )}

      {showRpcp && (
        <Card
          sx={{
            width: 275,
            marginTop: 25,
            height: "300px",
            paddingTop: "30px",
            borderWidth: "5px",
            marginLeft: 10,
            display: "flex",
            justifyContent: "center",
          }}
          variant="outlined"
        >
          <TreeView
            aria-label="multi-select"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
            sx={{ height: 216, width: 200 }}
          >
            <img src={rpcp} alt="" width="100" height="100" />
            <TreeItem nodeId="1" label="RPCP">
              <TreeItem
                nodeId="2"
                label="MBA"
                onClick={() => {
                  setshowCspit(false);
                  setshowPdpis(false);
                  setshowDept(false);
                }}
              />
              <TreeItem
                nodeId="3"
                label="BBA"
                onClick={() => {
                  setshowCspit(false);
                  setshowPdpis(false);
                  setshowDept(false);
                }}
              />
              <TreeItem
                nodeId="4"
                label="CIVIL"
                onClick={() => {
                  setshowCspit(false);
                  setshowPdpis(false);
                  setshowDept(false);
                }}
              />
            </TreeItem>
          </TreeView>
        </Card>
      )}
    </div>
  );
};

export default Home;
