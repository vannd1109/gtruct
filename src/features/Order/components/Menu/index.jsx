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
  const [openOrderMgt, setOpenOrderMgt] = useState(false);
  const [closeOrderMgt, setCloseOrderMgt] = useState(true);

  const [openOrderProcessing, setOpenOrderProcessing] = useState(false);
  const [closeOrderProcessing, setCloseOrderProcessing] = useState(true);

  const [openOrderComplaintStatus, setOpenOrderComplaintStatus] =
    useState(false);
  const [closeOrderComplaintStatus, setCloseOrderComplaintStatus] =
    useState(true);

  const [openCustomerPerformance, setOpenCustomerPerformance] = useState(false);
  const [closeCustomerPerformance, setCloseCustomerPerformance] =
    useState(true);

  // SR Mgt

  const [openSRMgt, setOpenSRMgt] = useState(false);
  const [closeSRMgt, setCloseSRMgt] = useState(true);

  const [openSRProcessing, setOpenSRProcessing] = useState(false);
  const [closeSRProcessing, setCloseSRProcessing] = useState(true);

  const [openSRStatus, setOpenSRStatus] = useState(false);
  const [closeSRStatus, setCloseSRStatus] = useState(true);

  // OB Mgt

  const [openOBMgt, setOpenOBMgt] = useState(false);
  const [closeOBMgt, setCloseOBMgt] = useState(true);

  const [openOBProcessing, setOpenOBProcessing] = useState(false);
  const [closeOBProcessing, setCloseOBProcessing] = useState(true);

  const [openOBStatus, setOpenOBStatus] = useState(false);
  const [closeOBStatus, setCloseOBStatus] = useState(true);

  // Customer Mgt
  const [openCustomerMgt, setOpenCustomerMgt] = useState(false);
  const [closeCustomerMgt, setCloseCustomerMgt] = useState(true);

  const [openBasicCustomerInfo, setOpenBasicCustomerInfo] = useState(false);
  const [closeBasicCustomerInfo, setCloseBasicCustomerInfo] = useState(true);

  const [openVIPCard, setOpenVIPCard] = useState(false);
  const [closeVIPCard, setCloseVIPCard] = useState(true);

  const [openSMS, setOpenSMS] = useState(false);
  const [closeSMS, setCloseSMS] = useState(true);

  // Vouchder Mgt
  const [openVoucherMgt, setOpenVoucherMgt] = useState(false);
  const [closeVoucherMgt, setCloseVoucherMgt] = useState(true);

  const [openVoucherProcessing, setOpenVoucherProcessing] = useState(false);
  const [closeVoucherProcessing, setCloseVoucherProcessing] = useState(true);

  const [openVoucherStatus, setOpenVoucherStatus] = useState(false);
  const [closeVoucherStatus, setCloseVoucherStatus] = useState(true);

  // B2B Order Mgt
  const [openB2BOrderMgt, setOpenB2BOrderMgt] = useState(false);
  const [closeB2BOrderMgt, setCloseB2BOrderMgt] = useState(true);

  const [openB2BOrderProcessing, setOpenB2BOrderProcessing] = useState(false);
  const [closeB2BOrderProcessing, setCloseB2BOrderProcessing] = useState(true);

  const [openB2BOrderStatus, setOpenB2BOrderStatus] = useState(false);
  const [closeB2BOrderStatus, setCloseB2BOrderStatus] = useState(true);

  // Screen Pop Mgt
  const [openScreenPopMgt, setOpenScreenPopMgt] = useState(false);
  const [closeScreenPopMgt, setCloseScreenPopMgt] = useState(true);

  const [openAgentIDMgt, setOpenAgentIDMgt] = useState(false);
  const [closeAgentIDMgt, setCloseAgentIDMgt] = useState(true);

  const [openExtensionMgt, setOpenExtensionMgt] = useState(false);
  const [closeExtensionMgt, setCloseExtensionMgt] = useState(true);

  // ----------------------------------handle--------------

  // Order Mgt

  const handleOpenOrderMgt = (e) => {
    setOpenOrderMgt(!openOrderMgt);
    setCloseOrderMgt(!closeOrderMgt);
  };

  const handleOpenOrderProcessing = (e) => {
    setOpenOrderProcessing(!openOrderProcessing);
    setCloseOrderProcessing(!closeOrderProcessing);
  };

  const handleOpenOrderComplaintStatus = (e) => {
    setOpenOrderComplaintStatus(!openOrderComplaintStatus);
    setCloseOrderComplaintStatus(!closeOrderComplaintStatus);
  };

  const handleOpenCustomerPerformance = (e) => {
    setOpenCustomerPerformance(!openCustomerPerformance);
    setCloseCustomerPerformance(!closeCustomerPerformance);
  };

  // SR Mgt

  const handleOpenSRMgt = (e) => {
    setOpenSRMgt(!openSRMgt);
    setCloseSRMgt(!closeSRMgt);
  };

  const handleOpenSRProcessing = (e) => {
    setOpenSRProcessing(!openSRProcessing);
    setCloseSRProcessing(!closeSRProcessing);
  };

  const handleOpenSRStatus = (e) => {
    setOpenSRStatus(!openSRStatus);
    setCloseSRStatus(!closeSRStatus);
  };

  // OB Mgt
  const handleOpenOBMgt = (e) => {
    setOpenOBMgt(!openOBMgt);
    setCloseOBMgt(!closeOBMgt);
  };

  const handleOpenOBProcessing = (e) => {
    setOpenOBProcessing(!openOBProcessing);
    setCloseOBProcessing(!closeOBProcessing);
  };

  const handleOpenOBStatus = (e) => {
    setOpenOBStatus(!openOBStatus);
    setCloseOBStatus(!closeOBStatus);
  };

  // Customer Mgt
  const handleOpenCustomerMgt = (e) => {
    setOpenCustomerMgt(!openCustomerMgt);
    setCloseCustomerMgt(!closeCustomerMgt);
  };

  const handleOpenBasicCustomerInfo = (e) => {
    setOpenBasicCustomerInfo(!openBasicCustomerInfo);
    setCloseBasicCustomerInfo(!closeBasicCustomerInfo);
  };

  const handleOpenVIPCard = (e) => {
    setOpenVIPCard(!openVIPCard);
    setCloseVIPCard(!closeVIPCard);
  };

  const handleOpenSMS = (e) => {
    setOpenSMS(!openSMS);
    setCloseSMS(!closeSMS);
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

  // B2B Order Mgt
  const handleOpenB2BOrderMgt = (e) => {
    setOpenB2BOrderMgt(!openB2BOrderMgt);
    setCloseB2BOrderMgt(!closeB2BOrderMgt);
  };

  const handleOpenB2BOrderProcessing = (e) => {
    setOpenB2BOrderProcessing(!openB2BOrderProcessing);
    setCloseB2BOrderProcessing(!closeB2BOrderProcessing);
  };

  const handleOpenB2BOrderStatus = (e) => {
    setOpenB2BOrderStatus(!openB2BOrderStatus);
    setCloseB2BOrderStatus(!closeB2BOrderStatus);
  };

  // Screen Pop Mgt
  const handleOpenScreenPopMgt = (e) => {
    setOpenScreenPopMgt(!openScreenPopMgt);
    setCloseScreenPopMgt(!closeScreenPopMgt);
  };

  const handleOpenAgentIDMgt = (e) => {
    setOpenAgentIDMgt(!openAgentIDMgt);
    setCloseAgentIDMgt(!closeAgentIDMgt);
  };

  const handleOpenExtensionMgt = (e) => {
    setOpenExtensionMgt(!openExtensionMgt);
    setCloseExtensionMgt(!closeExtensionMgt);
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
            <Typography onClick={handleOpenOrderMgt}>
              <Add fontSize="small" hidden={openOrderMgt} />
              <HorizontalRule fontSize="small" hidden={closeOrderMgt} />
              <Folder className="folder" hidden={openOrderMgt} />
              <FolderOpen className="folder" hidden={closeOrderMgt} /> Order Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeOrderMgt}>
              <li>
                <Typography onClick={handleOpenOrderProcessing}>
                  <Add fontSize="small" hidden={openOrderProcessing} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeOrderProcessing}
                  />
                  <Folder className="folder" hidden={openOrderProcessing} />
                  <FolderOpen
                    className="folder"
                    hidden={closeOrderProcessing}
                  />
                  Order Processing
                </Typography>
                <ul className="tree-view-child" hidden={closeOrderProcessing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tiếp nhận đặt hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tiến hành đặt hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tiếp nhận khiếu nại của khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Giải quyết khiếu nại
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tiến hành thanh toán
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra người nhận hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xử lý đơn hàng COD
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thông tin khách hàng sử dụng Credit Loan
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra trạng thái phe duyệt Credit Loan
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xử lý đơn hàng COD_Fastdely
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenOrderComplaintStatus}>
                  <Add fontSize="small" hidden={openOrderComplaintStatus} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeOrderComplaintStatus}
                  />
                  <Folder
                    className="folder"
                    hidden={openOrderComplaintStatus}
                  />
                  <FolderOpen
                    className="folder"
                    hidden={closeOrderComplaintStatus}
                  />
                  Order/Complaint Status
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={closeOrderComplaintStatus}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tiếp nhận đơn đặt hàng TMR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tiếp nhận đặt hàng theo nhóm làm việc
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình khách hàng theo từng giai đoạn tiến hành đặt
                      hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình chi tiết về đơn đặt hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình hủy đơn đặt hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình khách hàng đặt hàng theo sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Lý do khiếu nại của khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình khiếu nại của khách hàng theo từng sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra tình hình khiếu nại của khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thống kê lượng sản phẩm bị lỗi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình trạng đặt hàng(Tổng cộng) của TMR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình trạng tiếp nhận đươn đặt hàng(nhóm) của TMR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình hàng tồn kho của đơn hàng đặt trước
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tiếp nhận đặt hàng Direct Delivery
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thống kê lý do hủy-trả hàng theo tháng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tiếp nhận đặt hàng TMR - INSURANCE
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenCustomerPerformance}>
                  <Add fontSize="small" hidden={openCustomerPerformance} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeCustomerPerformance}
                  />
                  <Folder className="folder" hidden={openCustomerPerformance} />
                  <FolderOpen
                    className="folder"
                    hidden={closeCustomerPerformance}
                  />
                  Customer Performance
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={closeCustomerPerformance}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình thực tế tiếp nhận từng khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Chọn lựa khách hàng theo tiêu chuẩn đặt hàng/doanh thu
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleOpenSRMgt}>
              <Add fontSize="small" hidden={openSRMgt} />
              <HorizontalRule fontSize="small" hidden={closeSRMgt} />
              <Folder className="folder" hidden={openSRMgt} />
              <FolderOpen className="folder" hidden={closeSRMgt} /> SR Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeSRMgt}>
              <li>
                <Typography onClick={handleOpenSRProcessing}>
                  <Add fontSize="small" hidden={openSRProcessing} />
                  <HorizontalRule fontSize="small" hidden={closeSRProcessing} />
                  <Folder className="folder" hidden={openSRProcessing} />
                  <FolderOpen className="folder" hidden={closeSRProcessing} />
                  SR Processing
                </Typography>
                <ul className="tree-view-child" hidden={closeSRProcessing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xử lý SR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý nhóm làm việc xử lý SR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra tình trạng nhóm làm việc xử lý SR
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenSRStatus}>
                  <Add fontSize="small" hidden={openSRStatus} />
                  <HorizontalRule hidden={closeSRStatus} fontSize="small" />
                  <Folder className="folder" hidden={openSRStatus} />
                  <FolderOpen className="folder" hidden={closeSRStatus} />
                  SR Status
                </Typography>
                <ul className="tree-view-child" hidden={closeSRStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra SR chưa được xử lý
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình chi tiết tiếp nhận SR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thời gian xử lý SR của từng cá nhân
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình từng bước xử lý SR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tổng hợp của từng người xử lý SR
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình xử lý theo từng lý do
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình giải quyết SR của đối tác
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình giải quyết SR theo từng đơn vị(Mới)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình xử lý SR theo từng sản phẩm(Tỉ lệ)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình giải quyết SR theo từng đơn vị
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleOpenOBMgt}>
              <Add hidden={openOBMgt} fontSize="small" />
              <HorizontalRule hidden={closeOBMgt} fontSize="small" />
              <Folder className="folder" hidden={openOBMgt} />
              <FolderOpen className="folder" hidden={closeOBMgt} /> OB Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeOBMgt}>
              <li>
                <Typography onClick={handleOpenOBProcessing}>
                  <Add hidden={openOBProcessing} fontSize="small" />
                  <HorizontalRule hidden={closeOBProcessing} fontSize="small" />
                  <Folder className="folder" hidden={openOBProcessing} />
                  <FolderOpen className="folder" hidden={closeOBProcessing} />
                  OB Processing
                </Typography>
                <ul className="tree-view-child" hidden={closeOBProcessing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Lấy dữ liệu OB
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phân bổ nhân viên xử lý
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xử lý OB
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xử lý bắt buộc
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phân bổ nhân vien xử lý OB đặt trước
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenOBStatus}>
                  <Add hidden={openOBStatus} fontSize="small" />
                  <HorizontalRule hidden={closeOBStatus} fontSize="small" />
                  <Folder className="folder" hidden={openOBStatus} />
                  <FolderOpen className="folder" hidden={closeOBStatus} />
                  OB Status
                </Typography>
                <ul className="tree-view-child" hidden={closeOBStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình xử lý OB
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình xử lý OB của khách hàng được chỉ định
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình thống kê xử lý OB
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleOpenCustomerMgt}>
              <Add hidden={openCustomerMgt} fontSize="small" />
              <HorizontalRule hidden={closeCustomerMgt} fontSize="small" />
              <Folder className="folder" hidden={openCustomerMgt} />
              <FolderOpen className="folder" hidden={closeCustomerMgt} />{" "}
              Customer Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeCustomerMgt}>
              <li>
                <Typography onClick={handleOpenBasicCustomerInfo}>
                  <Add hidden={openBasicCustomerInfo} fontSize="small" />
                  <HorizontalRule
                    hidden={closeBasicCustomerInfo}
                    fontSize="small"
                  />
                  <Folder className="folder" hidden={openBasicCustomerInfo} />
                  <FolderOpen
                    className="folder"
                    hidden={closeBasicCustomerInfo}
                  />
                  Basic Customer Info
                </Typography>
                <ul className="tree-view-child" hidden={closeBasicCustomerInfo}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thông tin cơ bản của khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thông tin chi tiết của khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra thông tin khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý thẻ/Ngân hàng của từng khách hàng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenVIPCard}>
                  <Add hidden={openVIPCard} fontSize="small" />
                  <HorizontalRule hidden={closeVIPCard} fontSize="small" />
                  <Folder className="folder" hidden={openVIPCard} />
                  <FolderOpen className="folder" hidden={closeVIPCard} />
                  VIP Card
                </Typography>
                <ul className="tree-view-child" hidden={closeVIPCard}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tạo dữ liệu khách hàng VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký khách hàng VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập phát hành thẻ VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình trạng phát hành thẻ VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình trạng đặt hàng của khách VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký khuyễn mãi khách hàng VIP
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenSMS}>
                  <Add hidden={openSMS} fontSize="small" />
                  <HorizontalRule hidden={closeSMS} fontSize="small" />
                  <Folder className="folder" hidden={openSMS} />
                  <FolderOpen className="folder" hidden={closeSMS} />
                  SMS
                </Typography>
                <ul className="tree-view-child" hidden={closeSMS}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Gửi tin nhắn về sản phẩm mới
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Gửi tin nhắn
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hủy gửi tin nhắn
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Số lượng tin nhắn được gửi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình SMS đặt hàng của từng khách hàng
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleOpenVoucherMgt}>
              <Add hidden={openVoucherMgt} fontSize="small" />
              <HorizontalRule hidden={closeVoucherMgt} fontSize="small" />
              <Folder className="folder" hidden={openVoucherMgt} />
              <FolderOpen className="folder" hidden={closeVoucherMgt} /> Voucher
              Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeVoucherMgt}>
              <li>
                <Typography onClick={handleOpenVoucherProcessing}>
                  <Add hidden={openVoucherProcessing} fontSize="small" />
                  <HorizontalRule
                    hidden={closeVoucherProcessing}
                    fontSize="small"
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
                      Tiếp nhận đăng ký đặt hàng bằng phiếu mua hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hủy bỏ đặt hàng phiếu mua hàng tích lũy điểm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra việc đặt phiếu mua hàng tích lũy điểm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình hủy bỏ phiếu mua hàng tích lũy điểm
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenVoucherStatus}>
                  <Add hidden={openVoucherStatus} fontSize="small" />
                  <HorizontalRule
                    hidden={closeVoucherStatus}
                    fontSize="small"
                  />
                  <Folder className="folder" hidden={openVoucherStatus} />
                  <FolderOpen className="folder" hidden={closeVoucherStatus} />
                  Voucher Status
                </Typography>
                <ul className="tree-view-child" hidden={closeVoucherStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tiếp nhận đặt hàng phiếu mua hàng
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleOpenB2BOrderMgt}>
              <Add hidden={openB2BOrderMgt} fontSize="small" />
              <HorizontalRule hidden={closeB2BOrderMgt} fontSize="small" />
              <Folder className="folder" hidden={openB2BOrderMgt} />
              <FolderOpen className="folder" hidden={closeB2BOrderMgt} /> B2B
              Order Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeB2BOrderMgt}>
              <li>
                <Typography onClick={handleOpenB2BOrderProcessing}>
                  <Add hidden={openB2BOrderProcessing} fontSize="small" />
                  <HorizontalRule
                    hidden={closeB2BOrderProcessing}
                    fontSize="small"
                  />
                  <Folder className="folder" hidden={openB2BOrderProcessing} />
                  <FolderOpen
                    className="folder"
                    hidden={closeB2BOrderProcessing}
                  />
                  B2B Order Processing
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={closeB2BOrderProcessing}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B-Đăng ký hợp đồng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B-Phê duyệt hợp đồng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B-In hợp đồng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B-Tiếp nhận đặt hàng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenB2BOrderStatus}>
                  <Add hidden={openB2BOrderStatus} fontSize="small" />
                  <HorizontalRule
                    hidden={closeB2BOrderStatus}
                    fontSize="small"
                  />
                  <Folder className="folder" hidden={openB2BOrderStatus} />
                  <FolderOpen className="folder" hidden={closeB2BOrderStatus} />
                  B2B Order Status
                </Typography>
                <ul className="tree-view-child" hidden={closeB2BOrderStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B2B-Tình hình đặt hàng
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-2">
            <Typography onClick={handleOpenScreenPopMgt}>
              <Add hidden={openScreenPopMgt} fontSize="small" />
              <HorizontalRule hidden={closeScreenPopMgt} fontSize="small" />
              <Folder className="folder" hidden={openScreenPopMgt} />
              <FolderOpen className="folder" hidden={closeScreenPopMgt} />
              ScreenPop Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeScreenPopMgt}>
              <li>
                <Typography onClick={handleOpenAgentIDMgt}>
                  <Add hidden={openAgentIDMgt} fontSize="small" />
                  <HorizontalRule hidden={closeAgentIDMgt} fontSize="small" />
                  <Folder className="folder" hidden={openAgentIDMgt} />
                  <FolderOpen className="folder" hidden={closeAgentIDMgt} />
                  Agent ID Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closeAgentIDMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Perinfo Management (Only employee of CC Dept)
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenExtensionMgt}>
                  <Add hidden={openExtensionMgt} fontSize="small" />
                  <HorizontalRule hidden={closeExtensionMgt} fontSize="small" />
                  <Folder className="folder" hidden={openExtensionMgt} />
                  <FolderOpen className="folder" hidden={closeExtensionMgt} />
                  Extension Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closeExtensionMgt}>
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
