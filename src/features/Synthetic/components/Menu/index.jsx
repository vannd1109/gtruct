import { Description, Folder } from "@mui/icons-material";

function Menu(props) {
  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <a href>
            <Folder /> Master Data
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Basic Logistics Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký lịch nghỉ làm(công ty giao nhận)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý số lượng hàng giao theo ngày
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý giao hàng theo khu vực
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý mã số kệ để hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý nhân viên thao tác kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý quy cách sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý các loại chi phí khác theo khu vực
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Basic Logistics Inquiry
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    In nhãn sản phấm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra tình hình đăng ký chi phí chuyển hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Basic Logistics Rule Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Quy tắc nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quy tắc lấy hàng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> QC
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Approval Inspection
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Chấp nhận yêu cầu kiểm tra sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký kết quả kiểm tra phê duyệt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Trạng thái tiến hành kiểm tra phê duyệt sản phẩm
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Warehousing Inspection
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký kết quả kiểm tra sản phẩm nhập kho
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Inspection Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình trạng của khách hàng yêu cầu bồi thường giá Quatity
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kết quả kiểm tra phê duyệt của từng sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    In hạng mục cần bổ sung
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra kết quả kiểm tra nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Trạng thái Kết quả kiểm tra nhập kho
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Warehousing/Shipping Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Warehousing Order Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Yêu cầu nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Phê duyệt yêu cầu nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Yêu cầu tiến hành nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hủy yêu cầu nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xuất dữ liệu Pre Order
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Warehousing Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập xác nhận nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập lịch nhập kho
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Consigment Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký số lượng có thể nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký số lượng có thể bán chương trình Live
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Phê duyệt số lượng có thể nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký số lượng có thể bán của hàng ký gửi
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Consigment Adjustment
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Điều chỉnh số lượng có thể bán chương trình Live
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Phê duyệt điều chỉnh số lượng có thể bán
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Shipping Order Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Shipping Order
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Hướng dẫn xuất kho của từng sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Hướng dẫn xuất kho toàn bộ đơn hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký hủy bỏ lệnh vận chuyển hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Hướng dẫn xuất kho toàn bộ đơn hàng(B2B)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Hướng dẫn xuất kho toàn bộ đơn hàng(Vendor)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Hướng dẫn xuất kho toàn bộ đơn hàng(Other)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Shipping Schedules
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình dựu kiến xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình tạo hướng dẫn xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Bố trí lấy hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xử lý hủy bỏ và phân công lại việc lấy hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Danh sách sản phẩm có khuyến mãi được hướng dẫn xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình tiếp nhận sản phẩm trả lại sau khi có lệnh vận
                    chuyển hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình trạng chi tiết hướng dẫn vận chuyển hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Waybill Output
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    In ra hóa đơn kèm phiếu giao hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    In ra chứng từ vận chuyển
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Thay đổi phương thức vận chuyển xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Thay đổi cách thức chuyển chứng từ thu hồi hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    In ra hóa đơn kèm phiếu giao hàng(B2B)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Thay đổi phương pháp vận chuyển xuất kho Excel
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    In phiếu giao hàng hóa đơn điện tử Kho HCM(NEW)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Sign Ebill Excel
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    In ra chứng từ vận chuyển(NEW)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    In phiếu gia hàng hóa đơn điện tử Kho HN(NEW)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    In phiếu giao hàng không giá tiền(NEW)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Shipment Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Shipment Process
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký gửi lại chứng từ vận chuyển
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xác nhận xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý nguyên nhân chưa chuyển hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xác nhận hoàn tất giao hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xác nhận thu tiền
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xác nhận thu tiền[EXCEL]
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Shipment Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập sản phẩm đại diện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý thông tin Key của Item
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký sản phẩm thông thường
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quá trình thay đổi TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký phê duyệt sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Sửa đổi thông tin phân tích sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký xử lý sản phẩm đã ngừng bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý sản phẩm nhà cung cấp
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Direct Delivery Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Direct Delivery Warehousing Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Direct Delivery Shipment
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập sản phẩm đại diện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý thông tin Key của Item
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký sản phẩm thông thường
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quá trình thay đổi TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký phê duyệt sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Sửa đổi thông tin phân tích sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký xử lý sản phẩm đã ngừng bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý sản phẩm nhà cung cấp
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Collection Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Collection Process
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Collection Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập sản phẩm đại diện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý thông tin Key của Item
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký sản phẩm thông thường
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quá trình thay đổi TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký phê duyệt sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Sửa đổi thông tin phân tích sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký xử lý sản phẩm đã ngừng bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý sản phẩm nhà cung cấp
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Vemdor Out Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Vendor Out Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Other Logistics Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Packing Material Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Warehouse Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Inventory Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Adjustment Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Inventory Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Item move by Warehouse
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Delivery Cost Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Delivery Cost Setting
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Delivery Cost Calculate
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Delivery Cost Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Basic Info
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Mã số phân loại sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập mô tả sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
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
