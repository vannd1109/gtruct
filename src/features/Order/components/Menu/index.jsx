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
                      Tình hình tiếp nhận đặt hàng phiếu mua hàng
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
                      B2B-Tình hình đặt hàng
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
