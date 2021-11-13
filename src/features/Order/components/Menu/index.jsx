import { Description, Folder, Add } from "@mui/icons-material";

function Menu(props) {
  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <a href>
            <Add /> <Folder className="folder" /> Order Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Order Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tiếp nhận đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tiến hành đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tiếp nhận khiếu nại của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Giải quyết khiếu nại
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tiến hành thanh toán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra người nhận hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý đơn hàng COD
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thông tin khách hàng sử dụng Credit Loan
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra trạng thái phê duyệt Credit Loan
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý đơn hàng COD_fastdely
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Order/Complaint Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiếp nhận đặt hàng TMR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiép nhận đặt hàng theo nhóm làm việc
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình khách hàng theo từng giao đoạn tiến hành đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chi tiết về đơn đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình hủy đơn đặt hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình khách hàng đặt hàng theo sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Lý do khiếu nại của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình khiếu nại của khách hàng theo từng sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra tình hình khiếu nại của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thống kê lượng sản phẩm bị lỗi
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình trạng đặt hàng(Tổng cộng) của TMR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình trạng tiếp nhận đơn đặt hàng(nhóm) của TMR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tinh hình hàng tồn kho của đơn hàng đặt trước
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra những sản phẩm của đơn hàng đặt trước
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiếp nhận đặt hàng Direct Delivery
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thống kê lý do hủy-trả hàng theo tháng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiếp nhận đặt hàng TMR - INSURANCE
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Customer Performance
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình thực tế tiếp nhận từng khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Chọn lựa khách hàng theo tiêu chuẩn đặt hàng/doanh thu
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Add /> <Folder className="folder" /> SR Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                SR Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý nhóm làm việc xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra tình trạng nhóm làm việc xử lý SR
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                SR Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra SR chưa được xử lý
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chi tiết tiếp nhận SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thời gian xử lý SR của từng cá nhân
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình từng bước xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tổng hợp của từng người xử lý SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình xử lý theo từng lý do SR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình giải quyết SR của đối tác
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình giải quyết SR theo từng đơn vị(Mới)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình xử lý SR theo từng sản phẩm(Tỉ lệ)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình giải quyết SR theo từng đơn vị
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Add /> <Folder className="folder" /> OB Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                OB Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Lấy dữ liệu OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân bổ nhân viên xử lý OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xử lý bắt buộc OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân bổ nhân viên xử lý OB đặt trước
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                OB Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình xử lý OB
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình xử lý OB của khách hàng được chỉ định
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình thống kê xử lý OB
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Add /> <Folder className="folder" /> Customer Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Basic Customer Info
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin cơ bản của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin chi tiết của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra thông tin khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý thẻ/Ngân hàng của từng khách hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                VIP card
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tạo dữ liệu khách hàng VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký khách hàng VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký phát hành thẻ VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình trạng phát hành thẻ VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình trạng đặt hàng của khách VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký promotions khách hàng VIP
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                SMS
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Gửi tin nhắn về sản phẩm mới
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Gửi tin nhắn
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hủy gửi tin nhắn
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Số lượng tin nhắn được gửi
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình SMS đặt hàng của khách hàng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Add /> <Folder className="folder" /> Voucher Mgt.
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
                    Tiếp nhận đăng ký đặt hàng bằng phiếu mua hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Hủy bỏ đặt hàng phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra việc đặt phiếu mua hàng tích lũy điểm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình hủy bỏ phiếu mua hàng tích lũy điểm
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
                    Tình hình tiếp nhận đặt hàng phiếu mua hàng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Add /> <Folder className="folder" /> B2B-Order Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                B2B-Order Processing
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B-Đăng ký hợp đồng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B-Phê duyệt hợp đồng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B-In hợp đồng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B-Tiếp nhận đặt hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                B2B-Order Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    B2B-Tình trạng đặt hàng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <Add /> <Folder className="folder" /> Screen Pop Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Agent ID Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Perinfo Management(Only employee of CC Dept)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Extension Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
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
