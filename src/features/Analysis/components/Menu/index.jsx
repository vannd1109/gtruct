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
                      ????ng k?? k???t qu??? k??? ho???ch kinh doanh
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
                      ????ng k?? th??ng tin doanh thu th???c t???
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
                      ????ng k?? th??ng tin chi ph?? ?????c t??nh
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? th??ng tin chi ph?? th???c t???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???o d??? li???u marginal profit
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
                      T??nh h??nh ti???p nh???n t???ng lo???i ????n ?????t h??ng(L???ch)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Doanh thu theo k??nh b??n h??ng(L???ch)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      So s??nh t??nh h??nh doanh thu c???a m???i th??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh th???c t??? theo k??? ho???ch kinh doanh(M???i)
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
                      K???t qu??? b??n m???i ng??y c???a t???ng k??nh b??n h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra k???t qu??? b??n h??ng m???i ng??y c???a t???ng k??nh b??n h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ?????t h??ng/xu???t kho theo k??nh b??n h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ?????t h??ng/xu???t kho theo s???n ph???m v?? k??nh b??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ?????t h??ng/xu???t kho th???c t??? c???a t???ng ????n v???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ?????t h??ng/tr??? l???i th???c t??? c???a t???ng ????n v???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh doanh thu mua/b??n theo t???ng ????n v???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B???ng t???ng h???p ng??y ?????t h??ng
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
                      T??nh h??nh Best/Worst c???a s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh th???c t??? theo t???ng nh??n hi???u
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ?????t h??ng theo th??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ?????t h??ng theo ng??y/gi??? c???a s???n ph???m
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
                      T??nh h??nh l???i nhu???n ?????t h??ng/xu???t kho theo k??nh b??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh l???i nhu???n ?????t h??ng/xu???t kho th???c t??? theo t???ng
                      ????n v???
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
                      Ph??n t??ch kh??ch h??ng theo c??c ng??y trong tu???n
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
                      T??nh h??nh b??n h??ng theo th??ng c???a t???ng nh?? cung c???p
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh thanh to??n theo s???n ph???m/nh?? cung c???p
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh chi ti???t b??n h??ng c???a t???ng nh?? cung c???p
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh chi ti???t b??n h??ng c???a t???ng nh?? cung c???p_KM
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
                      L?? do h???y ????n ?????t h??ng/tr??? l???i h??ng/?????i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh khi???u n???i c???a kh??ch h??ng ?????i v???i t???ng s???n ph???m
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
                      T???ng s??? s???n ph???m/s??? l?????ng v???n chuy???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???ng s??? theo th???i gian xu???t kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???ng s??? theo th???i gian thu h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???ng s??? l?????ng xu???t kho h??ng ng??y
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
                      T??nh h??nh ph??t s??ng theo t??? ch???c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh th???c t??? c???a t???ng ch????ng tr??nh
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh h???y h??ng khi ??ang ph??t s??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ?????t h??ng c???a t???ng ch????ng tr??nh
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ph??n b??? kh??ch h??ng theo s???n ph???m c???a t???ng ng??y
                      ph??t s??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ph??t s??ng theo nh?? cung c???p
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
                      Ph??n t??ch ????n ?????t h??ng c???a kh??ch h??ng g???i Catalogue
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph??n t??ch t??nh h??nh ?????i t?????ng g???i Catalogue
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Danh m???c kh??ch ?????t h??ng s???n ph???m Catalogue
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra s???n ph???m ???????c ?????t qua Catalogue
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??? l??? ????p ???ng t??i ph??t h??nh Catalogue
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
                      T??nh h??nh ????ng k?? kh??ch h??ng theo khu v???c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph??n b??? theo gi???i t??nh/ph??n lo???i/khu v???c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph??n b??? kh??ch h??ng theo khu v???c/????? tu???i trung b??nh
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph??n b??? kh??ch h??ng theo ????? tu???i/ti??u chu???n ????ng k??/gi???i
                      t??nh
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
                      T??nh h??nh th???c t??? ?????t h??ng theo khu v???c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      S??? l?????ng ?????t h??ng/xu???t kho theo t???ng khu v???c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ti???p nh???n ?????t h??ng theo s???n ph???m/khu v???c
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
                      T??nh h??nh ?????t h??ng/xu???t kho theo ph??n lo???i kh??ch h??ng
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
                      Ph??n b??? kh??ch h??ng theo ????? tu???i/t??? l???/gi???i t??nh
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
                      T??nh h??nh ?????t h??ng theo khu v???c c???a t???ng th??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      K???t qu??? Best/Worst s???n ph???m c???a kh??ch h??ng VIP
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Doanh thu theo gi?? ti???n ?????t h??ng t???ng th??ng
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
                      T??nh h??nh th???c t??? c???a kh??ch h??ng th??n thi???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh s??? l?????ng hi???n t???i c???a kh??ch h??ng th??n thi???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh sinh nh???t kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh h???t h???n t??ch l??y c???a kh??ch h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh email kh??ch h??ng
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
                      T??nh h??nh s??? l???n ?????t h??ng c???a kh??ch h??ng ?????t nhi???u l???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph??n b??? t??nh h??nh ?????t h??ng theo ????? tu???i/gi???i t??nh
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh kh??ch h??ng ?????t h??ng l???i trong th??ng
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
