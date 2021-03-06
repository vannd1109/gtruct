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
      setTitle("M?? s??? ph??n lo???i s???n ph???m");
    }
  };

  const handleProductDescripton = () => {
    if (handleSetTitle) {
      handleSetTitle();
      setTitle("????ng nh???p m?? t??? s???n ph???m");
    }
  };

  const handleProductBrand = () => {
    if (handleSetTitle) {
      handleSetTitle();
      setTitle("????ng nh???p nh??n hi???u");
    }
  };
  const handleProductManufacturer = () => {
    if (handleSetTitle) {
      handleSetTitle();
      setTitle("????ng nh???p h??ng s???n xu???t");
    }
  };

  return (
    <>
      <div className="close__menu" onClick={handleOpenMenu} hidden={!closeMenu}>
        <Tooltip title="Hi???n danh m???c">
          <Dehaze />
        </Tooltip>
      </div>
      <Col sm={3} className="tree-view-com" hidden={closeMenu}>
        <div className="tree-view-com-icon" onClick={handleCloseMenu}>
          <Tooltip title="???n danh m???c">
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
                      M?? s??? ph??n lo???i s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      className="document-title"
                      onClick={handleProductDescripton}
                    >
                      <Description className="file" />
                      ????ng nh???p m?? t??? s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      className="document-title"
                      onClick={handleProductBrand}
                    >
                      <Description className="file" />
                      ????ng nh???p nh??n hi???u
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      className="document-title"
                      onClick={handleProductManufacturer}
                    >
                      <Description className="file" />
                      ????ng nh???p h??ng s???n xu???t
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
                      ????ng nh???p s???n ph???m ?????i di???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? th??ng tin Key c???a Item
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? s???n ph???m th??ng th?????ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? th??ng tin s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? th??ng s??? k??? thu???t c???a s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu?? tr??nh thay ?????i th??ng s??? k??? thu???t c???a s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? ph?? duy???t s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      S???a ?????i th??ng tin ph??n t??ch s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? x??? l?? s???n ph???m ???? ng???ng b??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? s???n ph???m nh?? cung c???p
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
                      ????ng nh???p v???t li???u ????ng g??i
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
                      T??nh h??nh ????ng k?? s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh s???n ph???m kh??ng c??n t???n kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh b??n s???n ph???m m???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh tr???ng h??ng t???n
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
                      H??ng khuy???n m??i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ch????ng tr??nh khuy???n m??i c?? ??i???u ki???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph?? duy???t ch????ng tr??nh khuy???n m??i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Khuy???n m??i b???c th??m tr??ng th?????ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng nh???p th??ng tin ng?????i tr??ng th?????ng
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
                      Ki???m tra to??n b??? ch????ng tr??nh khuy???n m??i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ch????ng tr??nh khuy???n m??i c?? ??i???u ki???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Y??u c???u khuy???n m??i b???c th??m theo t???ng kh??ch h??ng
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
                      K???t qu??? ch????ng tr??nh khuy???n m??i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh chi ph?? ch????ng tr??nh khuy???n m??i theo t???ng nh??
                      cung c???p
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
                      ????ng k?? quy t???c
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
                      ????ng k?? s??? ki???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n s??? ki???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n kh??ch h??ng ???????c h?????ng s??? ki???n
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
                      T??nh h??nh kh??ch h??ng ???????c h?????ng s??? ki???n
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
