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
  // Order
  const [openOrder, setOpenOrder] = useState(false);
  const [closeOrder, setCloseOrder] = useState(true);

  const [openOrderProcessing, setOpenOrderProcessing] = useState(false);
  const [closeOrderProcessing, setCloseOrderProcessing] = useState(true);

  const [openOrderStatus, setOpenOrderStatus] = useState(false);
  const [closeOrderStatus, setCloseOrderStatus] = useState(true);

  const [openOrderCustomer, setOpenOrderCustomer] = useState(false);
  const [closeOrderCustomer, setCloseOrderCustomer] = useState(true);

  // SR
  const [openSR, setOpenSR] = useState(false);
  const [closeSR, setCloseSR] = useState(true);

  const [openSRProcessing, setOpenSRProcessing] = useState(false);
  const [closeSRProcessing, setCloseSRProcessing] = useState(true);

  const [openSRStatus, setOpenSRStatus] = useState(false);
  const [closeSRStatus, setCloseSRStatus] = useState(true);

  // OB
  const [openOB, setOpenOB] = useState(false);
  const [closeOB, setCloseOB] = useState(true);

  const [openProcessing, setOpenProcessing] = useState(false);
  const [closeProcessing, setCloseProcessing] = useState(true);

  const [openStatus, setOpenStatus] = useState(false);
  const [closeStatus, setCloseStatus] = useState(true);

  // Customer
  const [openCustomer, setOpenCustomer] = useState(false);
  const [closeCustomer, setCloseCustomer] = useState(true);

  const [openCustomerBasic, setOpenCustomerBasic] = useState(false);
  const [closeCustomerBasic, setCloseCustomerBasic] = useState(true);

  const [openCustomerVip, setOpenCustomerVip] = useState(false);
  const [closeCustomerVip, setCloseCustomerVip] = useState(true);

  const [openCustomerSMS, setOpenCustomerSMS] = useState(false);
  const [closeCustomerSMS, setCloseCustomerSMS] = useState(true);

  // Voucher
  const [openVoucher, setOpenVoucher] = useState(false);
  const [closeVoucher, setCloseVoucher] = useState(true);

  const [openVoucherProcessing, setOpenVoucherProcessing] = useState(false);
  const [closeVoucherProcessing, setCloseVoucherProcessing] = useState(true);

  const [openVoucherStatus, setOpenVoucherStatus] = useState(false);
  const [closeVoucherStatus, setCloseVoucherStatus] = useState(true);

  // B2B
  const [openB2B, setOpenB2B] = useState(false);
  const [closeB2B, setCloseB2B] = useState(true);

  const [openB2BProcessing, setOpenB2BProcessing] = useState(false);
  const [closeB2BProcessing, setCloseB2BProcessing] = useState(true);

  const [openB2BStatus, setOpenB2BStatus] = useState(false);
  const [closeB2BStatus, setCloseB2BStatus] = useState(true);

  // Screen
  const [openScreen, setOpenScreen] = useState(false);
  const [closeScreen, setCloseScreen] = useState(true);

  const [openScreenAgent, setOpenScreenAgent] = useState(false);
  const [closeScreenAgent, setCloseScreenAgent] = useState(true);

  const [openScreenExtension, setOpenScreenExtension] = useState(false);
  const [closeScreenExtension, setCloseScreenExtension] = useState(true);

  // ----------------------------------handle-----------------

  // Order
  const handleOpenOrderMgt = (e) => {
    setOpenOrder(!openOrder);
    setCloseOrder(!closeOrder);
  };

  const handleOpenOrderProcesing = (e) => {
    setOpenOrderProcessing(!openOrderProcessing);
    setCloseOrderProcessing(!closeOrderProcessing);
  };

  const handleOpenOrderStatus = (e) => {
    setOpenOrderStatus(!openOrderStatus);
    setCloseOrderStatus(!closeOrderStatus);
  };

  const handleOpenOrderCustomer = (e) => {
    setOpenOrderCustomer(!openOrderCustomer);
    setCloseOrderCustomer(!closeOrderCustomer);
  };

  // SR
  const handleOpenSRMgt = (e) => {
    setOpenSR(!openSR);
    setCloseSR(!closeSR);
  };

  const handleOpenSRProcessing = (e) => {
    setOpenSRProcessing(!openSRProcessing);
    setCloseSRProcessing(!closeSRProcessing);
  };

  const handleOpenSRStatus = (e) => {
    setOpenSRStatus(!openSRStatus);
    setCloseSRStatus(!closeSRStatus);
  };

  // OB
  const handleOpenOBMgt = (e) => {
    setOpenOB(!openOB);
    setCloseOB(!closeOB);
  };

  const handleOpenOBProcessing = (e) => {
    setOpenProcessing(!openProcessing);
    setCloseProcessing(!closeProcessing);
  };

  const handleOpenOBStatus = (e) => {
    setOpenStatus(!openStatus);
    setCloseStatus(!closeStatus);
  };

  // Customer
  const handleOpenCustomerMgt = (e) => {
    setOpenCustomer(!openCustomer);
    setCloseCustomer(!closeCustomer);
  };

  const handleOpenCustomerBasic = (e) => {
    setOpenCustomerBasic(!openCustomerBasic);
    setCloseCustomerBasic(!closeCustomerBasic);
  };

  const handleOpenCustomerVip = (e) => {
    setOpenCustomerVip(!openCustomerVip);
    setCloseCustomerVip(!closeCustomerVip);
  };

  const handleOpenCustomerSMS = (e) => {
    setOpenCustomerSMS(!openCustomerSMS);
    setCloseCustomerSMS(!closeCustomerSMS);
  };

  // Voucher
  const handleOpenVoucherMgt = (e) => {
    setOpenVoucher(!openVoucher);
    setCloseVoucher(!closeVoucher);
  };

  const handleOpenVoucherProcessing = (e) => {
    setOpenVoucherProcessing(!openVoucherProcessing);
    setCloseVoucherProcessing(!closeVoucherProcessing);
  };

  const handleOpenVoucherStatus = (e) => {
    setOpenVoucherStatus(!openVoucherStatus);
    setCloseVoucherStatus(!closeVoucherStatus);
  };

  // B2B
  const handleOpenB2BMgt = (e) => {
    setOpenB2B(!openB2B);
    setCloseB2B(!closeB2B);
  };

  const handleOpenB2BProcessing = (e) => {
    setOpenB2BProcessing(!openB2BProcessing);
    setCloseB2BProcessing(!closeB2BProcessing);
  };

  const handleOpenB2BStatus = (e) => {
    setOpenB2BStatus(!openB2BStatus);
    setCloseB2BStatus(!closeB2BStatus);
  };

  // Screent
  const handleOpenScreenMgt = (e) => {
    setOpenScreen(!openScreen);
    setCloseScreen(!closeScreen);
  };

  const handleOpenScreenAgent = (e) => {
    setOpenScreenAgent(!openScreenAgent);
    setCloseScreenAgent(!closeScreenAgent);
  };

  const handleOpenScreenExtension = (e) => {
    setOpenScreenExtension(!openScreenExtension);
    setCloseScreenExtension(!closeScreenExtension);
  };

  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <Typography onClick={handleOpenOrderMgt}>
            <Add fontSize="small" hidden={openOrder} />
            <HorizontalRule fontSize="small" hidden={closeOrder} />
            <Folder className="folder" hidden={openOrder} />
            <FolderOpen className="folder" hidden={closeOrder} /> Order Mgt.
          </Typography>
          <ul className="tree-view-child" hidden={closeOrder}>
            <li>
              <Typography onClick={handleOpenOrderProcesing}>
                <Add fontSize="small" hidden={openOrderProcessing} />{" "}
                <HorizontalRule
                  fontSize="small"
                  hidden={closeOrderProcessing}
                />
                <Folder className="folder" hidden={openOrderProcessing} />
                <FolderOpen
                  className="folder"
                  hidden={closeOrderProcessing}
                />{" "}
                Order Processing
              </Typography>
              <ul className="tree-view-child" hidden={closeOrderProcessing}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tiếp nhận đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tiến hành đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tiếp nhận khiếu nại của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Giải quyết khiếu nại
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tiến hành thanh toán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra người nhận hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý đơn hàng COD
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thông tin khách hàng sử dụng Credit Loan
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra trạng thái phê duyệt Credit Loan
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý đơn hàng COD_fastdely
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenOrderStatus}>
                <Add fontSize="small" hidden={openOrderStatus} />
                <HorizontalRule fontSize="small" hidden={closeOrderStatus} />
                <Folder className="folder" hidden={openOrderStatus} />
                <FolderOpen className="folder" hidden={closeOrderStatus} />{" "}
                Order/Complaint Status
              </Typography>
              <ul className="tree-view-child" hidden={closeOrderStatus}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiếp nhận đặt hàng TMR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiép nhận đặt hàng theo nhóm làm việc
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình khách hàng theo từng giao đoạn tiến hành đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chi tiết về đơn đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình hủy đơn đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình khách hàng đặt hàng theo sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Lý do khiếu nại của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình khiếu nại của khách hàng theo từng sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra tình hình khiếu nại của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thống kê lượng sản phẩm bị lỗi
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình trạng đặt hàng(Tổng cộng) của TMR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình trạng tiếp nhận đơn đặt hàng(nhóm) của TMR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tinh hình hàng tồn kho của đơn hàng đặt trước
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra những sản phẩm của đơn hàng đặt trước
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiếp nhận đặt hàng Direct Delivery
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thống kê lý do hủy-trả hàng theo tháng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiếp nhận đặt hàng TMR - INSURANCE
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenOrderCustomer}>
                <Add fontSize="small" hidden={openOrderCustomer} />
                <HorizontalRule fontSize="small" hidden={closeOrderCustomer} />
                <Folder className="folder" hidden={openOrderCustomer} />
                <FolderOpen
                  className="folder"
                  hidden={closeOrderCustomer}
                />{" "}
                Customer Performance
              </Typography>
              <ul className="tree-view-child" hidden={closeOrderCustomer}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình thực tế tiếp nhận từng khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Chọn lựa khách hàng theo tiêu chuẩn đặt hàng/doanh thu
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Typography onClick={handleOpenSRMgt}>
            <Add fontSize="small" hidden={openSR} />
            <HorizontalRule fontSize="small" hidden={closeSR} />
            <Folder className="folder" hidden={openSR} />
            <FolderOpen className="folder" hidden={closeSR} /> SR Mgt.
          </Typography>
          <ul className="tree-view-child" hidden={closeSR}>
            <li>
              <Typography onClick={handleOpenSRProcessing}>
                <Add fontSize="small" hidden={openSRProcessing} />
                <HorizontalRule fontSize="small" hidden={closeSRProcessing} />
                <Folder className="folder" hidden={openSRProcessing} />
                <FolderOpen className="folder" hidden={closeSRProcessing} /> SR
                Processing
              </Typography>
              <ul className="tree-view-child" hidden={closeSRProcessing}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý nhóm làm việc xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra tình trạng nhóm làm việc xử lý SR
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenSRStatus}>
                <Add fontSize="small" hidden={openSRStatus} />
                <HorizontalRule fontSize="small" hidden={closeSRStatus} />
                <Folder className="folder" hidden={openSRStatus} />
                <FolderOpen className="folder" hidden={closeSRStatus} /> SR
                Status
              </Typography>
              <ul className="tree-view-child" hidden={closeSRStatus}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra SR chưa được xử lý
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chi tiết tiếp nhận SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thời gian xử lý SR của từng cá nhân
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình từng bước xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tổng hợp của từng người xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình xử lý theo từng lý do SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình giải quyết SR của đối tác
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình giải quyết SR theo từng đơn vị(Mới)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình xử lý SR theo từng sản phẩm(Tỉ lệ)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình giải quyết SR theo từng đơn vị
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Typography onClick={handleOpenOBMgt}>
            <Add fontSize="small" hidden={openOB} />
            <HorizontalRule fontSize="small" hidden={closeOB} />
            <Folder className="folder" hidden={openOB} />
            <FolderOpen className="folder" hidden={closeOB} /> OB Mgt.
          </Typography>
          <ul className="tree-view-child" hidden={closeOB}>
            <li>
              <Typography onClick={handleOpenOBProcessing}>
                <Add fontSize="small" hidden={openProcessing} />
                <HorizontalRule fontSize="small" hidden={closeProcessing} />
                <Folder className="folder" hidden={openProcessing} />
                <FolderOpen className="folder" hidden={closeProcessing} /> OB
                Processing
              </Typography>
              <ul className="tree-view-child" hidden={closeProcessing}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Lấy dữ liệu OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân bổ nhân viên xử lý OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý bắt buộc OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân bổ nhân viên xử lý OB đặt trước
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenOBStatus}>
                <Add fontSize="small" hidden={openStatus} />
                <HorizontalRule fontSize="small" hidden={closeStatus} />
                <Folder className="folder" hidden={openStatus} />
                <FolderOpen className="folder" hidden={closeStatus} /> OB Status
              </Typography>
              <ul className="tree-view-child" hidden={closeStatus}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình xử lý OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình xử lý OB của khách hàng được chỉ định
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình thống kê xử lý OB
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Typography onClick={handleOpenCustomerMgt}>
            <Add fontSize="small" hidden={openCustomer} />
            <HorizontalRule fontSize="small" hidden={closeCustomer} />
            <Folder className="folder" hidden={openCustomer} />
            <FolderOpen className="folder" hidden={closeCustomer} /> Customer
            Mgt.
          </Typography>
          <ul className="tree-view-child" hidden={closeCustomer}>
            <li>
              <Typography onClick={handleOpenCustomerBasic}>
                <Add fontSize="small" hidden={openCustomerBasic} />
                <HorizontalRule fontSize="small" hidden={closeCustomerBasic} />
                <Folder className="folder" hidden={openCustomerBasic} />
                <FolderOpen className="folder" hidden={closeCustomerBasic} />
                Basic Customer Info
              </Typography>
              <ul className="tree-view-child" hidden={closeCustomerBasic}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin cơ bản của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin chi tiết của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra thông tin khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý thẻ/Ngân hàng của từng khách hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenCustomerVip}>
                <Add fontSize="small" hidden={openCustomerVip} />
                <HorizontalRule fontSize="small" hidden={closeCustomerVip} />
                <Folder className="folder" hidden={openCustomerVip} />
                <FolderOpen className="folder" hidden={closeCustomerVip} />
                VIP card
              </Typography>
              <ul className="tree-view-child" hidden={closeCustomerVip}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tạo dữ liệu khách hàng VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký khách hàng VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký phát hành thẻ VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình trạng phát hành thẻ VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình trạng đặt hàng của khách VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký promotions khách hàng VIP
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenCustomerSMS}>
                <Add fontSize="small" hidden={openCustomerSMS} />
                <HorizontalRule fontSize="small" hidden={closeCustomerSMS} />
                <Folder className="folder" hidden={openCustomerSMS} />
                <FolderOpen className="folder" hidden={closeCustomerSMS} />
                SMS
              </Typography>
              <ul className="tree-view-child" hidden={closeCustomerSMS}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Gửi tin nhắn về sản phẩm mới
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Gửi tin nhắn
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hủy gửi tin nhắn
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Số lượng tin nhắn được gửi
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình SMS đặt hàng của khách hàng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Typography onClick={handleOpenVoucherMgt}>
            <Add fontSize="small" hidden={openVoucher} />
            <HorizontalRule fontSize="small" hidden={closeVoucher} />
            <Folder className="folder" hidden={openVoucher} />
            <FolderOpen className="folder" hidden={closeVoucher} /> Voucher Mgt.
          </Typography>
          <ul className="tree-view-child" hidden={closeVoucher}>
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
                  <a href className="document-title">
                    <Description className="file" />
                    Tiếp nhận đăng ký đặt hàng bằng phiếu mua hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hủy bỏ đặt hàng phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra việc đặt phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình hủy bỏ phiếu mua hàng tích lũy điểm
                  </a>
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
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiếp nhận đặt hàng phiếu mua hàng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Typography onClick={handleOpenB2BMgt}>
            <Add fontSize="small" hidden={openB2B} />
            <HorizontalRule fontSize="small" hidden={closeB2B} />
            <Folder className="folder" hidden={openB2B} />
            <FolderOpen className="folder" hidden={closeB2B} /> B2B-Order Mgt.
          </Typography>
          <ul className="tree-view-child" hidden={closeB2B}>
            <li>
              <Typography onClick={handleOpenB2BProcessing}>
                <Add fontSize="small" hidden={openB2BProcessing} />
                <HorizontalRule fontSize="small" hidden={closeB2BProcessing} />
                <Folder className="folder" hidden={openB2BProcessing} />
                <FolderOpen
                  className="folder"
                  hidden={closeB2BProcessing}
                />{" "}
                B2B-Order Processing
              </Typography>
              <ul className="tree-view-child" hidden={closeB2BProcessing}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B-Đăng ký hợp đồng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B-Phê duyệt hợp đồng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B-In hợp đồng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B-Tiếp nhận đặt hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenB2BStatus}>
                <Add fontSize="small" hidden={openB2BStatus} />
                <HorizontalRule fontSize="small" hidden={closeB2BStatus} />
                <Folder className="folder" hidden={openB2BStatus} />
                <FolderOpen className="folder" hidden={closeB2BStatus} />{" "}
                B2B-Order Status
              </Typography>
              <ul className="tree-view-child" hidden={closeB2BStatus}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B-Tình trạng đặt hàng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Typography onClick={handleOpenScreenMgt}>
            <Add fontSize="small" hidden={openScreen} />
            <HorizontalRule fontSize="small" hidden={closeScreen} />
            <Folder className="folder" hidden={openScreen} />
            <FolderOpen className="folder" hidden={closeScreen} /> Screen Pop
            Mgt.
          </Typography>
          <ul className="tree-view-child" hidden={closeScreen}>
            <li>
              <Typography onClick={handleOpenScreenAgent}>
                <Add fontSize="small" hidden={openScreenAgent} />
                <HorizontalRule fontSize="small" hidden={closeScreenAgent} />
                <Folder className="folder" hidden={openScreenAgent} />
                <FolderOpen className="folder" hidden={closeScreenAgent} />{" "}
                Agent ID Mgt
              </Typography>
              <ul className="tree-view-child" hidden={closeScreenAgent}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Perinfo Management(Only employee of CC Dept)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenScreenExtension}>
                <Add fontSize="small" hidden={openScreenExtension} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeScreenExtension}
                />
                <Folder className="folder" hidden={openScreenExtension} />
                <FolderOpen
                  className="folder"
                  hidden={closeScreenExtension}
                />{" "}
                Extension Mgt
              </Typography>
              <ul className="tree-view-child" hidden={closeScreenExtension}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Extension Management
                  </a>
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
