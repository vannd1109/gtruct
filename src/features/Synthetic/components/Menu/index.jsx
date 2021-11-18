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

  // Master
  const [openMaster, setOpenMaster] = useState(false);
  const [closeMaster, setCloseMaster] = useState(true);

  const [openMasterBasicMgt, setOpenMasterBasicMgt] = useState(false);
  const [closeMasterBasicMgt, setCloseMasterBasicMgt] = useState(true);

  const [openMasterInquiry, setOpenMasterInquiry] = useState(false);
  const [closeMasterInquiry, setCloseMasterInquiry] = useState(true);

  const [openMasterRule, setOpenMasterRule] = useState(false);
  const [closeMasterRule, setCloseMasterRule] = useState(true);

  // QC
  const [openQC, setOpenQC] = useState(false);
  const [closeQC, setCloseQC] = useState(true);

  const [openQCApproval, setOpenQCApproval] = useState(false);
  const [closeQCApproval, setCloseQCApproval] = useState(true);

  const [openQCWarehousing, setOpenQCWarehousing] = useState(false);
  const [closeQCWarehousing, setCloseQCWarehousing] = useState(true);

  const [openQCStatus, setOpenQCStatus] = useState(false);
  const [closeQCStatus, setCloseQCStatus] = useState(true);

  // Warehousing
  const [openWarehousing, setOpenWarehousing] = useState(false);
  const [closeWarehousing, setCloseWarehousing] = useState(true);

  const [openWarehousingOrder, setOpenWarehousingOrder] = useState(false);
  const [closeWarehousingOrder, setCloseWarehousingOrder] = useState(true);

  const [openWarehousingMgt, setOpenWarehousingMgt] = useState(false);
  const [closeWarehousingMgt, setCloseWarehousingMgt] = useState(true);

  const [openWarehousingConsigment, setOpenWarehousingConsigment] =
    useState(false);
  const [closeWarehousingConsigment, setCloseWarehousingConsigment] =
    useState(true);

  const [openWarehousingAdjustment, setOpenWarehousingAdjustment] =
    useState(false);
  const [closeWarehousingAdjustment, setCloseWarehousingAdjustment] =
    useState(true);

  // Shipping
  const [openShipping, setOpenShipping] = useState(false);
  const [closeShipping, setCloseShipping] = useState(true);

  const [openShippingOrder, setOpenShippingOrder] = useState(false);
  const [closeShippingOrder, setCloseShippingOrder] = useState(true);

  const [openShippingSchedules, setOpenShippingSchedules] = useState(false);
  const [closeShippingSchedules, setCloseShippingSchedules] = useState(true);

  const [openShippingWaybill, setOpenShippingWaybill] = useState(false);
  const [closeShippingWaybill, setCloseShippingWaybill] = useState(true);

  // Shipment
  const [openShipment, setOpenShipment] = useState(false);
  const [closeShipment, setCloseShipment] = useState(true);

  const [openShipmentProcess, setOpenShipmentProcess] = useState(false);
  const [closeShipmentProcess, setCloseShipmentProcess] = useState(true);

  const [openShipmentStatus, setOpenShipmentStatus] = useState(false);
  const [closeShipmentStatus, setCloseShipmentStatus] = useState(true);

  // Direct
  const [openDirect, setOpenDirect] = useState(false);
  const [closeDirect, setCloseDirect] = useState(true);

  const [openDirectDelivery, setOpenDirectDelivery] = useState(false);
  const [closeDirectDelivery, setCloseDirectDelivery] = useState(true);

  const [openDirectShipment, setOpenDirectShipment] = useState(false);
  const [closeDirectShipment, setCloseDirectShipment] = useState(true);

  // Collection
  const [openCollection, setOpenCollection] = useState(false);
  const [closeCollection, setCloseCollection] = useState(true);

  const [openCollectionProcess, setOpenCollectionProcess] = useState(false);
  const [closeCollectionProcess, setCloseCollectionProcess] = useState(true);

  const [openCollectionStatus, setOpenCollectionStatus] = useState(false);
  const [closeCollectionStatus, setCloseCollectionStatus] = useState(true);

  // Vendor
  const [openVendor, setOpenVendor] = useState(false);
  const [closeVendor, setCloseVendor] = useState(true);

  const [openVendorOut, setOpenVendorOut] = useState(false);
  const [closeVendorOut, setCloseVendorOut] = useState(true);

  // Other
  const [openOther, setOpenOther] = useState(false);
  const [closeOther, setCloseOther] = useState(true);

  const [openOtherPacking, setOpenOtherPacking] = useState(false);
  const [closeOtherPacking, setCloseOtherPacking] = useState(true);

  // Warehouse
  const [openWarehouse, setOpenWarehouse] = useState(false);
  const [closeWarehouse, setCloseWarehouse] = useState(true);

  const [openWarehouseInventory, setOpenWarehouseInventory] = useState(false);
  const [closeWarehouseInventory, setCloseWarehouseInventory] = useState(true);

  const [openWarehouseAdjustment, setOpenWarehouseAdjustment] = useState(false);
  const [closeWarehouseAdjustment, setCloseWarehouseAdjustment] =
    useState(true);

  const [openWarehouseStatus, setOpenWarehouseStatus] = useState(false);
  const [closeWarehouseStatus, setCloseWarehouseStatus] = useState(true);

  const [openWarehouseItem, setOpenWarehouseItem] = useState(false);
  const [closeWarehouseItem, setCloseWarehouseItem] = useState(true);

  // Delivery
  const [openDelivery, setOpenDelivery] = useState(false);
  const [closeDelivery, setCloseDelivery] = useState(true);

  const [openDeliverySetting, setOpenDeliverySetting] = useState(false);
  const [closeDeliverySetting, setCloseDeliverySetting] = useState(true);

  const [openDeliveryCalculate, setOpenDeliveryCalculate] = useState(false);
  const [closeDeliveryCalculate, setCloseDeliveryCalculate] = useState(true);

  const [openDeliveryStatus, setOpenDeliveryStatus] = useState(false);
  const [closeDeliveryStatus, setCloseDeliveryStatus] = useState(true);

  const [openDeliveryBasic, setOpenDeliveryBasic] = useState(false);
  const [closeDeliveryBasic, setCloseDeliveryBasic] = useState(true);

  // ----------------------------------handle-----------------

  // Master
  const handleOpenMaster = (e) => {
    setOpenMaster(!openMaster);
    setCloseMaster(!closeMaster);
  };

  const handleOpenMasterBasicMgt = (e) => {
    setOpenMasterBasicMgt(!openMasterBasicMgt);
    setCloseMasterBasicMgt(!closeMasterBasicMgt);
  };

  const handleOpenMasterInquiry = (e) => {
    setOpenMasterInquiry(!openMasterInquiry);
    setCloseMasterInquiry(!closeMasterInquiry);
  };

  const handleOpenMasterRule = (e) => {
    setOpenMasterRule(!openMasterRule);
    setCloseMasterRule(!closeMasterRule);
  };

  // QC
  const handleOpenQC = (e) => {
    setOpenQC(!openQC);
    setCloseQC(!closeQC);
  };

  const handleOpenQCApproval = (e) => {
    setOpenQCApproval(!openQCApproval);
    setCloseQCApproval(!closeQCApproval);
  };

  const handleOpenQCWarehousing = (e) => {
    setOpenQCWarehousing(!openQCWarehousing);
    setCloseQCWarehousing(!closeQCWarehousing);
  };

  const handleOpenQCStatus = (e) => {
    setOpenQCStatus(!openQCStatus);
    setCloseQCStatus(!closeQCStatus);
  };

  // Warehousing
  const handleOpenWarehousing = (e) => {
    setOpenWarehousing(!openWarehousing);
    setCloseWarehousing(!closeWarehousing);
  };

  const handleOpenWarehousingOrder = (e) => {
    setOpenWarehousingOrder(!openWarehousingOrder);
    setCloseWarehousingOrder(!closeWarehousingOrder);
  };

  const handleOpenWarehousingMgt = (e) => {
    setOpenWarehousingMgt(!openWarehousingMgt);
    setCloseWarehousingMgt(!closeWarehousingMgt);
  };

  const handleOpenWarehousingConsigment = (e) => {
    setOpenWarehousingConsigment(!openWarehousingConsigment);
    setCloseWarehousingConsigment(!closeWarehousingConsigment);
  };

  const handleOpenWarehousingAdjustment = (e) => {
    setOpenWarehousingAdjustment(!openWarehousingAdjustment);
    setCloseWarehousingAdjustment(!closeWarehousingAdjustment);
  };

  // Shipping
  const handleOpenShipping = (e) => {
    setOpenShipping(!openShipping);
    setCloseShipping(!closeShipping);
  };

  const handleOpenShippingOrder = (e) => {
    setOpenShippingOrder(!openShippingOrder);
    setCloseShippingOrder(!closeShippingOrder);
  };

  const handleOpenShippingSchedules = (e) => {
    setOpenShippingSchedules(!openShippingSchedules);
    setCloseShippingSchedules(!closeShippingSchedules);
  };

  const handleOpenShippingWaybill = (e) => {
    setOpenShippingWaybill(!openShippingWaybill);
    setCloseShippingWaybill(!closeShippingWaybill);
  };

  // Shipment
  const handleOpenShipment = (e) => {
    setOpenShipment(!openShipment);
    setCloseShipment(!closeShipment);
  };

  const handleOpenShipmentProcess = (e) => {
    setOpenShipmentProcess(!openShipmentProcess);
    setCloseShipmentProcess(!closeShipmentProcess);
  };

  const handleOpenShipmentStatus = (e) => {
    setOpenShipmentStatus(!openShipmentStatus);
    setCloseShipmentStatus(!closeShipmentStatus);
  };

  // Direct
  const handleOpenDirect = (e) => {
    setOpenDirect(!openDirect);
    setCloseDirect(!closeDirect);
  };
  const handleOpenDirectDelivery = (e) => {
    setOpenDirectDelivery(!openDirectDelivery);
    setCloseDirectDelivery(!closeDirectDelivery);
  };
  const handleOpenDirectShipment = (e) => {
    setOpenDirectShipment(!openDirectShipment);
    setCloseDirectShipment(!closeDirectShipment);
  };

  // Collection
  const handleOpenCollection = (e) => {
    setOpenCollection(!openCollection);
    setCloseCollection(!closeCollection);
  };

  const handleOpenCollectionProcess = (e) => {
    setOpenCollectionProcess(!openCollectionProcess);
    setCloseCollectionProcess(!closeCollectionProcess);
  };

  const handleOpenCollectionStatus = (e) => {
    setOpenCollectionStatus(!openCollectionStatus);
    setCloseCollectionStatus(!closeCollectionStatus);
  };

  // Vendor
  const handleOpenVendor = (e) => {
    setOpenVendor(!openVendor);
    setCloseVendor(!closeVendor);
  };

  const handleOpenVendorOut = (e) => {
    setOpenVendorOut(!openVendorOut);
    setCloseVendorOut(!closeVendorOut);
  };

  // Other
  const handleOpenOther = (e) => {
    setOpenOther(!openOther);
    setCloseOther(!closeOther);
  };

  const handleOpenOtherPacking = (e) => {
    setOpenOtherPacking(!openOtherPacking);
    setCloseOtherPacking(!closeOtherPacking);
  };

  // Warehouse
  const handleOpenWarehouse = (e) => {
    setOpenWarehouse(!openWarehouse);
    setCloseWarehouse(!closeWarehouse);
  };

  const handleOpenWarehouseInventory = (e) => {
    setOpenWarehouseInventory(!openWarehouseInventory);
    setCloseWarehouseInventory(!closeWarehouseInventory);
  };

  const handleOpenWarehouseAdjustment = (e) => {
    setOpenWarehouseAdjustment(!openWarehouseAdjustment);
    setCloseWarehouseAdjustment(!closeWarehouseAdjustment);
  };

  const handleOpenWarehouseStatus = (e) => {
    setOpenWarehouseStatus(!openWarehouseStatus);
    setCloseWarehouseStatus(!closeWarehouseStatus);
  };

  const handleOpenWarehouseItem = (e) => {
    setOpenWarehouseItem(!openWarehouseItem);
    setCloseWarehouseItem(!closeWarehouseItem);
  };

  // Delivery
  const handleOpenDelivery = (e) => {
    setOpenDelivery(!openDelivery);
    setCloseDelivery(!closeDelivery);
  };

  const handleOpenDeliverySetting = (e) => {
    setOpenDeliverySetting(!openDeliverySetting);
    setCloseDeliverySetting(!closeDeliverySetting);
  };

  const handleOpenDeliveryCalculate = (e) => {
    setOpenDeliveryCalculate(!openDeliveryCalculate);
    setCloseDeliveryCalculate(!closeDeliveryCalculate);
  };

  const handleOpenDeliveryStatus = (e) => {
    setOpenDeliveryStatus(!openDeliveryStatus);
    setCloseDeliveryStatus(!closeDeliveryStatus);
  };

  const handleOpenDeliveryBasic = (e) => {
    setOpenDeliveryBasic(!openDeliveryBasic);
    setCloseDeliveryBasic(!closeDeliveryBasic);
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
            <Typography onClick={handleOpenMaster}>
              <Add fontSize="small" hidden={openMaster} />
              <HorizontalRule fontSize="small" hidden={closeMaster} />
              <Folder className="folder" hidden={openMaster} />
              <FolderOpen className="folder" hidden={closeMaster} /> Master Data
            </Typography>
            <ul className="tree-view-child" hidden={closeMaster}>
              <li>
                <Typography onClick={handleOpenMasterBasicMgt}>
                  <Add fontSize="small" hidden={openMasterBasicMgt} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeMasterBasicMgt}
                  />
                  <Folder className="folder" hidden={openMasterBasicMgt} />
                  <FolderOpen className="folder" hidden={closeMasterBasicMgt} />
                  Basic Logistics Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closeMasterBasicMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký lịch nghỉ làm(công ty giao nhận)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý số lượng hàng giao theo ngày
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý giao hàng theo khu vực
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý mã số kệ để hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý nhân viên thao tác kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý quy cách sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý các loại chi phí khác theo khu vực
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenMasterInquiry}>
                  <Add fontSize="small" hidden={openMasterInquiry} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeMasterInquiry}
                  />
                  <Folder className="folder" hidden={openMasterInquiry} />
                  <FolderOpen className="folder" hidden={closeMasterInquiry} />
                  Basic Logistics Inquiry
                </Typography>
                <ul className="tree-view-child" hidden={closeMasterInquiry}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In nhãn sản phấm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra tình hình đăng ký chi phí chuyển hàng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenMasterRule}>
                  <Add fontSize="small" hidden={openMasterRule} />
                  <HorizontalRule fontSize="small" hidden={closeMasterRule} />
                  <Folder className="folder" hidden={openMasterRule} />
                  <FolderOpen className="folder" hidden={closeMasterRule} />
                  Basic Logistics Rule Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closeMasterRule}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quy tắc nhập kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quy tắc lấy hàng
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleOpenQC}>
              <Add fontSize="small" hidden={openQC} />
              <HorizontalRule fontSize="small" hidden={closeQC} />
              <Folder className="folder" hidden={openQC} />
              <FolderOpen className="folder" hidden={closeQC} /> QC
            </Typography>
            <ul className="tree-view-child" hidden={closeQC}>
              <li>
                <Typography onClick={handleOpenQCApproval}>
                  <Add fontSize="small" hidden={openQCApproval} />
                  <HorizontalRule fontSize="small" hidden={closeQCApproval} />
                  <Folder className="folder" hidden={openQCApproval} />
                  <FolderOpen className="folder" hidden={closeQCApproval} />
                  Approval Inspection
                </Typography>
                <ul className="tree-view-child" hidden={closeQCApproval}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Chấp nhận yêu cầu kiểm tra sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký kết quả kiểm tra phê duyệt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Trạng thái tiến hành kiểm tra phê duyệt sản phẩm
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenQCWarehousing}>
                  <Add fontSize="small" hidden={openQCWarehousing} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeQCWarehousing}
                  />
                  <Folder className="folder" hidden={openQCWarehousing} />
                  <FolderOpen className="folder" hidden={closeQCWarehousing} />
                  Warehousing Inspection
                </Typography>
                <ul className="tree-view-child" hidden={closeQCWarehousing}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký kết quả kiểm tra sản phẩm nhập kho
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenQCStatus}>
                  <Add fontSize="small" hidden={openQCStatus} />
                  <HorizontalRule fontSize="small" hidden={closeQCStatus} />
                  <Folder className="folder" hidden={openQCStatus} />
                  <FolderOpen className="folder" hidden={closeQCStatus} />
                  Inspection Status
                </Typography>
                <ul className="tree-view-child" hidden={closeQCStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình trạng của khách hàng yêu cầu bồi thường giá Quatity
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kết quả kiểm tra phê duyệt của từng sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In hạng mục cần bổ sung
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra kết quả kiểm tra nhập kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Trạng thái Kết quả kiểm tra nhập kho
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleOpenWarehousing}>
              <Add fontSize="small" hidden={openWarehousing} />
              <HorizontalRule fontSize="small" hidden={closeWarehousing} />
              <Folder className="folder" hidden={openWarehousing} />
              <FolderOpen className="folder" hidden={closeWarehousing} />
              Warehousing/Shipping Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeWarehousing}>
              <li>
                <Typography onClick={handleOpenWarehousingOrder}>
                  <Add fontSize="small" hidden={openWarehousingOrder} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeWarehousingOrder}
                  />
                  <Folder className="folder" hidden={openWarehousingOrder} />
                  <FolderOpen
                    className="folder"
                    hidden={closeWarehousingOrder}
                  />
                  Warehousing Order Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closeWarehousingOrder}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Yêu cầu nhập kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phê duyệt yêu cầu nhập kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Yêu cầu tiến hành nhập kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập hủy yêu cầu nhập kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xuất dữ liệu Pre Order
                    </Typography>
                  </li>
                </ul>
              </li>

              <li>
                <Typography onClick={handleOpenWarehousingMgt}>
                  <Add fontSize="small" hidden={openWarehousingMgt} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeWarehousingMgt}
                  />
                  <Folder className="folder" hidden={openWarehousingMgt} />
                  <FolderOpen className="folder" hidden={closeWarehousingMgt} />
                  Warehousing Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closeWarehousingMgt}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập xác nhận nhập kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng nhập lịch nhập kho
                    </Typography>
                  </li>
                </ul>
              </li>

              <li>
                <Typography onClick={handleOpenWarehousingConsigment}>
                  <Add fontSize="small" hidden={openWarehousingConsigment} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeWarehousingConsigment}
                  />
                  <Folder
                    className="folder"
                    hidden={openWarehousingConsigment}
                  />
                  <FolderOpen
                    className="folder"
                    hidden={closeWarehousingConsigment}
                  />
                  Consigment Mgt
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={closeWarehousingConsigment}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký số lượng có thể nhập kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký số lượng có thể bán chương trình Live
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phê duyệt số lượng có thể nhập kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký số lượng có thể bán của hàng ký gửi
                    </Typography>
                  </li>
                </ul>
              </li>

              <li>
                <Typography onClick={handleOpenWarehousingAdjustment}>
                  <Add fontSize="small" hidden={openWarehousingAdjustment} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeWarehousingAdjustment}
                  />
                  <Folder
                    className="folder"
                    hidden={openWarehousingAdjustment}
                  />
                  <FolderOpen
                    className="folder"
                    hidden={closeWarehousingAdjustment}
                  />
                  Consigment Adjustment
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={closeWarehousingAdjustment}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Điều chỉnh số lượng có thể bán chương trình Live
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Phê duyệt điều chỉnh số lượng có thể bán
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleOpenShipping}>
              <Add fontSize="small" hidden={openShipping} />
              <HorizontalRule fontSize="small" hidden={closeShipping} />
              <Folder className="folder" hidden={openShipping} />
              <FolderOpen className="folder" hidden={closeShipping} /> Shipping
              Order Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeShipping}>
              <li>
                <Typography onClick={handleOpenShippingOrder}>
                  <Add fontSize="small" hidden={openShippingOrder} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeShippingOrder}
                  />
                  <Folder className="folder" hidden={openShippingOrder} />
                  <FolderOpen className="folder" hidden={closeShippingOrder} />
                  Shipping Order
                </Typography>
                <ul className="tree-view-child" hidden={closeShippingOrder}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hướng dẫn xuất kho của từng sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hướng dẫn xuất kho toàn bộ đơn hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký hủy bỏ lệnh vận chuyển hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hướng dẫn xuất kho toàn bộ đơn hàng(B2B)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hướng dẫn xuất kho toàn bộ đơn hàng(Vendor)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hướng dẫn xuất kho toàn bộ đơn hàng(Other)
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenShippingSchedules}>
                  <Add fontSize="small" hidden={openShippingSchedules} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeShippingSchedules}
                  />
                  <Folder className="folder" hidden={openShippingSchedules} />
                  <FolderOpen
                    className="folder"
                    hidden={closeShippingSchedules}
                  />
                  Shipping Schedules
                </Typography>
                <ul className="tree-view-child" hidden={closeShippingSchedules}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình dự kiến xuất kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tạo hướng dẫn xuất kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Bố trí lấy hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xử lý hủy bỏ và phân công lại việc lấy hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Danh sách sản phẩm có khuyến mãi được hướng dẫn xuất kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình tiếp nhận sản phẩm trả lại sau khi có lệnh vận
                      chuyển hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình trạng chi tiết hướng dẫn vận chuyển hàng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenShippingWaybill}>
                  <Add fontSize="small" hidden={openShippingWaybill} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeShippingWaybill}
                  />
                  <Folder className="folder" hidden={openShippingWaybill} />
                  <FolderOpen
                    className="folder"
                    hidden={closeShippingWaybill}
                  />
                  Waybill Output
                </Typography>
                <ul className="tree-view-child" hidden={closeShippingWaybill}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In ra hóa đơn kèm phiếu giao hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In ra chứng từ vận chuyển
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thay đổi phương thức vận chuyển xuất kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thay đổi cách thức chuyển chứng từ thu hồi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In ra hóa đơn kèm phiếu giao hàng(B2B)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thay đổi phương pháp vận chuyển xuất kho Excel
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In phiếu giao hàng hóa đơn điện tử Kho HCM(NEW)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Sign Ebill Excel
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In ra chứng từ vận chuyển(NEW)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In phiếu gia hàng hóa đơn điện tử Kho HN(NEW)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In phiếu giao hàng không giá tiền(NEW)
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleOpenShipment}>
              <Add fontSize="small" hidden={openShipment} />
              <HorizontalRule fontSize="small" hidden={closeShipment} />
              <Folder className="folder" hidden={openShipment} />
              <FolderOpen className="folder" hidden={closeShipment} /> Shipment
              Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeShipment}>
              <li>
                <Typography onClick={handleOpenShipmentProcess}>
                  <Add fontSize="small" hidden={openShipmentProcess} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeShipmentProcess}
                  />
                  <Folder className="folder" hidden={openShipmentProcess} />
                  <FolderOpen
                    className="folder"
                    hidden={closeShipmentProcess}
                  />
                  Shipment Process
                </Typography>
                <ul className="tree-view-child" hidden={closeShipmentProcess}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký gửi lại chứng từ vận chuyển
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận xuất kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý nguyên nhân chưa chuyển hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận hoàn tất giao hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận thu tiền
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận thu tiền[EXCEL]
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenShipmentStatus}>
                  <Add fontSize="small" hidden={openShipmentStatus} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeShipmentStatus}
                  />
                  <Folder className="folder" hidden={openShipmentStatus} />
                  <FolderOpen className="folder" hidden={closeShipmentStatus} />
                  Shipment Status
                </Typography>
                <ul className="tree-view-child" hidden={closeShipmentStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra tình hình chứng từ vận chuyển
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra chi tiết chứng từ vận chuyển
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Theo dõi chứng từ vận chuyển đổi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận việc xuất kho/thu hồi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Báo cáo giao hàng của từng đơn vị
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      API GỬI TO ĐẾN CÔNG TY GIAO HÀNG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      HỦY GỬI API ĐỂ ĐẾN CÔNG TY GIAO HÀNG(EXCEL)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xem trạng thái đơn đặt hàng API
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Báo cáo các kênh TV
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Family Mall Report
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Update Item Code to Website
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Trả tiền tích lũy thiếu Promotion
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xem Pending của đơn hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hoàn tất 6 bước Mobile Card
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình giá mới của sản phẩm
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tỉ lệ thành công đơn hàng - SCM
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tỉ lệ thành công đơn hàng theo khoàn thời gian - SCM
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xem Pending của đơn hàng tại Nhà Vận Chuyển
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình trạng ký SA
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ký hóa đơn điện tử HCM
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quản lý hóa đơn điện tử
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Danh sách hóa đơn đã hủy
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Danh sách hóa đơn của đơn hàng hủy 4 bước
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Doanh số bán hàng SC
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Doanh sách đặt hàng Payment Online
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ký hóa đơn điện tử HN
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleOpenDirect}>
              <Add fontSize="small" hidden={openDirect} />
              <HorizontalRule fontSize="small" hidden={closeDirect} />
              <Folder className="folder" hidden={openDirect} />
              <FolderOpen className="folder" hidden={closeDirect} /> Direct
              Delivery Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeDirect}>
              <li>
                <Typography onClick={handleOpenDirectDelivery}>
                  <Add fontSize="small" hidden={openDirectDelivery} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeDirectDelivery}
                  />
                  <Folder className="folder" hidden={openDirectDelivery} />
                  <FolderOpen className="folder" hidden={closeDirectDelivery} />
                  Direct Delivery Warehousing Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closeDirectDelivery}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký số lượng bán
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận nhập kho giao trực tiếp
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Di chuyển hàng kho giao trực tiếp
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenDirectShipment}>
                  <Add fontSize="small" hidden={openDirectShipment} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeDirectShipment}
                  />
                  <Folder className="folder" hidden={openDirectShipment} />
                  <FolderOpen className="folder" hidden={closeDirectShipment} />
                  Direct Delivery Shipment
                </Typography>
                <ul className="tree-view-child" hidden={closeDirectShipment}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hướng dẫn xuất kho toàn bộ đơn hàng(Direct Dely)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In hóa đơn cho sản phẩm giao trực tiếp
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleOpenCollection}>
              <Add fontSize="small" hidden={openCollection} />
              <HorizontalRule fontSize="small" hidden={closeCollection} />
              <Folder className="folder" hidden={openCollection} />
              <FolderOpen className="folder" hidden={closeCollection} />
              Collection Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeCollection}>
              <li>
                <Typography onClick={handleOpenCollectionProcess}>
                  <Add fontSize="small" hidden={openCollectionProcess} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeCollectionProcess}
                  />
                  <Folder className="folder" hidden={openCollectionProcess} />
                  <FolderOpen
                    className="folder"
                    hidden={closeCollectionProcess}
                  />
                  Collection Process
                </Typography>
                <ul className="tree-view-child" hidden={closeCollectionProcess}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Upload dữ liệu thu hồi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký Scan tài liệu về việc thu hồi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký xác nhận thu hồi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký những dữ liệu chưa xử lý
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Hủy bỏ chỉ thị thu hồi hàng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenCollectionStatus}>
                  <Add fontSize="small" hidden={openCollectionStatus} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeCollectionStatus}
                  />
                  <Folder className="folder" hidden={openCollectionStatus} />
                  <FolderOpen
                    className="folder"
                    hidden={closeCollectionStatus}
                  />
                  Collection Status
                </Typography>
                <ul className="tree-view-child" hidden={closeCollectionStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình xác nhận/tiếp nhận hàng bị trả lại
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Bảng hướng dẫn thu hồi hàng trả lại/đổi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In ra nhãn hàng xác nhận thu hồi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình giải quyết hàng bị trả lại
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình xử lý nhập kho hàng thu hồi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình cụ thể xác nhận thu hồi
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tổng số xác nhận thu hồi hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tổng số hàng được thu hồi theo từng lý do
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký kiểm tra chất lượng hàng bị trả lại(MD)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      API GỬI CO ĐẾN CÔNG TY GIAO HÀNG
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleOpenVendor}>
              <Add fontSize="small" hidden={openVendor} />
              <HorizontalRule fontSize="small" hidden={closeVendor} />
              <Folder className="folder" hidden={openVendor} />
              <FolderOpen className="folder" hidden={closeVendor} /> Vendor Out
              Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeVendor}>
              <li>
                <Typography onClick={handleOpenVendorOut}>
                  <Add fontSize="small" hidden={openVendorOut} />
                  <HorizontalRule fontSize="small" hidden={closeVendorOut} />
                  <Folder className="folder" hidden={openVendorOut} />
                  <FolderOpen className="folder" hidden={closeVendorOut} />
                  Vendor Out Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closeVendorOut}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký số lượng hàng bị trả lại của nhà cung cấp
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Yêu cầu kết quả sản phẩm bị trả lại của nhà cung cấp
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleOpenOther}>
              <Add fontSize="small" hidden={openOther} />
              <HorizontalRule fontSize="small" hidden={closeOther} />
              <Folder className="folder" hidden={openOther} />
              <FolderOpen className="folder" hidden={closeOther} /> Other
              Logistics Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeOther}>
              <li>
                <Typography onClick={handleOpenOtherPacking}>
                  <Add fontSize="small" hidden={openOtherPacking} />
                  <HorizontalRule fontSize="small" hidden={closeOtherPacking} />
                  <Folder className="folder" hidden={openOtherPacking} />
                  <FolderOpen className="folder" hidden={closeOtherPacking} />
                  Packing Material Mgt
                </Typography>
                <ul className="tree-view-child" hidden={closeOtherPacking}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký nhập/xuất kho bao bì đóng gói
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký xuất kho bao bì đóng gói theo tiêu chuẩn xuất kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xuất biên nhận bao bì đóng gói
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình thanh toán bao bì đóng gói
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleOpenWarehouse}>
              <Add fontSize="small" hidden={openWarehouse} />
              <HorizontalRule fontSize="small" hidden={closeWarehouse} />
              <Folder className="folder" hidden={openWarehouse} />
              <FolderOpen className="folder" hidden={closeWarehouse} />
              Warehouse Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeWarehouse}>
              <li>
                <Typography onClick={handleOpenWarehouseInventory}>
                  <Add fontSize="small" hidden={openWarehouseInventory} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeWarehouseInventory}
                  />
                  <Folder className="folder" hidden={openWarehouseInventory} />
                  <FolderOpen
                    className="folder"
                    hidden={closeWarehouseInventory}
                  />
                  Inventory Mgt
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={closeWarehouseInventory}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký thay đổi kệ để hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Điều chỉnh lượng đơn phẩm tồn kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Điều chỉnh chất lượng loại hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Điều chỉnh số lượng hàng tồn kho
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenWarehouseAdjustment}>
                  <Add fontSize="small" hidden={openWarehouseAdjustment} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeWarehouseAdjustment}
                  />
                  <Folder className="folder" hidden={openWarehouseAdjustment} />
                  <FolderOpen
                    className="folder"
                    hidden={closeWarehouseAdjustment}
                  />
                  Adjustment Status
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={closeWarehouseAdjustment}
                >
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra nội dung thay đổi kệ để hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kết quả điều chỉnh phân loại hàng tồn kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kết quả điều chỉnh hàng tồn kho(theo kệ để hàng)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tổng số sản phẩm theo từng lý do điều chỉnh hàng tồn kho
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenWarehouseStatus}>
                  <Add fontSize="small" hidden={openWarehouseStatus} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeWarehouseStatus}
                  />
                  <Folder className="folder" hidden={openWarehouseStatus} />
                  <FolderOpen
                    className="folder"
                    hidden={closeWarehouseStatus}
                  />
                  Inventory Status
                </Typography>
                <ul className="tree-view-child" hidden={closeWarehouseStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra thời gian bảo quản hàng tồn kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra hàng tồn kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Bảng kiểm tra hàng tồn kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình chất lượng của từng Rack
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Kiểm tra hàng tồn và hàng được bảo quản trong kho trong
                      thời gian dài
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình trạng khác biệt tồn kho cả kho/rack
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình nhập xuất kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tình hình khác ngoài xuất nhập kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Bảng tổng hợp ngày mua hàng
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenWarehouseItem}>
                  <Add fontSize="small" hidden={openWarehouseItem} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeWarehouseItem}
                  />
                  <Folder className="folder" hidden={openWarehouseItem} />
                  <FolderOpen className="folder" hidden={closeWarehouseItem} />
                  Item move by Warehouse
                </Typography>
                <ul className="tree-view-child" hidden={closeWarehouseItem}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Yêu cầu di chuyển kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Di chuyển nhập hàng giữa các kho hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Di chuyển xuất hàng giữa các kho hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Yêu cầu nhập tới kho
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Typography onClick={handleOpenDelivery}>
              <Add fontSize="small" hidden={openDelivery} />
              <HorizontalRule fontSize="small" hidden={closeDelivery} />
              <Folder className="folder" hidden={openDelivery} />
              <FolderOpen className="folder" hidden={closeDelivery} /> Delivery
              Cost Mgt
            </Typography>
            <ul className="tree-view-child" hidden={closeDelivery}>
              <li>
                <Typography onClick={handleOpenDeliverySetting}>
                  <Add fontSize="small" hidden={openDeliverySetting} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeDeliverySetting}
                  />
                  <Folder className="folder" hidden={openDeliverySetting} />
                  <FolderOpen
                    className="folder"
                    hidden={closeDeliverySetting}
                  />
                  Delivery Cost Setting
                </Typography>
                <ul className="tree-view-child" hidden={closeDeliverySetting}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký phí vận chuyển hàng thông thường
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký phí vận chuyển hàng khổ lớn giá rẻ
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký phí vận chuyển sản phẩm oversize
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký phí vận chuyển sản phẩm lắp đặt
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký phí vận chuyển thương lượn giá
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenDeliveryCalculate}>
                  <Add fontSize="small" hidden={openDeliveryCalculate} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeDeliveryCalculate}
                  />
                  <Folder className="folder" hidden={openDeliveryCalculate} />
                  <FolderOpen
                    className="folder"
                    hidden={closeDeliveryCalculate}
                  />
                  Delivery Cost Calculate
                </Typography>
                <ul className="tree-view-child" hidden={closeDeliveryCalculate}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận phí trả hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận phí trả hàng(B2B)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tạo yêu cầu tính phí giao hàng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xác nhận phí giao hàng sản phẩm chưa có kích thước
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenDeliveryStatus}>
                  <Add fontSize="small" hidden={openDeliveryStatus} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeDeliveryStatus}
                  />
                  <Folder className="folder" hidden={openDeliveryStatus} />
                  <FolderOpen className="folder" hidden={closeDeliveryStatus} />
                  Delivery Cost Status
                </Typography>
                <ul className="tree-view-child" hidden={closeDeliveryStatus}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Báo cáo phí vận chuyển theo tháng(B2C)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Báo cáo phí vận chuyển theo tháng(B2B)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Chi tiết phí vận chuyển theo tháng(B2C)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Chi tiết phí vận chuyển theo tháng(B2B)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Chi phí vận chuyển hàng tháng theo từng đơn vị
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleOpenDeliveryBasic}>
                  <Add fontSize="small" hidden={openDeliveryBasic} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={closeDeliveryBasic}
                  />
                  <Folder className="folder" hidden={openDeliveryBasic} />
                  <FolderOpen className="folder" hidden={closeDeliveryBasic} />
                  Basic Info
                </Typography>
                <ul className="tree-view-child" hidden={closeDeliveryBasic}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Item Demensión Management
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Detail Item
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
