import { useState } from "react";
import {
  Description,
  Folder,
  Add,
  HorizontalRule,
  FolderOpen,
} from "@mui/icons-material";

import { Typography } from "@material-ui/core";

function Menu(props) {
  // Prepay Payment
  const [openPrepayPayment, setOpenPrepayPayment] = useState(false);
  const [closePrepayPayment, setClosePrepayPayment] = useState(true);

  const [openCMS, setOpenCMS] = useState(false);
  const [closeCMS, setCloseCMS] = useState(true);

  const [openCard, setOpenCard] = useState(false);
  const [closeCard, setCloseCard] = useState(true);

  const [openSCJPoint, setOpenSCJPoint] = useState(false);
  const [closeSCJPoint, setCloseSCJPoint] = useState(true);

  const [openDeposit, setOpenDeposit] = useState(false);
  const [closeDeposit, setCloseDeposit] = useState(true);

  const [openCreditLoan, setOpenCreditLoan] = useState(false);
  const [closeCreditLoan, setCloseCreditLoan] = useState(true);

  const [openPaymentOnline, setOpenPaymentOnline] = useState(false);
  const [closePaymentOnline, setClosePaymentOnline] = useState(true);

  // Postpay Payment
  const [openPostpayPayment, setOpenPostpayPayment] = useState(false);
  const [closePostpayPayment, setClosePostpayPayment] = useState(true);

  const [openCOD, setOpenCOD] = useState(false);
  const [closeCOD, setCloseCOD] = useState(true);

  const [openStatusByPostpay, setOpenStatusByPostpay] = useState(false);
  const [closeStatusByPostpay, setCloseStatusByPostpay] = useState(true);

  // Refund
  const [openRefund, setOpenRefund] = useState(false);
  const [closeRefund, setCloseRefund] = useState(true);

  const [openRefundProc, setOpenRefundProc] = useState(false);
  const [closeRefundProc, setCloseRefundProc] = useState(true);

  const [openStatusByRefund, setOpenStatusByRefund] = useState(false);
  const [closeStatusByRefund, setCloseStatusByRefund] = useState(true);

  // Other Anal
  const [openAccountOtherAnal, setOpenAccountOtherAnal] = useState(false);
  const [closeAccountOtherAnal, setCloseAccountOtherAnal] = useState(true);

  const [openSaleAndPaymentAnal, setOpenSaleAndPaymentAnal] = useState(false);
  const [closeSaleAndPaymentAnal, setCloseSaleAndPaymentAnal] = useState(true);

  const [openOtherAnal, setOpenOtherAnal] = useState(false);
  const [closeOtherAnal, setCloseOtherAnal] = useState(true);

  // Receipt
  const [openReceipt, setOpenReceipt] = useState(false);
  const [closeReceipt, setCloseReceipt] = useState(true);

  const [openReceiptsIssued, setOpenReceiptsIssued] = useState(false);
  const [closeReceiptsIssued, setCloseReceiptsIssued] = useState(true);

  const [openCustomerDMIssued, setOpenCustomerDMIssued] = useState(false);
  const [closeCustomerDMIssued, setCloseCustomerDMIssued] = useState(true);

  const [openIndividualIncomeTax, setOpenIndividualIncomeTax] = useState(false);
  const [closeIndividualIncomeTax, setCloseIndividualIncomeTax] =
    useState(true);

  // Vendor Mgt
  const [openVendorMgt, setOpenVendorMgt] = useState(false);
  const [closeVendorMgt, setCloseVendorMgt] = useState(true);

  const [openBasicVendorInfo, setOpenBasicVendorInfo] = useState(false);
  const [closeBasicVendorInfo, setCloseBasicVendorInfo] = useState(true);

  const [openBasicPaymentInfo, setOpenBasicPaymentInfo] = useState(false);
  const [closeBasicPaymentInfo, setCloseBasicPaymentInfo] = useState(true);

  const [openBasicInfoStatus, setOpenBasicInfoStatus] = useState(false);
  const [closeBasicInfoStatus, setCloseBasicInfoStatus] = useState(true);

  // Vendor Settlement
  const [openVendorSettlement, setOpenVendorSettlement] = useState(false);
  const [closeVendorSettlement, setCloseVendorSettlement] = useState(true);

  const [openBillPayment, setOpenBillPayment] = useState(false);
  const [closeBillPayment, setCloseBillPayment] = useState(true);

  const [openItemSupplyPriceInquire, setOpenItemSupplyPriceInquire] =
    useState(false);
  const [closeItemSupplyPriceInquire, setCloseItemSupplyPriceInquire] =
    useState(true);

  const [openPinanceIF, setOpenPinanceIF] = useState(false);
  const [closePinanceIF, setClosePinanceIF] = useState(true);

  // Voucher Mgt
  const [openVoucherMgt, setOpenVoucherMgt] = useState(false);
  const [closeVoucherMgt, setCloseVoucherMgt] = useState(true);

  const [openVoucherProcessing, setOpenVoucherProcessing] = useState(false);
  const [closeVoucherProcessing, setCloseVoucherProcessing] = useState(true);

  const [openVoucherStatus, setOpenVoucherStatus] = useState(false);
  const [closeVoucherStatus, setCloseVoucherStatus] = useState(true);

  // D/C Coupon
  const [openDCCoupon, setOpenDCCoupon] = useState(false);
  const [closeDCCoupon, setCloseDCCoupon] = useState(true);

  const [openDCCouponMgt, setOpenDCCouponMgt] = useState(false);
  const [closeDCCouponMgt, setCloseDCCouponMgt] = useState(true);

  const [openDCCouponStatus, setOpenDCCouponStatus] = useState(false);
  const [closeDCCouponStatus, setCloseDCCouponStatus] = useState(true);

  // B2B Mgt
  const [openB2BMgt, setOpenB2BMgt] = useState(false);
  const [closeB2BMgt, setCloseB2BMgt] = useState(true);

  const [openB2BProcessing, setOpenB2BProcessing] = useState(false);
  const [closeB2BProcessing, setCloseB2BProcessing] = useState(true);

  const [openB2BStatus, setOpenB2BStatus] = useState(false);
  const [closeB2BStatus, setCloseB2BStatus] = useState(true);

  // MotorBike Mgt
  const [openMotorBikeMgt, setOpenMotorBikeMgt] = useState(false);
  const [closeMotorBikeMgt, setCloseMotorBikeMgt] = useState(true);

  const [openMotorBikeProcessing, setOpenMotorBikeProcessing] = useState(false);
  const [closeMotorBikeProcessing, setCloseMotorBikeProcessing] =
    useState(true);

  // ----------------------------------handle-----------------

  // Prepay Payment
  const handleOpenPrepayPayment = (e) => {
    setOpenPrepayPayment(!openPrepayPayment);
    setClosePrepayPayment(!closePrepayPayment);
  };

  const handleOpenCMS = (e) => {
    setOpenCMS(!openCMS);
    setCloseCMS(!closeCMS);
  };

  const handleOpenCard = (e) => {
    setOpenCard(!openCard);
    setCloseCard(!closeCard);
  };

  const handleOpenSCJPoint = (e) => {
    setOpenSCJPoint(!openSCJPoint);
    setCloseSCJPoint(!closeSCJPoint);
  };

  const handleOpenDeposit = (e) => {
    setOpenDeposit(!openDeposit);
    setCloseDeposit(!closeDeposit);
  };

  const handleOpenCreditLoan = (e) => {
    setOpenCreditLoan(!openCreditLoan);
    setCloseCreditLoan(!closeCreditLoan);
  };

  const handleOpenPaymentOnline = (e) => {
    setOpenPaymentOnline(!openPaymentOnline);
    setClosePaymentOnline(!closePaymentOnline);
  };

  // Postpay Payment
  const handleOpenPostpayPayment = (e) => {
    setOpenPostpayPayment(!openPostpayPayment);
    setClosePostpayPayment(!closePostpayPayment);
  };

  const handleOpenCOD = (e) => {
    setOpenCOD(!openCOD);
    setCloseCOD(!closeCOD);
  };

  const handleOpenStatusByPostpay = (e) => {
    setOpenStatusByPostpay(!openStatusByPostpay);
    setCloseStatusByPostpay(!closeStatusByPostpay);
  };

  // Refund
  const handleOpenRefund = (e) => {
    setOpenRefund(!openRefund);
    setCloseRefund(!closeRefund);
  };

  const handleOpenRefundProc = (e) => {
    setOpenRefundProc(!openRefundProc);
    setCloseRefundProc(!closeRefundProc);
  };

  const handleOpenStatusByRefund = (e) => {
    setOpenStatusByRefund(!openStatusByRefund);
    setCloseStatusByRefund(!closeStatusByRefund);
  };

  // Other Anal
  const handleOpenAccountOtherAnal = (e) => {
    setOpenAccountOtherAnal(!openAccountOtherAnal);
    setCloseAccountOtherAnal(!closeAccountOtherAnal);
  };

  const handleOpenSaleAndPaymentAnal = (e) => {
    setOpenSaleAndPaymentAnal(!openSaleAndPaymentAnal);
    setCloseSaleAndPaymentAnal(!closeSaleAndPaymentAnal);
  };

  const handleOpenOtherAnal = (e) => {
    setOpenOtherAnal(!openOtherAnal);
    setCloseOtherAnal(!closeOtherAnal);
  };

  // Receipt
  const handleOpenReceipt = (e) => {
    setOpenReceipt(!openReceipt);
    setCloseReceipt(!closeReceipt);
  };

  const handleOpenReceiptsIssued = (e) => {
    setOpenReceiptsIssued(!openReceiptsIssued);
    setCloseReceiptsIssued(!closeReceiptsIssued);
  };

  const handleOpenCustomerDMIssued = (e) => {
    setOpenCustomerDMIssued(!openCustomerDMIssued);
    setCloseCustomerDMIssued(!closeCustomerDMIssued);
  };

  const handleOpenIndividualIncomeTax = (e) => {
    setOpenIndividualIncomeTax(!openIndividualIncomeTax);
    setCloseIndividualIncomeTax(!closeIndividualIncomeTax);
  };

  // Vendor Mgt
  const handleOpenVendorMgt = (e) => {
    setOpenVendorMgt(!openVendorMgt);
    setCloseVendorMgt(!closeVendorMgt);
  };

  const handleOpenBasicVendorInfo = (e) => {
    setOpenBasicVendorInfo(!openBasicVendorInfo);
    setCloseBasicVendorInfo(!closeBasicVendorInfo);
  };

  const handleOpenBasicPaymentInfo = (e) => {
    setOpenBasicPaymentInfo(!openBasicPaymentInfo);
    setCloseBasicPaymentInfo(!closeBasicPaymentInfo);
  };

  const handleOpenBasicInfoStatus = (e) => {
    setOpenBasicInfoStatus(!openBasicInfoStatus);
    setCloseBasicInfoStatus(!closeBasicInfoStatus);
  };

  // Vendor Settlement
  const handleOpenVendorSettlement = (e) => {
    setOpenVendorSettlement(!openVendorSettlement);
    setCloseVendorSettlement(!closeVendorSettlement);
  };

  const handleOpenBillPayment = (e) => {
    setOpenBillPayment(!openBillPayment);
    setCloseBillPayment(!closeBillPayment);
  };

  const handleOpenItemSupplyPriceInquire = (e) => {
    setOpenItemSupplyPriceInquire(!openItemSupplyPriceInquire);
    setCloseItemSupplyPriceInquire(!closeItemSupplyPriceInquire);
  };

  const handleOpenPinanceIF = (e) => {
    setOpenPinanceIF(!openPinanceIF);
    setClosePinanceIF(!closePinanceIF);
  };

  // Voucher Mgt
  const handleOpenVoucherMgt = (e) => {
    setOpenVoucherMgt(!openVoucherMgt);
    setCloseVoucherMgt(!closeVoucherMgt);
  };

  const handleOpenVoucherProcessing = (e) => {
    setOpenVoucherProcessing(!openVoucherProcessing);
    setCloseVoucherProcessing(!closeVoucherProcessing);
  };

  const handleOpenVoucherStatus = (e) => {
    setOpenVoucherStatus(!openVoucherStatus);
    setCloseVoucherStatus(!closeVoucherStatus);
  };

  // D/C Coupon
  const handleOpenDCCoupon = (e) => {
    setOpenDCCoupon(!openDCCoupon);
    setCloseDCCoupon(!closeDCCoupon);
  };

  const handleOpenDCCouponMgt = (e) => {
    setOpenDCCouponMgt(!openDCCouponMgt);
    setCloseDCCouponMgt(!closeDCCouponMgt);
  };

  const handleOpenDCCouponStatus = (e) => {
    setOpenDCCouponStatus(!openDCCouponStatus);
    setCloseDCCouponStatus(!closeDCCouponStatus);
  };

  // B2B Mgt
  const handleOpenB2BMgt = (e) => {
    setOpenB2BMgt(!openB2BMgt);
    setCloseB2BMgt(!closeB2BMgt);
  };

  const handleOpenB2BProcessing = (e) => {
    setOpenB2BProcessing(!openB2BProcessing);
    setCloseB2BProcessing(!closeB2BProcessing);
  };

  const handleOpenB2BStatus = (e) => {
    setOpenB2BStatus(!openB2BStatus);
    setCloseB2BStatus(!closeB2BStatus);
  };

  // MotorBike Mgt
  const handleOpenMotorBikeMgt = (e) => {
    setOpenMotorBikeMgt(!openMotorBikeMgt);
    setCloseMotorBikeMgt(!closeMotorBikeMgt);
  };

  const handleOpenMotorBikeProcessing = (e) => {
    setOpenMotorBikeProcessing(!openMotorBikeProcessing);
    setCloseMotorBikeProcessing(!closeMotorBikeProcessing);
  };

  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <Typography onClick={handleOpenPrepayPayment}>
            <Add fontSize="small" hidden={openPrepayPayment} />
            <HorizontalRule fontSize="small" hidden={closePrepayPayment} />
            <Folder className="folder" hidden={openPrepayPayment} />
            <FolderOpen className="folder" hidden={closePrepayPayment} />
            Prepay Payment
          </Typography>
          <ul className="tree-view-child" hidden={closePrepayPayment}>
            <li>
              <Typography onClick={handleOpenCMS}>
                <Add fontSize="small" hidden={openCMS} />
                <HorizontalRule fontSize="small" hidden={closeCMS} />
                <Folder className="folder" hidden={openCMS} />
                <FolderOpen className="folder" hidden={closeCMS} />
                CMS
              </Typography>
              <ul className="tree-view-child" hidden={closeCMS}>
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
              <Typography onClick={handleOpenCard}>
                <Add fontSize="small" hidden={openCard} />
                <HorizontalRule fontSize="small" hidden={closeCard} />
                <Folder className="folder" hidden={openCard} />
                <FolderOpen className="folder" hidden={closeCard} />
                Card
              </Typography>
              <ul className="tree-view-child" hidden={closeCard}>
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
              <Typography onClick={handleOpenSCJPoint}>
                <Add fontSize="small" hidden={openSCJPoint} />
                <HorizontalRule fontSize="small" hidden={closeSCJPoint} />
                <Folder className="folder" hidden={openSCJPoint} />
                <FolderOpen className="folder" hidden={closeSCJPoint} />
                SCJ Point
              </Typography>
              <ul className="tree-view-child" hidden={closeSCJPoint}>
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
              <Typography onClick={handleOpenDeposit}>
                <Add fontSize="small" hidden={openDeposit} />
                <HorizontalRule fontSize="small" hidden={closeDeposit} />
                <Folder className="folder" hidden={openDeposit} />
                <FolderOpen className="folder" hidden={closeDeposit} />
                Deposit
              </Typography>
              <ul className="tree-view-child" hidden={closeDeposit}>
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
              <Typography onClick={handleOpenCreditLoan}>
                <Add fontSize="small" hidden={openCreditLoan} />
                <HorizontalRule fontSize="small" hidden={closeCreditLoan} />
                <Folder className="folder" hidden={openCreditLoan} />
                <FolderOpen className="folder" hidden={closeCreditLoan} />
                CreditLoan
              </Typography>
              <ul className="tree-view-child" hidden={closeCreditLoan}>
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
              <Typography onClick={handleOpenPaymentOnline}>
                <Add fontSize="small" hidden={openPaymentOnline} />
                <HorizontalRule fontSize="small" hidden={closePaymentOnline} />
                <Folder className="folder" hidden={openPaymentOnline} />
                <FolderOpen className="folder" hidden={closePaymentOnline} />
                Payment Online
              </Typography>
              <ul className="tree-view-child" hidden={closePaymentOnline}>
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
          <Typography onClick={handleOpenPostpayPayment}>
            <Add fontSize="small" hidden={openPostpayPayment} />
            <HorizontalRule fontSize="small" hidden={closePostpayPayment} />
            <Folder className="folder" hidden={openPostpayPayment} />
            <FolderOpen className="folder" hidden={closePostpayPayment} />
            Postpay Payment
          </Typography>
          <ul className="tree-view-child" hidden={closePostpayPayment}>
            <li>
              <Typography onClick={handleOpenCOD}>
                <Add fontSize="small" hidden={openCOD} />
                <HorizontalRule fontSize="small" hidden={closeCOD} />
                <Folder className="folder" hidden={openCOD} />
                <FolderOpen className="folder" hidden={closeCOD} />
                COD
              </Typography>
              <ul className="tree-view-child" hidden={closeCOD}>
                <li>
                  <Typography className="document-title">
                    <Description className="file" />
                    Giải quyết thanh toán COD(Mới)
                  </Typography>
                </li>
                <li>
                  <Typography className="document-title">
                    <Description className="file" />
                    Tình hình đã nhận được tài liệu thanh toán theo công ty giao
                    hàng
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenStatusByPostpay}>
                <Add fontSize="small" hidden={openStatusByPostpay} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeStatusByPostpay}
                />
                <Folder className="folder" hidden={openStatusByPostpay} />
                <FolderOpen className="folder" hidden={closeStatusByPostpay} />
                Status By Postpay
              </Typography>
              <ul className="tree-view-child" hidden={closeStatusByPostpay}>
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
          <Typography onClick={handleOpenRefund}>
            <Add fontSize="small" hidden={openRefund} />
            <HorizontalRule fontSize="small" hidden={closeRefund} />
            <Folder className="folder" hidden={openRefund} />
            <FolderOpen className="folder" hidden={closeRefund} />
            Refund
          </Typography>
          <ul className="tree-view-child" hidden={closeRefund}>
            <li>
              <Typography onClick={handleOpenRefundProc}>
                <Add fontSize="small" hidden={openRefundProc} />
                <HorizontalRule fontSize="small" hidden={closeRefundProc} />
                <Folder className="folder" hidden={openRefundProc} />
                <FolderOpen className="folder" hidden={closeRefundProc} />
                Refund Proc
              </Typography>
              <ul className="tree-view-child" hidden={closeRefundProc}>
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
              <Typography onClick={handleOpenStatusByRefund}>
                <Add fontSize="small" hidden={openStatusByRefund} />
                <HorizontalRule fontSize="small" hidden={closeStatusByRefund} />
                <Folder className="folder" hidden={openStatusByRefund} />
                <FolderOpen className="folder" hidden={closeStatusByRefund} />
                Status By Refund
              </Typography>
              <ul className="tree-view-child" hidden={closeStatusByRefund}>
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
          <Typography onClick={handleOpenAccountOtherAnal}>
            <Add fontSize="small" hidden={openAccountOtherAnal} />
            <HorizontalRule fontSize="small" hidden={closeAccountOtherAnal} />
            <Folder className="folder" hidden={openAccountOtherAnal} />
            <FolderOpen className="folder" hidden={closeAccountOtherAnal} />
            Other Anal
          </Typography>
          <ul className="tree-view-child" hidden={closeAccountOtherAnal}>
            <li>
              <Typography onClick={handleOpenSaleAndPaymentAnal}>
                <Add fontSize="small" hidden={openSaleAndPaymentAnal} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeSaleAndPaymentAnal}
                />
                <Folder className="folder" hidden={openSaleAndPaymentAnal} />
                <FolderOpen
                  className="folder"
                  hidden={closeSaleAndPaymentAnal}
                />
                Sale And Payment Anal
              </Typography>
              <ul className="tree-view-child" hidden={closeSaleAndPaymentAnal}>
                <li>
                  <Typography className="document-title">
                    <Description className="file" />
                    Báo cáo doanh thu và thanh toán bán hàng
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenOtherAnal}>
                <Add fontSize="small" hidden={openOtherAnal} />
                <HorizontalRule fontSize="small" hidden={closeOtherAnal} />
                <Folder className="folder" hidden={openOtherAnal} />
                <FolderOpen className="folder" hidden={closeOtherAnal} />
                Other Anal
              </Typography>
              <ul className="tree-view-child" hidden={closeOtherAnal}>
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
          <Typography onClick={handleOpenReceipt}>
            <Add fontSize="small" hidden={openReceipt} />
            <HorizontalRule fontSize="small" hidden={closeReceipt} />
            <Folder className="folder" hidden={openReceipt} />
            <FolderOpen className="folder" hidden={closeReceipt} />
            Receipt
          </Typography>
          <ul className="tree-view-child" hidden={closeReceipt}>
            <li>
              <Typography onClick={handleOpenReceiptsIssued}>
                <Add fontSize="small" hidden={openReceiptsIssued} />
                <HorizontalRule fontSize="small" hidden={closeReceiptsIssued} />
                <Folder className="folder" hidden={openReceiptsIssued} />
                <FolderOpen className="folder" hidden={closeReceiptsIssued} />
                Receipts Issued
              </Typography>
              <ul className="tree-view-child" hidden={closeReceiptsIssued}>
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
              <Typography onClick={handleOpenCustomerDMIssued}>
                <Add fontSize="small" hidden={openCustomerDMIssued} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeCustomerDMIssued}
                />
                <Folder className="folder" hidden={openCustomerDMIssued} />
                <FolderOpen className="folder" hidden={closeCustomerDMIssued} />
                Customer DM Issued
              </Typography>
              <ul className="tree-view-child" hidden={closeCustomerDMIssued}>
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
              <Typography onClick={handleOpenIndividualIncomeTax}>
                <Add fontSize="small" hidden={openIndividualIncomeTax} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeIndividualIncomeTax}
                />
                <Folder className="folder" hidden={openIndividualIncomeTax} />
                <FolderOpen
                  className="folder"
                  hidden={closeIndividualIncomeTax}
                />
                Individual Income Tax
              </Typography>
              <ul className="tree-view-child" hidden={closeIndividualIncomeTax}>
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
          <Typography onClick={handleOpenVendorMgt}>
            <Add fontSize="small" hidden={openVendorMgt} />
            <HorizontalRule fontSize="small" hidden={closeVendorMgt} />
            <Folder className="folder" hidden={openVendorMgt} />
            <FolderOpen className="folder" hidden={closeVendorMgt} />
            Vendor Mgt
          </Typography>
          <ul className="tree-view-child" hidden={closeVendorMgt}>
            <li>
              <Typography onClick={handleOpenBasicVendorInfo}>
                <Add fontSize="small" hidden={openBasicVendorInfo} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeBasicVendorInfo}
                />
                <Folder className="folder" hidden={openBasicVendorInfo} />
                <FolderOpen className="folder" hidden={closeBasicVendorInfo} />
                Vendor Mgt
              </Typography>
              <ul className="tree-view-child" hidden={closeBasicVendorInfo}>
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
              <Typography onClick={handleOpenBasicPaymentInfo}>
                <Add fontSize="small" hidden={openBasicPaymentInfo} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeBasicPaymentInfo}
                />
                <Folder className="folder" hidden={openBasicPaymentInfo} />
                <FolderOpen className="folder" hidden={closeBasicPaymentInfo} />
                Basic Payment Info
              </Typography>
              <ul className="tree-view-child" hidden={closeBasicPaymentInfo}>
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
              <Typography onClick={handleOpenBasicInfoStatus}>
                <Add fontSize="small" hidden={openBasicInfoStatus} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeBasicInfoStatus}
                />
                <Folder className="folder" hidden={openBasicInfoStatus} />
                <FolderOpen className="folder" hidden={closeBasicInfoStatus} />
                Basic Info Status
              </Typography>
              <ul className="tree-view-child" hidden={closeBasicInfoStatus}>
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
                    Tình hình hàng tồn của mỗi nhà cung cấp nhập hàng nguyên tắc
                  </Typography>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Typography onClick={handleOpenVendorSettlement}>
            <Add fontSize="small" hidden={openVendorSettlement} />
            <HorizontalRule fontSize="small" hidden={closeVendorSettlement} />
            <Folder className="folder" hidden={openVendorSettlement} />
            <FolderOpen className="folder" hidden={closeVendorSettlement} />
            Vendor Settlement
          </Typography>
          <ul className="tree-view-child" hidden={closeVendorSettlement}>
            <li>
              <Typography onClick={handleOpenBillPayment}>
                <Add fontSize="small" hidden={openBillPayment} />
                <HorizontalRule fontSize="small" hidden={closeBillPayment} />
                <Folder className="folder" hidden={openBillPayment} />
                <FolderOpen className="folder" hidden={closeBillPayment} />
                Bill Payment
              </Typography>
              <ul className="tree-view-child" hidden={closeBillPayment}>
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
              <Typography onClick={handleOpenItemSupplyPriceInquire}>
                <Add fontSize="small" hidden={openItemSupplyPriceInquire} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeItemSupplyPriceInquire}
                />
                <Folder
                  className="folder"
                  hidden={openItemSupplyPriceInquire}
                />
                <FolderOpen
                  className="folder"
                  hidden={closeItemSupplyPriceInquire}
                />
                Item Supply Price Inquire
              </Typography>
              <ul
                className="tree-view-child"
                hidden={closeItemSupplyPriceInquire}
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
              <Typography onClick={handleOpenPinanceIF}>
                <Add fontSize="small" hidden={openPinanceIF} />
                <HorizontalRule fontSize="small" hidden={closePinanceIF} />
                <Folder className="folder" hidden={openPinanceIF} />
                <FolderOpen className="folder" hidden={closePinanceIF} />
                Pinance I/F
              </Typography>
              <ul className="tree-view-child" hidden={closePinanceIF}>
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
          <Typography onClick={handleOpenVoucherMgt}>
            <Add fontSize="small" hidden={openVoucherMgt} />
            <HorizontalRule fontSize="small" hidden={closeVoucherMgt} />
            <Folder className="folder" hidden={openVoucherMgt} />
            <FolderOpen className="folder" hidden={closeVoucherMgt} />
            Voucher Mgt
          </Typography>
          <ul className="tree-view-child" hidden={closeVoucherMgt}>
            <li>
              <Typography onClick={handleOpenVoucherProcessing}>
                <Add fontSize="small" hidden={openVoucherProcessing} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeVoucherProcessing}
                />
                <Folder className="folder" hidden={openVoucherProcessing} />
                <FolderOpen
                  className="folder"
                  hidden={closeVoucherProcessing}
                />
                Voucher Processing
              </Typography>
              <ul className="tree-view-child" hidden={closeVoucherProcessing}>
                <li>
                  <Typography className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin phiếu mua hàng tích lũy điểm
                  </Typography>
                </li>
                <li>
                  <Typography className="document-title">
                    <Description className="file" />
                    Yêu cầu kiểm tra đối tượng nhập kho phiếu mua hàng tích lũy
                    điểm
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
              <Typography onClick={handleOpenVoucherStatus}>
                <Add fontSize="small" hidden={openVoucherStatus} />
                <HorizontalRule fontSize="small" hidden={closeVoucherStatus} />
                <Folder className="folder" hidden={openVoucherStatus} />
                <FolderOpen className="folder" hidden={closeVoucherStatus} />
                Voucher Status
              </Typography>
              <ul className="tree-view-child" hidden={closeVoucherStatus}>
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
          <Typography onClick={handleOpenDCCoupon}>
            <Add fontSize="small" hidden={openDCCoupon} />
            <HorizontalRule fontSize="small" hidden={closeDCCoupon} />
            <Folder className="folder" hidden={openDCCoupon} />
            <FolderOpen className="folder" hidden={closeDCCoupon} />
            D/C Coupon
          </Typography>
          <ul className="tree-view-child" hidden={closeDCCoupon}>
            <li>
              <Typography onClick={handleOpenDCCouponMgt}>
                <Add fontSize="small" hidden={openDCCouponMgt} />
                <HorizontalRule fontSize="small" hidden={closeDCCouponMgt} />
                <Folder className="folder" hidden={openDCCouponMgt} />
                <FolderOpen className="folder" hidden={closeDCCouponMgt} />
                D/C Coupon Mgt
              </Typography>
              <ul className="tree-view-child" hidden={closeDCCouponMgt}>
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
              <Typography onClick={handleOpenDCCouponStatus}>
                <Add fontSize="small" hidden={openDCCouponStatus} />
                <HorizontalRule fontSize="small" hidden={closeDCCouponStatus} />
                <Folder className="folder" hidden={openDCCouponStatus} />
                <FolderOpen className="folder" hidden={closeDCCouponStatus} />
                D/C Coupon Status
              </Typography>
              <ul className="tree-view-child" hidden={closeDCCouponStatus}>
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
          <Typography onClick={handleOpenB2BMgt}>
            <Add fontSize="small" hidden={openB2BMgt} />
            <HorizontalRule fontSize="small" hidden={closeB2BMgt} />
            <Folder className="folder" hidden={openB2BMgt} />
            <FolderOpen className="folder" hidden={closeB2BMgt} />
            B2B Mgt
          </Typography>
          <ul className="tree-view-child" hidden={closeB2BMgt}>
            <li>
              <Typography onClick={handleOpenB2BProcessing}>
                <Add fontSize="small" hidden={openB2BProcessing} />
                <HorizontalRule fontSize="small" hidden={closeB2BProcessing} />
                <Folder className="folder" hidden={openB2BProcessing} />
                <FolderOpen className="folder" hidden={closeB2BProcessing} />
                B2B Processing
              </Typography>
              <ul className="tree-view-child" hidden={closeB2BProcessing}>
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
                    B2B - Số trường hợp chưa được xác nhận thanh toán bằng tiền
                    mặt
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
              <Typography onClick={handleOpenB2BStatus}>
                <Add fontSize="small" hidden={openB2BStatus} />
                <HorizontalRule fontSize="small" hidden={closeB2BStatus} />
                <Folder className="folder" hidden={openB2BStatus} />
                <FolderOpen className="folder" hidden={closeB2BStatus} />
                B2B Status
              </Typography>
              <ul className="tree-view-child" hidden={closeB2BStatus}>
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
          <Typography onClick={handleOpenMotorBikeMgt}>
            <Add fontSize="small" hidden={openMotorBikeMgt} />
            <HorizontalRule fontSize="small" hidden={closeMotorBikeMgt} />
            <Folder className="folder" hidden={openMotorBikeMgt} />
            <FolderOpen className="folder" hidden={closeMotorBikeMgt} />
            MotorBike Mgt
          </Typography>
          <ul className="tree-view-child" hidden={closeMotorBikeMgt}>
            <li>
              <Typography onClick={handleOpenMotorBikeProcessing}>
                <Add fontSize="small" hidden={openMotorBikeProcessing} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeMotorBikeProcessing}
                />
                <Folder className="folder" hidden={openMotorBikeProcessing} />
                <FolderOpen
                  className="folder"
                  hidden={closeMotorBikeProcessing}
                />
                MotorBike Processing
              </Typography>
              <ul className="tree-view-child" hidden={closeMotorBikeProcessing}>
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
    </div>
  );
}

export default Menu;
