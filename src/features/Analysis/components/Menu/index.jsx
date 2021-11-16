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
  // Master Data
  const [openMasterData, setOpenMasterData] = useState(false);
  const [closeMasterData, setCloseMasterData] = useState(true);

  const [openBusinessPlan, setOpenBusinessPlan] = useState(false);
  const [closeBusinessPlan, setCloseBusinessPlan] = useState(true);

  const [openRevenueExpenses, setOpenRevenueExpenses] = useState(false);
  const [closeRevenueExpenses, setCloseRevenueExpenses] = useState(true);

  const [openMarginalProfitCalculate, setOpenMarginalProfitCalculate] =
    useState(false);
  const [closeMarginalProfitCalculate, setCloseMarginalProfitCalculate] =
    useState(true);

  // Actual Result Anal
  const [openActualResultAnal, setOpenActualResultAnal] = useState(false);
  const [closeActualResultAnal, setCloseActualResultAnal] = useState(true);

  const [openDailyAnal, setOpenDailyAnal] = useState(false);
  const [closeDailyAnal, setCloseDailyAnal] = useState(true);

  const [openSalesAnalByPeriod, setOpenSalesAnalByPeriod] = useState(false);
  const [closeSalesAnalByPeriod, setCloseSalesAnalByPeriod] = useState(true);

  const [openItemWiseAnal, setOpenItemWiseAnal] = useState(false);
  const [closeItemWiseAnal, setCloseItemWiseAnal] = useState(true);

  const [openMarginalAnal, setOpenMarginalAnal] = useState(false);
  const [closeMarginalAnal, setCloseMarginalAnal] = useState(true);

  const [openTimeAnal, setOpenTimeAnal] = useState(false);
  const [closeTimeAnal, setCloseTimeAnal] = useState(true);

  const [openVendorWiseAnal, setOpenVendorWiseAnal] = useState(false);
  const [closeVendorWiseAnal, setCloseVendorWiseAnal] = useState(true);

  const [openComplaintAnal, setOpenComplaintAnal] = useState(false);
  const [closeComplaintAnal, setCloseComplaintAnal] = useState(true);

  const [openLogisticsAnal, setOpenLogisticsAnal] = useState(false);
  const [closeLogisticsAnal, setCloseLogisticsAnal] = useState(true);

  // Media Anal
  const [openMediaAnal, setOpenMediaAnal] = useState(false);
  const [closeMediaAnal, setCloseMediaAnal] = useState(true);

  const [openTV, setOpenTV] = useState(false);
  const [closeTV, setCloseTV] = useState(true);

  const [openCatalog, setOpenCatalog] = useState(false);
  const [closeCatalog, setCloseCatalog] = useState(true);

  // Customer Anal
  const [openCustomerAnal, setOpenCustomerAnal] = useState(false);
  const [closeCustomerAnal, setCloseCustomerAnal] = useState(true);

  const [openCustomerDistribution, setOpenCustomerDistribution] =
    useState(false);
  const [closeCustomerDistribution, setCloseCustomerDistribution] =
    useState(true);

  const [openReginalAnal, setOpenReginalAnal] = useState(false);
  const [closeReginalAnal, setCloseReginalAnal] = useState(true);

  const [openClassAnal, setOpenClassAnal] = useState(false);
  const [closeClassAnal, setCloseClassAnal] = useState(true);

  const [
    openCustomerPeriodPerformanceDistribution,
    setOpenCustomerPeriodPerformanceDistribution,
  ] = useState(false);
  const [
    closeCustomerPeriodPerformanceDistribution,
    setCloseCustomerPeriodPerformanceDistribution,
  ] = useState(true);

  const [
    openCustomerPerformanceDistributionByMonth,
    setOpenCustomerPerformanceDistributionByMonth,
  ] = useState(false);
  const [
    closeCustomerPerformanceDistributionByMonth,
    setCloseCustomerPerformanceDistributionByMonth,
  ] = useState(true);

  const [
    openCustomerRankingPerformanceAnalysis,
    setOpenCustomerRankingPerformanceAnalysis,
  ] = useState(false);
  const [
    closeCustomerRankingPerformanceAnalysis,
    setCloseCustomerRankingPerformanceAnalysis,
  ] = useState(true);

  const [
    openCustomerAnalWithRepeatedOrder,
    setOpenCustomerAnalWithRepeatedOrder,
  ] = useState(false);
  const [
    closeCustomerAnalWithRepeatedOrder,
    setCloseCustomerAnalWithRepeatedOrder,
  ] = useState(true);

  const [openMonthlyCustomerData, setOpenMonthlyCustomerData] = useState(false);
  const [closeMonthlyCustomerData, setCloseMonthlyCustomerData] =
    useState(true);

  // ----------------------------------handle-----------------

  // Master Data
  const handleOpenMasterData = (e) => {
    setOpenMasterData(!openMasterData);
    setCloseMasterData(!closeMasterData);
  };

  const handleOpenBusinessPlan = (e) => {
    setOpenBusinessPlan(!openBusinessPlan);
    setCloseBusinessPlan(!closeBusinessPlan);
  };

  const handleOpenRevenueExpenses = (e) => {
    setOpenRevenueExpenses(!openRevenueExpenses);
    setCloseRevenueExpenses(!closeRevenueExpenses);
  };

  const handleOpenMarginalProfitCalculate = (e) => {
    setOpenMarginalProfitCalculate(!openMarginalProfitCalculate);
    setCloseMarginalProfitCalculate(!closeMarginalProfitCalculate);
  };

  // Actual Result Anal
  const handleOpenActualResultAnal = (e) => {
    setOpenActualResultAnal(!openActualResultAnal);
    setCloseActualResultAnal(!closeActualResultAnal);
  };

  const handleOpenDailyAnal = (e) => {
    setOpenDailyAnal(!openDailyAnal);
    setCloseDailyAnal(!closeDailyAnal);
  };

  const handleOpenSalesAnalByPeriod = (e) => {
    setOpenSalesAnalByPeriod(!openSalesAnalByPeriod);
    setCloseSalesAnalByPeriod(!closeSalesAnalByPeriod);
  };

  const handleOpenItemWiseAnal = (e) => {
    setOpenItemWiseAnal(!openItemWiseAnal);
    setCloseItemWiseAnal(!closeItemWiseAnal);
  };

  const handleOpenMarginalAnal = (e) => {
    setOpenMarginalAnal(!openMarginalAnal);
    setCloseMarginalAnal(!closeMarginalAnal);
  };

  const handleOpenTimeAnal = (e) => {
    setOpenTimeAnal(!openTimeAnal);
    setCloseTimeAnal(!closeTimeAnal);
  };

  const handleOpenVendorWiseAnal = (e) => {
    setOpenVendorWiseAnal(!openVendorWiseAnal);
    setCloseVendorWiseAnal(!closeVendorWiseAnal);
  };

  const handleOpenComplaintAnal = (e) => {
    setOpenComplaintAnal(!openComplaintAnal);
    setCloseComplaintAnal(!closeComplaintAnal);
  };

  const handleOpenLogisticsAnal = (e) => {
    setOpenLogisticsAnal(!openLogisticsAnal);
    setCloseLogisticsAnal(!closeLogisticsAnal);
  };

  // Media Anal
  const handleOpenMediaAnal = (e) => {
    setOpenMediaAnal(!openMediaAnal);
    setCloseMediaAnal(!closeMediaAnal);
  };

  const handleOpenTV = (e) => {
    setOpenTV(!openTV);
    setCloseTV(!closeTV);
  };

  const handleOpenCatalog = (e) => {
    setOpenCatalog(!openCatalog);
    setCloseCatalog(!closeCatalog);
  };

  // Customer Anal
  const handleOpenCustomerAnal = (e) => {
    setOpenCustomerAnal(!openCustomerAnal);
    setCloseCustomerAnal(!closeCustomerAnal);
  };

  const handleOpenCustomerDistribution = (e) => {
    setOpenCustomerDistribution(!openCustomerDistribution);
    setCloseCustomerDistribution(!closeCustomerDistribution);
  };

  const handleOpenReginalAnal = (e) => {
    setOpenReginalAnal(!openReginalAnal);
    setCloseReginalAnal(!closeReginalAnal);
  };

  const handleOpenClassAnal = (e) => {
    setOpenClassAnal(!openClassAnal);
    setCloseClassAnal(!closeClassAnal);
  };

  const handleOpenCustomerPeriodPerformanceDistribution = (e) => {
    setOpenCustomerPeriodPerformanceDistribution(
      !openCustomerPeriodPerformanceDistribution
    );
    setCloseCustomerPeriodPerformanceDistribution(
      !closeCustomerPeriodPerformanceDistribution
    );
  };

  const handleOpenCustomerPerformanceDistributionByMonth = (e) => {
    setOpenCustomerPerformanceDistributionByMonth(
      !openCustomerPerformanceDistributionByMonth
    );
    setCloseCustomerPerformanceDistributionByMonth(
      !closeCustomerPerformanceDistributionByMonth
    );
  };

  const handleOpenCustomerRankingPerformanceAnalysis = (e) => {
    setOpenCustomerRankingPerformanceAnalysis(
      !openCustomerRankingPerformanceAnalysis
    );
    setCloseCustomerRankingPerformanceAnalysis(
      !closeCustomerRankingPerformanceAnalysis
    );
  };

  const handleOpenCustomerAnalWithRepeatedOrder = (e) => {
    setOpenCustomerAnalWithRepeatedOrder(!openCustomerAnalWithRepeatedOrder);
    setCloseCustomerAnalWithRepeatedOrder(!closeCustomerAnalWithRepeatedOrder);
  };

  const handleOpenMonthlyCustomerData = (e) => {
    setOpenMonthlyCustomerData(!openMonthlyCustomerData);
    setCloseMonthlyCustomerData(!closeMonthlyCustomerData);
  };

  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <Typography onClick={handleOpenMasterData}>
            <Add fontSize="small" hidden={openMasterData} />
            <HorizontalRule fontSize="small" hidden={closeMasterData} />
            <Folder className="folder" hidden={openMasterData} />
            <FolderOpen className="folder" hidden={closeMasterData} />
            Master Data
          </Typography>
          <ul className="tree-view-child" hidden={closeMasterData}>
            <li>
              <Typography onClick={handleOpenBusinessPlan}>
                <Add fontSize="small" hidden={openBusinessPlan} />
                <HorizontalRule fontSize="small" hidden={closeBusinessPlan} />
                <Folder className="folder" hidden={openBusinessPlan} />
                <FolderOpen className="folder" hidden={closeBusinessPlan} />
                BusinessPlan
              </Typography>
              <ul className="tree-view-child" hidden={closeBusinessPlan}>
                <li>
                  <Typography className="document-title">
                    <Description className="file" />
                    Đăng kí kết quả kế hoạch kinh doanh
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenRevenueExpenses}>
                <Add fontSize="small" hidden={openRevenueExpenses} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeRevenueExpenses}
                />
                <Folder className="folder" hidden={openRevenueExpenses} />
                <FolderOpen className="folder" hidden={closeRevenueExpenses} />
                Master Data
              </Typography>
              <ul className="tree-view-child" hidden={closeRevenueExpenses}>
                <li>
                  <Typography className="document-title">
                    <Description className="file" />
                    Đăng kí thông tin doanh thu thực tế
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenMarginalProfitCalculate}>
                <Add fontSize="small" hidden={openMarginalProfitCalculate} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeMarginalProfitCalculate}
                />
                <Folder
                  className="folder"
                  hidden={openMarginalProfitCalculate}
                />
                <FolderOpen
                  className="folder"
                  hidden={closeMarginalProfitCalculate}
                />
                Marginal Profit Calculate
              </Typography>
              <ul
                className="tree-view-child"
                hidden={closeMarginalProfitCalculate}
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
          <Typography onClick={handleOpenActualResultAnal}>
            <Add fontSize="small" hidden={openActualResultAnal} />
            <HorizontalRule fontSize="small" hidden={closeActualResultAnal} />
            <Folder className="folder" hidden={openActualResultAnal} />
            <FolderOpen className="folder" hidden={closeActualResultAnal} />
            Actual Result Anal
          </Typography>
          <ul className="tree-view-child" hidden={closeActualResultAnal}>
            <li>
              <Typography onClick={handleOpenDailyAnal}>
                <Add fontSize="small" hidden={openDailyAnal} />
                <HorizontalRule fontSize="small" hidden={closeDailyAnal} />
                <Folder className="folder" hidden={openDailyAnal} />
                <FolderOpen className="folder" hidden={closeDailyAnal} />
                Daily Anal
              </Typography>
              <ul className="tree-view-child" hidden={closeDailyAnal}>
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
              <Typography onClick={handleOpenSalesAnalByPeriod}>
                <Add fontSize="small" hidden={openSalesAnalByPeriod} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeSalesAnalByPeriod}
                />
                <Folder className="folder" hidden={openSalesAnalByPeriod} />
                <FolderOpen
                  className="folder"
                  hidden={closeSalesAnalByPeriod}
                />
                Sales Anal By Period
              </Typography>
              <ul className="tree-view-child" hidden={closeSalesAnalByPeriod}>
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
              <Typography onClick={handleOpenItemWiseAnal}>
                <Add fontSize="small" hidden={openItemWiseAnal} />
                <HorizontalRule fontSize="small" hidden={closeItemWiseAnal} />
                <Folder className="folder" hidden={openItemWiseAnal} />
                <FolderOpen className="folder" hidden={closeItemWiseAnal} />
                Item Wise Anal
              </Typography>
              <ul className="tree-view-child" hidden={closeItemWiseAnal}>
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
              <Typography onClick={handleOpenMarginalAnal}>
                <Add fontSize="small" hidden={openMarginalAnal} />
                <HorizontalRule fontSize="small" hidden={closeMarginalAnal} />
                <Folder className="folder" hidden={openMarginalAnal} />
                <FolderOpen className="folder" hidden={closeMarginalAnal} />
                Marginal Anal
              </Typography>
              <ul className="tree-view-child" hidden={closeMarginalAnal}>
                <li>
                  <Typography className="document-title">
                    <Description className="file" />
                    Tình hình lợi nhuận đặt hàng/xuất kho theo kênh bán
                  </Typography>
                </li>
                <li>
                  <Typography className="document-title">
                    <Description className="file" />
                    Tình hình lợi nhuận đặt hàng/xuất kho thực tế theo từng đơn
                    vị
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenTimeAnal}>
                <Add fontSize="small" hidden={openTimeAnal} />
                <HorizontalRule fontSize="small" hidden={closeTimeAnal} />
                <Folder className="folder" hidden={openTimeAnal} />
                <FolderOpen className="folder" hidden={closeTimeAnal} />
                Time Anal
              </Typography>
              <ul className="tree-view-child" hidden={closeTimeAnal}>
                <li>
                  <Typography className="document-title">
                    <Description className="file" />
                    Phân tích khách hàng theo các ngày trong tuần
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenVendorWiseAnal}>
                <Add fontSize="small" hidden={openVendorWiseAnal} />
                <HorizontalRule fontSize="small" hidden={closeVendorWiseAnal} />
                <Folder className="folder" hidden={openVendorWiseAnal} />
                <FolderOpen className="folder" hidden={closeVendorWiseAnal} />
                Vendor Wise Anal
              </Typography>
              <ul className="tree-view-child" hidden={closeVendorWiseAnal}>
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
              <Typography onClick={handleOpenComplaintAnal}>
                <Add fontSize="small" hidden={openComplaintAnal} />
                <HorizontalRule fontSize="small" hidden={closeComplaintAnal} />
                <Folder className="folder" hidden={openComplaintAnal} />
                <FolderOpen className="folder" hidden={closeComplaintAnal} />
                Complaint Anal
              </Typography>
              <ul className="tree-view-child" hidden={closeComplaintAnal}>
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
              <Typography onClick={handleOpenLogisticsAnal}>
                <Add fontSize="small" hidden={openLogisticsAnal} />
                <HorizontalRule fontSize="small" hidden={closeLogisticsAnal} />
                <Folder className="folder" hidden={openLogisticsAnal} />
                <FolderOpen className="folder" hidden={closeLogisticsAnal} />
                Logistics Anal
              </Typography>
              <ul className="tree-view-child" hidden={closeLogisticsAnal}>
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
          <Typography onClick={handleOpenMediaAnal}>
            <Add fontSize="small" hidden={openMediaAnal} />
            <HorizontalRule fontSize="small" hidden={closeMediaAnal} />
            <Folder className="folder" hidden={openMediaAnal} />
            <FolderOpen className="folder" hidden={closeMediaAnal} />
            Media Anal
          </Typography>
          <ul className="tree-view-child" hidden={closeMediaAnal}>
            <li>
              <Typography onClick={handleOpenTV}>
                <Add fontSize="small" hidden={openTV} />
                <HorizontalRule fontSize="small" hidden={closeTV} />
                <Folder className="folder" hidden={openTV} />
                <FolderOpen className="folder" hidden={closeTV} />
                TV
              </Typography>
              <ul className="tree-view-child" hidden={closeTV}>
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
              <Typography onClick={handleOpenCatalog}>
                <Add fontSize="small" hidden={openCatalog} />
                <HorizontalRule fontSize="small" hidden={closeCatalog} />
                <Folder className="folder" hidden={openCatalog} />
                <FolderOpen className="folder" hidden={closeCatalog} />
                CATALOG
              </Typography>
              <ul className="tree-view-child" hidden={closeCatalog}>
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
          <Typography onClick={handleOpenCustomerAnal}>
            <Add fontSize="small" hidden={openCustomerAnal} />
            <HorizontalRule fontSize="small" hidden={closeCustomerAnal} />
            <Folder className="folder" hidden={openCustomerAnal} />
            <FolderOpen className="folder" hidden={closeCustomerAnal} />
            Customer Anal
          </Typography>
          <ul className="tree-view-child" hidden={closeCustomerAnal}>
            <li>
              <Typography onClick={handleOpenCustomerDistribution}>
                <Add fontSize="small" hidden={openCustomerDistribution} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeCustomerDistribution}
                />
                <Folder className="folder" hidden={openCustomerDistribution} />
                <FolderOpen
                  className="folder"
                  hidden={closeCustomerDistribution}
                />
                Customer Distribution
              </Typography>
              <ul
                className="tree-view-child"
                hidden={closeCustomerDistribution}
              >
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
                    Phân bố khách hàng theo độ tuổi/tiêu chuẩn đăng ký/giới tính
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenReginalAnal}>
                <Add fontSize="small" hidden={openReginalAnal} />
                <HorizontalRule fontSize="small" hidden={closeReginalAnal} />
                <Folder className="folder" hidden={openReginalAnal} />
                <FolderOpen className="folder" hidden={closeReginalAnal} />
                Reginal Anal
              </Typography>
              <ul className="tree-view-child" hidden={closeReginalAnal}>
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
              <Typography onClick={handleOpenClassAnal}>
                <Add fontSize="small" hidden={openClassAnal} />
                <HorizontalRule fontSize="small" hidden={closeClassAnal} />
                <Folder className="folder" hidden={openClassAnal} />
                <FolderOpen className="folder" hidden={closeClassAnal} />
                Class Anal
              </Typography>
              <ul className="tree-view-child" hidden={closeClassAnal}>
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
                onClick={handleOpenCustomerPeriodPerformanceDistribution}
              >
                <Add
                  fontSize="small"
                  hidden={openCustomerPeriodPerformanceDistribution}
                />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeCustomerPeriodPerformanceDistribution}
                />
                <Folder
                  className="folder"
                  hidden={openCustomerPeriodPerformanceDistribution}
                />
                <FolderOpen
                  className="folder"
                  hidden={closeCustomerPeriodPerformanceDistribution}
                />
                Customer Period Performance Distribution
              </Typography>
              <ul
                className="tree-view-child"
                hidden={closeCustomerPeriodPerformanceDistribution}
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
                onClick={handleOpenCustomerPerformanceDistributionByMonth}
              >
                <Add
                  fontSize="small"
                  hidden={openCustomerPerformanceDistributionByMonth}
                />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeCustomerPerformanceDistributionByMonth}
                />
                <Folder
                  className="folder"
                  hidden={openCustomerPerformanceDistributionByMonth}
                />
                <FolderOpen
                  className="folder"
                  hidden={closeCustomerPerformanceDistributionByMonth}
                />
                Customer Performance Distribution By Month
              </Typography>
              <ul
                className="tree-view-child"
                hidden={closeCustomerPerformanceDistributionByMonth}
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
              <Typography
                onClick={handleOpenCustomerRankingPerformanceAnalysis}
              >
                <Add
                  fontSize="small"
                  hidden={openCustomerRankingPerformanceAnalysis}
                />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeCustomerRankingPerformanceAnalysis}
                />
                <Folder
                  className="folder"
                  hidden={openCustomerRankingPerformanceAnalysis}
                />
                <FolderOpen
                  className="folder"
                  hidden={closeCustomerRankingPerformanceAnalysis}
                />
                Customer Ranking Performance Analysis
              </Typography>
              <ul
                className="tree-view-child"
                hidden={closeCustomerRankingPerformanceAnalysis}
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
              <Typography onClick={handleOpenCustomerAnalWithRepeatedOrder}>
                <Add
                  fontSize="small"
                  hidden={openCustomerAnalWithRepeatedOrder}
                />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeCustomerAnalWithRepeatedOrder}
                />
                <Folder
                  className="folder"
                  hidden={openCustomerAnalWithRepeatedOrder}
                />
                <FolderOpen
                  className="folder"
                  hidden={closeCustomerAnalWithRepeatedOrder}
                />
                Customer Anal With Repeated Order
              </Typography>
              <ul
                className="tree-view-child"
                hidden={closeCustomerAnalWithRepeatedOrder}
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
              <Typography onClick={handleOpenMonthlyCustomerData}>
                <Add fontSize="small" hidden={openMonthlyCustomerData} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeMonthlyCustomerData}
                />
                <Folder className="folder" hidden={openMonthlyCustomerData} />
                <FolderOpen
                  className="folder"
                  hidden={closeMonthlyCustomerData}
                />
                Monthly Customer Data
              </Typography>
              <ul className="tree-view-child" hidden={closeMonthlyCustomerData}>
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
    </div>
  );
}

export default Menu;
