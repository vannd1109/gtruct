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
                      Đăng ký thanh toán bằng tiền mặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Giải quyết thanh toán bằng tiền mặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xử lý hủy bỏ trường hợp thanh toán bằng tiền mặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hủy bỏ tất cả trường hợp chưa chuyển tiền
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Số trường hợp chưa được thanh toán bằng tiền mặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Giải quyết các trường hợp thanh toán bằng tiền mặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Số trường hợp hủy thanh toán bằng tiền mặt
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
                      Hoàn tất việc thanh toán bằng thẻ
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Lập tài liệu đăng ký thẻ
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký tài liệu yêu cầu thanh toán
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Yêu cầu hủy bỏ thẻ
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Trường hợp đặt hàng trả góp bằng thẻ
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thống kê thanh toán bằng thẻ
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
                      Quản lý điểm tích lũy
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình điểm tích lũy của từng khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tặng các dịch vụ cộng điểm khác
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kỳ hạn sử dụng điểm tích lũy
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình sử dụng điểm tích lũy của nhân viên công ty
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tổng số điểm cộng được tặng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tổng số điểm tích lũy đã dùng
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
                      Quản lý số tiền đặt cọc
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình cấp tiền đặt cọc theo ngày
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình sử dụng tiền đặt cọc theo ngày
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tiền đặt cọc của từng khách hàng
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
                      Xử lý chấp nhận Creadit Loan
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Yêu cầu làm giấy tờ Creadit Loan
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập giấy tờ gửi tiền Creadit Loan
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thống kê gửi tiền Credit Loan
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
                      Xác nhận thu tiền Payment Online
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hoàn trả tiền cho Payment Online
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận thu tiền trả góp (Payment Online)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Trường hợp đặt hàng trả góp bằng thẻ (Payment Online)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thống kê thanh toán Payment Online
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
                      Giải quyết thanh toán COD(Mới)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đã nhận được tài liệu thanh toán theo công ty
                      giao hàng
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
                      Tình hình chưa thanh toán trả sau
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình thanh toán trả sau
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình xuất kho những sản phẩm được thanh toán trả sau
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình chưa thanh toán trả sau
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình dự kiến thanh toán COD
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
                      Trả lại tiền mặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Giải quyết việc trả lại tiền sau khi xác nhận thu hồi hàng
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
                      Kết quả việc trả lại tiền
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
                      Báo cáo doanh thu và thanh toán bán hàng
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
                      Tình hình đăng ký thanh toán theo từng loại thanh toán
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình xác nhận/thanh toán theo từng loại thanh toán
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
                      Đăng ký nhận biên lai
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In biên lai cho khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In biên lai của từng vận đơn
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In DM địa chỉ của khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In biên lai của từng vận đơn HĐĐT
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
                      Tình hình đăng ký nhận biên lai
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình in biên lai
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
                      Giải quyết việc chuyển tiền thuế thu nhập cá nhân
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình chuyển tiền thuế chu nhập cá nhân
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
                      Đăng ký công ty ký gửi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký mã số bảo lưu/số khấu từ
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý phân loại công ty ký gửi theo tháng
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
                      Quản lý mã số ngân hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý tài khoản chuyển tiền
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý mã số công ty thẻ
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý mã số thẻ
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý công ty cho vay tín dụng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký tiêu chuẩn vay tín dụng Rebate
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
                      Tình hình đăng ký công ty ký gửi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình ngân hàng của công ty ký gửi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In DM của công ty ký gửi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra tiêu chuẩn quyết toán của công ty ký gửi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình hàng tồn của mỗi nhà cung cấp nhập hàng nguyên
                      tắc
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
                      Tiến hành thanh toán theo tiêu chuẩn phát sinh
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận hóa đơn thanh toán
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký hóa đơn
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tiến hành chi trả theo tiêu chuẩn thanh toán
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận việc chi trả
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký hóa đơn(Điều chỉnh hàng tồn kho)
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
                      Tình hình chi trả của các công ký gửi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình chi trả
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
                      Yêu cầu nhập xuất tới kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình công nợ nhà cung cấp theo hóa đơn
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình chi tiết công nợ nhà cung cấp
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
                      Đăng ký thông tin phiếu mua hàng tích lũy điểm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Yêu cầu kiểm tra đối tượng nhập kho phiếu mua hàng tích
                      lũy điểm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Nhập phiếu mua hàng tích lũy điểm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Bỏ phiếu mua hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phê duyệt phát hành phiếu mua hàng tích lũy điểm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xử lý việc xuất phiếu mua hàng tích lũy điểm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình phê duyệt phiếu mua hàng tích lũy điểm
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
                      Tình hình tiến hành phiếu mua hàng tích lũy điểm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình sử dụng phiếu mua hàng tích lũy điểm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình xuất nhập kho phiếu mua hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý phiếu mua hàng tích lũy điểm
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
                      Đăng ký thông tin phiếu giảm giá
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phê duyệt phiếu giảm giá
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phát hành phiếu giảm giá (riêng lẻ)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phát hành phiếu giảm giá (đồng loạt)
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
                      Tình hình sửu dụng phiếu giảm giá
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình phát hành phiếu giảm giá
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra tình hình phiếu giảm giá
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
                      B2B - Đăng ký thông tin khách hàng B2B
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Đăng ký thanh toán bằng tiền mặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Giải quyết thanh toán CMS đợt 1
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Giải quyết thanh toán CMS đợt 2
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Xử lý hủy bỏ trường hợp thanh toán bằng tiền mặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Hủy bỏ tất cả trường hợp chưa chuyển tiền
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Số trường hợp chưa được xác nhận thanh toán bằng
                      tiền mặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Giải quyết các trường hợp thanh toán bằng tiền mặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Số trường hợp hủy thanh toán bằng tiền mặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Giải quyết thanh toán COD (Mới)
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
                      B2B - Tình hình công nợ
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B - Tình hình thanh toán theo tháng
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
                      In hóa đơn xe máy
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
