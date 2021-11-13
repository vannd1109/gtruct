import { Description, Folder, Add } from "@mui/icons-material";

function Menu(props) {
  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <a href>
            <Add /> <Folder className="folder" /> Master Data.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Kế hoạch kinh doanh
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng kí kết quả kế hoạch kinh doanh
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Đăng ký thông tin chi phí - doanh thu
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng kí thông tin doanh thu thực tế
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Marginal Profit Calculate
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin chi phí ước tính
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin chi phí thực tế
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tạo dữ liệu marginal profit
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Add /> <Folder className="folder" /> Actual Result Anal.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Daily Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiếp nhận từng loại đơn đặt hàng(Lịch)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Doanh thu theo kênh bán hàng(Lịch)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    So sánh tình hình doanh thu của mỗi tháng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình thực tế theo kế hoạch kinh doanh(Mới)
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    GUINNESS
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Sales Ana. by Period
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kết quả bán mỗi ngày của từng kênh bán hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra kết quả bán hàng mỗi ngày của từng kênh bán hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đặt hàng/xuất kho theo kênh bán hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đặt hàng/xuất kho theo sản phẩm và kênh bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đặt hàng/xuất kho thực tế của từng đơn vị
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đặt hàng/trả lại thực tế của từng đơn vị
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình doanh thu mua/bán theo từng đơn vị
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Bảng tổng hợp ngày đặt hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Item-wise Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình Best/Worst của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình thực tế theo từng nhãn hiệu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đặt hàng theo tháng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đặt hàng theo ngày/giờ của sản phẩm
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Marginal Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình lợi nhuận đặt hàng/xuất kho theo kênh bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình lợi nhuận đặt hàng/xuất kho thực tế theo từng đơn
                    vị
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Tiem Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân tích khách hàng theo các ngày trong tuần
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Vendor-wise Anal.
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình bán hàng theo tháng của từng nhà cung cấp
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình thanh toán theo sản phẩm/nhà cung cấp
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chi tiết bán hàng của từng nhà cung cấp
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình chi tiết bán hàng của từng nhà cung cấp_KM
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Complaint Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Lý do hủy đơn đặt hàng/trả lại hàng/đổi hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình khiếu nại của khách hàng đối với từng sản phẩm
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Logistics Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tổng số sản phẩm/số lượng vận chuyển
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tổng số theo thời gian xuất kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tổng số theo thời gian thu hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tổng số lượng xuất kho hàng ngày
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Add /> <Folder className="folder" /> Media Anal.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> TV
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình phát sóng theo tổ chức
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình thực tế của từng chương trình
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình hủy hàng khi đang phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đặt hàng của từng chương trình
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình phân bố khách hàng theo sản phẩm của từng ngày
                    phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình phát sóng theo nhà cung cấp
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> CATALOG
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân tích đơn đặt hàng của khách hàng gửi Catalogue
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân tích tình hình đối tượng gửi Catalogue
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Danh mục khách đặt hàng sản phẩm Catalogue
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra sản phẩm được đặt qua Catalogue
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tỉ lệ đáp ứng tái phát hành Catalogue
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Add /> <Folder className="folder" /> Customer Anal.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Customer Distribution
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đăng ký khách hàng theo khu vực
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân bố theo giới tính/phân loại/khu vực
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân bố khách hàng theo khu vực/độ tuổi trung bình
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân bố khách hàng theo độ tuổi/tiêu chuẩn đăng ký/giới tính
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Reginal Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình thực tế đặt hàng theo khu vực
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Số lượng đặt hàng/xuất kho theo từng khu vực
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiếp nhận đặt hàng theo sản phẩm/khu vực
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Class Anal
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đặt hàng/xuất kho theo phân loại khách hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />{" "}
                Customer_period_performance_distribution
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân bố khách hàng theo độ tuổi/tỉ lệ/giới tính
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Customer performance
                distribution by month
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đặt hàng theo khu vực của từng tháng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kết quả Best/Worst sản phẩm của khách hàng VIP
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Doanh thu theo giá tiền đặt hàng từng tháng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Customer
                ranking_performance analysis
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình thực tế của khách hàng thân thiết
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình số lượng hiện tại của khách hàng thân thiết
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình sinh nhật khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình hết hạn tích lũy của khách hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình email khách hàng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Customer Anal. With
                Repeated Order
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình số lần đặt hàng của khách hàng đặt nhiều lần
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Phân bố tình hình đặt hàng theo độ tuổi/giới tính
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình khách hàng đặt hàng lại trong tháng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Monthly customer data
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
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
