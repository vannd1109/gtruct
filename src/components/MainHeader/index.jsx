import {
  AdminPanelSettings,
  Cancel,
  CircleNotifications,
  Close,
  Help,
  Info,
  Inventory,
  ZoomOutMap,
} from "@mui/icons-material";
import {
  Badge,
  Breadcrumbs,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./styles.scss";

function MainHeader({ title }) {
  const handleChange = () => {};

  const breadcrumbs = [
    <Typography underline="hover" key="1" color="inherit">
      Item Mgt
    </Typography>,
    <Typography key="2">Basic Item Info</Typography>,
    <Typography key="3" color="text.primary">
      {title}
    </Typography>,
  ];

  return (
    <section>
      <div className="main__header d-flex justify-content-between align-items-center">
        <div className="main__header--label">
          <Typography>SCJ GTRUCT-MD-[{title}]</Typography>
        </div>
        <div className="main__header--action">
          <ZoomOutMap className="border main__header--action-zoom" />
          <Close className="border main__header--action-close" />
        </div>
      </div>
      <div className="main__menu d-flex bg-success justify-content-between align-items-center mt-2">
        <Navbar expand="sm">
          <Container>
            <Typography style={{ marginRight: "20px" }}>MD</Typography>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Basic Item Info" className="nav__root">
                  <NavDropdown.Item>Mã số phân loại sản phẩm</NavDropdown.Item>
                  <NavDropdown.Item>Đăng nhập mô tả sản phẩm</NavDropdown.Item>
                  <NavDropdown.Item>Đăng nhập nhãn hiệu</NavDropdown.Item>
                  <NavDropdown.Item>Đăng nhập hãng sản xuất</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Info Resgistration" className="nav__root">
                  <NavDropdown.Item>
                    Đăng nhập sản phẩm đại diện
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Quản lý thông tin Key của Item
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Đăng ký sản phẩm thông thường
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Đăng ký thông tin sản phẩm
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Đăng ký thông số kỹ thuật của sản phẩm
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Quá trình thay đổi thông số kỹ thuật của sản phẩm
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Đăng ký phê duyệt sản phẩm
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Sửa đổi thông tin phân tích sản phẩm
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Đăng ký xử lý sản phẩm đã ngừng bán
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Quản lý sản phẩm nhà cung cấp
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  title="Packing Info Registration"
                  className="nav__root"
                >
                  <NavDropdown.Item>
                    Đăng nhập vật liệu đóng gói
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Item Status" className="nav__root">
                  <NavDropdown.Item>
                    Tình hình đăng ký sản phẩm
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Tình hình sản phẩm không còn tồn kho
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Tình hình bán sản phẩm mới
                  </NavDropdown.Item>
                  <NavDropdown.Item>Tình trạng hàng tồn</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="main__menu--template">
          <FormControl sx={{ s: 1, width: 150 }}>
            <InputLabel id="demo-simple-select-label">
              Chọn giao diện
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              label="Chọn giao diện"
              onChange={handleChange}
            >
              <MenuItem value={10}>Mã số phân loại sản phẩm</MenuItem>
              <MenuItem value={20}>Đăng nhập mô tả sản phẩm</MenuItem>
              <MenuItem value={30}>Đăng nhập nhãn hiệu</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="main__menu--close">
          <Button variant="danger" className="btn-sm">
            <Close /> Close
          </Button>
        </div>
      </div>
      <div className="main__action d-flex justify-content-between align-items-center">
        <div className="main__action--notification">
          <Tooltip title="Thông báo">
            <Badge badgeContent={1} color="error">
              <CircleNotifications color="action" />
            </Badge>
          </Tooltip>
        </div>
        <div className="main__action--option d-flex">
          <div className="main__action--option-icon">
            <Tooltip title="Bảng kỹ thuật đặc tả sản phẩm">
              <Info />
            </Tooltip>
          </div>
          <div className="main__action--option-icon">
            <Tooltip title="Thông tin hàng tồn kho">
              <Inventory />
            </Tooltip>
          </div>
          <div className="main__action--option-icon">
            <Tooltip title="Thay đổi mật mã">
              <AdminPanelSettings />
            </Tooltip>
          </div>
          <div className="main__action--option-icon">
            <Tooltip title="Trợ giúp">
              <Help />
            </Tooltip>
          </div>
          <div className="main__action--option-icon">
            <Tooltip title="Đóng">
              <Cancel />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="main__breadcrumb d-flex justify-content-between align-items-center mt-2 border-bottom">
        <div className="main__option--label">
          <Typography>{title}</Typography>
        </div>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </div>
    </section>
  );
}

export default MainHeader;
