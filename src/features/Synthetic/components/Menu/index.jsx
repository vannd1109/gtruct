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
                      ????ng k?? l???ch ngh??? l??m(c??ng ty giao nh???n)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? s??? l?????ng h??ng giao theo ng??y
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? giao h??ng theo khu v???c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? m?? s??? k??? ????? h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? nh??n vi??n thao t??c kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? quy c??ch s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? c??c lo???i chi ph?? kh??c theo khu v???c
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
                      In nh??n s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra t??nh h??nh ????ng k?? chi ph?? chuy???n h??ng
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
                      Quy t???c nh???p kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Quy t???c l???y h??ng
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
                      Ch???p nh???n y??u c???u ki???m tra s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? k???t qu??? ki???m tra ph?? duy???t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tr???ng th??i ti???n h??nh ki???m tra ph?? duy???t s???n ph???m
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
                      ????ng k?? k???t qu??? ki???m tra s???n ph???m nh???p kho
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
                      T??nh tr???ng c???a kh??ch h??ng y??u c???u b???i th?????ng gi?? Quatity
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      K???t qu??? ki???m tra ph?? duy???t c???a t???ng s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In h???ng m???c c???n b??? sung
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra k???t qu??? ki???m tra nh???p kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Tr???ng th??i K???t qu??? ki???m tra nh???p kho
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
                      Y??u c???u nh???p kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph?? duy???t y??u c???u nh???p kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Y??u c???u ti???n h??nh nh???p kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng nh???p h???y y??u c???u nh???p kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xu???t d??? li???u Pre Order
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
                      ????ng nh???p x??c nh???n nh???p kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng nh???p l???ch nh???p kho
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
                      ????ng k?? s??? l?????ng c?? th??? nh???p kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? s??? l?????ng c?? th??? b??n ch????ng tr??nh Live
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph?? duy???t s??? l?????ng c?? th??? nh???p kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? s??? l?????ng c?? th??? b??n c???a h??ng k?? g???i
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
                      ??i???u ch???nh s??? l?????ng c?? th??? b??n ch????ng tr??nh Live
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ph?? duy???t ??i???u ch???nh s??? l?????ng c?? th??? b??n
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
                      H?????ng d???n xu???t kho c???a t???ng s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      H?????ng d???n xu???t kho to??n b??? ????n h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? h???y b??? l???nh v???n chuy???n h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      H?????ng d???n xu???t kho to??n b??? ????n h??ng(B2B)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      H?????ng d???n xu???t kho to??n b??? ????n h??ng(Vendor)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      H?????ng d???n xu???t kho to??n b??? ????n h??ng(Other)
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
                      T??nh h??nh d??? ki???n xu???t kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh t???o h?????ng d???n xu???t kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B??? tr?? l???y h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??? l?? h???y b??? v?? ph??n c??ng l???i vi???c l???y h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Danh s??ch s???n ph???m c?? khuy???n m??i ???????c h?????ng d???n xu???t kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ti???p nh???n s???n ph???m tr??? l???i sau khi c?? l???nh v???n
                      chuy???n h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh tr???ng chi ti???t h?????ng d???n v???n chuy???n h??ng
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
                      In ra h??a ????n k??m phi???u giao h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In ra ch???ng t??? v???n chuy???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thay ?????i ph????ng th???c v???n chuy???n xu???t kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thay ?????i c??ch th???c chuy???n ch???ng t??? thu h???i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In ra h??a ????n k??m phi???u giao h??ng(B2B)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Thay ?????i ph????ng ph??p v???n chuy???n xu???t kho Excel
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In phi???u giao h??ng h??a ????n ??i???n t??? Kho HCM(NEW)
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
                      In ra ch???ng t??? v???n chuy???n(NEW)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In phi???u gia h??ng h??a ????n ??i???n t??? Kho HN(NEW)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In phi???u giao h??ng kh??ng gi?? ti???n(NEW)
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
                      ????ng k?? g???i l???i ch???ng t??? v???n chuy???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n xu???t kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? nguy??n nh??n ch??a chuy???n h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n ho??n t???t giao h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n thu ti???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n thu ti???n[EXCEL]
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
                      Ki???m tra t??nh h??nh ch???ng t??? v???n chuy???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra chi ti???t ch???ng t??? v???n chuy???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Theo d??i ch???ng t??? v???n chuy???n ?????i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n vi???c xu???t kho/thu h???i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B??o c??o giao h??ng c???a t???ng ????n v???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      API G???I TO ?????N C??NG TY GIAO H??NG
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      H???Y G???I API ????? ?????N C??NG TY GIAO H??NG(EXCEL)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xem tr???ng th??i ????n ?????t h??ng API
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B??o c??o c??c k??nh TV
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
                      Tr??? ti???n t??ch l??y thi???u Promotion
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xem Pending c???a ????n h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ho??n t???t 6 b?????c Mobile Card
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh gi?? m???i c???a s???n ph???m
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??? l??? th??nh c??ng ????n h??ng - SCM
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??? l??? th??nh c??ng ????n h??ng theo kho??n th???i gian - SCM
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xem Pending c???a ????n h??ng t???i Nh?? V???n Chuy???n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh tr???ng k?? SA
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      K?? h??a ????n ??i???n t??? HCM
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Qu???n l?? h??a ????n ??i???n t???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Danh s??ch h??a ????n ???? h???y
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Danh s??ch h??a ????n c???a ????n h??ng h???y 4 b?????c
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Doanh s??? b??n h??ng SC
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Doanh s??ch ?????t h??ng Payment Online
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      K?? h??a ????n ??i???n t??? HN
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
                      ????ng k?? s??? l?????ng b??n
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n nh???p kho giao tr???c ti???p
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Di chuy???n h??ng kho giao tr???c ti???p
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
                      H?????ng d???n xu???t kho to??n b??? ????n h??ng(Direct Dely)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In h??a ????n cho s???n ph???m giao tr???c ti???p
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
                      Upload d??? li???u thu h???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? Scan t??i li???u v??? vi???c thu h???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? x??c nh???n thu h???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? nh???ng d??? li???u ch??a x??? l??
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      H???y b??? ch??? th??? thu h???i h??ng
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
                      T??nh h??nh x??c nh???n/ti???p nh???n h??ng b??? tr??? l???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B???ng h?????ng d???n thu h???i h??ng tr??? l???i/?????i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      In ra nh??n h??ng x??c nh???n thu h???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh gi???i quy???t h??ng b??? tr??? l???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh x??? l?? nh???p kho h??ng thu h???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh c??? th??? x??c nh???n thu h???i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???ng s??? x??c nh???n thu h???i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???ng s??? h??ng ???????c thu h???i theo t???ng l?? do
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? ki???m tra ch???t l?????ng h??ng b??? tr??? l???i(MD)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      API G???I CO ?????N C??NG TY GIAO H??NG
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
                      ????ng k?? s??? l?????ng h??ng b??? tr??? l???i c???a nh?? cung c???p
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Y??u c???u k???t qu??? s???n ph???m b??? tr??? l???i c???a nh?? cung c???p
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
                      ????ng k?? nh???p/xu???t kho bao b?? ????ng g??i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? xu???t kho bao b?? ????ng g??i theo ti??u chu???n xu???t kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Xu???t bi??n nh???n bao b?? ????ng g??i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh thanh to??n bao b?? ????ng g??i
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
                      ????ng k?? thay ?????i k??? ????? h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ??i???u ch???nh l?????ng ????n ph???m t???n kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ??i???u ch???nh ch???t l?????ng lo???i h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ??i???u ch???nh s??? l?????ng h??ng t???n kho
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
                      Ki???m tra n???i dung thay ?????i k??? ????? h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      K???t qu??? ??i???u ch???nh ph??n lo???i h??ng t???n kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      K???t qu??? ??i???u ch???nh h??ng t???n kho(theo k??? ????? h??ng)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???ng s??? s???n ph???m theo t???ng l?? do ??i???u ch???nh h??ng t???n kho
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
                      Ki???m tra th???i gian b???o qu???n h??ng t???n kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra h??ng t???n kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B???ng ki???m tra h??ng t???n kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh ch???t l?????ng c???a t???ng Rack
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Ki???m tra h??ng t???n v?? h??ng ???????c b???o qu???n trong kho trong
                      th???i gian d??i
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh tr???ng kh??c bi???t t???n kho c??? kho/rack
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh nh???p xu???t kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T??nh h??nh kh??c ngo??i xu???t nh???p kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B???ng t???ng h???p ng??y mua h??ng
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
                      Y??u c???u di chuy???n kho
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Di chuy???n nh???p h??ng gi???a c??c kho h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Di chuy???n xu???t h??ng gi???a c??c kho h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Y??u c???u nh???p t???i kho
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
                      ????ng k?? ph?? v???n chuy???n h??ng th??ng th?????ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? ph?? v???n chuy???n h??ng kh??? l???n gi?? r???
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? ph?? v???n chuy???n s???n ph???m oversize
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? ph?? v???n chuy???n s???n ph???m l???p ?????t
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      ????ng k?? ph?? v???n chuy???n th????ng l?????n gi??
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
                      X??c nh???n ph?? tr??? h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n ph?? tr??? h??ng(B2B)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      T???o y??u c???u t??nh ph?? giao h??ng
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      X??c nh???n ph?? giao h??ng s???n ph???m ch??a c?? k??ch th?????c
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
                      B??o c??o ph?? v???n chuy???n theo th??ng(B2C)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      B??o c??o ph?? v???n chuy???n theo th??ng(B2B)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Chi ti???t ph?? v???n chuy???n theo th??ng(B2C)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Chi ti???t ph?? v???n chuy???n theo th??ng(B2B)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="document-title">
                      <Description className="file" />
                      Chi ph?? v???n chuy???n h??ng th??ng theo t???ng ????n v???
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
                      Item Demensi??n Management
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
