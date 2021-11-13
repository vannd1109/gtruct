import { Description, Folder, Add } from "@mui/icons-material";

function Menu(props) {
  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <a href>
            <Add /> <Folder className="folder" /> Prepay payment
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                CMS
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thanh toán bằng tiền mặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Giải quyết thanh toán bằng tiền mặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý hủy bỏ trường hợp thanh toán bằng tiền mặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hủy bỏ tất cả trường hợp chưa chuyển tiền
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Số trường hợp chưa được thanh toán bằng tiền mặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Giải quyết các trường hợp thanh toán bằng tiền mặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Số trường hợp hủy thanh toán bằng tiền mặt
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Card
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hoàn tất việc thanh toán bằng thẻ
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Lập tài liệu đăng ký thẻ
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký tài liệu yêu cầu thanh toán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Yêu cầu hủy bỏ thẻ
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Trường hợp đặt hàng trả góp bằng thẻ
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thống kê thanh toán bằng thẻ
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                SCJ point
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý điểm tích lũy
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình điểm tích lũy của từng khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tặng các dịch vụ cộng điểm khác
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kỳ hạn sử dụng điểm tích lũy
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình sử dụng điểm tích lũy của nhân viên công ty
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tổng số điểm cộng được tặng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tổng số điểm tích lũy đã dùng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Deposit
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý số tiền đặt cọc
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình cấp tiền đặt cọc theo ngày
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình sử dụng tiền đặt cọc theo ngày
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiền đặt cọc của từng khách hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                CreditLoan
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý chấp nhận Creadit Loan
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Yêu cầu làm giấy tờ Creadit Loan
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng nhập giấy tờ gửi tiền Creadit Loan
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thống kê gửi tiền Credit Loan
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Payment Online
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xác nhận thu tiền Payment Online
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hoàn trả tiền cho Payment Online
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xác nhận thu tiền trả góp (Payment Online)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Trường hợp đặt hàng trả góp bằng thẻ (Payment Online)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thống kê thanh toán Payment Online
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Installment Payment Online
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a href>
            <Add /> <Folder className="folder" /> Postpay payment
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                COD
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Giải quyết thanh toán COD(Mới)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đã nhận được tài liệu thanh toán theo công ty giao
                    hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Status by Postpay
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chưa thanh toán trả sau
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình thanh toán trả sau
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình xuất kho những sản phẩm được thanh toán trả sau
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chưa thanh toán trả sau
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình dự kiến thanh toán COD
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a href>
            <Add /> <Folder className="folder" /> Refund
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Refund proc
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Trả lại tiền mặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Giải quyết việc trả lại tiền sau khi xác nhận thu hồi hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Status by refund
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kết quả việc trả lại tiền
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a href>
            <Add /> <Folder className="folder" /> Other Anal
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Sale and Payment Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Báo cáo doanh thu và thanh toán bán hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Other Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đăng ký thanh toán theo từng loại thanh toán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình xác nhận/thanh toán theo từng loại thanh toán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Monthly dilivery cost report by companies
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Monthly dilivery cost report by item
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a href>
            <Add /> <Folder className="folder" /> Receipt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Receipts issued
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký nhận biên lai
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In biên lai cho khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In biên lai của từng vận đơn
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In DM địa chỉ của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In biên lai của từng vận đơn HĐĐT
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Customer DM issued
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đăng ký nhận biên lai
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình in biên lai
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Individual income tax
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Giải quyết việc chuyển tiền thuế thu nhập cá nhân
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chuyển tiền thuế chu nhập cá nhân
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a href>
            <Add /> <Folder className="folder" /> Vendor Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Basic Vendor Info
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký công ty ký gửi hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký mã số bảo lưu/số khấu từ
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý phân loại công ty ký gửi theo tháng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Basic Payment Info
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý mã số ngân hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý tài khoản chuyển tiền
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý mã số công ty thẻ
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý mã số thẻ
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý công ty cho vay tín dụng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký tiêu chuẩn vay tín dụng Rebate
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Basic info.status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đăng ký công ty ký gửi hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình ngân hàng của công ty ký gửi hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In DM của công ty ký gửi hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra tiêu chuẩn quyết toán của công ty ký gửi hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình hàng tồn của mỗi nhà cung cấp nhập hàng nguyên tắc
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a href>
            <Add /> <Folder className="folder" /> Vendor Settlement
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Bill Payment
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tiến hành thanh toán theo tiêu chuẩn phát sinh
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xác nhận hóa đơn thanh toán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký hóa đơn
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tiến hành chi trả theo tiêu chuẩn thanh toán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xác nhận việc chi trả
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký hóa đơn(Điều chỉnh hàng tồn kho)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Item supply price inquire
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chi trả của các công ký gửi hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chi trả
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Pinance I/F
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Sales data(Daily)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Vendor payment(Monthly)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Payment method closing(Daily)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    SCJ point payment closing(Monthly)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Accounting stock sheet
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    COD sales status(Monthly)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Yêu cầu nhập xuất tới kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình công nợ nhà cung cấp theo hóa đơn
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chi tiết công nợ nhà cung cấp
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a href>
            <Add /> <Folder className="folder" /> Voucher Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Voucher Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Yêu cầu kiểm tra đối tượng nhập kho phiếu mua hàng tích lũy
                    điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Nhập phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Bỏ phiếu mua hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phê duyệt phát hành phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý việc xuất phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình phê duyệt phiếu mua hàng tích lũy điểm
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Voucher Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiến hành phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình sử dụng phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình xuất nhập kho phiếu mua hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý phiếu mua hàng tích lũy điểm
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a href>
            <Add /> <Folder className="folder" /> D/C Coupon
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                D/C Coupon Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin phiếu giảm giá
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phê duyệt phiếu giảm giá
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phát hành phiếu giảm giá (riêng lẻ)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phát hành phiếu giảm giá (đồng loạt)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                D/C Coupon Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình sửu dụng phiếu giảm giá
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình phát hành phiếu giảm giá
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra tình hình phiếu giảm giá
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a href>
            <Add /> <Folder className="folder" /> B2B Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                B2B Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Đăng ký thông tin khách hàng B2B
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Đăng ký thanh toán bằng tiền mặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Giải quyết thanh toán CMS đợt 1
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Giải quyết thanh toán CMS đợt 2
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Xử lý hủy bỏ trường hợp thanh toán bằng tiền mặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Hủy bỏ tất cả trường hợp chưa chuyển tiền
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Số trường hợp chưa được xác nhận thanh toán bằng tiền
                    mặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Giải quyết các trường hợp thanh toán bằng tiền mặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Số trường hợp hủy thanh toán bằng tiền mặt
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Giải quyết thanh toán COD (Mới)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                B2B Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Tình hình công nợ
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B - Tình hình thanh toán theo tháng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a href>
            <Add /> <Folder className="folder" /> MotorBike Mgt
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                MotorBike Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    In hóa đơn xe máy
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
