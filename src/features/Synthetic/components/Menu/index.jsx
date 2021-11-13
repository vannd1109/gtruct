import { Description, Folder, Add } from "@mui/icons-material";

function Menu(props) {
  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <a href>
            <Add /> <Folder className="folder" /> Master Data
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Basic Logistics Mgt
              </a>
              <ul className="tree-view-child">
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
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Basic Logistics Inquiry
              </a>
              <ul className="tree-view-child">
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
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Basic Logistics Rule Mgt
              </a>
              <ul className="tree-view-child">
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
          <a href>
            <Add /> <Folder className="folder" /> QC
          </a>
          <ul className="tree-view-child">
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
          <a href>
            <Add /> <Folder className="folder" /> Warehousing/Shipping Mgt
          </a>
          <ul className="tree-view-child">
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
          <a href>
            <Add /> <Folder className="folder" /> Shipping Order Mgt
          </a>
          <ul className="tree-view-child">
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
          <a href>
            <Add /> <Folder className="folder" /> Shipment Mgt
          </a>
          <ul className="tree-view-child">
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
          <a href>
            <Add /> <Folder className="folder" /> Direct Delivery Mgt
          </a>
          <ul className="tree-view-child">
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
          <a href>
            <Add /> <Folder className="folder" /> Collection Mgt
          </a>
          <ul className="tree-view-child">
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
          <a href>
            <Add /> <Folder className="folder" /> Vemdor Out Mgt
          </a>
          <ul className="tree-view-child">
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
          <a href>
            <Add /> <Folder className="folder" /> Other Logistics Mgt
          </a>
          <ul className="tree-view-child">
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
          <a href>
            <Add /> <Folder className="folder" /> Warehouse Mgt
          </a>
          <ul className="tree-view-child">
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
          <a href>
            <Add /> <Folder className="folder" /> Delivery Cost Mgt
          </a>
          <ul className="tree-view-child">
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
