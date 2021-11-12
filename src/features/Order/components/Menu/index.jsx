import { Description, Folder } from "@mui/icons-material";

function Menu(props) {
  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <a href>
            <Folder /> Order Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Order Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tiếp nhận đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tiến hành đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tiếp nhận khiếu nại của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Giải quyết khiếu nại
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tiến hành thanh toán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra người nhận hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xử lý đơn hàng COD
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Thông tin khách hàng sử dụng Credit Loan
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra trạng thái phê duyệt Credit Loan
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xử lý đơn hàng COD_fastdely
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Order/Complaint Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình tiếp nhận đặt hàng TMR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình tiép nhận đặt hàng theo nhóm làm việc
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình khách hàng theo từng giao đoạn tiến hành đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình chi tiết về đơn hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình hủy đơn đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình khách hàng đặt hàng theo sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Lý do khiếu nại của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình khiếu nại của khách hàng theo từng sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra tình hình khiếu nại của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Thống kê lượng sản phẩm bị lỗi
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình trạng đặt hàng(Tổng cộng) của TMR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình trạng tiếp nhận đơn đặt hàng(nhóm) của TMR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tinh hình hàng tồn kho của đơn hàng đặt trước
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra những sản phẩm của đơn hàng đặt trước
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình tiếp nhận đặt hàng Direct Delivery
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Thống kê lý do hủy-tra hàng theo tháng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình tiếp nhận đặt hàng TMR - INSURANCE
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Customer Performance
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình thực tế tiếp nhận từng khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Chọn lựa khách hàng theo tiêu chuẩn đặt hàng/doanh thu
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> SR Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                SR Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý nhóm làm việc xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra tình trạng nhóm làm việc xử lý SR
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                SR Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra SR chưa được xử lý
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình chi tiết tiếp nhận SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Thời gian xử lý SR của từng cá nhân
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình từng bước xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình tổng hợp của từng người xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình xử lý theo từng lý do SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình giải quyết SR của đối tác
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình giải quyết SR theo từng đơn vị(Mới)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình xử lý SR theo từng sản phẩm(Lỉ lệ)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình giải quyết SR theo từng đơn vị
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> OB Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                OB Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Lấy dữ liệu OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Phân bổ nhân viên xử lý OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xử lý bắt buộc OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Phân bổ nhân viên xử lý OB đặt trước
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                OB Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình xử lý OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình xử lý OB của khách hàng được chỉ định
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình thống kê xử lý OB
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Customer Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Basic Customer Info
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin cơ bản của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin chi tiết của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra thông tin khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý thẻ/Ngân hàng của từng khách hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                VIP card
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tạo dữ liệu khách hàng VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký khách hàng VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký phát hành thẻ VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình trạng phát hành thẻ VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình trạng đặt hàng của khách VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký promotions khách hàng VIP
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                SMS
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Gửi tin nhắn về sản phẩm mới
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Gửi tin nhắn
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Hủy gửi tin nhắn
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Số lượng tin nhắn được gửi
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình SMS đặt hàng của khách hàng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Voucher Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Voucher Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tiếp nhận đăng ký đặt hàng bằng phiếu mua hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Hủy bỏ đặt hàng phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra việc đăth phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình hủy bỏ phiếu mua hàng tích lũy điểm
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Voucher Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình tiếp nhận đặt hàng phiếu mua hàng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> B2B-Order Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                B2B-Order Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    B2B-Đăng ký hợp đồng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    B2B-Phê duyệt hợp đồng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    B2B-In hợp đồng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    B2B-Tiếp nhận đặt hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                B2B-Order Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    B2B-Tình trạng đặt hàng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Folder /> Screen Pop Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Agent ID Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Perinfo Management(Only employee of CC Dept)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Extension Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Extension Management
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
