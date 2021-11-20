import { useState } from "react";
import { Tooltip, Typography } from "@mui/material";
import { Col } from "react-bootstrap";
import {
  Description,
  Folder,
  Add,
  HorizontalRule,
  FolderOpen,
  Dehaze,
} from "@mui/icons-material";

function Master(props) {
  // open close menu
  const [closeMenu, setCloseMenu] = useState(false);
  // Basic
  const [basicInformation, setBasicInformation] = useState(false);

  const [basicCode, setBasicCode] = useState(false);

  const [basicOrganizationInfo, setBasicOrganizationInfo] = useState(false);

  const [privilegeMgt, setPrivilegeMgt] = useState(false);

  const [systemMgt, setSystemMgt] = useState(false);

  // ----------------------------------handle-----------------

  // Basic
  const handleBasicInformation = (e) => {
    setBasicInformation(!basicInformation);
  };

  const handleBasicCode = (e) => {
    setBasicCode(!basicCode);
  };

  const handleBasicOrganizationInfo = (e) => {
    setBasicOrganizationInfo(!basicOrganizationInfo);
  };

  const handlePrivilegeMgt = (e) => {
    setPrivilegeMgt(!privilegeMgt);
  };

  const handleSystemMgt = (e) => {
    setSystemMgt(!systemMgt);
  };

  // Open Close Menu
  const handleCloseMenu = () => {
    setCloseMenu(true);
  };

  const handleOpenMenu = () => {
    setCloseMenu(false);
  };

  return (
    <>
      <div className="close__menu" onClick={handleOpenMenu} hidden={!closeMenu}>
        <Tooltip title="Hiện danh mục">
          <Dehaze />
        </Tooltip>
      </div>
      <Col sm={3} className="tree-view-com" hidden={closeMenu}>
        <div className="tree-view-com-icon" onClick={handleCloseMenu}>
          <Tooltip title="Ẩn danh mục">
            <Dehaze />
          </Tooltip>
        </div>
        <ul className="tree-view-parent">
          <li>
            <Typography onClick={handleBasicInformation}>
              <Add fontSize="small" hidden={basicInformation} />
              <HorizontalRule fontSize="small" hidden={!basicInformation} />
              <Folder className="folder" hidden={basicInformation} />
              <FolderOpen className="folder" hidden={!basicInformation} /> Basic
              Information
            </Typography>
            <ul className="tree-view-child" hidden={!basicInformation}>
              <li>
                <Typography onClick={handleBasicCode}>
                  <Add fontSize="small" hidden={basicCode} />
                  <HorizontalRule fontSize="small" hidden={!basicCode} />
                  <Folder className="folder" hidden={basicCode} />
                  <FolderOpen className="folder" hidden={!basicCode} /> Basic
                  Code
                </Typography>
                <ul className="tree-view-child" hidden={!basicCode}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý kênh bán hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý mã số chung
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý số bưu điện
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý khu vực được phân tích
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleBasicOrganizationInfo}>
                  <Add fontSize="small" hidden={basicOrganizationInfo} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!basicOrganizationInfo}
                  />
                  <Folder className="folder" hidden={basicOrganizationInfo} />
                  <FolderOpen
                    className="folder"
                    hidden={!basicOrganizationInfo}
                  />
                  Basic Organization Info
                </Typography>
                <ul className="tree-view-child" hidden={!basicOrganizationInfo}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thông tin của công ty
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý các bộ phận
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý nhân viên
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý tổ chức theo tháng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý nhân viên của các công ty trực thuộc
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý mã số MD
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý các nhóm tiến hành
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình nhân viên
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handlePrivilegeMgt}>
                  <Add fontSize="small" hidden={privilegeMgt} />
                  <HorizontalRule fontSize="small" hidden={!privilegeMgt} />
                  <Folder className="folder" hidden={privilegeMgt} />
                  <FolderOpen className="folder" hidden={!privilegeMgt} />
                  Privilege Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!privilegeMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý nhóm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý thông tin nhóm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra người sử dụng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý nhóm - người sử dụng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý menu
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý đối tượng cần trợ giúp
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleSystemMgt}>
                  <Add fontSize="small" hidden={systemMgt} />
                  <HorizontalRule fontSize="small" hidden={!systemMgt} />
                  <Folder className="folder" hidden={systemMgt} />
                  <FolderOpen className="folder" hidden={!systemMgt} />
                  System Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!systemMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý các thông báo
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý nhóm từ trợ giúp
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý tin nhắn
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý log theo event
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra log theo event
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Từ điển chuyên ngành
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </Col>
    </>
  );
}

export default Master;
