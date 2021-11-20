import {
  Add,
  Dehaze,
  Description,
  Folder,
  FolderOpen,
  HorizontalRule,
} from "@mui/icons-material";
import { Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { Col } from "react-bootstrap";
import "./styles.scss";

function Menu({ setTitle, handleSetTitle }) {
  // open close menu
  const [closeMenu, setCloseMenu] = useState(false);

  // Item Mgt
  const [itemMgt, setItemMgt] = useState(false);

  const [basicItemInfo, setBasicItemInfo] = useState(false);

  const [infoResgistration, setInfoResgistration] = useState(false);

  const [packingInfoResgistration, setPackingInfoResgistration] =
    useState(false);

  const [itemStatus, setItemStatus] = useState(false);
  // Promotion
  const [promotion, setPromotion] = useState(false);

  const [promotionRegistation, setPromotionRegistation] = useState(false);

  const [promotionStatus, setPromotionStatus] = useState(false);

  const [promotionResult, setPromotionResult] = useState(false);

  // Event
  const [event, setEvent] = useState(false);

  const [eventRuleMgt, setEventRuleMgt] = useState(false);

  const [eventRegistration, setEventRegistration] = useState(false);

  const [eventResult, setEventResult] = useState(false);

  // Item Mgt
  const handleItemMgt = (e) => {
    setItemMgt(!itemMgt);
  };

  const handleBasicItemInfo = (e) => {
    setBasicItemInfo(!basicItemInfo);
  };

  const handleInfoResgistration = (e) => {
    setInfoResgistration(!infoResgistration);
  };

  const handlePackingInfoResgistration = (e) => {
    setPackingInfoResgistration(!packingInfoResgistration);
  };

  const handleItemStatus = (e) => {
    setItemStatus(!itemStatus);
  };

  // Promotion
  const handlePromotion = (e) => {
    setPromotion(!promotion);
  };

  const handlePromotionRegistration = (e) => {
    setPromotionRegistation(!promotionRegistation);
  };

  const handlePromotionStatus = (e) => {
    setPromotionStatus(!promotionStatus);
  };

  const handlePromotionResult = (e) => {
    setPromotionResult(!promotionResult);
  };

  // Event
  const handleEvent = (e) => {
    setEvent(!event);
  };

  const handleEventRuleMgt = (e) => {
    setEventRuleMgt(!eventRuleMgt);
  };

  const handleEventRegistration = (e) => {
    setEventRegistration(!eventRegistration);
  };

  const handleEventResult = (e) => {
    setEventResult(!eventResult);
  };

  const handleCloseMenu = () => {
    setCloseMenu(true);
  };

  const handleOpenMenu = () => {
    setCloseMenu(false);
  };

  //Item Mgt

  const handleProductNumber = () => {
    if (handleSetTitle) {
      handleSetTitle();
      setTitle("Mã số phân loại sản phẩm");
    }
  };

  const handleProductDescripton = () => {
    if (handleSetTitle) {
      handleSetTitle();
      setTitle("Đăng nhập mô tả sản phẩm");
    }
  };

  const handleProductBrand = () => {
    if (handleSetTitle) {
      handleSetTitle();
      setTitle("Đăng nhập nhãn hiệu");
    }
  };
  const handleProductManufacturer = () => {
    if (handleSetTitle) {
      handleSetTitle();
      setTitle("Đăng nhập hãng sản xuất");
    }
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
            <Typography onClick={handleItemMgt}>
              <Add fontSize="small" hidden={itemMgt} />
              <HorizontalRule fontSize="small" hidden={!itemMgt} />
              <Folder className="folder" hidden={itemMgt} />
              <FolderOpen className="folder" hidden={!itemMgt} /> Item Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!itemMgt}>
              <li>
                <Typography onClick={handleBasicItemInfo}>
                  <Add fontSize="small" hidden={basicItemInfo} />
                  <HorizontalRule fontSize="small" hidden={!basicItemInfo} />
                  <Folder className="folder" hidden={basicItemInfo} />
                  <FolderOpen className="folder" hidden={!basicItemInfo} />
                  Basic Item Info
                </Typography>
                <ul className="tree-view-child" hidden={!basicItemInfo}>
                  <li>
                    <Typography
                      className="document-title"
                      onClick={handleProductNumber}
                    >
                      <Description className="file" />
                      Mã số phân loại sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      className="document-title"
                      onClick={handleProductDescripton}
                    >
                      <Description className="file" />
                      Đăng nhập mô tả sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      className="document-title"
                      onClick={handleProductBrand}
                    >
                      <Description className="file" />
                      Đăng nhập nhãn hiệu
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      className="document-title"
                      onClick={handleProductManufacturer}
                    >
                      <Description className="file" />
                      Đăng nhập hãng sản xuất
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleInfoResgistration}>
                  <Add fontSize="small" hidden={infoResgistration} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!infoResgistration}
                  />
                  <Folder className="folder" hidden={infoResgistration} />
                  <FolderOpen className="folder" hidden={!infoResgistration} />
                  Info Resgistration
                </Typography>
                <ul className="tree-view-child" hidden={!infoResgistration}>
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
                <Typography onClick={handlePackingInfoResgistration}>
                  <Add fontSize="small" hidden={packingInfoResgistration} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!packingInfoResgistration}
                  />
                  <Folder
                    className="folder"
                    hidden={packingInfoResgistration}
                  />
                  <FolderOpen
                    className="folder"
                    hidden={!packingInfoResgistration}
                  />
                  Packing Info Resgistration
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={!packingInfoResgistration}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập vật liệu đóng gói
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleItemStatus}>
                  <Add fontSize="small" hidden={itemStatus} />
                  <HorizontalRule fontSize="small" hidden={!itemStatus} />
                  <Folder className="folder" hidden={itemStatus} />
                  <FolderOpen className="folder" hidden={!itemStatus} />
                  Item Status
                </Typography>
                <ul className="tree-view-child" hidden={!itemStatus}>
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
          <li className="category__root mb-2">
            <Typography onClick={handlePromotion}>
              <Add fontSize="small" hidden={promotion} />
              <HorizontalRule fontSize="small" hidden={!promotion} />
              <Folder className="folder" hidden={promotion} />
              <Folder className="folder" hidden={!promotion} />
              Promotion
            </Typography>
            <ul className="tree-view-child" hidden={!promotion}>
              <li>
                <Typography onClick={handlePromotionRegistration}>
                  <Add fontSize="small" hidden={promotionRegistation} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!promotionRegistation}
                  />
                  <Folder className="folder" hidden={promotionRegistation} />
                  <FolderOpen
                    className="folder"
                    hidden={!promotionRegistation}
                  />
                  Promotion Registration
                </Typography>
                <ul className="tree-view-child" hidden={!promotionRegistation}>
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
                <Typography onClick={handlePromotionStatus}>
                  <Add fontSize="small" hidden={promotionStatus} />
                  <HorizontalRule hidden={!promotionStatus} fontSize="small" />
                  <Folder className="folder" hidden={promotionStatus} />
                  <FolderOpen className="folder" hidden={!promotionStatus} />
                  Promotion Status
                </Typography>
                <ul className="tree-view-child" hidden={!promotionStatus}>
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
                <Typography onClick={handlePromotionResult}>
                  <Add hidden={promotionResult} fontSize="small" />
                  <HorizontalRule hidden={!promotionResult} fontSize="small" />
                  <Folder className="folder" hidden={promotionResult} />
                  <FolderOpen className="folder" hidden={!promotionResult} />
                  Promotion Result
                </Typography>
                <ul className="tree-view-child" hidden={!promotionResult}>
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
          <li className="category__root mb-2">
            <Typography onClick={handleEvent}>
              <Add hidden={event} fontSize="small" />
              <HorizontalRule hidden={!event} fontSize="small" />
              <Folder className="folder" hidden={event} />
              <FolderOpen className="folder" hidden={!event} /> Event
            </Typography>
            <ul className="tree-view-child" hidden={!event}>
              <li>
                <Typography onClick={handleEventRuleMgt}>
                  <Add hidden={eventRuleMgt} fontSize="small" />
                  <HorizontalRule hidden={!eventRuleMgt} fontSize="small" />
                  <Folder className="folder" hidden={eventRuleMgt} />
                  <FolderOpen className="folder" hidden={!eventRuleMgt} />
                  Event Rule Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!eventRuleMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký quy tắc
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleEventRegistration}>
                  <Add hidden={eventRegistration} fontSize="small" />
                  <HorizontalRule
                    hidden={!eventRegistration}
                    fontSize="small"
                  />
                  <Folder className="folder" hidden={eventRegistration} />
                  <FolderOpen className="folder" hidden={!eventRegistration} />
                  Event Registration
                </Typography>
                <ul className="tree-view-child" hidden={!eventRegistration}>
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
                <Typography onClick={handleEventResult}>
                  <Add hidden={eventResult} fontSize="small" />
                  <HorizontalRule hidden={!eventResult} fontSize="small" />
                  <Folder className="folder" hidden={eventResult} />
                  <FolderOpen className="folder" hidden={!eventResult} />
                  Event Result
                </Typography>
                <ul className="tree-view-child" hidden={!eventResult}>
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
