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

  // Prepay Payment
  const [prepayPayment, setPrepayPayment] = useState(false);

  const [cms, setCMS] = useState(false);

  const [card, setCard] = useState(false);

  const [scjPoint, setSCJPoint] = useState(false);

  const [deposit, setDeposit] = useState(false);

  const [creditLoan, setCreditLoan] = useState(false);

  const [paymentOnline, setPaymentOnline] = useState(false);

  // Postpay Payment
  const [postpayPayment, setPostpayPayment] = useState(false);

  const [cod, setCOD] = useState(false);

  const [statusByPostpay, setStatusByPostpay] = useState(false);

  // Refund
  const [refund, setRefund] = useState(false);

  const [refundProc, setRefundProc] = useState(false);

  const [statusByRefund, setStatusByRefund] = useState(false);

  // Other Anal
  const [accountOtherAnal, setAccountOtherAnal] = useState(false);

  const [saleAndPaymentAnal, setSaleAndPaymentAnal] = useState(false);

  const [otherAnal, setOtherAnal] = useState(false);

  // Receipt
  const [receipt, setReceipt] = useState(false);

  const [receiptsIssued, setReceiptsIssued] = useState(false);

  const [customerDMIssued, setCustomerDMIssued] = useState(false);

  const [individualIncomeTax, setIndividualIncomeTax] = useState(false);

  // Vendor Mgt
  const [accountVendorMgt, setAccountVendorMgt] = useState(false);

  const [vendorMgt, setVendorMgt] = useState(false);

  const [basicPaymentInfo, setBasicPaymentInfo] = useState(false);

  const [basicInfoStatus, setBasicInfoStatus] = useState(false);

  // Vendor Settlement
  const [vendorSettlement, setVendorSettlement] = useState(false);

  const [billPayment, setBillPayment] = useState(false);

  const [itemSupplyPriceInquire, setItemSupplyPriceInquire] = useState(false);

  const [pinanceIF, setPinanceIF] = useState(false);

  // Voucher Mgt
  const [voucherMgt, setVoucherMgt] = useState(false);

  const [voucherProcessing, setVoucherProcessing] = useState(false);

  const [voucherStatus, setVoucherStatus] = useState(false);

  // D/C Coupon
  const [dcCoupon, setDCCoupon] = useState(false);

  const [dcCouponMgt, setDCCouponMgt] = useState(false);

  const [dcCouponStatus, setDCCouponStatus] = useState(false);

  // B2B Mgt
  const [b2bMgt, setB2BMgt] = useState(false);

  const [b2bProcessing, setB2BProcessing] = useState(false);

  const [b2bStatus, setB2BStatus] = useState(false);

  // MotorBike Mgt
  const [motorBikeMgt, setMotorBikeMgt] = useState(false);

  const [motorBikeProcessing, setMotorBikeProcessing] = useState(false);

  // ----------------------------------handle-----------------

  // Prepay Payment
  const handlePrepayPayment = (e) => {
    setPrepayPayment(!prepayPayment);
  };

  const handleCMS = (e) => {
    setCMS(!cms);
  };

  const handleCard = (e) => {
    setCard(!card);
  };

  const handleSCJPoint = (e) => {
    setSCJPoint(!scjPoint);
  };

  const handleDeposit = (e) => {
    setDeposit(!deposit);
  };

  const handleCreditLoan = (e) => {
    setCreditLoan(!creditLoan);
  };

  const handlePaymentOnline = (e) => {
    setPaymentOnline(!paymentOnline);
  };

  // Postpay Payment
  const handlePostpayPayment = (e) => {
    setPostpayPayment(!postpayPayment);
  };

  const handleCOD = (e) => {
    setCOD(!cod);
  };

  const handleStatusByPostpay = (e) => {
    setStatusByPostpay(!statusByPostpay);
  };

  // Refund
  const handleRefund = (e) => {
    setRefund(!refund);
  };

  const handleRefundProc = (e) => {
    setRefundProc(!refundProc);
  };

  const handleStatusByRefund = (e) => {
    setStatusByRefund(!statusByRefund);
  };

  // Other Anal
  const handleAccountOtherAnal = (e) => {
    setAccountOtherAnal(!accountOtherAnal);
  };

  const handleSaleAndPaymentAnal = (e) => {
    setSaleAndPaymentAnal(!saleAndPaymentAnal);
  };

  const handleOtherAnal = (e) => {
    setOtherAnal(!otherAnal);
  };

  // Receipt
  const handleReceipt = (e) => {
    setReceipt(!receipt);
  };

  const handleReceiptsIssued = (e) => {
    setReceiptsIssued(!receiptsIssued);
  };

  const handleCustomerDMIssued = (e) => {
    setCustomerDMIssued(!customerDMIssued);
  };

  const handleIndividualIncomeTax = (e) => {
    setIndividualIncomeTax(!individualIncomeTax);
  };

  // Vendor Mgt
  const handleAccountVendorMgt = (e) => {
    setAccountVendorMgt(!accountVendorMgt);
  };

  const handleVendorMgt = (e) => {
    setVendorMgt(!vendorMgt);
  };

  const handleBasicPaymentInfo = (e) => {
    setBasicPaymentInfo(!basicPaymentInfo);
  };

  const handleBasicInfoStatus = (e) => {
    setBasicInfoStatus(!basicInfoStatus);
  };

  // Vendor Settlement
  const handleVendorSettlement = (e) => {
    setVendorSettlement(!vendorSettlement);
  };

  const handleBillPayment = (e) => {
    setBillPayment(!billPayment);
  };

  const handleItemSupplyPriceInquire = (e) => {
    setItemSupplyPriceInquire(!itemSupplyPriceInquire);
  };

  const handlePinanceIF = (e) => {
    setPinanceIF(!pinanceIF);
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

  // D/C Coupon
  const handleDCCoupon = (e) => {
    setDCCoupon(!dcCoupon);
  };

  const handleDCCouponMgt = (e) => {
    setDCCouponMgt(!dcCouponMgt);
  };

  const handleDCCouponStatus = (e) => {
    setDCCouponStatus(!dcCouponStatus);
  };

  // B2B Mgt
  const handleB2BMgt = (e) => {
    setB2BMgt(!b2bMgt);
  };

  const handleB2BProcessing = (e) => {
    setB2BProcessing(!b2bProcessing);
  };

  const handleB2BStatus = (e) => {
    setB2BStatus(!b2bStatus);
  };

  // MotorBike Mgt
  const handleMotorBikeMgt = (e) => {
    setMotorBikeMgt(!motorBikeMgt);
  };

  const handleMotorBikeProcessing = (e) => {
    setMotorBikeProcessing(!motorBikeProcessing);
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
          <li>
            <Typography onClick={handlePrepayPayment}>
              <Add fontSize="small" hidden={prepayPayment} />
              <HorizontalRule fontSize="small" hidden={!prepayPayment} />
              <Folder className="folder" hidden={prepayPayment} />
              <FolderOpen className="folder" hidden={!prepayPayment} />
              Prepay Payment
            </Typography>
            <ul className="tree-view-child" hidden={!prepayPayment}>
              <li>
                <Typography onClick={handleCMS}>
                  <Add fontSize="small" hidden={cms} />
                  <HorizontalRule fontSize="small" hidden={!cms} />
                  <Folder className="folder" hidden={cms} />
                  <FolderOpen className="folder" hidden={!cms} />
                  CMS
                </Typography>
                <ul className="tree-view-child" hidden={!cms}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? thanh to??n b???ng ti???n m???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Gi???i quy???t thanh to??n b???ng ti???n m???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??? l?? h???y b??? tr?????ng h???p thanh to??n b???ng ti???n m???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      H???y b??? t???t c??? tr?????ng h???p ch??a chuy???n ti???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      S??? tr?????ng h???p ch??a ???????c thanh to??n b???ng ti???n m???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Gi???i quy???t c??c tr?????ng h???p thanh to??n b???ng ti???n m???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      S??? tr?????ng h???p h???y thanh to??n b???ng ti???n m???t
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleCard}>
                  <Add fontSize="small" hidden={card} />
                  <HorizontalRule fontSize="small" hidden={!card} />
                  <Folder className="folder" hidden={card} />
                  <FolderOpen className="folder" hidden={!card} />
                  Card
                </Typography>
                <ul className="tree-view-child" hidden={!card}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ho??n t???t vi???c thanh to??n b???ng th???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      L???p t??i li???u ????ng k?? th???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? t??i li???u y??u c???u thanh to??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Y??u c???u h???y b??? th???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tr?????ng h???p ?????t h??ng tr??? g??p b???ng th???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Th???ng k?? thanh to??n b???ng th???
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleSCJPoint}>
                  <Add fontSize="small" hidden={scjPoint} />
                  <HorizontalRule fontSize="small" hidden={!scjPoint} />
                  <Folder className="folder" hidden={scjPoint} />
                  <FolderOpen className="folder" hidden={!scjPoint} />
                  SCJ Point
                </Typography>
                <ul className="tree-view-child" hidden={!scjPoint}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? ??i???m t??ch l??y
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ??i???m t??ch l??y c???a t???ng kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh t???ng c??c d???ch v??? c???ng ??i???m kh??c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      K??? h???n s??? d???ng ??i???m t??ch l??y
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh s??? d???ng ??i???m t??ch l??y c???a nh??n vi??n c??ng ty
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???ng s??? ??i???m c???ng ???????c t???ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???ng s??? ??i???m t??ch l??y ???? d??ng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleDeposit}>
                  <Add fontSize="small" hidden={deposit} />
                  <HorizontalRule fontSize="small" hidden={!deposit} />
                  <Folder className="folder" hidden={deposit} />
                  <FolderOpen className="folder" hidden={!deposit} />
                  Deposit
                </Typography>
                <ul className="tree-view-child" hidden={!deposit}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? s??? ti???n ?????t c???c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh c???p ti???n ?????t c???c theo ng??y
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh s??? d???ng ti???n ?????t c???c theo ng??y
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ti???n ?????t c???c c???a t???ng kh??ch h??ng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleCreditLoan}>
                  <Add fontSize="small" hidden={creditLoan} />
                  <HorizontalRule fontSize="small" hidden={!creditLoan} />
                  <Folder className="folder" hidden={creditLoan} />
                  <FolderOpen className="folder" hidden={!creditLoan} />
                  CreditLoan
                </Typography>
                <ul className="tree-view-child" hidden={!creditLoan}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??? l?? ch???p nh???n Creadit Loan
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Y??u c???u l??m gi???y t??? Creadit Loan
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng nh???p gi???y t??? g???i ti???n Creadit Loan
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Th???ng k?? g???i ti???n Credit Loan
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handlePaymentOnline}>
                  <Add fontSize="small" hidden={paymentOnline} />
                  <HorizontalRule fontSize="small" hidden={!paymentOnline} />
                  <Folder className="folder" hidden={paymentOnline} />
                  <FolderOpen className="folder" hidden={!paymentOnline} />
                  Payment Online
                </Typography>
                <ul className="tree-view-child" hidden={!paymentOnline}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n thu ti???n Payment Online
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ho??n tr??? ti???n cho Payment Online
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n thu ti???n tr??? g??p (Payment Online)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tr?????ng h???p ?????t h??ng tr??? g??p b???ng th??? (Payment Online)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Th???ng k?? thanh to??n Payment Online
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Installment Payment Online
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handlePostpayPayment}>
              <Add fontSize="small" hidden={postpayPayment} />
              <HorizontalRule fontSize="small" hidden={!postpayPayment} />
              <Folder className="folder" hidden={postpayPayment} />
              <FolderOpen className="folder" hidden={!postpayPayment} />
              Postpay Payment
            </Typography>
            <ul className="tree-view-child" hidden={!postpayPayment}>
              <li>
                <Typography onClick={handleCOD}>
                  <Add fontSize="small" hidden={cod} />
                  <HorizontalRule fontSize="small" hidden={!cod} />
                  <Folder className="folder" hidden={cod} />
                  <FolderOpen className="folder" hidden={!cod} />
                  COD
                </Typography>
                <ul className="tree-view-child" hidden={!cod}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Gi???i quy???t thanh to??n COD(M???i)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ???? nh???n ???????c t??i li???u thanh to??n theo c??ng ty
                      giao h??ng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleStatusByPostpay}>
                  <Add fontSize="small" hidden={statusByPostpay} />
                  <HorizontalRule fontSize="small" hidden={!statusByPostpay} />
                  <Folder className="folder" hidden={statusByPostpay} />
                  <FolderOpen className="folder" hidden={!statusByPostpay} />
                  Status By Postpay
                </Typography>
                <ul className="tree-view-child" hidden={!statusByPostpay}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ch??a thanh to??n tr??? sau
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh thanh to??n tr??? sau
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh xu???t kho nh???ng s???n ph???m ???????c thanh to??n tr??? sau
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ch??a thanh to??n tr??? sau
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh d??? ki???n thanh to??n COD
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleRefund}>
              <Add fontSize="small" hidden={refund} />
              <HorizontalRule fontSize="small" hidden={!refund} />
              <Folder className="folder" hidden={refund} />
              <FolderOpen className="folder" hidden={!refund} />
              Refund
            </Typography>
            <ul className="tree-view-child" hidden={!refund}>
              <li>
                <Typography onClick={handleRefundProc}>
                  <Add fontSize="small" hidden={refundProc} />
                  <HorizontalRule fontSize="small" hidden={!refundProc} />
                  <Folder className="folder" hidden={refundProc} />
                  <FolderOpen className="folder" hidden={!refundProc} />
                  Refund Proc
                </Typography>
                <ul className="tree-view-child" hidden={!refundProc}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tr??? l???i ti???n m???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Gi???i quy???t vi???c tr??? l???i ti???n sau khi x??c nh???n thu h???i h??ng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleStatusByRefund}>
                  <Add fontSize="small" hidden={statusByRefund} />
                  <HorizontalRule fontSize="small" hidden={!statusByRefund} />
                  <Folder className="folder" hidden={statusByRefund} />
                  <FolderOpen className="folder" hidden={!statusByRefund} />
                  Status By Refund
                </Typography>
                <ul className="tree-view-child" hidden={!statusByRefund}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      K???t qu??? vi???c tr??? l???i ti???n
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleAccountOtherAnal}>
              <Add fontSize="small" hidden={accountOtherAnal} />
              <HorizontalRule fontSize="small" hidden={!accountOtherAnal} />
              <Folder className="folder" hidden={accountOtherAnal} />
              <FolderOpen className="folder" hidden={!accountOtherAnal} />
              Other Anal
            </Typography>
            <ul className="tree-view-child" hidden={!accountOtherAnal}>
              <li>
                <Typography onClick={handleSaleAndPaymentAnal}>
                  <Add fontSize="small" hidden={saleAndPaymentAnal} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!saleAndPaymentAnal}
                  />
                  <Folder className="folder" hidden={saleAndPaymentAnal} />
                  <FolderOpen className="folder" hidden={!saleAndPaymentAnal} />
                  Sale And Payment Anal
                </Typography>
                <ul className="tree-view-child" hidden={!saleAndPaymentAnal}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B??o c??o doanh thu v?? thanh to??n b??n h??ng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOtherAnal}>
                  <Add fontSize="small" hidden={otherAnal} />
                  <HorizontalRule fontSize="small" hidden={!otherAnal} />
                  <Folder className="folder" hidden={otherAnal} />
                  <FolderOpen className="folder" hidden={!otherAnal} />
                  Other Anal
                </Typography>
                <ul className="tree-view-child" hidden={!otherAnal}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ????ng k?? thanh to??n theo t???ng lo???i thanh to??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh x??c nh???n/thanh to??n theo t???ng lo???i thanh to??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Monthly dilivery cost report by companies
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Monthly dilivery cost report by item
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleReceipt}>
              <Add fontSize="small" hidden={receipt} />
              <HorizontalRule fontSize="small" hidden={!receipt} />
              <Folder className="folder" hidden={receipt} />
              <FolderOpen className="folder" hidden={!receipt} />
              Receipt
            </Typography>
            <ul className="tree-view-child" hidden={!receipt}>
              <li>
                <Typography onClick={handleReceiptsIssued}>
                  <Add fontSize="small" hidden={receiptsIssued} />
                  <HorizontalRule fontSize="small" hidden={!receiptsIssued} />
                  <Folder className="folder" hidden={receiptsIssued} />
                  <FolderOpen className="folder" hidden={!receiptsIssued} />
                  Receipts Issued
                </Typography>
                <ul className="tree-view-child" hidden={!receiptsIssued}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? nh???n bi??n lai
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In bi??n lai cho kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In bi??n lai c???a t???ng v???n ????n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In DM ?????a ch??? c???a kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In bi??n lai c???a t???ng v???n ????n H????T
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleCustomerDMIssued}>
                  <Add fontSize="small" hidden={customerDMIssued} />
                  <HorizontalRule fontSize="small" hidden={!customerDMIssued} />
                  <Folder className="folder" hidden={customerDMIssued} />
                  <FolderOpen className="folder" hidden={!customerDMIssued} />
                  Customer DM Issued
                </Typography>
                <ul className="tree-view-child" hidden={!customerDMIssued}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ????ng k?? nh???n bi??n lai
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh in bi??n lai
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleIndividualIncomeTax}>
                  <Add fontSize="small" hidden={individualIncomeTax} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!individualIncomeTax}
                  />
                  <Folder className="folder" hidden={individualIncomeTax} />
                  <FolderOpen
                    className="folder"
                    hidden={!individualIncomeTax}
                  />
                  Individual Income Tax
                </Typography>
                <ul className="tree-view-child" hidden={!individualIncomeTax}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Gi???i quy???t vi???c chuy???n ti???n thu??? thu nh???p c?? nh??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh chuy???n ti???n thu??? chu nh???p c?? nh??n
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleAccountVendorMgt}>
              <Add fontSize="small" hidden={accountVendorMgt} />
              <HorizontalRule fontSize="small" hidden={!accountVendorMgt} />
              <Folder className="folder" hidden={accountVendorMgt} />
              <FolderOpen className="folder" hidden={!accountVendorMgt} />
              Vendor Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!accountVendorMgt}>
              <li>
                <Typography onClick={handleVendorMgt}>
                  <Add fontSize="small" hidden={vendorMgt} />
                  <HorizontalRule fontSize="small" hidden={!vendorMgt} />
                  <Folder className="folder" hidden={vendorMgt} />
                  <FolderOpen className="folder" hidden={!vendorMgt} />
                  Vendor Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!vendorMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? c??ng ty k?? g???i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? m?? s??? b???o l??u/s??? kh???u t???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? ph??n lo???i c??ng ty k?? g???i theo th??ng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleBasicPaymentInfo}>
                  <Add fontSize="small" hidden={basicPaymentInfo} />
                  <HorizontalRule fontSize="small" hidden={!basicPaymentInfo} />
                  <Folder className="folder" hidden={basicPaymentInfo} />
                  <FolderOpen className="folder" hidden={!basicPaymentInfo} />
                  Basic Payment Info
                </Typography>
                <ul className="tree-view-child" hidden={!basicPaymentInfo}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? m?? s??? ng??n h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? t??i kho???n chuy???n ti???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? m?? s??? c??ng ty th???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? m?? s??? th???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? c??ng ty cho vay t??n d???ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? ti??u chu???n vay t??n d???ng Rebate
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleBasicInfoStatus}>
                  <Add fontSize="small" hidden={basicInfoStatus} />
                  <HorizontalRule fontSize="small" hidden={!basicInfoStatus} />
                  <Folder className="folder" hidden={basicInfoStatus} />
                  <FolderOpen className="folder" hidden={!basicInfoStatus} />
                  Basic Info Status
                </Typography>
                <ul className="tree-view-child" hidden={!basicInfoStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ????ng k?? c??ng ty k?? g???i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ng??n h??ng c???a c??ng ty k?? g???i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In DM c???a c??ng ty k?? g???i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra ti??u chu???n quy???t to??n c???a c??ng ty k?? g???i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh h??ng t???n c???a m???i nh?? cung c???p nh???p h??ng nguy??n
                      t???c
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleVendorSettlement}>
              <Add fontSize="small" hidden={vendorSettlement} />
              <HorizontalRule fontSize="small" hidden={!vendorSettlement} />
              <Folder className="folder" hidden={vendorSettlement} />
              <FolderOpen className="folder" hidden={!vendorSettlement} />
              Vendor Settlement
            </Typography>
            <ul className="tree-view-child" hidden={!vendorSettlement}>
              <li>
                <Typography onClick={handleBillPayment}>
                  <Add fontSize="small" hidden={billPayment} />
                  <HorizontalRule fontSize="small" hidden={!billPayment} />
                  <Folder className="folder" hidden={billPayment} />
                  <FolderOpen className="folder" hidden={!billPayment} />
                  Bill Payment
                </Typography>
                <ul className="tree-view-child" hidden={!billPayment}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ti???n h??nh thanh to??n theo ti??u chu???n ph??t sinh
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n h??a ????n thanh to??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? h??a ????n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ti???n h??nh chi tr??? theo ti??u chu???n thanh to??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n vi???c chi tr???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? h??a ????n(??i???u ch???nh h??ng t???n kho)
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleItemSupplyPriceInquire}>
                  <Add fontSize="small" hidden={itemSupplyPriceInquire} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!itemSupplyPriceInquire}
                  />
                  <Folder className="folder" hidden={itemSupplyPriceInquire} />
                  <FolderOpen
                    className="folder"
                    hidden={!itemSupplyPriceInquire}
                  />
                  Item Supply Price Inquire
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={!itemSupplyPriceInquire}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh chi tr??? c???a c??c c??ng k?? g???i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh chi tr???
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handlePinanceIF}>
                  <Add fontSize="small" hidden={pinanceIF} />
                  <HorizontalRule fontSize="small" hidden={!pinanceIF} />
                  <Folder className="folder" hidden={pinanceIF} />
                  <FolderOpen className="folder" hidden={!pinanceIF} />
                  Pinance I/F
                </Typography>
                <ul className="tree-view-child" hidden={!pinanceIF}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Sales data(Daily)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Vendor payment(Monthly)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Payment method closing(Daily)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      SCJ point payment closing(Monthly)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Accounting stock sheet
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      COD sales status(Monthly)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Y??u c???u nh???p xu???t t???i kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh c??ng n??? nh?? cung c???p theo h??a ????n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh chi ti???t c??ng n??? nh?? cung c???p
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleVoucherMgt}>
              <Add fontSize="small" hidden={voucherMgt} />
              <HorizontalRule fontSize="small" hidden={!voucherMgt} />
              <Folder className="folder" hidden={voucherMgt} />
              <FolderOpen className="folder" hidden={!voucherMgt} />
              Voucher Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!voucherMgt}>
              <li>
                <Typography onClick={handleVoucherProcessing}>
                  <Add fontSize="small" hidden={voucherProcessing} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!voucherProcessing}
                  />
                  <Folder className="folder" hidden={voucherProcessing} />
                  <FolderOpen className="folder" hidden={!voucherProcessing} />
                  Voucher Processing
                </Typography>
                <ul className="tree-view-child" hidden={!voucherProcessing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? th??ng tin phi???u mua h??ng t??ch l??y ??i???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Y??u c???u ki???m tra ?????i t?????ng nh???p kho phi???u mua h??ng t??ch
                      l??y ??i???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Nh???p phi???u mua h??ng t??ch l??y ??i???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B??? phi???u mua h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph?? duy???t ph??t h??nh phi???u mua h??ng t??ch l??y ??i???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??? l?? vi???c xu???t phi???u mua h??ng t??ch l??y ??i???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ph?? duy???t phi???u mua h??ng t??ch l??y ??i???m
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleVoucherStatus}>
                  <Add fontSize="small" hidden={voucherStatus} />
                  <HorizontalRule fontSize="small" hidden={!voucherStatus} />
                  <Folder className="folder" hidden={voucherStatus} />
                  <FolderOpen className="folder" hidden={!voucherStatus} />
                  Voucher Status
                </Typography>
                <ul className="tree-view-child" hidden={!voucherStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ti???n h??nh phi???u mua h??ng t??ch l??y ??i???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh s??? d???ng phi???u mua h??ng t??ch l??y ??i???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh xu???t nh???p kho phi???u mua h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? phi???u mua h??ng t??ch l??y ??i???m
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleDCCoupon}>
              <Add fontSize="small" hidden={dcCoupon} />
              <HorizontalRule fontSize="small" hidden={!dcCoupon} />
              <Folder className="folder" hidden={dcCoupon} />
              <FolderOpen className="folder" hidden={!dcCoupon} />
              D/C Coupon
            </Typography>
            <ul className="tree-view-child" hidden={!dcCoupon}>
              <li>
                <Typography onClick={handleDCCouponMgt}>
                  <Add fontSize="small" hidden={dcCouponMgt} />
                  <HorizontalRule fontSize="small" hidden={!dcCouponMgt} />
                  <Folder className="folder" hidden={dcCouponMgt} />
                  <FolderOpen className="folder" hidden={!dcCouponMgt} />
                  D/C Coupon Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!dcCouponMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? th??ng tin phi???u gi???m gi??
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph?? duy???t phi???u gi???m gi??
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph??t h??nh phi???u gi???m gi?? (ri??ng l???)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph??t h??nh phi???u gi???m gi?? (?????ng lo???t)
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleDCCouponStatus}>
                  <Add fontSize="small" hidden={dcCouponStatus} />
                  <HorizontalRule fontSize="small" hidden={!dcCouponStatus} />
                  <Folder className="folder" hidden={dcCouponStatus} />
                  <FolderOpen className="folder" hidden={!dcCouponStatus} />
                  D/C Coupon Status
                </Typography>
                <ul className="tree-view-child" hidden={!dcCouponStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh s???u d???ng phi???u gi???m gi??
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ph??t h??nh phi???u gi???m gi??
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra t??nh h??nh phi???u gi???m gi??
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleB2BMgt}>
              <Add fontSize="small" hidden={b2bMgt} />
              <HorizontalRule fontSize="small" hidden={!b2bMgt} />
              <Folder className="folder" hidden={b2bMgt} />
              <FolderOpen className="folder" hidden={!b2bMgt} />
              B2B Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!b2bMgt}>
              <li>
                <Typography onClick={handleB2BProcessing}>
                  <Add fontSize="small" hidden={b2bProcessing} />
                  <HorizontalRule fontSize="small" hidden={!b2bProcessing} />
                  <Folder className="folder" hidden={b2bProcessing} />
                  <FolderOpen className="folder" hidden={!b2bProcessing} />
                  B2B Processing
                </Typography>
                <ul className="tree-view-child" hidden={!b2bProcessing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - ????ng k?? th??ng tin kh??ch h??ng B2B
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - ????ng k?? thanh to??n b???ng ti???n m???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Gi???i quy???t thanh to??n CMS ?????t 1
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Gi???i quy???t thanh to??n CMS ?????t 2
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - X??? l?? h???y b??? tr?????ng h???p thanh to??n b???ng ti???n m???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - H???y b??? t???t c??? tr?????ng h???p ch??a chuy???n ti???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - S??? tr?????ng h???p ch??a ???????c x??c nh???n thanh to??n b???ng
                      ti???n m???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Gi???i quy???t c??c tr?????ng h???p thanh to??n b???ng ti???n m???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - S??? tr?????ng h???p h???y thanh to??n b???ng ti???n m???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Gi???i quy???t thanh to??n COD (M???i)
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleB2BStatus}>
                  <Add fontSize="small" hidden={b2bStatus} />
                  <HorizontalRule fontSize="small" hidden={!b2bStatus} />
                  <Folder className="folder" hidden={b2bStatus} />
                  <FolderOpen className="folder" hidden={!b2bStatus} />
                  B2B Status
                </Typography>
                <ul className="tree-view-child" hidden={!b2bStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - T??nh h??nh c??ng n???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - T??nh h??nh thanh to??n theo th??ng
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleMotorBikeMgt}>
              <Add fontSize="small" hidden={motorBikeMgt} />
              <HorizontalRule fontSize="small" hidden={!motorBikeMgt} />
              <Folder className="folder" hidden={motorBikeMgt} />
              <FolderOpen className="folder" hidden={!motorBikeMgt} />
              MotorBike Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!motorBikeMgt}>
              <li>
                <Typography onClick={handleMotorBikeProcessing}>
                  <Add fontSize="small" hidden={motorBikeProcessing} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!motorBikeProcessing}
                  />
                  <Folder className="folder" hidden={motorBikeProcessing} />
                  <FolderOpen
                    className="folder"
                    hidden={!motorBikeProcessing}
                  />
                  MotorBike Processing
                </Typography>
                <ul className="tree-view-child" hidden={!motorBikeProcessing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In h??a ????n xe m??y
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
