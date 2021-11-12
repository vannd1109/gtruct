import { Description, Folder } from "@mui/icons-material";

function Menu(props) {
  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <a href>
            <Folder /> Basic Information
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Basic Code
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý kênh bán hàng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý mã số chung
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý số bưu điện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý khu vực được phân tích
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Basic Organization Info
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin của công ty
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý các bộ phận
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý nhân viên
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý tổ chức theo tháng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý nhân viên của các công ty trực thuộc
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý mã số MD
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý các nhóm tiến hành
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình nhân viên
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Privilege Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý nhóm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý thông tin nhóm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra người sử dụng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý nhóm - người sử dụng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý menu
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý đối tượng cần trợ giúp
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                System Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý các thông báo
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý nhóm từ trợ giúp
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý tin nhắn
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý log theo event
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra log theo event
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Từ điển chuyên ngành
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
