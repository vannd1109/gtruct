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
  const [openBasic, setOpenBasic] = useState(false);
  const [closeBasic, setCloseBasic] = useState(true);

  const [openBasicCode, setOpenBasicCode] = useState(false);
  const [closeBasicCode, setCloseBasicCode] = useState(true);

  const [openBasicOrganization, setOpenBasicOrganization] = useState(false);
  const [closeBasicOrganization, setCloseBasicOrganization] = useState(true);

  const [openPrivilegeMgt, setOpenPrivilegeMgt] = useState(false);
  const [closePrivilegeMgt, setClosePrivilegeMgt] = useState(true);

  const [openSystemMgt, setOpenSystemMgt] = useState(false);
  const [closeSystemMgt, setCloseSystemMgt] = useState(true);

  // ----------------------------------handle-----------------

  // Basic
  const handleOpenBasic = (e) => {
    setOpenBasic(!openBasic);
    setCloseBasic(!closeBasic);
  };

  const handleOpenBasicCode = (e) => {
    setOpenBasicCode(!openBasicCode);
    setCloseBasicCode(!closeBasicCode);
  };

  const handleOpenBasicOrganization = (e) => {
    setOpenBasicOrganization(!openBasicOrganization);
    setCloseBasicOrganization(!closeBasicOrganization);
  };

  const handleOpenPrivilegeMgt = (e) => {
    setOpenPrivilegeMgt(!openPrivilegeMgt);
    setClosePrivilegeMgt(!closePrivilegeMgt);
  };

  const handleOpenSystemMgt = (e) => {
    setOpenSystemMgt(!openSystemMgt);
    setCloseSystemMgt(!closeSystemMgt);
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
            <Typography onClick={handleOpenBasic}>
              <Add fontSize="small" hidden={openBasic} />
              <HorizontalRule fontSize="small" hidden={closeBasic} />
              <Folder className="folder" hidden={openBasic} />
              <FolderOpen className="folder" hidden={closeBasic} /> Basic
              Information
            </Typography>
            <ul className="tree-view-child" hidden={closeBasic}>
              <li>
                <Typography onClick={handleOpenBasicCode}>
                  <Add fontSize="small" hidden={openBasicCode} />
                  <HorizontalRule fontSize="small" hidden={closeBasicCode} />
                  <Folder className="folder" hidden={openBasicCode} />
                  <FolderOpen className="folder" hidden={closeBasicCode} />{" "}
                  Basic Code
                </Typography>
                <ul className="tree-view-child" hidden={closeBasicCode}>
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
                <Typography onClick={handleOpenBasicOrganization}>
                  <Add fontSize="small" hidden={openBasicOrganization} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeBasicOrganization}
                  />
                  <Folder className="folder" hidden={openBasicOrganization} />
                  <FolderOpen
                    className="folder"
                    hidden={closeBasicOrganization}
                  />
                  Basic Organization Info
                </Typography>
                <ul className="tree-view-child" hidden={closeBasicOrganization}>
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
                <Typography onClick={handleOpenPrivilegeMgt}>
                  <Add fontSize="small" hidden={openPrivilegeMgt} />
                  <HorizontalRule fontSize="small" hidden={closePrivilegeMgt} />
                  <Folder className="folder" hidden={openPrivilegeMgt} />
                  <FolderOpen className="folder" hidden={closePrivilegeMgt} />
                  Privilege Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closePrivilegeMgt}>
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
                <Typography onClick={handleOpenSystemMgt}>
                  <Add fontSize="small" hidden={openSystemMgt} />
                  <HorizontalRule fontSize="small" hidden={closeSystemMgt} />
                  <Folder className="folder" hidden={openSystemMgt} />
                  <FolderOpen className="folder" hidden={closeSystemMgt} />
                  System Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closeSystemMgt}>
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
