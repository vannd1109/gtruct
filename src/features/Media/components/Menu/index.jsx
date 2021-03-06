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
                      ????ng k?? ch????ng tr??nh
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? kh??ch m???i ?????n d??? ch????ng tr??nh
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? b??ng ghi h??nh
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
                      ????ng k?? ch????ng tr??nh theo l???ch ph??t s??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? nh??n vi??n theo t???ng ch????ng tr??nh
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? s???n ph???m theo ch????ng tr??nh ph??t s??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thay ?????i th???i gian ph??t s??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? b??? tr?? kh??ch m???i tham gia ch????ng tr??nh
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
                      ????ng k?? ph??t s??ng tr???c ti???p
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ti???n h??nh ph??t s??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ph??t s??ng hi???n t???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      S??? l????ng b??n trong ch????ng tr??nh Live
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
                      Nh???n x??t sau khi ph??t s??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? theo d??i ch????ng tr??nh ph??t s??ng
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
                      Ki???m tra l???ch ph??t s??ng theo tu???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ph??t s??ng s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh b??ng ghi h??nh theo t???ng s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra k???t qu??? ph??t s??ng theo ng??y
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ph??t s??ng c???a t???ng ng??y ph??t s??ng
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
                      ????ng k?? s???n ph???m CATALOG
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
                      L??n danh s??ch kh??ch h??ng nh???n CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???o file CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Gi???i quy???t g???i l???i CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? g???i l???i CATALOG
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
                      Ki???m tra s???n ph???m CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra kh??ch h??ng ???????c nh???n CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??? l??? mua h??ng qua CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh mua h??ng qua CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??? l??? ph???n ??nh theo t???ng phu v???c CATALOG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??? l??? ph???n h???i theo s??? l???n g???i CATALOG
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
                      ????ng k?? WebSurvey
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? c??c v???n ????? kh???o s??t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ch???n v???n ????? kh???o s??t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xem k???t qu??? kh???o s??t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xem h??ng lo???t k???t qu??? kh???o s??t
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
                      ????ng k?? s??? l?????ng c?? th??? booking c???a sp internet
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ?????t h??ng Pre-Order
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
                      ????ng k?? th??ng tin c??ng ty B2E
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? th??ng tin nh??n vi??n B2E
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh doanh thu k??nh B2E
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
                      ????ng k?? th??ng tin c??ng ty MRO
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? th??ng tin nh??n vi??n MRO
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh doanh thu k??nh MRO
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh giao h??ng ph??n theo s???n ph???m MRO
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
