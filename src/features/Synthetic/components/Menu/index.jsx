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
  const [masterData, setMasterData] = useState(false);

  const [basicLogisticsMgt, setBasicLogisticsMgt] = useState(false);

  const [basicLogisticsInquiry, setBasicLogisticsInquiry] = useState(false);

  const [basicLogisticsRuleMgt, setBasicLogisticsRuleMgt] = useState(false);

  // QC
  const [qc, setQC] = useState(false);

  const [approvalInspection, setApprovalInspection] = useState(false);

  const [warehousingInspection, setWarehousingInspection] = useState(false);

  const [inspectionStatus, setInspectionStatus] = useState(false);

  // Warehousing
  const [warehousingShippingMgt, setWarehousingShippingMgt] = useState(false);

  const [warehousingOrderMgt, setWarehousingOrderMgt] = useState(false);

  const [warehousingMgt, setWarehousingMgt] = useState(false);

  const [consigmentMgt, setConsigmentMgt] = useState(false);

  const [consigmentAdjustment, setConsigmentAdjustment] = useState(false);

  // Shipping
  const [shippingOrderMgt, setShippingOrderMgt] = useState(false);

  const [shippingOrder, setShippingOrder] = useState(false);

  const [shippingSchedules, setShippingSchedules] = useState(false);

  const [waybillOutput, setWaybillOutput] = useState(false);

  // Shipment
  const [shipmentMgt, setShipmentMgt] = useState(false);

  const [shipmentProcess, setShipmentProcess] = useState(false);

  const [shipmentStatus, setShipmentStatus] = useState(false);

  // Direct
  const [directDeliveryMgt, setDirectDeliveryMgt] = useState(false);

  const [directDeliveryWarehousingMgt, setDirectDeliveryWarehousingMgt] =
    useState(false);

  const [directDeliveryShipment, setDirectDeliveryShipment] = useState(false);

  // Collection
  const [collectionMgt, setCollectionMgt] = useState(false);

  const [collectionProcess, setCollectionProcess] = useState(false);

  const [collectionStatus, setCollectionStatus] = useState(false);

  // Vendor
  const [syntheticVendorOutMgt, setSyntheticVendorOutMgt] = useState(false);

  const [vendorOutMgt, setVendorOutMgt] = useState(false);

  // Other
  const [otherLogisticsMgt, setOtherLogisticsMgt] = useState(false);

  const [packingMaterialMgt, setPackingMaterialMgt] = useState(false);

  // Warehouse
  const [warehouseMgt, setWarehouseMgt] = useState(false);

  const [inventoryMgt, setInventoryMgt] = useState(false);

  const [adjustmentStatus, setAdjustmentStatus] = useState(false);

  const [inventoryStatus, setInventoryStatus] = useState(false);

  const [itemMoveByWarehouse, setItemMoveByWarehouse] = useState(false);

  // Delivery
  const [deliveryCostMgt, setDeliveryCostMgt] = useState(false);

  const [deliveryCostSetting, setDeliveryCostSetting] = useState(false);

  const [deliveryCostCalculate, setDeliveryCostCalculate] = useState(false);

  const [deliveryCostStatus, setDeliveryCostStatus] = useState(false);

  const [basicInfo, setBasicInfo] = useState(false);

  // ----------------------------------handle-----------------

  // Master
  const handleMasterData = (e) => {
    setMasterData(!masterData);
  };

  const handleBasicLogisticsMgt = (e) => {
    setBasicLogisticsMgt(!basicLogisticsMgt);
  };

  const handleBasicLogisticsInquiry = (e) => {
    setBasicLogisticsInquiry(!basicLogisticsInquiry);
  };

  const handleBasicLogisticsRuleMgt = (e) => {
    setBasicLogisticsRuleMgt(!basicLogisticsRuleMgt);
  };

  // QC
  const handleQC = (e) => {
    setQC(!qc);
  };

  const handleApprovalInspection = (e) => {
    setApprovalInspection(!approvalInspection);
  };

  const handleWarehousingInspection = (e) => {
    setWarehousingInspection(!warehousingInspection);
  };

  const handleInspectionStatus = (e) => {
    setInspectionStatus(!inspectionStatus);
  };

  // Warehousing
  const handleWarehousingShippingMgt = (e) => {
    setWarehousingShippingMgt(!warehousingShippingMgt);
  };

  const handleWarehousingOrderMgt = (e) => {
    setWarehousingOrderMgt(!warehousingOrderMgt);
  };

  const handleWarehousingMgt = (e) => {
    setWarehousingMgt(!warehousingMgt);
  };

  const handleConsigmentMgt = (e) => {
    setConsigmentMgt(!consigmentMgt);
  };

  const handleConsigmentAdjustment = (e) => {
    setConsigmentAdjustment(!consigmentAdjustment);
  };

  // Shipping
  const handleShippingOrderMgt = (e) => {
    setShippingOrderMgt(!shippingOrderMgt);
  };

  const handleShippingOrder = (e) => {
    setShippingOrder(!shippingOrder);
  };

  const handleShippingSchedules = (e) => {
    setShippingSchedules(!shippingSchedules);
  };

  const handleWaybillOutput = (e) => {
    setWaybillOutput(!waybillOutput);
  };

  // Shipment
  const handleShipmentMgt = (e) => {
    setShipmentMgt(!shipmentMgt);
  };

  const handleShipmentProcess = (e) => {
    setShipmentProcess(!shipmentProcess);
  };

  const handleShipmentStatus = (e) => {
    setShipmentStatus(!shipmentStatus);
  };

  // Direct
  const handleDirectDeliveryMgt = (e) => {
    setDirectDeliveryMgt(!directDeliveryMgt);
  };
  const handleDirectDeliveryWarehousingMgt = (e) => {
    setDirectDeliveryWarehousingMgt(!directDeliveryWarehousingMgt);
  };
  const handleDirectDeliveryShipment = (e) => {
    setDirectDeliveryShipment(!directDeliveryShipment);
  };

  // Collection
  const handleCollectionMgt = (e) => {
    setCollectionMgt(!collectionMgt);
  };

  const handleCollectionProcess = (e) => {
    setCollectionProcess(!collectionProcess);
  };

  const handleCollectionStatus = (e) => {
    setCollectionStatus(!collectionStatus);
  };

  // Vendor
  const handleSyntheticVendorOutMgt = (e) => {
    setSyntheticVendorOutMgt(!syntheticVendorOutMgt);
  };

  const handleVendorOutMgt = (e) => {
    setVendorOutMgt(!vendorOutMgt);
  };

  // Other
  const handleOtherLogisticsMgt = (e) => {
    setOtherLogisticsMgt(!otherLogisticsMgt);
  };

  const handlePackingMaterialMgt = (e) => {
    setPackingMaterialMgt(!packingMaterialMgt);
  };

  // Warehouse
  const handleWarehouseMgt = (e) => {
    setWarehouseMgt(!warehouseMgt);
  };

  const handleInventoryMgt = (e) => {
    setInventoryMgt(!inventoryMgt);
  };

  const handleAdjustmentStatus = (e) => {
    setAdjustmentStatus(!adjustmentStatus);
  };

  const handleInventoryStatus = (e) => {
    setInventoryStatus(!inventoryStatus);
  };

  const handleItemMoveByWarehouse = (e) => {
    setItemMoveByWarehouse(!itemMoveByWarehouse);
  };

  // Delivery
  const handleDeliveryCostMgt = (e) => {
    setDeliveryCostMgt(!deliveryCostMgt);
  };

  const handleDeliveryCostSetting = (e) => {
    setDeliveryCostSetting(!deliveryCostSetting);
  };

  const handleDeliveryCostCalculate = (e) => {
    setDeliveryCostCalculate(!deliveryCostCalculate);
  };

  const handleDeliveryCostStatus = (e) => {
    setDeliveryCostStatus(!deliveryCostStatus);
  };

  const handleBasicInfo = (e) => {
    setBasicInfo(!basicInfo);
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
            <Typography onClick={handleMasterData}>
              <Add fontSize="small" hidden={masterData} />
              <HorizontalRule fontSize="small" hidden={!masterData} />
              <Folder className="folder" hidden={masterData} />
              <FolderOpen className="folder" hidden={!masterData} /> Master Data
            </Typography>
            <ul className="tree-view-child" hidden={!masterData}>
              <li>
                <Typography onClick={handleBasicLogisticsMgt}>
                  <Add fontSize="small" hidden={basicLogisticsMgt} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!basicLogisticsMgt}
                  />
                  <Folder className="folder" hidden={basicLogisticsMgt} />
                  <FolderOpen className="folder" hidden={!basicLogisticsMgt} />
                  Basic Logistics Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!basicLogisticsMgt}>
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
                <Typography onClick={handleBasicLogisticsInquiry}>
                  <Add fontSize="small" hidden={basicLogisticsInquiry} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!basicLogisticsInquiry}
                  />
                  <Folder className="folder" hidden={basicLogisticsInquiry} />
                  <FolderOpen
                    className="folder"
                    hidden={!basicLogisticsInquiry}
                  />
                  Basic Logistics Inquiry
                </Typography>
                <ul className="tree-view-child" hidden={!basicLogisticsInquiry}>
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
                <Typography onClick={handleBasicLogisticsRuleMgt}>
                  <Add fontSize="small" hidden={basicLogisticsRuleMgt} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!basicLogisticsRuleMgt}
                  />
                  <Folder className="folder" hidden={basicLogisticsRuleMgt} />
                  <FolderOpen
                    className="folder"
                    hidden={!basicLogisticsRuleMgt}
                  />
                  Basic Logistics Rule Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!basicLogisticsRuleMgt}>
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
            <Typography onClick={handleQC}>
              <Add fontSize="small" hidden={qc} />
              <HorizontalRule fontSize="small" hidden={!qc} />
              <Folder className="folder" hidden={qc} />
              <FolderOpen className="folder" hidden={!qc} /> QC
            </Typography>
            <ul className="tree-view-child" hidden={!qc}>
              <li>
                <Typography onClick={handleApprovalInspection}>
                  <Add fontSize="small" hidden={approvalInspection} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!approvalInspection}
                  />
                  <Folder className="folder" hidden={approvalInspection} />
                  <FolderOpen className="folder" hidden={!approvalInspection} />
                  Approval Inspection
                </Typography>
                <ul className="tree-view-child" hidden={!approvalInspection}>
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
                <Typography onClick={handleWarehousingInspection}>
                  <Add fontSize="small" hidden={warehousingInspection} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!warehousingInspection}
                  />
                  <Folder className="folder" hidden={warehousingInspection} />
                  <FolderOpen
                    className="folder"
                    hidden={!warehousingInspection}
                  />
                  Warehousing Inspection
                </Typography>
                <ul className="tree-view-child" hidden={!warehousingInspection}>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Đăng ký kết quả kiểm tra sản phẩm nhập kho
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography onClick={handleInspectionStatus}>
                  <Add fontSize="small" hidden={inspectionStatus} />
                  <HorizontalRule fontSize="small" hidden={!inspectionStatus} />
                  <Folder className="folder" hidden={inspectionStatus} />
                  <FolderOpen className="folder" hidden={!inspectionStatus} />
                  Inspection Status
                </Typography>
                <ul className="tree-view-child" hidden={!inspectionStatus}>
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
            <Typography onClick={handleWarehousingShippingMgt}>
              <Add fontSize="small" hidden={warehousingShippingMgt} />
              <HorizontalRule
                fontSize="small"
                hidden={!warehousingShippingMgt}
              />
              <Folder className="folder" hidden={warehousingShippingMgt} />
              <FolderOpen className="folder" hidden={!warehousingShippingMgt} />
              Warehousing/Shipping Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!warehousingShippingMgt}>
              <li>
                <Typography onClick={handleWarehousingOrderMgt}>
                  <Add fontSize="small" hidden={warehousingOrderMgt} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!warehousingOrderMgt}
                  />
                  <Folder className="folder" hidden={warehousingOrderMgt} />
                  <FolderOpen
                    className="folder"
                    hidden={!warehousingOrderMgt}
                  />
                  Warehousing Order Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!warehousingOrderMgt}>
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
                <Typography onClick={handleWarehousingMgt}>
                  <Add fontSize="small" hidden={warehousingMgt} />
                  <HorizontalRule fontSize="small" hidden={!warehousingMgt} />
                  <Folder className="folder" hidden={warehousingMgt} />
                  <FolderOpen className="folder" hidden={!warehousingMgt} />
                  Warehousing Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!warehousingMgt}>
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
                <Typography onClick={handleConsigmentMgt}>
                  <Add fontSize="small" hidden={consigmentMgt} />
                  <HorizontalRule fontSize="small" hidden={!consigmentMgt} />
                  <Folder className="folder" hidden={consigmentMgt} />
                  <FolderOpen className="folder" hidden={!consigmentMgt} />
                  Consigment Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!consigmentMgt}>
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
                <Typography onClick={handleConsigmentAdjustment}>
                  <Add fontSize="small" hidden={consigmentAdjustment} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!consigmentAdjustment}
                  />
                  <Folder className="folder" hidden={consigmentAdjustment} />
                  <FolderOpen
                    className="folder"
                    hidden={!consigmentAdjustment}
                  />
                  Consigment Adjustment
                </Typography>
                <ul className="tree-view-child" hidden={!consigmentAdjustment}>
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
            <Typography onClick={handleShippingOrderMgt}>
              <Add fontSize="small" hidden={shippingOrderMgt} />
              <HorizontalRule fontSize="small" hidden={!shippingOrderMgt} />
              <Folder className="folder" hidden={shippingOrderMgt} />
              <FolderOpen className="folder" hidden={!shippingOrderMgt} />{" "}
              Shipping Order Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!shippingOrderMgt}>
              <li>
                <Typography onClick={handleShippingOrder}>
                  <Add fontSize="small" hidden={shippingOrder} />
                  <HorizontalRule fontSize="small" hidden={!shippingOrder} />
                  <Folder className="folder" hidden={shippingOrder} />
                  <FolderOpen className="folder" hidden={!shippingOrder} />
                  Shipping Order
                </Typography>
                <ul className="tree-view-child" hidden={!shippingOrder}>
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
                <Typography onClick={handleShippingSchedules}>
                  <Add fontSize="small" hidden={shippingSchedules} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!shippingSchedules}
                  />
                  <Folder className="folder" hidden={shippingSchedules} />
                  <FolderOpen className="folder" hidden={!shippingSchedules} />
                  Shipping Schedules
                </Typography>
                <ul className="tree-view-child" hidden={!shippingSchedules}>
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
                <Typography onClick={handleWaybillOutput}>
                  <Add fontSize="small" hidden={waybillOutput} />
                  <HorizontalRule fontSize="small" hidden={!waybillOutput} />
                  <Folder className="folder" hidden={waybillOutput} />
                  <FolderOpen className="folder" hidden={!waybillOutput} />
                  Waybill Output
                </Typography>
                <ul className="tree-view-child" hidden={!waybillOutput}>
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
            <Typography onClick={handleShipmentMgt}>
              <Add fontSize="small" hidden={shipmentMgt} />
              <HorizontalRule fontSize="small" hidden={!shipmentMgt} />
              <Folder className="folder" hidden={shipmentMgt} />
              <FolderOpen className="folder" hidden={!shipmentMgt} /> Shipment
              Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!shipmentMgt}>
              <li>
                <Typography onClick={handleShipmentProcess}>
                  <Add fontSize="small" hidden={shipmentProcess} />
                  <HorizontalRule fontSize="small" hidden={!shipmentProcess} />
                  <Folder className="folder" hidden={shipmentProcess} />
                  <FolderOpen className="folder" hidden={!shipmentProcess} />
                  Shipment Process
                </Typography>
                <ul className="tree-view-child" hidden={!shipmentProcess}>
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
                <Typography onClick={handleShipmentStatus}>
                  <Add fontSize="small" hidden={shipmentStatus} />
                  <HorizontalRule fontSize="small" hidden={!shipmentStatus} />
                  <Folder className="folder" hidden={shipmentStatus} />
                  <FolderOpen className="folder" hidden={!shipmentStatus} />
                  Shipment Status
                </Typography>
                <ul className="tree-view-child" hidden={!shipmentStatus}>
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
            <Typography onClick={handleDirectDeliveryMgt}>
              <Add fontSize="small" hidden={directDeliveryMgt} />
              <HorizontalRule fontSize="small" hidden={!directDeliveryMgt} />
              <Folder className="folder" hidden={directDeliveryMgt} />
              <FolderOpen className="folder" hidden={!directDeliveryMgt} />{" "}
              Direct Delivery Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!directDeliveryMgt}>
              <li>
                <Typography onClick={handleDirectDeliveryWarehousingMgt}>
                  <Add fontSize="small" hidden={directDeliveryWarehousingMgt} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!directDeliveryWarehousingMgt}
                  />
                  <Folder
                    className="folder"
                    hidden={directDeliveryWarehousingMgt}
                  />
                  <FolderOpen
                    className="folder"
                    hidden={!directDeliveryWarehousingMgt}
                  />
                  Direct Delivery Warehousing Mgt
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={!directDeliveryWarehousingMgt}
                >
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
                <Typography onClick={handleDirectDeliveryShipment}>
                  <Add fontSize="small" hidden={directDeliveryShipment} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!directDeliveryShipment}
                  />
                  <Folder className="folder" hidden={directDeliveryShipment} />
                  <FolderOpen
                    className="folder"
                    hidden={!directDeliveryShipment}
                  />
                  Direct Delivery Shipment
                </Typography>
                <ul
                  className="tree-view-child"
                  hidden={!directDeliveryShipment}
                >
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
            <Typography onClick={handleCollectionMgt}>
              <Add fontSize="small" hidden={collectionMgt} />
              <HorizontalRule fontSize="small" hidden={!collectionMgt} />
              <Folder className="folder" hidden={collectionMgt} />
              <FolderOpen className="folder" hidden={!collectionMgt} />
              Collection Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!collectionMgt}>
              <li>
                <Typography onClick={handleCollectionProcess}>
                  <Add fontSize="small" hidden={collectionProcess} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!collectionProcess}
                  />
                  <Folder className="folder" hidden={collectionProcess} />
                  <FolderOpen className="folder" hidden={!collectionProcess} />
                  Collection Process
                </Typography>
                <ul className="tree-view-child" hidden={!collectionProcess}>
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
                <Typography onClick={handleCollectionStatus}>
                  <Add fontSize="small" hidden={collectionStatus} />
                  <HorizontalRule fontSize="small" hidden={!collectionStatus} />
                  <Folder className="folder" hidden={collectionStatus} />
                  <FolderOpen className="folder" hidden={!collectionStatus} />
                  Collection Status
                </Typography>
                <ul className="tree-view-child" hidden={!collectionStatus}>
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
            <Typography onClick={handleSyntheticVendorOutMgt}>
              <Add fontSize="small" hidden={syntheticVendorOutMgt} />
              <HorizontalRule
                fontSize="small"
                hidden={!syntheticVendorOutMgt}
              />
              <Folder className="folder" hidden={syntheticVendorOutMgt} />
              <FolderOpen
                className="folder"
                hidden={!syntheticVendorOutMgt}
              />{" "}
              Vendor Out Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!syntheticVendorOutMgt}>
              <li>
                <Typography onClick={handleVendorOutMgt}>
                  <Add fontSize="small" hidden={vendorOutMgt} />
                  <HorizontalRule fontSize="small" hidden={!vendorOutMgt} />
                  <Folder className="folder" hidden={vendorOutMgt} />
                  <FolderOpen className="folder" hidden={!vendorOutMgt} />
                  Vendor Out Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!vendorOutMgt}>
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
            <Typography onClick={handleOtherLogisticsMgt}>
              <Add fontSize="small" hidden={otherLogisticsMgt} />
              <HorizontalRule fontSize="small" hidden={!otherLogisticsMgt} />
              <Folder className="folder" hidden={otherLogisticsMgt} />
              <FolderOpen className="folder" hidden={!otherLogisticsMgt} />{" "}
              Other Logistics Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!otherLogisticsMgt}>
              <li>
                <Typography onClick={handlePackingMaterialMgt}>
                  <Add fontSize="small" hidden={packingMaterialMgt} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!packingMaterialMgt}
                  />
                  <Folder className="folder" hidden={packingMaterialMgt} />
                  <FolderOpen className="folder" hidden={!packingMaterialMgt} />
                  Packing Material Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!packingMaterialMgt}>
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
            <Typography onClick={handleWarehouseMgt}>
              <Add fontSize="small" hidden={warehouseMgt} />
              <HorizontalRule fontSize="small" hidden={!warehouseMgt} />
              <Folder className="folder" hidden={warehouseMgt} />
              <FolderOpen className="folder" hidden={!warehouseMgt} />
              Warehouse Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!warehouseMgt}>
              <li>
                <Typography onClick={handleInventoryMgt}>
                  <Add fontSize="small" hidden={inventoryMgt} />
                  <HorizontalRule fontSize="small" hidden={!inventoryMgt} />
                  <Folder className="folder" hidden={inventoryMgt} />
                  <FolderOpen className="folder" hidden={!inventoryMgt} />
                  Inventory Mgt
                </Typography>
                <ul className="tree-view-child" hidden={!inventoryMgt}>
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
                <Typography onClick={handleAdjustmentStatus}>
                  <Add fontSize="small" hidden={adjustmentStatus} />
                  <HorizontalRule fontSize="small" hidden={!adjustmentStatus} />
                  <Folder className="folder" hidden={adjustmentStatus} />
                  <FolderOpen className="folder" hidden={!adjustmentStatus} />
                  Adjustment Status
                </Typography>
                <ul className="tree-view-child" hidden={!adjustmentStatus}>
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
                <Typography onClick={handleInventoryStatus}>
                  <Add fontSize="small" hidden={inventoryStatus} />
                  <HorizontalRule fontSize="small" hidden={!inventoryStatus} />
                  <Folder className="folder" hidden={inventoryStatus} />
                  <FolderOpen className="folder" hidden={!inventoryStatus} />
                  Inventory Status
                </Typography>
                <ul className="tree-view-child" hidden={!inventoryStatus}>
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
                <Typography onClick={handleItemMoveByWarehouse}>
                  <Add fontSize="small" hidden={itemMoveByWarehouse} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!itemMoveByWarehouse}
                  />
                  <Folder className="folder" hidden={itemMoveByWarehouse} />
                  <FolderOpen
                    className="folder"
                    hidden={!itemMoveByWarehouse}
                  />
                  Item Move By Warehouse
                </Typography>
                <ul className="tree-view-child" hidden={!itemMoveByWarehouse}>
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
            <Typography onClick={handleDeliveryCostMgt}>
              <Add fontSize="small" hidden={deliveryCostMgt} />
              <HorizontalRule fontSize="small" hidden={!deliveryCostMgt} />
              <Folder className="folder" hidden={deliveryCostMgt} />
              <FolderOpen className="folder" hidden={!deliveryCostMgt} />{" "}
              Delivery Cost Mgt
            </Typography>
            <ul className="tree-view-child" hidden={!deliveryCostMgt}>
              <li>
                <Typography onClick={handleDeliveryCostSetting}>
                  <Add fontSize="small" hidden={deliveryCostSetting} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!deliveryCostSetting}
                  />
                  <Folder className="folder" hidden={deliveryCostSetting} />
                  <FolderOpen
                    className="folder"
                    hidden={!deliveryCostSetting}
                  />
                  Delivery Cost Setting
                </Typography>
                <ul className="tree-view-child" hidden={!deliveryCostSetting}>
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
                <Typography onClick={handleDeliveryCostCalculate}>
                  <Add fontSize="small" hidden={deliveryCostCalculate} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!deliveryCostCalculate}
                  />
                  <Folder className="folder" hidden={deliveryCostCalculate} />
                  <FolderOpen
                    className="folder"
                    hidden={!deliveryCostCalculate}
                  />
                  Delivery Cost Calculate
                </Typography>
                <ul className="tree-view-child" hidden={!deliveryCostCalculate}>
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
                <Typography onClick={handleDeliveryCostStatus}>
                  <Add fontSize="small" hidden={deliveryCostStatus} />
                  <HorizontalRule
                    fontSize="small"
                    hidden={!deliveryCostStatus}
                  />
                  <Folder className="folder" hidden={deliveryCostStatus} />
                  <FolderOpen className="folder" hidden={!deliveryCostStatus} />
                  Delivery Cost Status
                </Typography>
                <ul className="tree-view-child" hidden={!deliveryCostStatus}>
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
