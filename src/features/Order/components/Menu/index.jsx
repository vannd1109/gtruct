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

function Menu(props) {
  // open close menu
  const [closeMenu, setCloseMenu] = useState(false);

  // Order Mgt
  const [orderMgt, setOrderMgt] = useState(false);

  const [orderProcessing, setOrderProcessing] = useState(false);

  const [orderComplaintStatus, setOrderComplaintStatus] = useState(false);

  const [customerPerformance, setCustomerPerformance] = useState(false);

  // SR Mgt

  const [srMgt, setSRMgt] = useState(false);

  const [srProcessing, setSRProcessing] = useState(false);

  const [srStatus, setSRStatus] = useState(false);

  // OB Mgt

  const [obMgt, setOBMgt] = useState(false);

  const [obProcessing, setOBProcessing] = useState(false);

  const [obStatus, setOBStatus] = useState(false);

  // Customer Mgt
  const [customerMgt, setCustomerMgt] = useState(false);

  const [basicCustomerInfo, setBasicCustomerInfo] = useState(false);

  const [vipCard, setVipCard] = useState(false);

  const [sms, setSMS] = useState(false);

  // Vouchder Mgt
  const [voucherMgt, setVoucherMgt] = useState(false);

  const [voucherProcessing, setVoucherProcessing] = useState(false);

  const [voucherStatus, setVoucherStatus] = useState(false);

  // B2B Order Mgt
  const [b2bOrderMgt, setB2BOrderMgt] = useState(false);

  const [b2bOrderProcessing, setB2BOrderProcessing] = useState(false);

  const [b2bOrderStatus, setB2BOrderStatus] = useState(false);

  // Screen Pop Mgt
  const [screenPopMgt, setScreenPopMgt] = useState(false);

  const [agentIDMgt, setAgentIDMgt] = useState(false);

  const [extensionMgt, setExtensionMgt] = useState(false);

  // ----------------------------------handle--------------

  // Order Mgt

  const handleOrderMgt = (e) => {
    setOrderMgt(!orderMgt);
  };

  const handleOrderProcessing = (e) => {
    setOrderProcessing(!orderProcessing);
  };

  const handleOrderComplaintStatus = (e) => {
    setOrderComplaintStatus(!orderComplaintStatus);
  };

  const handleCustomerPerformance = (e) => {
    setCustomerPerformance(!customerPerformance);
  };

  // SR Mgt

  const handleSRMgt = (e) => {
    setSRMgt(!srMgt);
  };

  const handleSRProcessing = (e) => {
    setSRProcessing(!srProcessing);
  };

  const handleSRStatus = (e) => {
    setSRStatus(!srStatus);
  };

  // OB Mgt
  const handleOBMgt = (e) => {
    setOBMgt(!obMgt);
  };

  const handleOBProcessing = (e) => {
    setOBProcessing(!obProcessing);
  };

  const handleOBStatus = (e) => {
    setOBStatus(!obStatus);
  };

  // Customer Mgt
  const handleCustomerMgt = (e) => {
    setCustomerMgt(!customerMgt);
  };

  const handleBasicCustomerInfo = (e) => {
    setBasicCustomerInfo(!basicCustomerInfo);
  };

  const handleVipCard = (e) => {
    setVipCard(!vipCard);
  };

  const handleSMS = (e) => {
    setSMS(!sms);
  };

  // Voucher Mgt
  const handleVoucherMgt = (e) => {
    setVoucherMgt(!voucherMgt);
  };

  const handleVoucherProcessing = (e) => {
    setVoucherProcessing(!voucherProcessing);
  };

  const handleVoucherStatus = (e) => {
    setVoucherStatus(!voucherStatus);
  };

  // B2B Order Mgt
  const handleB2BOrderMgt = (e) => {
    setB2BOrderMgt(!b2bOrderMgt);
  };

  const handleB2BOrderProcessing = (e) => {
    setB2BOrderProcessing(!b2bOrderProcessing);
  };

  const handleB2BOrderStatus = (e) => {
    setB2BOrderStatus(!b2bOrderStatus);
  };

  // Screen Pop Mgt
  const handleScreenPopMgt = (e) => {
    setScreenPopMgt(!screenPopMgt);
  };

  const handleAgentIDMgt = (e) => {
    setAgentIDMgt(!agentIDMgt);
  };

  const handleExtensionMgt = (e) => {
    setExtensionMgt(!extensionMgt);
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
            <Typography onClick={handleOrderMgt}>
              <Add fontSize="small" hidden={orderMgt} />
              <HorizontalRule fontSize="small" hidden={!orderMgt} />
              <Folder className="folder" hidden={orderMgt} />
              <FolderOpen className="folder" hidden={!orderMgt} /> Order Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!orderMgt}>
              <li>
                <Typography onClick={handleOrderProcessing}>
                  <Add fontSize="small" hidden={orderProcessing} />
                  <HorizontalRule fontSize="small" hidden={!orderProcessing} />
                  <Folder className="folder" hidden={orderProcessing} />
                  <FolderOpen className="folder" hidden={!orderProcessing} />
                  Order Processing
                </Typography>
                <ul className="tree-view-child" hidden={!orderProcessing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ti???p nh???n ?????t h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ti???n h??nh ?????t h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ti???p nh???n khi???u n???i c???a kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Gi???i quy???t khi???u n???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ti???n h??nh thanh to??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra ng?????i nh???n h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??? l?? ????n h??ng COD
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Th??ng tin kh??ch h??ng s??? d???ng Credit Loan
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra tr???ng th??i phe duy???t Credit Loan
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??? l?? ????n h??ng COD_Fastdely
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOrderComplaintStatus}>
                  <Add fontSize="small" hidden={orderComplaintStatus} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!orderComplaintStatus}
                  />
                  <Folder className="folder" hidden={orderComplaintStatus} />
                  <FolderOpen
                    className="folder"
                    hidden={!orderComplaintStatus}
                  />
                  Order/Complaint Status
                </Typography>
                <ul className="tree-view-child" hidden={!orderComplaintStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ti???p nh???n ????n ?????t h??ng TMR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ti???p nh???n ?????t h??ng theo nh??m l??m vi???c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh kh??ch h??ng theo t???ng giai ??o???n ti???n h??nh ?????t
                      h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh chi ti???t v??? ????n ?????t h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh h???y ????n ?????t h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh kh??ch h??ng ?????t h??ng theo s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      L?? do khi???u n???i c???a kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh khi???u n???i c???a kh??ch h??ng theo t???ng s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra t??nh h??nh khi???u n???i c???a kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Th???ng k?? l?????ng s???n ph???m b??? l???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh tr???ng ?????t h??ng(T???ng c???ng) c???a TMR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh tr???ng ti???p nh???n ??????n ?????t h??ng(nh??m) c???a TMR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh h??ng t???n kho c???a ????n h??ng ?????t tr?????c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ti???p nh???n ?????t h??ng Direct Delivery
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Th???ng k?? l?? do h???y-tr??? h??ng theo th??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ti???p nh???n ?????t h??ng TMR - INSURANCE
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleCustomerPerformance}>
                  <Add fontSize="small" hidden={customerPerformance} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!customerPerformance}
                  />
                  <Folder className="folder" hidden={customerPerformance} />
                  <FolderOpen
                    className="folder"
                    hidden={!customerPerformance}
                  />
                  Customer Performance
                </Typography>
                <ul className="tree-view-child" hidden={!customerPerformance}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh th???c t??? ti???p nh???n t???ng kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ch???n l???a kh??ch h??ng theo ti??u chu???n ?????t h??ng/doanh thu
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleSRMgt}>
              <Add fontSize="small" hidden={srMgt} />
              <HorizontalRule fontSize="small" hidden={!srMgt} />
              <Folder className="folder" hidden={srMgt} />
              <FolderOpen className="folder" hidden={!srMgt} /> SR Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!srMgt}>
              <li>
                <Typography onClick={handleSRProcessing}>
                  <Add fontSize="small" hidden={srProcessing} />
                  <HorizontalRule fontSize="small" hidden={!srProcessing} />
                  <Folder className="folder" hidden={srProcessing} />
                  <FolderOpen className="folder" hidden={!srProcessing} />
                  SR Processing
                </Typography>
                <ul className="tree-view-child" hidden={!srProcessing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??? l?? SR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? nh??m l??m vi???c x??? l?? SR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra t??nh tr???ng nh??m l??m vi???c x??? l?? SR
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleSRStatus}>
                  <Add fontSize="small" hidden={srStatus} />
                  <HorizontalRule hidden={!srStatus} fontSize="small" />
                  <Folder className="folder" hidden={srStatus} />
                  <FolderOpen className="folder" hidden={!srStatus} />
                  SR Status
                </Typography>
                <ul className="tree-view-child" hidden={!srStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra SR ch??a ???????c x??? l??
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh chi ti???t ti???p nh???n SR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Th???i gian x??? l?? SR c???a t???ng c?? nh??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh t???ng b?????c x??? l?? SR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh t???ng h???p c???a t???ng ng?????i x??? l?? SR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh x??? l?? theo t???ng l?? do
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh gi???i quy???t SR c???a ?????i t??c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh gi???i quy???t SR theo t???ng ????n v???(M???i)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh x??? l?? SR theo t???ng s???n ph???m(T??? l???)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh gi???i quy???t SR theo t???ng ????n v???
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleOBMgt}>
              <Add hidden={obMgt} fontSize="small" />
              <HorizontalRule hidden={!obMgt} fontSize="small" />
              <Folder className="folder" hidden={obMgt} />
              <FolderOpen className="folder" hidden={!obMgt} /> OB Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!obMgt}>
              <li>
                <Typography onClick={handleOBProcessing}>
                  <Add hidden={obProcessing} fontSize="small" />
                  <HorizontalRule hidden={!obProcessing} fontSize="small" />
                  <Folder className="folder" hidden={obProcessing} />
                  <FolderOpen className="folder" hidden={!obProcessing} />
                  OB Processing
                </Typography>
                <ul className="tree-view-child" hidden={!obProcessing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      L???y d??? li???u OB
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph??n b??? nh??n vi??n x??? l??
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??? l?? OB
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??? l?? b???t bu???c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph??n b??? nh??n vien x??? l?? OB ?????t tr?????c
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOBStatus}>
                  <Add hidden={obStatus} fontSize="small" />
                  <HorizontalRule hidden={!obStatus} fontSize="small" />
                  <Folder className="folder" hidden={obStatus} />
                  <FolderOpen className="folder" hidden={!obStatus} />
                  OB Status
                </Typography>
                <ul className="tree-view-child" hidden={!obStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh x??? l?? OB
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh x??? l?? OB c???a kh??ch h??ng ???????c ch??? ?????nh
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh th???ng k?? x??? l?? OB
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleCustomerMgt}>
              <Add hidden={customerMgt} fontSize="small" />
              <HorizontalRule hidden={!customerMgt} fontSize="small" />
              <Folder className="folder" hidden={customerMgt} />
              <FolderOpen className="folder" hidden={!customerMgt} /> Customer
              Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!customerMgt}>
              <li>
                <Typography onClick={handleBasicCustomerInfo}>
                  <Add hidden={basicCustomerInfo} fontSize="small" />
                  <HorizontalRule
                    hidden={!basicCustomerInfo}
                    fontSize="small"
                  />
                  <Folder className="folder" hidden={basicCustomerInfo} />
                  <FolderOpen className="folder" hidden={!basicCustomerInfo} />
                  Basic Customer Info
                </Typography>
                <ul className="tree-view-child" hidden={!basicCustomerInfo}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? th??ng tin c?? b???n c???a kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? th??ng tin chi ti???t c???a kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra th??ng tin kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? th???/Ng??n h??ng c???a t???ng kh??ch h??ng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleVipCard}>
                  <Add hidden={vipCard} fontSize="small" />
                  <HorizontalRule hidden={!vipCard} fontSize="small" />
                  <Folder className="folder" hidden={vipCard} />
                  <FolderOpen className="folder" hidden={!vipCard} />
                  VIP Card
                </Typography>
                <ul className="tree-view-child" hidden={!vipCard}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???o d??? li???u kh??ch h??ng VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? kh??ch h??ng VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng nh???p ph??t h??nh th??? VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh tr???ng ph??t h??nh th??? VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh tr???ng ?????t h??ng c???a kh??ch VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? khuy???n m??i kh??ch h??ng VIP
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleSMS}>
                  <Add hidden={sms} fontSize="small" />
                  <HorizontalRule hidden={!sms} fontSize="small" />
                  <Folder className="folder" hidden={sms} />
                  <FolderOpen className="folder" hidden={!sms} />
                  SMS
                </Typography>
                <ul className="tree-view-child" hidden={!sms}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      G???i tin nh???n v??? s???n ph???m m???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      G???i tin nh???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      H???y g???i tin nh???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      S??? l?????ng tin nh???n ???????c g???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh SMS ?????t h??ng c???a t???ng kh??ch h??ng
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleVoucherMgt}>
              <Add hidden={voucherMgt} fontSize="small" />
              <HorizontalRule hidden={!voucherMgt} fontSize="small" />
              <Folder className="folder" hidden={voucherMgt} />
              <FolderOpen className="folder" hidden={!voucherMgt} /> Voucher Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!voucherMgt}>
              <li>
                <Typography onClick={handleVoucherProcessing}>
                  <Add hidden={voucherProcessing} fontSize="small" />
                  <HorizontalRule
                    hidden={!voucherProcessing}
                    fontSize="small"
                  />
                  <Folder className="folder" hidden={voucherProcessing} />
                  <FolderOpen className="folder" hidden={!voucherProcessing} />
                  Voucher Processing
                </Typography>
                <ul className="tree-view-child" hidden={!voucherProcessing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ti???p nh???n ????ng k?? ?????t h??ng b???ng phi???u mua h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      H???y b??? ?????t h??ng phi???u mua h??ng t??ch l??y ??i???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra vi???c ?????t phi???u mua h??ng t??ch l??y ??i???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh h???y b??? phi???u mua h??ng t??ch l??y ??i???m
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleVoucherStatus}>
                  <Add hidden={voucherStatus} fontSize="small" />
                  <HorizontalRule hidden={!voucherStatus} fontSize="small" />
                  <Folder className="folder" hidden={voucherStatus} />
                  <FolderOpen className="folder" hidden={!voucherStatus} />
                  Voucher Status
                </Typography>
                <ul className="tree-view-child" hidden={!voucherStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ti???p nh???n ?????t h??ng phi???u mua h??ng
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleB2BOrderMgt}>
              <Add hidden={b2bOrderMgt} fontSize="small" />
              <HorizontalRule hidden={!b2bOrderMgt} fontSize="small" />
              <Folder className="folder" hidden={b2bOrderMgt} />
              <FolderOpen className="folder" hidden={!b2bOrderMgt} /> B2B Order
              Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!b2bOrderMgt}>
              <li>
                <Typography onClick={handleB2BOrderProcessing}>
                  <Add hidden={b2bOrderProcessing} fontSize="small" />
                  <HorizontalRule
                    hidden={b2bOrderProcessing}
                    fontSize="small"
                  />
                  <Folder className="folder" hidden={b2bOrderProcessing} />
                  <FolderOpen className="folder" hidden={!b2bOrderProcessing} />
                  B2B Order Processing
                </Typography>
                <ul className="tree-view-child" hidden={!b2bOrderProcessing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B-????ng k?? h???p ?????ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B-Ph?? duy???t h???p ?????ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B-In h???p ?????ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B-Ti???p nh???n ?????t h??ng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleB2BOrderStatus}>
                  <Add hidden={b2bOrderStatus} fontSize="small" />
                  <HorizontalRule hidden={!b2bOrderStatus} fontSize="small" />
                  <Folder className="folder" hidden={b2bOrderStatus} />
                  <FolderOpen className="folder" hidden={!b2bOrderStatus} />
                  B2B Order Status
                </Typography>
                <ul className="tree-view-child" hidden={!b2bOrderStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B-T??nh h??nh ?????t h??ng
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleScreenPopMgt}>
              <Add hidden={screenPopMgt} fontSize="small" />
              <HorizontalRule hidden={!screenPopMgt} fontSize="small" />
              <Folder className="folder" hidden={screenPopMgt} />
              <FolderOpen className="folder" hidden={!screenPopMgt} />
              ScreenPop Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!screenPopMgt}>
              <li>
                <Typography onClick={handleAgentIDMgt}>
                  <Add hidden={agentIDMgt} fontSize="small" />
                  <HorizontalRule hidden={!agentIDMgt} fontSize="small" />
                  <Folder className="folder" hidden={agentIDMgt} />
                  <FolderOpen className="folder" hidden={!agentIDMgt} />
                  Agent ID Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!agentIDMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Perinfo Management (Only employee of CC Dept)
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleExtensionMgt}>
                  <Add hidden={extensionMgt} fontSize="small" />
                  <HorizontalRule hidden={!extensionMgt} fontSize="small" />
                  <Folder className="folder" hidden={extensionMgt} />
                  <FolderOpen className="folder" hidden={!extensionMgt} />
                  Extension Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!extensionMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Extension Management
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
