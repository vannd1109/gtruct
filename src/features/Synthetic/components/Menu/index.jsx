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
                    Trạng thái tiến trình kiểm tra phê duyệt sản phẩm
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
                    Tình hình dự kiến xuất kho
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
                    Thay đổi phương pháp vận chuyển xuất kho
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
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập sản phẩm đại diện
=======
                    <Description className="file" />
                    Kiểm tra tình hình chứng từ vận chuyển
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra chi tiết chứng từ vận chuyển
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Quản lý thông tin Key của Item
=======
                    <Description className="file" />
                    Theo dõi chứng từ vận chuyển đổi hàng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký sản phẩm thông thường
=======
                    <Description className="file" />
                    Xác nhận việc xuất kho/thu đổi hàng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký thông tin sản phẩm
=======
                    <Description className="file" />
                    Báo cáo giao hàng của từng đơn vị
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký TSKT của sản phẩm
=======
                    <Description className="file" />
                    API GỬI TO ĐẾN CÔNG TY GIAO NHẬN
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Quá trình thay đổi TSKT của sản phẩm
=======
                    <Description className="file" />
                    HỦY GỬI API ĐỂ ĐẾN CÔNG TY GIAO NHẬN (EXCEL)
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký phê duyệt sản phẩm
=======
                    <Description className="file" />
                    Xem trạng thái đơn đặt hàng API
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Sửa đổi thông tin phân tích sản phẩm
=======
                    <Description className="file" />
                    Báo cáo các kênh TV
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký xử lý sản phẩm đã ngừng bán
=======
                    <Description className="file" />
                    Familly Mall Report
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Quản lý sản phẩm nhà cung cấp
=======
                    <Description className="file" />
                    Update Item Code to Website
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Trả tiền tích lũy thiếu Promotion
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Mã số phân loại sản phẩm
=======
                    <Description className="file" />
                    Xem Pending của đơn hàng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập mô tả sản phẩm
=======
                    <Description className="file" />
                    Hoàn tất 6 bước Mobile Card
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập nhãn hiệu
=======
                    <Description className="file" />
                    Tình hình giá mới của sản phẩm
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Tỉ lệ thành công đơn hàng - SCM
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập sản phẩm đại diện
=======
                    <Description className="file" />
                    Tỉ lệ thành công đơn hàng theo khoảng thời gian - SCM
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Quản lý thông tin Key của Item
=======
                    <Description className="file" />
                    Xem Pending của đơn hàng tại Nhà Vận Chuyển
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký sản phẩm thông thường
=======
                    <Description className="file" />
                    Tình trạng ký SA
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký thông tin sản phẩm
=======
                    <Description className="file" />
                    Ký hóa đơn điện tử HCM
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký TSKT của sản phẩm
=======
                    <Description className="file" />
                    Quản lý hóa đơn điện tử
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Quá trình thay đổi TSKT của sản phẩm
=======
                    <Description className="file" />
                    Danh sách hóa đơn đã hủy
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký phê duyệt sản phẩm
=======
                    <Description className="file" />
                    Danh sách hóa đơn của đơn hàng hủy 4 bước
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Sửa đổi thông tin phân tích sản phẩm
=======
                    <Description className="file" />
                    Doanh số bán hàng SC
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký xử lý sản phẩm đã ngừng bán
=======
                    <Description className="file" />
                    Danh sách đặt hàng PaymentOnline
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Quản lý sản phẩm nhà cung cấp
=======
                    <Description className="file" />
                    Ký hóa đơn điện tử HN
>>>>>>> Stashed changes
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
<<<<<<< Updated upstream
=======

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
                    Đăng ký số lượng bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xác nhận nhập kho giao trực tiếp
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Di chuyển hàng kho giao trực tiếp
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
                    Hướng dẫn xuất kho toàn bộ đơn hàng(direct dely)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In hóa đơn cho sản phẩm giao trực tiếp
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Mã số phân loại sản phẩm
=======
                    <Description className="file" />
                    Upload dữ liệu thu hồi
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập mô tả sản phẩm
=======
                    <Description className="file" />
                    Đăng ký Scan tài liệu về việc thu hồi
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập nhãn hiệu
=======
                    <Description className="file" />
                    Đăng ký xác nhận thu hồi
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Đăng ký những dữ liệu chưa xử lý
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hủy bỏ chỉ thị thu hồi hàng
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập sản phẩm đại diện
=======
                    <Description className="file" />
                    Tình hình xác nhận/tiếp nhận hàng bị trả lại
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Quản lý thông tin Key của Item
=======
                    <Description className="file" />
                    Bảng hướng dẫn thu hồi hàng trả lại/đổi hàng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký sản phẩm thông thường
=======
                    <Description className="file" />
                    In ra nhãn hàng xác nhận thu hồi
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký thông tin sản phẩm
=======
                    <Description className="file" />
                    Tình hình giải quyết hàng bị trả lại
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký TSKT của sản phẩm
=======
                    <Description className="file" />
                    Tình hình xử lý nhập kho hàng thu hồi
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Quá trình thay đổi TSKT của sản phẩm
=======
                    <Description className="file" />
                    Tình hình cụ thể xác nhận thu hồi
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký phê duyệt sản phẩm
=======
                    <Description className="file" />
                    Tổng số xác nhận thu hồi hàng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Sửa đổi thông tin phân tích sản phẩm
=======
                    <Description className="file" />
                    Tổng số hàng được thu hồi theo từng lý do
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng ký xử lý sản phẩm đã ngừng bán
=======
                    <Description className="file" />
                    Đăng ký kiểm tra chất lượng hàng bị trả lại(MD)
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Quản lý sản phẩm nhà cung cấp
=======
                    <Description className="file" />
                    API GỬI CO ĐẾN CÔNG TY GIAO HÀNG
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
                    <Description className="file" />
                    Đăng ký số lượng hàng bị trả lại của nhà cung cấp
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Yêu cầu kết quả sản phẩm bị trả lại của nhà cung cấp
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Mã số phân loại sản phẩm
=======
                    <Description className="file" />
                    Đăng ký nhập/xuất kho bao bì đóng gói
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập mô tả sản phẩm
=======
                    <Description className="file" />
                    Đăng ký xuất kho bao bì đóng gói theo tiêu chuẩn xuất kho
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập nhãn hiệu
=======
                    <Description className="file" />
                    Xuất biên nhận bao bì đóng gói
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Tình hình thanh toán bao bì đóng gói
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Mã số phân loại sản phẩm
=======
                    <Description className="file" />
                    Đăng ký thay đổi kệ để hàng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập mô tả sản phẩm
=======
                    <Description className="file" />
                    Điều chỉnh lượng đơn phẩm tồn kho
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập nhãn hiệu
=======
                    <Description className="file" />
                    Điều chỉnh chất lượng loại hàng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Điều chỉnh số lượng hàng tồn kho
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Mã số phân loại sản phẩm
=======
                    <Description className="file" />
                    Kiểm tra nội dung thay đổi kệ để hàng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập mô tả sản phẩm
=======
                    <Description className="file" />
                    Kết quả điều chỉnh phân loại hàng tồn kho
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập nhãn hiệu
=======
                    <Description className="file" />
                    Kết quả điều chỉnh hàng tồn kho (theo kệ để hàng)
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Tổng số sản phẩm theo từng lý do điều chỉnh hàng tồn kho
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Mã số phân loại sản phẩm
=======
                    <Description className="file" />
                    Kiểm tra thời gian bảo quản hàng tồn kho
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập mô tả sản phẩm
=======
                    <Description className="file" />
                    Kiểm tra hàng tồn kho
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập nhãn hiệu
=======
                    <Description className="file" />
                    Bảng kiểm tra hàng tồn kho
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Tình hình chất lượng của từng Rack
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra hàng tồn và hàng được bảo quản trong kho trong thời
                    gian dài
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình trạng khác biệt tồn kho của kho/rack
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình nhập xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình khác ngoài xuất nhập kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Bảng tổng hợp ngày mua hàng
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Mã số phân loại sản phẩm
=======
                    <Description className="file" />
                    Yêu cầu di chuyển kho
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập mô tả sản phẩm
=======
                    <Description className="file" />
                    Di chuyển nhập hàng giữa các kho hàng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập nhãn hiệu
=======
                    <Description className="file" />
                    Di chuyển xuất hàng giữa các kho hàng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Yêu cầu nhập xuất tới kho
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Mã số phân loại sản phẩm
=======
                    <Description className="file" />
                    Đăng ký phí vận chuyển hàng thông thường
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập mô tả sản phẩm
=======
                    <Description className="file" />
                    Đăng ký phí vậ chuyển hàng khổ lớn giá rẻ
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập nhãn hiệu
=======
                    <Description className="file" />
                    Đăng ký phí vận chuyển sản phẩm oversize
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Đăng ký phí vận chuyển sản phẩm lắp đặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký phí vận chuyển thương lượng giá
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Mã số phân loại sản phẩm
=======
                    <Description className="file" />
                    Xác nhận phí trả hàng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập mô tả sản phẩm
=======
                    <Description className="file" />
                    Xác nhận phí trả hàng (B2B)
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập nhãn hiệu
=======
                    <Description className="file" />
                    Tạo yêu cầu tính phí theo tháng
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Xác nhận phi giao hàng sản phẩm chưa có kích thước
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Description />
                    Mã số phân loại sản phẩm
=======
                    <Description className="file" />
                    Báo cáo phí vận chuyển theo tháng (B2C)
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập mô tả sản phẩm
=======
                    <Description className="file" />
                    Báo cáo phí vận chuyển theo tháng (B2B)
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập nhãn hiệu
=======
                    <Description className="file" />
                    Chi tiết phí vận chuyển theo tháng (B2C)
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Chi tiết phí vận chuyển theo tháng (B2B)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Chi phí vận chuyển hàng tháng theo từng đơn vị
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
                    <Description className="file" />
                    Item dimensions management
>>>>>>> Stashed changes
                  </a>
                </li>
                <li>
                  <a href className="document-title">
<<<<<<< Updated upstream
                    <Description />
                    Đăng nhập hãng sản xuất
=======
                    <Description className="file" />
                    Detail Item
>>>>>>> Stashed changes
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
