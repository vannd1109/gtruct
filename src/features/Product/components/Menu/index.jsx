import { useState } from "react";
import "./styles.scss";
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

  // Promotion

  const [openPromotion, setOpenPromotion] = useState(false);
  const [closePromotion, setClosePromotion] = useState(true);

  const [openPromotionRegistation, setOpenPromotionRegistation] =
    useState(false);
  const [closePromotionRegistation, setClosePromotionRegistation] =
    useState(true);

  const [openPromotionStatus, setOpenPromotionStatus] = useState(false);
  const [closePromotionStatus, setClosePromotionStatus] = useState(true);

  const [openPromotionResult, setOpenPromotionResult] = useState(false);
  const [closePromotionResult, setClosePromotionResult] = useState(true);

  // Event

  const [openEvent, setOpenEvent] = useState(false);
  const [closeEvent, setCloseEvent] = useState(true);

  const [openEventRule, setOpenEventRule] = useState(false);
  const [closeEventRule, setCloseEventRule] = useState(true);

  const [openEventRegistration, setOpenEventRegistration] = useState(false);
  const [closeEventRegistration, setCloseEventRegistration] = useState(true);

  const [openEventResult, setOpenEventResult] = useState(false);
  const [closeEventResult, setCloseEventResult] = useState(true);

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

  // Promotion

  const handleOpenPromotion = (e) => {
    setOpenPromotion(!openPromotion);
    setClosePromotion(!closePromotion);
  };

  const handleOpenPromotionRegistration = (e) => {
    setOpenPromotionRegistation(!openPromotionRegistation);
    setClosePromotionRegistation(!closePromotionRegistation);
  };

  const handleOpenPromotionStatus = (e) => {
    setOpenPromotionStatus(!openPromotionStatus);
    setClosePromotionStatus(!closePromotionStatus);
  };

  const handleOpenPromotionResult = (e) => {
    setOpenPromotionResult(!openPromotionResult);
    setClosePromotionResult(!closePromotionResult);
  };

  // Event

  const handleOpenEvent = (e) => {
    setOpenEvent(!openEvent);
    setCloseEvent(!closeEvent);
  };

  const handleOpenEventRule = (e) => {
    setOpenEventRule(!openEventRule);
    setCloseEventRule(!closeEventRule);
  };

  const handleOpenEventRegistration = (e) => {
    setOpenEventRegistration(!openEventRegistration);
    setCloseEventRegistration(!closeEventRegistration);
  };

  const handleOpenEventResult = (e) => {
    setOpenEventResult(!openEventResult);
    setCloseEventResult(!closeEventResult);
  };

  const handleCloseMenu = () => {
    setCloseMenu(true);
  };

  const handleOpenMenu = () => {
    setCloseMenu(false);
  };

  //Item Mgt

  const handleOpenProductNumber = () => {
    console.log("Mã số phân loại sản phẩm");
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
              <Add fontSize="small" hidden={openItem} />
              <HorizontalRule fontSize="small" hidden={closeItem} />
              <Folder className="folder" hidden={openItem} />
              <FolderOpen className="folder" hidden={closeItem} /> Item Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeItem}>
              <li>
                <Typography onClick={handleOpenItemBasic}>
                  <Add fontSize="small" hidden={openItemBasic} />
                  <HorizontalRule fontSize="small" hidden={closeItemBasic} />
                  <Folder className="folder" hidden={openItemBasic} />
                  <FolderOpen className="folder" hidden={closeItemBasic} />
                  Basic Item Info
                </Typography>
                <ul className="tree-view-child" hidden={closeItemBasic}>
                  <li>
                    <Typography
                      className="document-title"
                      onClick={handleOpenProductNumber}
                    >
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
                  <Add fontSize="small" hidden={openItemInfo} />
                  <HorizontalRule fontSize="small" hidden={closeItemInfo} />
                  <Folder className="folder" hidden={openItemInfo} />
                  <FolderOpen className="folder" hidden={closeItemInfo} /> Info
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
                  <Add fontSize="small" hidden={openItemPacking} />
                  <HorizontalRule fontSize="small" hidden={closeItemPacking} />
                  <Folder className="folder" hidden={openItemPacking} />
                  <FolderOpen className="folder" hidden={closeItemPacking} />
                  Packing Info Resgistration
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
                  <Add fontSize="small" hidden={openItemStatus} />
                  <HorizontalRule fontSize="small" hidden={closeItemStatus} />
                  <Folder className="folder" hidden={openItemStatus} />
                  <FolderOpen className="folder" hidden={closeItemStatus} />
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
          <li className="category__root mb-2" data-open="false">
            <Typography onClick={handleOpenPromotion}>
              <Add fontSize="small" hidden={openPromotion} />
              <HorizontalRule fontSize="small" hidden={closePromotion} />
              <Folder className="folder" hidden={openPromotion} />
              <FolderOpen className="folder" hidden={closePromotion} />
              Promotion
            </Typography>
            <ul className="tree-view-child" hidden={closePromotion}>
              <li>
                <Typography onClick={handleOpenPromotionRegistration}>
                  <Add fontSize="small" hidden={openPromotionRegistation} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closePromotionRegistation}
                  />
                  <Folder
                    className="folder"
                    hidden={openPromotionRegistation}
                  />
                  <FolderOpen
                    className="folder"
                    hidden={closePromotionRegistation}
                  />
                  Promotion Registration
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={closePromotionRegistation}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hàng khuyến mãi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Chương trình khuyến mãi có điều kiện
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phê duyệt chương trình khuyến mãi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Khuyến mãi bốc thăm trúng thưởng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập thông tin người trúng thưởng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenPromotionStatus}>
                  <Add fontSize="small" hidden={openPromotionStatus} />
                  <HorizontalRule
                    hidden={closePromotionStatus}
                    fontSize="small"
                  />
                  <Folder className="folder" hidden={openPromotionStatus} />
                  <FolderOpen
                    className="folder"
                    hidden={closePromotionStatus}
                  />
                  Promotion Status
                </Typography>
                <ul className="tree-view-child" hidden={closePromotionStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra toàn bộ chương trình khuyến mãi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình chương trình khuyến mãi có điều kiện
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Yêu cầu khuyến mãi bốc thăm theo từng khách hàng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenPromotionResult}>
                  <Add hidden={openPromotionResult} fontSize="small" />
                  <HorizontalRule
                    hidden={closePromotionResult}
                    fontSize="small"
                  />
                  <Folder className="folder" hidden={openPromotionResult} />
                  <FolderOpen
                    className="folder"
                    hidden={closePromotionResult}
                  />
                  Promotion Result
                </Typography>
                <ul className="tree-view-child" hidden={closePromotionResult}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kết quả chương trình khuyến mãi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình chi phí chương trình khuyến mãi theo từng nhà
                      cung cấp
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="category__root mb-2" data-open="false">
            <Typography onClick={handleOpenEvent}>
              <Add hidden={openEvent} fontSize="small" />
              <HorizontalRule hidden={closeEvent} fontSize="small" />
              <Folder className="folder" hidden={openEvent} />
              <FolderOpen className="folder" hidden={closeEvent} /> Event
            </Typography>
            <ul className="tree-view-child" hidden={closeEvent}>
              <li>
                <Typography onClick={handleOpenEventRule}>
                  <Add hidden={openEventRule} fontSize="small" />
                  <HorizontalRule hidden={closeEventRule} fontSize="small" />
                  <Folder className="folder" hidden={openEventRule} />
                  <FolderOpen className="folder" hidden={closeEventRule} />
                  Event Rule Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closeEventRule}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký quy tắc
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenEventRegistration}>
                  <Add hidden={openEventRegistration} fontSize="small" />
                  <HorizontalRule
                    hidden={closeEventRegistration}
                    fontSize="small"
                  />
                  <Folder className="folder" hidden={openEventRegistration} />
                  <FolderOpen
                    className="folder"
                    hidden={closeEventRegistration}
                  />
                  Event Registration
                </Typography>
                <ul className="tree-view-child" hidden={closeEventRegistration}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký sự kiện
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận sự kiện
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận khách hàng được hưởng sự kiện
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenEventResult}>
                  <Add hidden={openEventResult} fontSize="small" />
                  <HorizontalRule hidden={closeEventResult} fontSize="small" />
                  <Folder className="folder" hidden={openEventResult} />
                  <FolderOpen className="folder" hidden={closeEventResult} />
                  Event Result
                </Typography>
                <ul className="tree-view-child" hidden={closeEventResult}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình khách hàng được hưởng sự kiện
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
