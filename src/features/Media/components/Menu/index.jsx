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

  // TV
  const [tvSection, setTVSection] = useState(false);

  const [basicInfo, setBasicInfo] = useState(false);

  const [programLineup, setProgramLineup] = useState(false);

  const [onAir, setOnAir] = useState(false);

  const [result, setResult] = useState(false);

  const [lineupInquiry, setLineupInquiry] = useState(false);

  // Catalog
  const [catalog, setCatalog] = useState(false);

  const [catalogProduction, setCatalogProduction] = useState(false);

  const [catalogMgt, setCatalogMgt] = useState(false);

  const [catalogStatus, setCatalogStatus] = useState(false);

  // Internet
  const [internet, setInternet] = useState(false);

  const [webSurvey, setWebSurvey] = useState(false);

  const [preOrderMgt, setPreOrderMgt] = useState(false);

  const [b2eCompanyMgt, setB2ECompanyMgt] = useState(false);

  const [mroCompanyMgt, setMROCompanyMgt] = useState(false);

  // ----------------------------------handle-----------------

  // TV
  const handleTVSection = (e) => {
    setTVSection(!tvSection);
  };

  const handleBasicInfo = (e) => {
    setBasicInfo(!basicInfo);
  };

  const handleProgramLineup = (e) => {
    setProgramLineup(!programLineup);
  };

  const handleOnAir = (e) => {
    setOnAir(!onAir);
  };

  const handleResult = (e) => {
    setResult(!result);
  };

  const handleLineupInquiry = (e) => {
    setLineupInquiry(!lineupInquiry);
  };

  // CATALOG
  const handleCatalog = (e) => {
    setCatalog(!catalog);
  };

  const handleCatalogProduction = (e) => {
    setCatalogProduction(!catalogProduction);
  };

  const handleCatalogMgt = (e) => {
    setCatalogMgt(!catalogMgt);
  };

  const handleCatalogStatus = (e) => {
    setCatalogStatus(!catalogStatus);
  };

  // INTERNET
  const handleInternet = (e) => {
    setInternet(!internet);
  };

  const handleWebSurvey = (e) => {
    setWebSurvey(!webSurvey);
  };

  const handlePreOrderMgt = (e) => {
    setPreOrderMgt(!preOrderMgt);
  };

  const handleB2ECompanyMgt = (e) => {
    setB2ECompanyMgt(!b2eCompanyMgt);
  };

  const handleMROCompanyMgt = (e) => {
    setMROCompanyMgt(!mroCompanyMgt);
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
            <Typography onClick={handleTVSection}>
              <Add fontSize="small" hidden={tvSection} />
              <HorizontalRule fontSize="small" hidden={!tvSection} />
              <Folder className="folder" hidden={tvSection} />
              <FolderOpen className="folder" hidden={!tvSection} />
              TV section
            </Typography>
            <ul className="tree-view-child" hidden={!tvSection}>
              <li>
                <Typography onClick={handleBasicInfo}>
                  <Add fontSize="small" hidden={basicInfo} />
                  <HorizontalRule fontSize="small" hidden={!basicInfo} />
                  <Folder className="folder" hidden={basicInfo} />
                  <FolderOpen className="folder" hidden={!basicInfo} />
                  Basic Info
                </Typography>
                <ul className="tree-view-child" hidden={!basicInfo}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng kí chương trình
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký khách mời đến dự chương trình
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký băng ghi hình
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleProgramLineup}>
                  <Add fontSize="small" hidden={programLineup} />
                  <HorizontalRule fontSize="small" hidden={!programLineup} />
                  <Folder className="folder" hidden={programLineup} />
                  <FolderOpen className="folder" hidden={!programLineup} />
                  Program Lineup
                </Typography>
                <ul className="tree-view-child" hidden={!programLineup}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng kí chương trình theo lịch phát sóng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý nhân viên theo từng chương trình
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký sản phẩm theo chương trình phát sóng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thay đổi thời gian phát sóng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký bố trí khách mời tham gia chương trình
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOnAir}>
                  <Add fontSize="small" hidden={onAir} />
                  <HorizontalRule fontSize="small" hidden={!onAir} />
                  <Folder className="folder" hidden={onAir} />
                  <FolderOpen className="folder" hidden={!onAir} />
                  On-Air
                </Typography>
                <ul className="tree-view-child" hidden={!onAir}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký phát sóng trực tiếp
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tiến hành phát sóng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình phát sóng hiện tại
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Số lương bán trong chương trình Live
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleResult}>
                  <Add fontSize="small" hidden={result} />
                  <HorizontalRule fontSize="small" hidden={!result} />
                  <Folder className="folder" hidden={result} />
                  <FolderOpen className="folder" hidden={!result} />
                  Result
                </Typography>
                <ul className="tree-view-child" hidden={!result}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Nhận xét sau khi phát sóng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký theo dõi chương trình phát sóng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleLineupInquiry}>
                  <Add fontSize="small" hidden={lineupInquiry} />
                  <HorizontalRule fontSize="small" hidden={!lineupInquiry} />
                  <Folder className="folder" hidden={lineupInquiry} />
                  <FolderOpen className="folder" hidden={!lineupInquiry} />
                  Lineup Inquiry
                </Typography>
                <ul className="tree-view-child" hidden={!lineupInquiry}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra lịch phát sóng theo tuần
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình phát sóng sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình băng ghi hình theo từng sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra kết quả phát sóng theo ngày
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình phát sóng của từng ngày phát sóng
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mt-2">
            <Typography onClick={handleCatalog}>
              <Add fontSize="small" hidden={catalog} />
              <HorizontalRule fontSize="small" hidden={!catalog} />
              <Folder className="folder" hidden={catalog} />
              <FolderOpen className="folder" hidden={!catalog} />
              CATALOG
            </Typography>
            <ul className="tree-view-child" hidden={!catalog}>
              <li>
                <Typography onClick={handleCatalogProduction}>
                  <Add fontSize="small" hidden={catalogProduction} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!catalogProduction}
                  />
                  <Folder className="folder" hidden={catalogProduction} />
                  <FolderOpen className="folder" hidden={!catalogProduction} />
                  CATALOG Production
                </Typography>
                <ul className="tree-view-child" hidden={!catalogProduction}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký sản phẩm CATALOG
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleCatalogMgt}>
                  <Add fontSize="small" hidden={catalogMgt} />
                  <HorizontalRule fontSize="small" hidden={!catalogMgt} />
                  <Folder className="folder" hidden={catalogMgt} />
                  <FolderOpen className="folder" hidden={!catalogMgt} />
                  CATALOG Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!catalogMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Lên danh sách khách hàng nhận CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tạo file CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Giải quyết gửi lại CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký gửi lại CATALOG
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleCatalogStatus}>
                  <Add fontSize="small" hidden={catalogStatus} />
                  <HorizontalRule fontSize="small" hidden={!catalogStatus} />
                  <Folder className="folder" hidden={catalogStatus} />
                  <FolderOpen className="folder" hidden={!catalogStatus} />
                  CATALOG Status
                </Typography>
                <ul className="tree-view-child" hidden={!catalogStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra sản phẩm CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra khách hàng được nhận CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tỷ lệ mua hàng qua CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình mua hàng qua CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tỷ lệ phản ánh theo từng phu vực CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tỷ lệ phản hồi theo số lần gửi CATALOG
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mt-2">
            <Typography onClick={handleInternet}>
              <Add fontSize="small" hidden={internet} />
              <HorizontalRule fontSize="small" hidden={!internet} />
              <Folder className="folder" hidden={internet} />
              <FolderOpen className="folder" hidden={!internet} />
              INTERNET
            </Typography>
            <ul className="tree-view-child" hidden={!internet}>
              <li>
                <Typography onClick={handleWebSurvey}>
                  <Add fontSize="small" hidden={webSurvey} />
                  <HorizontalRule fontSize="small" hidden={!webSurvey} />
                  <Folder className="folder" hidden={webSurvey} />
                  <FolderOpen className="folder" hidden={!webSurvey} />
                  WebSurvey
                </Typography>
                <ul className="tree-view-child" hidden={!webSurvey}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký WebSurvey
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký các vấn đề khảo sát
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Chọn vấn đề khảo sát
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xem kết quả khảo sát
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xem hàng loạt kết quả khảo sát
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handlePreOrderMgt}>
                  <Add fontSize="small" hidden={preOrderMgt} />
                  <HorizontalRule fontSize="small" hidden={!preOrderMgt} />
                  <Folder className="folder" hidden={preOrderMgt} />
                  <FolderOpen className="folder" hidden={!preOrderMgt} />
                  Pre Order Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!preOrderMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký số lượng có thể booking của sp internet
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình đặt hàng Pre-Order
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleB2ECompanyMgt}>
                  <Add fontSize="small" hidden={b2eCompanyMgt} />
                  <HorizontalRule fontSize="small" hidden={!b2eCompanyMgt} />
                  <Folder className="folder" hidden={b2eCompanyMgt} />
                  <FolderOpen className="folder" hidden={!b2eCompanyMgt} />
                  B2E Company Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!b2eCompanyMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thông tin công ty B2E
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thông tin nhân viên B2E
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình doanh thu kênh B2E
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleMROCompanyMgt}>
                  <Add fontSize="small" hidden={mroCompanyMgt} />
                  <HorizontalRule fontSize="small" hidden={!mroCompanyMgt} />
                  <Folder className="folder" hidden={mroCompanyMgt} />
                  <FolderOpen className="folder" hidden={!mroCompanyMgt} />
                  MRO Company Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!mroCompanyMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thông tin công ty MRO
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thông tin nhân viên MRO
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình doanh thu kênh MRO
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình giao hàng phân theo sản phẩm MRO
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
