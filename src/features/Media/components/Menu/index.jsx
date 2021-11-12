import { Description, Folder } from "@mui/icons-material";

function Menu(props) {
  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <a href>
            <Folder /> TV section.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Basic Info
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng kí chương trình
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký khách mời đến dự CT
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký băng ghi hình
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Program Lineup
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng kí CT theo lịch phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý nhân viên theo từng CT
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký sản phẩm theo CT phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Thay đổi thời gian phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký bố trí khách mời tham gia CT
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                On-Air
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký phát sóng trực tiếp-ON_AIR
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình tiến hành phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình phát sóng hiện tại
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Số lương bán trong chương trình Live
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Result
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Nhận xét sau khi phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký theo dõi chương trình phát sóng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Lineup Inquiry
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra lịch phát sóng theo tuần
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình phát sóng sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình băng ghi hình theo từng sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra kết quả phát sóng theo ngày
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình phát sóng của tưngg ngày phát sóng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Folder /> CATALOG.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder /> CATALOG production
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký sản phẩm
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> CATALOG Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Lên danh sách khách hàng nhận
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tạo file
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Giải quyết gửi lại
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký gửi lại
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> CATALOG status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra khách hàng được nhận
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tỷ lệ mua hàng qua CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình mua hàng qua CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tỷ lệ phản ánh theo từng phu vực CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tỷ lệ phản hồi theo số lần gửi CATALOG
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Folder /> INTERNET.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder /> WebSurvey
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký WebSurvey
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký các vấn đề khảo sát
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Chọn vấn đề khảo sát
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xem kết quả khảo sát
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xem hàng loạt kết quả khảo sát
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Pre Order Mgmt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký số lượng có thể booking của SP internet
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đặt hàng Pre-Order
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> B2E Company Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin công ty B2E
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin nhân viên B2E
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình doanh thu kênh B2E
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> MRO Company Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin công ty MRO
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin nhân viên MRO
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình doanh thu kênh MRO
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình giao hàng phân theo sản phẩm MRO
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
