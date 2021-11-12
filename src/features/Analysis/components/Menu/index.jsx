import { Description, Folder } from "@mui/icons-material";

function Menu(props) {
  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <a href>
            <Folder /> Master Data.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Chi phí doanh thu
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng kí thông tin chi phí - doanh thu
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Đăng ký thông tin chi phí - doanh thu
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng kí thông tin doanh thu thực tế
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Marginal Profit Calculate
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin chi phí ước tính
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin chi phí thực tế
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tạo dữ liệu marginal profit
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Folder /> Actual Result Anal.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder /> Daily Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình tiếp nhận từng loại đơn đặt hàng(Lịch)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Doanh thu theo kênh bán hàng(Lịch)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    So sánh tình hình doanh thu của mỗi tháng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình thực tế theo kế hoạch kinh doanh(Mới)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    GUINNESS
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Sales Ana. by Period
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Kết quả bán mỗi ngày của từng kênh bán hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra kết quả bán hàng mỗi ngày của từng kênh bán hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đặt hàng/xuất kho theo kênh bán hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đặt hàng/xuất kho theo sản phẩm và kênh bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đặt hàng/xuất kho thực tế của từng đơn vị
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đặt hàng/trả lại thực tế của từng đơn vị
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình doanh thu mua/bán theo từng đơn vị
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Bảng tổng hợp ngày đặt hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Item-wise Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình Best/Wost của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình thực tế theo từng nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đặt hàng theo tháng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đặt hàng theo ngày/giờ của sản phẩm
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Marginal Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình lợi nhuận đặt hàng/xuất kho theo kênh bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình lợi nhuận đặt hàng/xuất kho thực tế theo từng đơn
                    vị
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Tiem Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Phân tích khách hàng theo các ngày trong tuần
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Vendor-wise Anal.
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình bán hàng theo tháng của từng nhà cung cấp
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình thanh toán theo sản phẩm/nhà cung cấp
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình chi tiết bán hàng của từng nhà cung cấp
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình chi tiết bán hàng của từng nhà cung cấp_KM
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Complaint Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Lý do hủy đơn đặt hàng/trả lại hàng/đổi hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình khiếu nại của khách hàng đối với từng sản phẩm
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Logistics Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tổng số sản phẩm/số lượng vận chuyển
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tổng số theo thời gian xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tổng số theo thời gian thu hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tổng số lượng xuất kho hàng ngày
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Folder /> Media Anal.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder /> TV
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình phát sóng theo tổ chức
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình thực tế của từng chương trình
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình huy hàng khi đang phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đặt hàng của từng chương trình
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình phân bố khách hàng theo sản phẩm của từng ngày
                    phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình phát sóng theo nhà cung cấp
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> CATALOG
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    CATALOG
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Folder /> Customer Anal.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder /> Customer Distribution
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đăng ký khách hàng theo khu vực
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Phân bố theo giới tính/phân loại/khu vực
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Phân bố khách hàng theo khu vực/độ tuổi trung bình
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Phân bố khách hàng theo độ tuổi/tiêu chuẩn đăng ký/giới tính
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Reginal Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình thực tế đặt hàng theo khu vực
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Số lượng đặt hàng/xuất kho theo từng khu vực
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình tiếp nhận đặt hàng theo sản phẩm/khu vực
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Class Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đặt hàng/xuất kho theo phân loại khách hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Customer_period_performance_distribution
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Phân bố khách hàng theo độ tuổi/tỉ lệ/giới tính
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Customer performance distribution by month
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đặt hàng theo khu vực của từng tháng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kết quả Best/Worst sản phẩm của khách hàng VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Doanh thu theo giá tiền đặt hàng từng tháng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Customer ranking_performance analysis
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình thực tế của khách hàng thân thiết
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình số lượng hiện tại của khách hàng thân thiết
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình sinh nhật khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình hết hạn tích lũy của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình email khách hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Customer Anal. With Repeated Order
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình số lần đặt hàng của khách hàng đặt nhiều lần
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Phân bố tình hình đặt hàng theo độ tuổi/giới tính
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình khách hàng đặt hàng lại trong tháng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Monthly customer data
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Monthly customer data
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
