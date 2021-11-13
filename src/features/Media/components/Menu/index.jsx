import { Description, Folder, Add } from "@mui/icons-material";

function Menu(props) {
  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <a href>
            <Add /> <Folder className="folder" /> TV section.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Basic Info
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng kí chương trình
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký khách mời đến dự chương trình
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký băng ghi hình
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Program Lineup
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng kí chương trình theo lịch phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Quản lý nhân viên theo từng chương trình
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký sản phẩm theo chương trình phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Thay đổi thời gian phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký bố trí khách mời tham gia chương trình
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                On-Air
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký phát sóng trực tiếp
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình tiến hành phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình phát sóng hiện tại
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Số lương bán trong chương trình Live
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Result
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Nhận xét sau khi phát sóng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký theo dõi chương trình phát sóng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" />
                Lineup Inquiry
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra lịch phát sóng theo tuần
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình phát sóng sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình băng ghi hình theo từng sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra kết quả phát sóng theo ngày
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình phát sóng của từng ngày phát sóng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Add /> <Folder className="folder" /> CATALOG.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> CATALOG production
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký sản phẩm CATALOG
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> CATALOG Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Lên danh sách khách hàng nhận CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tạo file CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Giải quyết gửi lại CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký gửi lại CATALOG
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> CATALOG status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra sản phẩm CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Kiểm tra khách hàng được nhận CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tỷ lệ mua hàng qua CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình mua hàng qua CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tỷ lệ phản ánh theo từng phu vực CATALOG
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tỷ lệ phản hồi theo số lần gửi CATALOG
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Add /> <Folder className="folder" /> INTERNET.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> WebSurvey
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký WebSurvey
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký các vấn đề khảo sát
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Chọn vấn đề khảo sát
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xem kết quả khảo sát
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Xem hàng loạt kết quả khảo sát
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> Pre Order Mgmt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký số lượng có thể booking của sp internet
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình đặt hàng Pre-Order
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> B2E Company Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin công ty B2E
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin nhân viên B2E
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình doanh thu kênh B2E
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Add /> <Folder className="folder" /> MRO Company Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin công ty MRO
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Đăng ký thông tin nhân viên MRO
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
                    Tình hình doanh thu kênh MRO
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description className="file" />
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
