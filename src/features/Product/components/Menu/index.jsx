import "./styles.css";
import { Description, Folder } from "@mui/icons-material";

function Menu(props) {
  return (
    <div className="tree-view-com">
      <ul className="tree-view-parent">
        <li>
          <a href>
            <Folder /> Item Mgt.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder />
                Basic Item Info
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
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
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập hãng sản xuất
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Info. Resgistration
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập sản phẩm đại diện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý thông tin Key của Item
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký sản phẩm thông thường
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký thông tin sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quá trình thay đổi TSKT của sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký phê duyệt sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Sửa đổi thông tin phân tích sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký xử lý sản phẩm đã ngừng bán
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Quản lý sản phẩm nhà cung cấp
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Packing Info. Resgistration
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập vật liệu đóng gói
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder />
                Item Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình đăng ký sản phẩm
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình sản phẩm không còn tồn kho
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình bán sản phẩm mới
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình trạng hàng tồn
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Folder /> Promotion.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder /> Promotion Registration
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Hàng khuyến mãi
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    CTKM có điều kiện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Phê duyệt CTKM
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    KM bốc thăm trúng thưởng
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng nhập thông tin người trúng thưởng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Promotion Status
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Kiểm tra toàn bộ CTKM
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình CTKM có điều kiện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Yêu cầu KM bốc thăm theo từng KH
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Promotion Result
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Kết quả chương trình khuyến mãi
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình chi phí CTKM theo từng NCC
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <a href>
            <Folder /> Event.
          </a>
          <ul className="tree-view-child">
            <li>
              <a href className="document-title">
                <Folder /> Event Rule Mgt
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký quy tắc
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Event Registration
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Đăng ký sự kiện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xác nhận sự kiện
                  </a>
                </li>
                <li>
                  <a href className="document-title">
                    <Description />
                    Xác nhận khách hàng được hưởng sự kiện
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href className="document-title">
                <Folder /> Event Result
              </a>
              <ul className="tree-view-child">
                <li>
                  <a href className="document-title">
                    <Description />
                    Tình hình khách hàng được hưởng sự kiện
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
