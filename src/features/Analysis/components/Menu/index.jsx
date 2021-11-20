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

  // Master Data
  const [analysisMasterData, setAnalysisMasterData] = useState(false);

  const [businessPlan, setBusinessPlan] = useState(false);

  const [masterData, setMasterData] = useState(false);

  const [marginalProfitCalculate, setMarginalProfitCalculate] = useState(false);

  // Actual Result Anal
  const [actualResultAnal, setActualResultAnal] = useState(false);

  const [dailyAnal, setDailyAnal] = useState(false);

  const [salesAnalByPeriod, setSalesAnalByPeriod] = useState(false);

  const [itemWiseAnal, setItemWiseAnal] = useState(false);

  const [marginalAnal, setMarginalAnal] = useState(false);

  const [timeAnal, setTimeAnal] = useState(false);

  const [vendorWiseAnal, setVendorWiseAnal] = useState(false);

  const [complaintAnal, setComplaintAnal] = useState(false);

  const [logisticsAnal, setLogisticsAnal] = useState(false);

  // Media Anal
  const [mediaAnal, setMediaAnal] = useState(false);

  const [tv, setTV] = useState(false);

  const [catalog, setCatalog] = useState(false);

  // Customer Anal
  const [customerAnal, setCustomerAnal] = useState(false);

  const [customerDistribution, setCustomerDistribution] = useState(false);

  const [reginalAnal, setReginalAnal] = useState(false);

  const [classAnal, setClassAnal] = useState(false);

  const [
    customerPeriodPerformanceDistribution,
    setCustomerPeriodPerformanceDistribution,
  ] = useState(false);

  const [
    customerPerformanceDistributionByMonth,
    setCustomerPerformanceDistributionByMonth,
  ] = useState(false);

  const [
    customerRankingPerformanceAnalysis,
    setCustomerRankingPerformanceAnalysis,
  ] = useState(false);

  const [customerAnalWithRepeatedOrder, setCustomerAnalWithRepeatedOrder] =
    useState(false);

  const [monthlyCustomerData, setMonthlyCustomerData] = useState(false);

  // ----------------------------------handle-----------------

  // Master Data
  const handleAnalysisMasterData = (e) => {
    setAnalysisMasterData(!analysisMasterData);
  };

  const handleBusinessPlan = (e) => {
    setBusinessPlan(!businessPlan);
  };

  const handleMasterData = (e) => {
    setMasterData(!masterData);
  };

  const handleMarginalProfitCalculate = (e) => {
    setMarginalProfitCalculate(!marginalProfitCalculate);
  };

  // Actual Result Anal
  const handleActualResultAnal = (e) => {
    setActualResultAnal(!actualResultAnal);
  };

  const handleDailyAnal = (e) => {
    setDailyAnal(!dailyAnal);
  };

  const handleSalesAnalByPeriod = (e) => {
    setSalesAnalByPeriod(!salesAnalByPeriod);
  };

  const handleItemWiseAnal = (e) => {
    setItemWiseAnal(!itemWiseAnal);
  };

  const handleMarginalAnal = (e) => {
    setMarginalAnal(!marginalAnal);
  };

  const handleTimeAnal = (e) => {
    setTimeAnal(!timeAnal);
  };

  const handleVendorWiseAnal = (e) => {
    setVendorWiseAnal(!vendorWiseAnal);
  };

  const handleComplaintAnal = (e) => {
    setComplaintAnal(!complaintAnal);
  };

  const handleLogisticsAnal = (e) => {
    setLogisticsAnal(!logisticsAnal);
  };

  // Media Anal
  const handleMediaAnal = (e) => {
    setMediaAnal(!mediaAnal);
  };

  const handleTV = (e) => {
    setTV(!tv);
  };

  const handleCatalog = (e) => {
    setCatalog(!catalog);
  };

  // Customer Anal
  const handleCustomerAnal = (e) => {
    setCustomerAnal(!customerAnal);
  };

  const handleCustomerDistribution = (e) => {
    setCustomerDistribution(!customerDistribution);
  };

  const handleReginalAnal = (e) => {
    setReginalAnal(!reginalAnal);
  };

  const handleClassAnal = (e) => {
    setClassAnal(!classAnal);
  };

  const handleCustomerPeriodPerformanceDistribution = (e) => {
    setCustomerPeriodPerformanceDistribution(
      !customerPeriodPerformanceDistribution
    );
  };

  const handleCustomerPerformanceDistributionByMonth = (e) => {
    setCustomerPerformanceDistributionByMonth(
      !customerPerformanceDistributionByMonth
    );
  };

  const handleCustomerRankingPerformanceAnalysis = (e) => {
    setCustomerRankingPerformanceAnalysis(!customerRankingPerformanceAnalysis);
  };

  const handleCustomerAnalWithRepeatedOrder = (e) => {
    setCustomerAnalWithRepeatedOrder(!customerAnalWithRepeatedOrder);
  };

  const handleMonthlyCustomerData = (e) => {
    setMonthlyCustomerData(!monthlyCustomerData);
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
            <Typography onClick={handleAnalysisMasterData}>
              <Add fontSize="small" hidden={analysisMasterData} />
              <HorizontalRule fontSize="small" hidden={!analysisMasterData} />
              <Folder className="folder" hidden={analysisMasterData} />
              <FolderOpen className="folder" hidden={!analysisMasterData} />
              Master Data
            </Typography>
            <ul className="tree-view-child" hidden={!analysisMasterData}>
              <li>
                <Typography onClick={handleBusinessPlan}>
                  <Add fontSize="small" hidden={businessPlan} />
                  <HorizontalRule fontSize="small" hidden={!businessPlan} />
                  <Folder className="folder" hidden={businessPlan} />
                  <FolderOpen className="folder" hidden={!businessPlan} />
                  BusinessPlan
                </Typography>
                <ul className="tree-view-child" hidden={!businessPlan}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng kí kết quả kế hoạch kinh doanh
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleMasterData}>
                  <Add fontSize="small" hidden={masterData} />
                  <HorizontalRule fontSize="small" hidden={!masterData} />
                  <Folder className="folder" hidden={masterData} />
                  <FolderOpen className="folder" hidden={!masterData} />
                  Master Data
                </Typography>
                <ul className="tree-view-child" hidden={!masterData}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng kí thông tin doanh thu thực tế
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleMarginalProfitCalculate}>
                  <Add fontSize="small" hidden={marginalProfitCalculate} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!marginalProfitCalculate}
                  />
                  <Folder className="folder" hidden={marginalProfitCalculate} />
                  <FolderOpen
                    className="folder"
                    hidden={!marginalProfitCalculate}
                  />
                  Marginal Profit Calculate
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={!marginalProfitCalculate}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thông tin chi phí ước tính
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thông tin chi phí thực tế
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tạo dữ liệu marginal profit
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mt-2">
            <Typography onClick={handleActualResultAnal}>
              <Add fontSize="small" hidden={actualResultAnal} />
              <HorizontalRule fontSize="small" hidden={!actualResultAnal} />
              <Folder className="folder" hidden={actualResultAnal} />
              <FolderOpen className="folder" hidden={!actualResultAnal} />
              Actual Result Anal
            </Typography>
            <ul className="tree-view-child" hidden={!actualResultAnal}>
              <li>
                <Typography onClick={handleDailyAnal}>
                  <Add fontSize="small" hidden={dailyAnal} />
                  <HorizontalRule fontSize="small" hidden={!dailyAnal} />
                  <Folder className="folder" hidden={dailyAnal} />
                  <FolderOpen className="folder" hidden={!dailyAnal} />
                  Daily Anal
                </Typography>
                <ul className="tree-view-child" hidden={!dailyAnal}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tiếp nhận từng loại đơn đặt hàng(Lịch)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Doanh thu theo kênh bán hàng(Lịch)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      So sánh tình hình doanh thu của mỗi tháng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình thực tế theo kế hoạch kinh doanh(Mới)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      GUINNESS
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleSalesAnalByPeriod}>
                  <Add fontSize="small" hidden={salesAnalByPeriod} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!salesAnalByPeriod}
                  />
                  <Folder className="folder" hidden={salesAnalByPeriod} />
                  <FolderOpen className="folder" hidden={!salesAnalByPeriod} />
                  Sales Anal By Period
                </Typography>
                <ul className="tree-view-child" hidden={!salesAnalByPeriod}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kết quả bán mỗi ngày của từng kênh bán hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra kết quả bán hàng mỗi ngày của từng kênh bán hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đặt hàng/xuất kho theo kênh bán hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đặt hàng/xuất kho theo sản phẩm và kênh bán
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đặt hàng/xuất kho thực tế của từng đơn vị
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đặt hàng/trả lại thực tế của từng đơn vị
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình doanh thu mua/bán theo từng đơn vị
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Bảng tổng hợp ngày đặt hàng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleItemWiseAnal}>
                  <Add fontSize="small" hidden={itemWiseAnal} />
                  <HorizontalRule fontSize="small" hidden={!itemWiseAnal} />
                  <Folder className="folder" hidden={itemWiseAnal} />
                  <FolderOpen className="folder" hidden={!itemWiseAnal} />
                  Item Wise Anal
                </Typography>
                <ul className="tree-view-child" hidden={!itemWiseAnal}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình Best/Worst của sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình thực tế theo từng nhãn hiệu
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đặt hàng theo tháng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đặt hàng theo ngày/giờ của sản phẩm
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleMarginalAnal}>
                  <Add fontSize="small" hidden={marginalAnal} />
                  <HorizontalRule fontSize="small" hidden={!marginalAnal} />
                  <Folder className="folder" hidden={marginalAnal} />
                  <FolderOpen className="folder" hidden={!marginalAnal} />
                  Marginal Anal
                </Typography>
                <ul className="tree-view-child" hidden={!marginalAnal}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình lợi nhuận đặt hàng/xuất kho theo kênh bán
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình lợi nhuận đặt hàng/xuất kho thực tế theo từng
                      đơn vị
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleTimeAnal}>
                  <Add fontSize="small" hidden={timeAnal} />
                  <HorizontalRule fontSize="small" hidden={!timeAnal} />
                  <Folder className="folder" hidden={timeAnal} />
                  <FolderOpen className="folder" hidden={!timeAnal} />
                  Time Anal
                </Typography>
                <ul className="tree-view-child" hidden={!timeAnal}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phân tích khách hàng theo các ngày trong tuần
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleVendorWiseAnal}>
                  <Add fontSize="small" hidden={vendorWiseAnal} />
                  <HorizontalRule fontSize="small" hidden={!vendorWiseAnal} />
                  <Folder className="folder" hidden={vendorWiseAnal} />
                  <FolderOpen className="folder" hidden={!vendorWiseAnal} />
                  Vendor Wise Anal
                </Typography>
                <ul className="tree-view-child" hidden={!vendorWiseAnal}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình bán hàng theo tháng của từng nhà cung cấp
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình thanh toán theo sản phẩm/nhà cung cấp
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình chi tiết bán hàng của từng nhà cung cấp
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình chi tiết bán hàng của từng nhà cung cấp_KM
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleComplaintAnal}>
                  <Add fontSize="small" hidden={complaintAnal} />
                  <HorizontalRule fontSize="small" hidden={!complaintAnal} />
                  <Folder className="folder" hidden={complaintAnal} />
                  <FolderOpen className="folder" hidden={!complaintAnal} />
                  Complaint Anal
                </Typography>
                <ul className="tree-view-child" hidden={!complaintAnal}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Lý do hủy đơn đặt hàng/trả lại hàng/đổi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình khiếu nại của khách hàng đối với từng sản phẩm
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleLogisticsAnal}>
                  <Add fontSize="small" hidden={logisticsAnal} />
                  <HorizontalRule fontSize="small" hidden={!logisticsAnal} />
                  <Folder className="folder" hidden={logisticsAnal} />
                  <FolderOpen className="folder" hidden={!logisticsAnal} />
                  Logistics Anal
                </Typography>
                <ul className="tree-view-child" hidden={!logisticsAnal}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tổng số sản phẩm/số lượng vận chuyển
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tổng số theo thời gian xuất kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tổng số theo thời gian thu hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tổng số lượng xuất kho hàng ngày
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mt-2">
            <Typography onClick={handleMediaAnal}>
              <Add fontSize="small" hidden={mediaAnal} />
              <HorizontalRule fontSize="small" hidden={!mediaAnal} />
              <Folder className="folder" hidden={mediaAnal} />
              <FolderOpen className="folder" hidden={!mediaAnal} />
              Media Anal
            </Typography>
            <ul className="tree-view-child" hidden={!mediaAnal}>
              <li>
                <Typography onClick={handleTV}>
                  <Add fontSize="small" hidden={tv} />
                  <HorizontalRule fontSize="small" hidden={!tv} />
                  <Folder className="folder" hidden={tv} />
                  <FolderOpen className="folder" hidden={!tv} />
                  TV
                </Typography>
                <ul className="tree-view-child" hidden={!tv}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình phát sóng theo tổ chức
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình thực tế của từng chương trình
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình hủy hàng khi đang phát sóng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đặt hàng của từng chương trình
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình phân bố khách hàng theo sản phẩm của từng ngày
                      phát sóng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình phát sóng theo nhà cung cấp
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleCatalog}>
                  <Add fontSize="small" hidden={catalog} />
                  <HorizontalRule fontSize="small" hidden={!catalog} />
                  <Folder className="folder" hidden={catalog} />
                  <FolderOpen className="folder" hidden={!catalog} />
                  CATALOG
                </Typography>
                <ul className="tree-view-child" hidden={!catalog}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phân tích đơn đặt hàng của khách hàng gửi Catalogue
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phân tích tình hình đối tượng gửi Catalogue
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Danh mục khách đặt hàng sản phẩm Catalogue
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra sản phẩm được đặt qua Catalogue
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tỉ lệ đáp ứng tái phát hành Catalogue
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mt-2">
            <Typography onClick={handleCustomerAnal}>
              <Add fontSize="small" hidden={customerAnal} />
              <HorizontalRule fontSize="small" hidden={!customerAnal} />
              <Folder className="folder" hidden={customerAnal} />
              <FolderOpen className="folder" hidden={!customerAnal} />
              Customer Anal
            </Typography>
            <ul className="tree-view-child" hidden={!customerAnal}>
              <li>
                <Typography onClick={handleCustomerDistribution}>
                  <Add fontSize="small" hidden={customerDistribution} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!customerDistribution}
                  />
                  <Folder className="folder" hidden={customerDistribution} />
                  <FolderOpen
                    className="folder"
                    hidden={!customerDistribution}
                  />
                  Customer Distribution
                </Typography>
                <ul className="tree-view-child" hidden={!customerDistribution}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đăng ký khách hàng theo khu vực
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phân bố theo giới tính/phân loại/khu vực
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phân bố khách hàng theo khu vực/độ tuổi trung bình
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phân bố khách hàng theo độ tuổi/tiêu chuẩn đăng ký/giới
                      tính
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleReginalAnal}>
                  <Add fontSize="small" hidden={reginalAnal} />
                  <HorizontalRule fontSize="small" hidden={!reginalAnal} />
                  <Folder className="folder" hidden={reginalAnal} />
                  <FolderOpen className="folder" hidden={!reginalAnal} />
                  Reginal Anal
                </Typography>
                <ul className="tree-view-child" hidden={!reginalAnal}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình thực tế đặt hàng theo khu vực
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Số lượng đặt hàng/xuất kho theo từng khu vực
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tiếp nhận đặt hàng theo sản phẩm/khu vực
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleClassAnal}>
                  <Add fontSize="small" hidden={classAnal} />
                  <HorizontalRule fontSize="small" hidden={!classAnal} />
                  <Folder className="folder" hidden={classAnal} />
                  <FolderOpen className="folder" hidden={!classAnal} />
                  Class Anal
                </Typography>
                <ul className="tree-view-child" hidden={!classAnal}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đặt hàng/xuất kho theo phân loại khách hàng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography
                  onClick={handleCustomerPeriodPerformanceDistribution}
                >
                  <Add
                    fontSize="small"
                    hidden={customerPeriodPerformanceDistribution}
                  />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!customerPeriodPerformanceDistribution}
                  />
                  <Folder
                    className="folder"
                    hidden={customerPeriodPerformanceDistribution}
                  />
                  <FolderOpen
                    className="folder"
                    hidden={!customerPeriodPerformanceDistribution}
                  />
                  Customer Period Performance Distribution
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={!customerPeriodPerformanceDistribution}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phân bố khách hàng theo độ tuổi/tỉ lệ/giới tính
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography
                  onClick={handleCustomerPerformanceDistributionByMonth}
                >
                  <Add
                    fontSize="small"
                    hidden={customerPerformanceDistributionByMonth}
                  />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!customerPerformanceDistributionByMonth}
                  />
                  <Folder
                    className="folder"
                    hidden={customerPerformanceDistributionByMonth}
                  />
                  <FolderOpen
                    className="folder"
                    hidden={!customerPerformanceDistributionByMonth}
                  />
                  Customer Performance Distribution By Month
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={!customerPerformanceDistributionByMonth}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đặt hàng theo khu vực của từng tháng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kết quả Best/Worst sản phẩm của khách hàng VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Doanh thu theo giá tiền đặt hàng từng tháng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleCustomerRankingPerformanceAnalysis}>
                  <Add
                    fontSize="small"
                    hidden={customerRankingPerformanceAnalysis}
                  />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!customerRankingPerformanceAnalysis}
                  />
                  <Folder
                    className="folder"
                    hidden={customerRankingPerformanceAnalysis}
                  />
                  <FolderOpen
                    className="folder"
                    hidden={!customerRankingPerformanceAnalysis}
                  />
                  Customer Ranking Performance Analysis
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={!customerRankingPerformanceAnalysis}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình thực tế của khách hàng thân thiết
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình số lượng hiện tại của khách hàng thân thiết
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình sinh nhật khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình hết hạn tích lũy của khách hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình email khách hàng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleCustomerAnalWithRepeatedOrder}>
                  <Add
                    fontSize="small"
                    hidden={customerAnalWithRepeatedOrder}
                  />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!customerAnalWithRepeatedOrder}
                  />
                  <Folder
                    className="folder"
                    hidden={customerAnalWithRepeatedOrder}
                  />
                  <FolderOpen
                    className="folder"
                    hidden={!customerAnalWithRepeatedOrder}
                  />
                  Customer Anal With Repeated Order
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={!customerAnalWithRepeatedOrder}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình số lần đặt hàng của khách hàng đặt nhiều lần
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phân bố tình hình đặt hàng theo độ tuổi/giới tính
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình khách hàng đặt hàng lại trong tháng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleMonthlyCustomerData}>
                  <Add fontSize="small" hidden={monthlyCustomerData} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!monthlyCustomerData}
                  />
                  <Folder className="folder" hidden={monthlyCustomerData} />
                  <FolderOpen
                    className="folder"
                    hidden={!monthlyCustomerData}
                  />
                  Monthly Customer Data
                </Typography>
                <ul className="tree-view-child" hidden={!monthlyCustomerData}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Monthly customer data
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
