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

  const [openQCAppoval, setOpenQCAppoval] = useState(false);
  const [closeQCAppoval, setCloseQCAppoval] = useState(true);

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

  const [openWarehousingCongiment, setOpenWarehousingCongiment] =
    useState(false);
  const [closeWarehousingCongiment, setCloseWarehousingCongiment] =
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

  // Warehousing
  const handleOpenWarehousing = (e) => {
    setOpenWarehousing(!openWarehousing);
    setCloseWarehousing(!closeWarehousing);
  };

  // Shipping
  const handleOpenShipping = (e) => {
    setOpenShipping(!openShipping);
    setCloseShipping(!closeShipping);
  };

  // Shipment
  const handleOpenShipment = (e) => {
    setOpenShipment(!openShipment);
    setCloseShipment(!closeShipment);
  };

  // Direct
  const handleOpenDirect = (e) => {
    setOpenDirect(!openDirect);
    setCloseDirect(!closeDirect);
  };

  // Collection
  const handleOpenCollection = (e) => {
    setOpenCollection(!openCollection);
    setCloseCollection(!closeCollection);
  };

  // Vendor
  const handleOpenVendor = (e) => {
    setOpenVendor(!openVendor);
    setCloseVendor(!closeVendor);
  };

  // Other
  const handleOpenOther = (e) => {
    setOpenOther(!openOther);
    setCloseOther(!closeOther);
  };

  // Warehouse
  const handleOpenWarehouse = (e) => {
    setOpenWarehouse(!openWarehouse);
    setCloseWarehouse(!closeWarehouse);
  };

  // Delivery
  const handleOpenDelivery = (e) => {
    setOpenDelivery(!openDelivery);
    setCloseDelivery(!closeDelivery);
  };

  return (
    <div className="tree-view-com">
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
                <HorizontalRule fontSize="small" hidden={closeMasterBasicMgt} />
                <Folder className="folder" hidden={openMasterBasicMgt} />
                <FolderOpen className="folder" hidden={closeMasterBasicMgt} />
                Basic Logistics Mgt
              </Typography>
              <ul className="tree-view-child" hidden={closeMasterBasicMgt}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký lịch nghỉ làm(công ty giao nhận)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý số lượng hàng giao theo ngày
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý giao hàng theo khu vực
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý mã số kệ để hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý nhân viên thao tác kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý quy cách sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý các loại chi phí khác theo khu vực
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Typography onClick={handleOpenMasterInquiry}>
                <Add fontSize="small" hidden={openMasterInquiry} />
                <HorizontalRule fontSize="small" hidden={closeMasterInquiry} />
                <Folder className="folder" hidden={openMasterInquiry} />
                <FolderOpen className="folder" hidden={closeMasterInquiry} />
                Basic Logistics Inquiry
              </Typography>
              <ul className="tree-view-child" hidden={closeMasterInquiry}>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In nhãn sản phấm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra tình hình đăng ký chi phí chuyển hàng
                  </a>
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
                  <a href className="document-title">
                    <Description className="file" />
                    Quy tắc nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quy tắc lấy hàng
                  </a>
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
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Approval Inspection
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Chấp nhận yêu cầu kiểm tra sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký kết quả kiểm tra phê duyệt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Trạng thái tiến hành kiểm tra phê duyệt sản phẩm
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Warehousing Inspection
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký kết quả kiểm tra sản phẩm nhập kho
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Inspection Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình trạng của khách hàng yêu cầu bồi thường giá Quatity
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kết quả kiểm tra phê duyệt của từng sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In hạng mục cần bổ sung
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra kết quả kiểm tra nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Trạng thái Kết quả kiểm tra nhập kho
                  </a>
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
            <FolderOpen className="folder" hidden={closeWarehousing} />{" "}
            Warehousing/Shipping Mgt
          </Typography>
          <ul className="tree-view-child" hidden={closeWarehousing}>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Warehousing Order Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Yêu cầu nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phê duyệt yêu cầu nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Yêu cầu tiến hành nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hủy yêu cầu nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xuất dữ liệu Pre Order
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Warehousing Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập xác nhận nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập lịch nhập kho
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Consigment Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký số lượng có thể nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký số lượng có thể bán chương trình Live
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phê duyệt số lượng có thể nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký số lượng có thể bán của hàng ký gửi
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Consigment Adjustment
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Điều chỉnh số lượng có thể bán chương trình Live
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phê duyệt điều chỉnh số lượng có thể bán
                  </a>
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
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Shipping Order
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hướng dẫn xuất kho của từng sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hướng dẫn xuất kho toàn bộ đơn hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký hủy bỏ lệnh vận chuyển hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hướng dẫn xuất kho toàn bộ đơn hàng(B2B)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hướng dẫn xuất kho toàn bộ đơn hàng(Vendor)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hướng dẫn xuất kho toàn bộ đơn hàng(Other)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Shipping Schedules
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình dựu kiến xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tạo hướng dẫn xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Bố trí lấy hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý hủy bỏ và phân công lại việc lấy hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Danh sách sản phẩm có khuyến mãi được hướng dẫn xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiếp nhận sản phẩm trả lại sau khi có lệnh vận
                    chuyển hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình trạng chi tiết hướng dẫn vận chuyển hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Waybill Output
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In ra hóa đơn kèm phiếu giao hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In ra chứng từ vận chuyển
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thay đổi phương thức vận chuyển xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thay đổi cách thức chuyển chứng từ thu hồi hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In ra hóa đơn kèm phiếu giao hàng(B2B)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thay đổi phương pháp vận chuyển xuất kho Excel
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In phiếu giao hàng hóa đơn điện tử Kho HCM(NEW)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Sign Ebill Excel
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In ra chứng từ vận chuyển(NEW)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In phiếu gia hàng hóa đơn điện tử Kho HN(NEW)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In phiếu giao hàng không giá tiền(NEW)
                  </a>
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
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Shipment Process
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký gửi lại chứng từ vận chuyển
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xác nhận xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý nguyên nhân chưa chuyển hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xác nhận hoàn tất giao hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xác nhận thu tiền
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xác nhận thu tiền[EXCEL]
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Shipment Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập sản phẩm đại diện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý thông tin Key của Item
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký sản phẩm thông thường
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quá trình thay đổi TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký phê duyệt sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Sửa đổi thông tin phân tích sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký xử lý sản phẩm đã ngừng bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý sản phẩm nhà cung cấp
                  </a>
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
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Direct Delivery Warehousing Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Direct Delivery Shipment
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập sản phẩm đại diện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý thông tin Key của Item
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký sản phẩm thông thường
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quá trình thay đổi TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký phê duyệt sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Sửa đổi thông tin phân tích sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký xử lý sản phẩm đã ngừng bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý sản phẩm nhà cung cấp
                  </a>
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
            <FolderOpen className="folder" hidden={closeCollection} />{" "}
            Collection Mgt
          </Typography>
          <ul className="tree-view-child" hidden={closeCollection}>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Collection Process
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Collection Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập sản phẩm đại diện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý thông tin Key của Item
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký sản phẩm thông thường
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quá trình thay đổi TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký phê duyệt sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Sửa đổi thông tin phân tích sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký xử lý sản phẩm đã ngừng bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý sản phẩm nhà cung cấp
                  </a>
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
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Vendor Out Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
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
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Packing Material Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
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
            <FolderOpen className="folder" hidden={closeWarehouse} /> Warehouse
            Mgt
          </Typography>
          <ul className="tree-view-child" hidden={closeWarehouse}>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Inventory Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Adjustment Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Inventory Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Item move by Warehouse
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
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
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Delivery Cost Setting
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Delivery Cost Calculate
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Delivery Cost Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Basic Info
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập hãng sản xuất
                  </a>
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
