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
  // TV
  const [openTV, setOpenTV] = useState(false);
  const [closeTV, setCloseTV] = useState(true);

  const [openBasicInfo, setOpenBasicInfo] = useState(false);
  const [closeBasicInfo, setCloseBasicInfo] = useState(true);

  const [openProgramLineup, setOpenProgramLineup] = useState(false);
  const [closeProgramLineup, setCloseProgramLineup] = useState(true);

  const [openOnAir, setOpenOnAir] = useState(false);
  const [closeOnAir, setCloseOnAir] = useState(true);

  const [openResult, setOpenResult] = useState(false);
  const [closeResult, setCloseResult] = useState(true);

  const [openLineupInquiry, setOpenLineupInquiry] = useState(false);
  const [closeLineupInquiry, setCloseLineupInquiry] = useState(true);

  // Catalog
  const [openCatalog, setOpenCatalog] = useState(false);
  const [closeCatalog, setCloseCatalog] = useState(true);

  const [openCatalogProduction, setOpenCatalogProduction] = useState(false);
  const [closeCatalogProduction, setCloseCatalogProduction] = useState(true);

  const [openCatalogMgt, setOpenCatalogMgt] = useState(false);
  const [closeCatalogMgt, setCloseCatalogMgt] = useState(true);

  const [openCatalogStatus, setOpenCatalogStatus] = useState(false);
  const [closeCatalogStatus, setCloseCatalogStatus] = useState(true);

  // Internet
  const [openInternet, setOpenInternet] = useState(false);
  const [closeInternet, setCloseInternet] = useState(true);

  const [openWebSurvey, setOpenWebSurvey] = useState(false);
  const [closeWebSurvey, setCloseWebSurvey] = useState(true);

  const [openPreOrderMgt, setOpenPreOrderMgt] = useState(false);
  const [closePreOrderMgt, setClosePreOrderMgt] = useState(true);

  const [openB2ECompanyMgt, setOpenB2ECompanyMgt] = useState(false);
  const [closeB2ECompanyMgt, setCloseB2ECompanyMgt] = useState(true);

  const [openMROCompanyMgt, setOpenMROCompanyMgt] = useState(false);
  const [closeMROCompanyMgt, setCloseMROCompanyMgt] = useState(true);

  // ----------------------------------handle-----------------

  // TV
  const handleOpenTV = (e) => {
    setOpenTV(!openTV);
    setCloseTV(!closeTV);
  };

  const handleOpenBasicInfo = (e) => {
    setOpenBasicInfo(!openBasicInfo);
    setCloseBasicInfo(!closeBasicInfo);
  };

  const handleOpenProgramLineup = (e) => {
    setOpenProgramLineup(!openProgramLineup);
    setCloseProgramLineup(!closeProgramLineup);
  };

  const handleOpenOnAir = (e) => {
    setOpenOnAir(!openOnAir);
    setCloseOnAir(!closeOnAir);
  };

  const handleOpenResult = (e) => {
    setOpenResult(!openResult);
    setCloseResult(!closeResult);
  };

  const handleOpenLineupInquiry = (e) => {
    setOpenLineupInquiry(!openLineupInquiry);
    setCloseLineupInquiry(!closeLineupInquiry);
  };

  // CATALOG
  const handleOpenCatalog = (e) => {
    setOpenCatalog(!openCatalog);
    setCloseCatalog(!closeCatalog);
  };

  const handleOpenCatalogProduction = (e) => {
    setOpenCatalogProduction(!openCatalogProduction);
    setCloseCatalogProduction(!closeCatalogProduction);
  };

  const handleOpenCatalogMgt = (e) => {
    setOpenCatalogMgt(!openCatalogMgt);
    setCloseCatalogMgt(!closeCatalogMgt);
  };

  const handleOpenCatalogStatus = (e) => {
    setOpenCatalogStatus(!openCatalogStatus);
    setCloseCatalogStatus(!closeCatalogStatus);
  };

  // INTERNET
  const handleOpenInternet = (e) => {
    setOpenInternet(!openInternet);
    setCloseInternet(!closeInternet);
  };

  const handleOpenWebSurvey = (e) => {
    setOpenWebSurvey(!openWebSurvey);
    setCloseWebSurvey(!closeWebSurvey);
  };

  const handleOpenPreOrderMgt = (e) => {
    setOpenPreOrderMgt(!openPreOrderMgt);
    setClosePreOrderMgt(!closePreOrderMgt);
  };

  const handleOpenB2ECompanyMgt = (e) => {
    setOpenB2ECompanyMgt(!openB2ECompanyMgt);
    setCloseB2ECompanyMgt(!closeB2ECompanyMgt);
  };

  const handleOpenMROCompanyMgt = (e) => {
    setOpenMROCompanyMgt(!openMROCompanyMgt);
    setCloseMROCompanyMgt(!closeMROCompanyMgt);
  };

  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <Typography onClick={handleOpenTV}>
            <Add fontSize="small" hidden={openTV} />
            <HorizontalRule fontSize="small" hidden={closeTV} />
            <Folder className="folder" hidden={openTV} />
            <FolderOpen className="folder" hidden={closeTV} />
            TV section
          </Typography>
          <ul className="tree-view-child" hidden={closeTV}>
            <li>
              <Typography onClick={handleOpenBasicInfo}>
                <Add fontSize="small" hidden={openBasicInfo} />
                <HorizontalRule fontSize="small" hidden={closeBasicInfo} />
                <Folder className="folder" hidden={openBasicInfo} />
                <FolderOpen className="folder" hidden={closeBasicInfo} />
                Basic Info
              </Typography>
              <ul className="tree-view-child" hidden={closeBasicInfo}>
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
              <Typography onClick={handleOpenProgramLineup}>
                <Add fontSize="small" hidden={openProgramLineup} />
                <HorizontalRule fontSize="small" hidden={closeProgramLineup} />
                <Folder className="folder" hidden={openProgramLineup} />
                <FolderOpen className="folder" hidden={closeProgramLineup} />
                Program Lineup
              </Typography>
              <ul className="tree-view-child" hidden={closeProgramLineup}>
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
              <Typography onClick={handleOpenOnAir}>
                <Add fontSize="small" hidden={openOnAir} />
                <HorizontalRule fontSize="small" hidden={closeOnAir} />
                <Folder className="folder" hidden={openOnAir} />
                <FolderOpen className="folder" hidden={closeOnAir} />
                On-Air
              </Typography>
              <ul className="tree-view-child" hidden={closeOnAir}>
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
              <Typography onClick={handleOpenResult}>
                <Add fontSize="small" hidden={openResult} />
                <HorizontalRule fontSize="small" hidden={closeResult} />
                <Folder className="folder" hidden={openResult} />
                <FolderOpen className="folder" hidden={closeResult} />
                Result
              </Typography>
              <ul className="tree-view-child" hidden={closeResult}>
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
              <Typography onClick={handleOpenLineupInquiry}>
                <Add fontSize="small" hidden={openLineupInquiry} />
                <HorizontalRule fontSize="small" hidden={closeLineupInquiry} />
                <Folder className="folder" hidden={openLineupInquiry} />
                <FolderOpen className="folder" hidden={closeLineupInquiry} />
                Lineup Inquiry
              </Typography>
              <ul className="tree-view-child" hidden={closeLineupInquiry}>
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
          <Typography onClick={handleOpenCatalog}>
            <Add fontSize="small" hidden={openCatalog} />
            <HorizontalRule fontSize="small" hidden={closeCatalog} />
            <Folder className="folder" hidden={openCatalog} />
            <FolderOpen className="folder" hidden={closeCatalog} />
            CATALOG
          </Typography>
          <ul className="tree-view-child" hidden={closeCatalog}>
            <li>
              <Typography onClick={handleOpenCatalogProduction}>
                <Add fontSize="small" hidden={openCatalogProduction} />
                <HorizontalRule
                  fontSize="small"
                  hidden={closeCatalogProduction}
                />
                <Folder className="folder" hidden={openCatalogProduction} />
                <FolderOpen
                  className="folder"
                  hidden={closeCatalogProduction}
                />
                CATALOG Production
              </Typography>
              <ul className="tree-view-child" hidden={closeCatalogProduction}>
                <li>
                  <Typography className="document-title">
                    <Description className="file" />
                    Đăng ký sản phẩm CATALOG
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenCatalogMgt}>
                <Add fontSize="small" hidden={openCatalogMgt} />
                <HorizontalRule fontSize="small" hidden={closeCatalogMgt} />
                <Folder className="folder" hidden={openCatalogMgt} />
                <FolderOpen className="folder" hidden={closeCatalogMgt} />
                CATALOG Mgt
              </Typography>
              <ul className="tree-view-child" hidden={closeCatalogMgt}>
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
              <Typography onClick={handleOpenCatalogStatus}>
                <Add fontSize="small" hidden={openCatalogStatus} />
                <HorizontalRule fontSize="small" hidden={closeCatalogStatus} />
                <Folder className="folder" hidden={openCatalogStatus} />
                <FolderOpen className="folder" hidden={closeCatalogStatus} />
                CATALOG Status
              </Typography>
              <ul className="tree-view-child" hidden={closeCatalogStatus}>
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
          <Typography onClick={handleOpenInternet}>
            <Add fontSize="small" hidden={openInternet} />
            <HorizontalRule fontSize="small" hidden={closeInternet} />
            <Folder className="folder" hidden={openInternet} />
            <FolderOpen className="folder" hidden={closeInternet} />
            INTERNET
          </Typography>
          <ul className="tree-view-child" hidden={closeInternet}>
            <li>
              <Typography onClick={handleOpenWebSurvey}>
                <Add fontSize="small" hidden={openWebSurvey} />
                <HorizontalRule fontSize="small" hidden={closeWebSurvey} />
                <Folder className="folder" hidden={openWebSurvey} />
                <FolderOpen className="folder" hidden={closeWebSurvey} />
                WebSurvey
              </Typography>
              <ul className="tree-view-child" hidden={closeWebSurvey}>
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
              <Typography onClick={handleOpenPreOrderMgt}>
                <Add fontSize="small" hidden={openPreOrderMgt} />
                <HorizontalRule fontSize="small" hidden={closePreOrderMgt} />
                <Folder className="folder" hidden={openPreOrderMgt} />
                <FolderOpen className="folder" hidden={closePreOrderMgt} />
                Pre Order Mgt
              </Typography>
              <ul className="tree-view-child" hidden={closePreOrderMgt}>
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
              <Typography onClick={handleOpenB2ECompanyMgt}>
                <Add fontSize="small" hidden={openB2ECompanyMgt} />
                <HorizontalRule fontSize="small" hidden={closeB2ECompanyMgt} />
                <Folder className="folder" hidden={openB2ECompanyMgt} />
                <FolderOpen className="folder" hidden={closeB2ECompanyMgt} />
                B2E Company Mgt
              </Typography>
              <ul className="tree-view-child" hidden={closeB2ECompanyMgt}>
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
              <Typography onClick={handleOpenMROCompanyMgt}>
                <Add fontSize="small" hidden={openMROCompanyMgt} />
                <HorizontalRule fontSize="small" hidden={closeMROCompanyMgt} />
                <Folder className="folder" hidden={openMROCompanyMgt} />
                <FolderOpen className="folder" hidden={closeMROCompanyMgt} />
                MRO Company Mgt
              </Typography>
              <ul className="tree-view-child" hidden={closeMROCompanyMgt}>
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
    </div>
  );
}

export default Menu;
