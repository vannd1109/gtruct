import { useState } from "react";
import { Tooltip, Typography } from "@mui/material";
import {
  Description,
  Folder,
  Add,
  HorizontalRule,
  FolderOpen,
  Dehaze,
} from "@mui/icons-material";
import { Col } from "react-bootstrap";

function Menu(props) {
  // open close menu
  const [closeMenu, setCloseMenu] = useState(false);

  // Item Mgt
  const [openItem, setOpenItem] = useState(false);
  const [closeItem, setCloseItem] = useState(true);

  const [openItemBasic, setOpenItemBasic] = useState(false);
  const [closeItemBasic, setCloseItemBasic] = useState(true);

  const [openItemInfo, setOpenItemInfo] = useState(false);
  const [closeItemInfo, setCloseItemInfo] = useState(true);

  const [openItemPacking, setOpenItemPacking] = useState(false);
  const [closeItemPacking, setCloseItemPacking] = useState(true);

  const [openItemStatus, setOpenItemStatus] = useState(false);
  const [closeItemStatus, setCloseItemStatus] = useState(true);

  // Item Mgt

  const handleOpenItemMgt = (e) => {
    setOpenItem(!openItem);
    setCloseItem(!closeItem);
  };

  const handleOpenItemBasic = (e) => {
    setOpenItemBasic(!openItemBasic);
    setCloseItemBasic(!closeItemBasic);
  };

  const handleOpenItemInfo = (e) => {
    setOpenItemInfo(!openItemInfo);
    setCloseItemInfo(!closeItemInfo);
  };

  const handleOpenItemPacking = (e) => {
    setOpenItemPacking(!openItemPacking);
    setCloseItemPacking(!closeItemPacking);
  };

  const handleOpenItemStatus = (e) => {
    setOpenItemStatus(!openItemStatus);
    setCloseItemStatus(!closeItemStatus);
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
          <li
            className="category__root mb-2"
            data-status="false"
            data-open="false"
          >
            <Typography onClick={handleOpenItemMgt}>
              <Add fontSize="small" hidden={openItem} />{" "}
              <HorizontalRule fontSize="small" hidden={closeItem} />
              <Folder className="folder" hidden={openItem} />
              <FolderOpen className="folder" hidden={closeItem} /> Default
              Folder
            </Typography>
            <ul className="tree-view-child" hidden={closeItem}>
              <li>
                <Typography onClick={handleOpenItemBasic}>
                  <Add fontSize="small" hidden={openItemBasic} />{" "}
                  <HorizontalRule fontSize="small" hidden={closeItemBasic} />
                  <Folder className="folder" hidden={openItemBasic} />
                  <FolderOpen className="folder" hidden={closeItemBasic} />{" "}
                  Basic Item Info
                </Typography>
                <ul className="tree-view-child" hidden={closeItemBasic}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Mã số phân loại sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập mô tả sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập nhãn hiệu
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập hãng sản xuất
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenItemInfo}>
                  <Add fontSize="small" hidden={openItemInfo} />{" "}
                  <HorizontalRule fontSize="small" hidden={closeItemInfo} />
                  <Folder className="folder" hidden={openItemInfo} />
                  <FolderOpen className="folder" hidden={closeItemInfo} /> Info.
                  Resgistration
                </Typography>
                <ul className="tree-view-child" hidden={closeItemInfo}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập sản phẩm đại diện
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý thông tin Key của Item
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký sản phẩm thông thường
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thông tin sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thông số kỹ thuật của sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quá trình thay đổi thông số kỹ thuật của sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký phê duyệt sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Sửa đổi thông tin phân tích sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký xử lý sản phẩm đã ngừng bán
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý sản phẩm nhà cung cấp
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenItemPacking}>
                  <Add fontSize="small" hidden={openItemPacking} />{" "}
                  <HorizontalRule fontSize="small" hidden={closeItemPacking} />
                  <Folder className="folder" hidden={openItemPacking} />
                  <FolderOpen
                    className="folder"
                    hidden={closeItemPacking}
                  />{" "}
                  Packing Info. Resgistration
                </Typography>
                <ul className="tree-view-child" hidden={closeItemPacking}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập vật liệu đóng gói
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenItemStatus}>
                  <Add fontSize="small" hidden={openItemStatus} />{" "}
                  <HorizontalRule fontSize="small" hidden={closeItemStatus} />
                  <Folder className="folder" hidden={openItemStatus} />
                  <FolderOpen
                    className="folder"
                    hidden={closeItemStatus}
                  />{" "}
                  Item Status
                </Typography>
                <ul className="tree-view-child" hidden={closeItemStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đăng ký sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình sản phẩm không còn tồn kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình bán sản phẩm mới
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình trạng hàng tồn
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

export default Menu;
