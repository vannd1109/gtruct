import { useState } from "react";
import {
  Description,
  Folder,
  Add,
  HorizontalRule,
  FolderOpen,
} from "@mui/icons-material";

import { Typography } from "@material-ui/core";

function Master(props) {
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

  return (
    <div className="tree-view-com">
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
                <FolderOpen className="folder" hidden={closeBasicCode} /> Basic
                Code
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
    </div>
  );
}

export default Master;
