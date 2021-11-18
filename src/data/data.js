const DATA = {
  data: {
    product: [
      {
        id: "itemMgt",
        name: "Item Mgt",
        // nameOrther: "i",
        items: [
          {
            id: "im_1",
            name: "Basic Item Info",
            items: [
              {
                id: "bii_1",
                name: "Mã số phân loại sản phẩm",
              },
              {
                id: "bii_2",
                name: "Đăng nhập mô tả sản phẩm",
              },
              {
                id: "bii_3",
                name: "Đăng nhập nhãn hiệu",
              },
              {
                id: "bii_4",
                name: "Đăng nhập hãng sản xuất",
              },
            ],
          },
          {
            id: "im_2",
            name: "Info Resgistration",
            items: [
              {
                id: "ir_1",
                name: "Đăng nhập sản phẩm đại diện",
              },
              {
                id: "ir_2",
                name: "Quản lý thông tin Key của Item",
              },
              {
                id: "ir_3",
                name: "Đăng ký sản phẩm thông thường",
              },
              {
                id: "ir_4",
                name: "Đăng ký thông tin sản phẩm",
              },
              {
                id: "ir_5",
                name: "Đăng ký thông số kỹ thuật của sản phẩm",
              },
              {
                id: "ir_6",
                name: "Quá trình thay đổi thông số kỹ thuật của sản phẩm",
              },
              {
                id: "ir_7",
                name: "Đăng ký phê duyệt sản phẩm",
              },
              {
                id: "ir_8",
                name: "Sửa đổi thông tin phân tích sản phẩm",
              },
              {
                id: "ir_9",
                name: "Đăng ký xử lý sản phẩm đã ngừng bán",
              },
              {
                id: "ir_10",
                name: "Quản lý sản phẩm nhà cung cấp",
              },
            ],
          },
          {
            id: "im_3",
            name: "Packing Info Resgistration",
            items: [
              {
                id: "pir_1",
                name: "Đăng nhập vật liệu đóng gói",
              },
            ],
          },
          {
            id: "im_4",
            name: "Item Status",
            items: [
              {
                id: "is_1",
                name: "Tình hình đăng ký sản phẩm",
              },
              {
                id: "is_2",
                name: "Tình hình sản phẩm không còn tồn kho",
              },
              {
                id: "is_3",
                name: "Tình hình bán sản phẩm mới",
              },
              {
                id: "is_4",
                name: "Tình trạng hàng tồn",
              },
            ],
          },
        ],
      },
      {
        id: "Promotion",
        name: "Promotion",
        items: [
          {
            id: "p_1",
            name: "Promotion Registration",
            items: [
              {
                id: "pr_1",
                name: "Hàng khuyến mãi",
              },
              {
                id: "pr_2",
                name: "Chương trình khuyến mãi có điều kiện",
              },
              {
                id: "pr_3",
                name: "Phê duyệt chương trình khuyến mãi",
              },
              {
                id: "pr_4",
                name: "Khuyến mãi bốc thăm trúng thưởng",
              },
              {
                id: "pr_5",
                name: "Đăng nhập thông tin người trúng thưởng",
              },
            ],
          },
          {
            id: "p_2",
            name: "Promotion Status",
            items: [
              {
                id: "ps_1",
                name: "Kiểm tra toàn bộ chương trình khuyến mãi",
              },
              {
                id: "ps_2",
                name: "Tình hình chương trình khuyến mãi có điều kiện",
              },
              {
                id: "ps_3",
                name: "Yêu cầu khuyến mãi bốc thăm theo từng khách hàng",
              },
            ],
          },
          {
            id: "p_3",
            name: "Promotion Result",
            items: [
              {
                id: "pr_1",
                name: "Kết quả chương trình khuyến mãi",
              },
              {
                id: "pr_2",
                name: "Tình hình chi phí chương trình khuyến mãi theo từng nhà cung cấp",
              },
            ],
          },
        ],
      },
      {
        id: "Event",
        name: "Event",
        items: [
          {
            id: "e_1",
            name: "Event Rule Mgt",
            items: [
              {
                id: "evm_1",
                name: "Đăng ký quy tắc",
              },
            ],
          },
          {
            id: "e_2",
            name: "Event Registration",
            items: [
              {
                id: "er_1",
                name: "Đăng ký sự kiện",
              },
              {
                id: "er_2",
                name: "Xác nhận sự kiện",
              },
              {
                id: "er_3",
                name: "Xác nhận khách hàng được hưởng sự kiện",
              },
            ],
          },
          {
            id: "e_3",
            name: "Event Result",
            items: [
              {
                id: "er_1",
                name: "Tình hình khách hàng được hưởng sự kiện",
              },
            ],
          },
        ],
      },
    ],
    order: [
      {
        id: "o_1",
        name: "Order Mgt",
        items: [
          {
            id: "om_1",
            name: "Order Processing",
            items: [
              {
                id: "op_1",
                name: "Tiếp nhận đặt hàng",
              },
              {
                id: "op_2",
                name: "Tiến hành đặt hàng",
              },
              {
                id: "op_3",
                name: "Tiếp nhận khiếu nại của khách hàng",
              },
              {
                id: "op_4",
                name: "Giải quyết khiếu nại",
              },
              {
                id: "op_5",
                name: "Tiến hành thanh toán",
              },
              {
                id: "op_6",
                name: "Kiểm tra người nhận hàng",
              },
              {
                id: "op_7",
                name: "Xử lý đơn hàng COD",
              },
              {
                id: "op_8",
                name: "Thông tin khách hàng sử dụng Credit Loan",
              },
              {
                id: "op_9",
                name: "Kiểm tra trạng thái phe duyệt Credit Loan",
              },
              {
                id: "op_10",
                name: "Xử lý đơn hàng COD_Fastdely",
              },
            ],
          },
          {
            id: "om_2",
            name: "Order/Complaint Status",
            items: [
              {
                id: "ocs_1",
                name: "Tình hình tiếp nhận đơn đặt hàng TMR",
              },
              {
                id: "ocs_2",
                name: "Tình hình tiếp nhận đặt hàng theo nhóm làm việc",
              },
              {
                id: "ocs_3",
                name: "Tình hình khách hàng theo từng giai đoạn tiến hành đặt hàng",
              },
              {
                id: "ocs_4",
                name: "Tình hình chi tiết về đơn đặt hàng",
              },
              {
                id: "ocs_5",
                name: "Tình hình hủy đơn đặt hàng",
              },
              {
                id: "ocs_6",
                name: "Tình hình khách hàng đặt hàng theo sản phẩm",
              },
              {
                id: "ocs_7",
                name: "Lý do khiếu nại của khách hàng",
              },
              {
                id: "ocs_8",
                name: "Tình hình khiếu nại của khách hàng theo từng sản phẩm",
              },
              {
                id: "ocs_9",
                name: "Kiểm tra tình hình khiếu nại của khách hàng",
              },
              {
                id: "ocs_10",
                name: "Thống kê lượng sản phẩm bị lỗi",
              },
              {
                id: "ocs_11",
                name: "Tình trạng đặt hàng(Tổng cộng) của TMR",
              },
              {
                id: "ocs_12",
                name: "Tình trạng tiếp nhận đươn đặt hàng(nhóm) của TMR",
              },
              {
                id: "ocs_13",
                name: "Tình hình hàng tồn kho của đơn hàng đặt trước",
              },
              {
                id: "ocs_14",
                name: "Tình hình tiếp nhận đặt hàng Direct Delivery",
              },
              {
                id: "ocs_15",
                name: "Thống kê lý do hủy-trả hàng theo tháng",
              },
              {
                id: "ocs_16",
                name: "Tình hình tiếp nhận đặt hàng TMR - INSURANCE",
              },
            ],
          },
          {
            id: "om_3",
            name: "Customer Performance",
            items: [
              {
                id: "cp_1",
                name: "Tình hình thực tế tiếp nhận từng khách hàng",
              },
              {
                id: "cp_2",
                name: "Chọn lựa khách hàng theo tiêu chuẩn đặt hàng/doanh thu",
              },
            ],
          },
        ],
      },
      {
        id: "o_2",
        name: "SR Mgt",
        items: [
          {
            id: "sm_1",
            name: "SR Processing",
            items: [
              {
                id: "sp_1",
                name: "Xử lý SR",
              },
              {
                id: "sp_2",
                name: "Quản lý nhóm làm việc xử lý SR",
              },
              {
                id: "sp_3",
                name: "Kiểm tra tình trạng nhóm làm việc xử lý SR",
              },
            ],
          },
          {
            id: "sm_2",
            name: "SR Status",
            items: [
              {
                id: "ss_1",
                name: "Kiểm tra SR chưa được xử lý",
              },
              {
                id: "ss_2",
                name: "Tình hình chi tiết tiếp nhận SR",
              },
              {
                id: "ss_3",
                name: "Thời gian xử lý SR của từng cá nhân",
              },
              {
                id: "ss_4",
                name: "Tình hình từng bước xử lý SR",
              },
              {
                id: "ss_5",
                name: "Tình hình tổng hợp của từng người xử lý SR",
              },
              {
                id: "ss_6",
                name: "Tình hình xử lý theo từng lý do",
              },
              {
                id: "ss_7",
                name: "Tình hình giải quyết SR của đối tác",
              },
              {
                id: "ss_8",
                name: "Tình hình giải quyết SR theo từng đơn vị(Mới)",
              },
              {
                id: "ss_9",
                name: "Tình hình xử lý SR theo từng sản phẩm(Tỉ lệ)",
              },
              {
                id: "ss_10",
                name: "Tình hình giải quyết SR theo từng đơn vị",
              },
            ],
          },
        ],
      },
      {
        id: "o_3",
        name: "OB Mgt",
        items: [
          {
            id: "om_1",
            name: "OB Processing",
            items: [
              {
                id: "op_1",
                name: "Lấy dữ liệu OB",
              },
              {
                id: "op_2",
                name: "Phân bổ nhân viên xử lý",
              },
              {
                id: "op_3",
                name: "Xử lý OB",
              },
              {
                id: "op_4",
                name: "Xử lý bắt buộc",
              },
              {
                id: "op_5",
                name: "Phân bổ nhân vien xử lý OB đặt trước",
              },
            ],
          },
          {
            id: "om_2",
            name: "OB Status",
            items: [
              {
                id: "os_1",
                name: "Tình hình xử lý OB",
              },
              {
                id: "os_2",
                name: "Tình hình xử lý OB của khách hàng được chỉ định",
              },
              {
                id: "os_3",
                name: "Tình hình thống kê xử lý OB",
              },
            ],
          },
        ],
      },
      {
        id: "o_4",
        name: "Customer Mgt",
        items: [
          {
            id: "cm_1",
            name: "Basic Customer Info",
            items: [
              {
                id: "bci_1",
                name: "Đăng ký thông tin cơ bản của khách hàng",
              },
              {
                id: "bci_2",
                name: "Đăng ký thông tin chi tiết của khách hàng",
              },
              {
                id: "bci_3",
                name: "Kiểm tra thông tin khách hàng",
              },
              {
                id: "bci_4",
                name: "Quản lý thẻ/Ngân hàng của từng khách hàng",
              },
            ],
          },
          {
            id: "cm_2",
            name: "VIP Card",
            items: [
              {
                id: "vc_1",
                name: "Tạo dữ liệu khách hàng VIP",
              },
              {
                id: "vc_2",
                name: "Đăng ký khách hàng VIP",
              },
              {
                id: "vc_3",
                name: "Đăng nhập phát hành thẻ VIP",
              },
              {
                id: "vc_4",
                name: "Tình trạng phát hành thẻ VIP",
              },
              {
                id: "vc_5",
                name: "Tình trạng đặt hàng của khách VIP",
              },
              {
                id: "vc_6",
                name: "Đăng ký khuyễn mãi khách hàng VIP",
              },
            ],
          },
          {
            id: "cm_3",
            name: "SMS",
            items: [
              {
                id: "sms_1",
                name: "Gửi tin nhắn về sản phẩm mới",
              },
              {
                id: "sms_2",
                name: "Gửi tin nhắn",
              },
              {
                id: "sms_3",
                name: "Hủy gửi tin nhắn",
              },
              {
                id: "sms_4",
                name: "Số lượng tin nhắn được gửi",
              },
              {
                id: "sms_5",
                name: "Tình hình SMS đặt hàng của từng khách hàng",
              },
            ],
          },
        ],
      },
      {
        id: "o_5",
        name: "Voucher Mgt",
        items: [
          {
            id: "vm_1",
            name: "Voucher Processing",
            items: [
              {
                id: "vp_1",
                name: "Tiếp nhận đăng ký đặt hàng bằng phiếu mua hàng",
              },
              {
                id: "vp_2",
                name: "Hủy bỏ đặt hàng phiếu mua hàng tích lũy điểm",
              },
              {
                id: "vp_3",
                name: "Kiểm tra việc đặt phiếu mua hàng tích lũy điểm",
              },
              {
                id: "vp_4",
                name: "Tình hình hủy bỏ phiếu mua hàng tích lũy điểm",
              },
            ],
          },
          {
            id: "vm_2",
            name: "Voucher Status",
            items: [
              {
                id: "vs_1",
                name: "Tình hình tiếp nhận đặt hàng phiếu mua hàng",
              },
            ],
          },
        ],
      },
      {
        id: "o_6",
        name: "B2B Order Mgt",
        items: [
          {
            id: "bom_1",
            name: "B2B Order Processing",
            items: [
              {
                id: "bop_1",
                name: "B2B-Đăng ký hợp đồng",
              },
              {
                id: "bop_2",
                name: "B2B-Phê duyệt hợp đồng",
              },
              {
                id: "bop_3",
                name: "B2B-In hợp đồng",
              },
              {
                id: "bop_4",
                name: "B2B-Tiếp nhận đặt hàng",
              },
            ],
          },
          {
            id: "bom_2",
            name: "B2B Order Status",
            items: [
              {
                id: "bos_1",
                name: "B2B-Tình hình đặt hàng",
              },
            ],
          },
        ],
      },
      {
        id: "o_7",
        name: "ScreenPop Mgt",
        items: [
          {
            id: "sm_1",
            name: "Agent ID Mgt",
            items: [
              {
                id: "aim_1",
                name: "Perinfo Management (Only employee of CC Dept)",
              },
            ],
          },
          {
            id: "sm_2",
            name: "Extension Mgt",
            items: [
              {
                id: "em_1",
                name: "Extension Management",
              },
            ],
          },
        ],
      },
    ],
    synthetic: [
      {
        id: "s_1",
        name: "Master Data",
        items: [
          {
            id: "ms_1",
            name: "Basic Logistics Mgt",
            items: [
              {
                id: "blm_1",
                name: "Đăng ký lịch nghỉ làm(công ty giao nhận)",
              },
              {
                id: "blm_2",
                name: "Quản lý số lượng hàng giao theo ngày",
              },
              {
                id: "blm_3",
                name: "Quản lý giao hàng theo khu vực",
              },
              {
                id: "blm_4",
                name: "Quản lý kho",
              },
              {
                id: "blm_5",
                name: "Quản lý mã số kệ để hàng",
              },
              {
                id: "blm_6",
                name: "Quản lý nhân viên thao tác kho",
              },
              {
                id: "blm_7",
                name: "Quản lý quy cách sản phẩm",
              },
              {
                id: "blm_8",
                name: "Quản lý các loại chi phí khác theo khu vực",
              },
            ],
          },
          {
            id: "md_2",
            name: "Basic Logistics Inquiry",
            items: [
              {
                id: "bli_1",
                name: "In nhãn sản phấm",
              },
              {
                id: "bli_2",
                name: "Kiểm tra tình hình đăng ký chi phí chuyển hàng",
              },
            ],
          },
          {
            id: "md_3",
            name: "Basic Logistics Rule Mgt",
            items: [
              {
                id: "mlrm_1",
                name: "Quy tắc nhập kho",
              },
              {
                id: "mlrm_2",
                name: "Quy tắc lấy hàng",
              },
            ],
          },
        ],
      },
      {
        id: "s_2",
        name: "QC",
        items: [
          {
            id: "qc_1",
            name: "Approval Inspection",
            items: [
              {
                id: "ai_1",
                name: "Chấp nhận yêu cầu kiểm tra sản phẩm",
              },
              {
                id: "ai_2",
                name: "Đăng ký kết quả kiểm tra phê duyệt",
              },
              {
                id: "ai_3",
                name: "Trạng thái tiến hành kiểm tra phê duyệt sản phẩm",
              },
            ],
          },
          {
            id: "qc_2",
            name: "Warehousing Inspection",
            items: [
              {
                id: "wi_1",
                name: "Đăng ký kết quả kiểm tra sản phẩm nhập kho",
              },
            ],
          },
          {
            id: "qc_3",
            name: "Inspection Status",
            items: [
              {
                id: "is_1",
                name: "Tình trạng của khách hàng yêu cầu bồi thường giá Quatity",
              },
              {
                id: "is_2",
                name: "Kết quả kiểm tra phê duyệt của từng sản phẩm",
              },
              {
                id: "is_3",
                name: "In hạng mục cần bổ sung",
              },
              {
                id: "is_4",
                name: "Kiểm tra kết quả kiểm tra nhập kho",
              },
              {
                id: "is_5",
                name: "Trạng thái Kết quả kiểm tra nhập kho",
              },
            ],
          },
        ],
      },
      {
        id: "s_3",
        name: "Warehousing/Shipping Mgt",
        items: [
          {
            id: "wsm_1",
            name: "Warehousing Order Mgt",
            items: [
              {
                id: "wom_1",
                name: "Yêu cầu nhập kho",
              },
              {
                id: "wom_2",
                name: "Phê duyệt yêu cầu nhập kho",
              },
              {
                id: "wom_3",
                name: "Yêu cầu tiến hành nhập kho",
              },
              {
                id: "wom_4",
                name: "Đăng nhập hủy yêu cầu nhập kho",
              },
              {
                id: "wom_5",
                name: "Xuất dữ liệu Pre Order",
              },
            ],
          },
          {
            id: "wsm_2",
            name: "Warehousing Mgt",
            items: [
              {
                id: "wm_1",
                name: "Đăng nhập xác nhận nhập kho",
              },
              {
                id: "wm_2",
                name: "Đăng nhập lịch nhập kho",
              },
            ],
          },
          {
            id: "wsm_3",
            name: "Consigment Mgt",
            items: [
              {
                id: "cm_1",
                name: "Đăng ký số lượng có thể nhập kho",
              },
              {
                id: "cm_2",
                name: "Đăng ký số lượng có thể bán chương trình Live",
              },
              {
                id: "cm_3",
                name: "Phê duyệt số lượng có thể nhập kho",
              },
              {
                id: "cm_3",
                name: "Đăng ký số lượng có thể bán của hàng ký gửi",
              },
            ],
          },
          {
            id: "wsm_4",
            name: "Consigment Adjustment",
            items: [
              {
                id: "ca_1",
                name: "Điều chỉnh số lượng có thể bán chương trình Live",
              },
              {
                id: "ca_2",
                name: "Phê duyệt điều chỉnh số lượng có thể bán",
              },
            ],
          },
        ],
      },
      {
        id: "s_4",
        name: "Shipping Order Mgt",
        items: [
          {
            id: "som_1",
            name: "Shipping Order",
            items: [
              {
                id: "so_1",
                name: "Hướng dẫn xuất kho của từng sản phẩm",
              },
              {
                id: "so_2",
                name: "Hướng dẫn xuất kho toàn bộ đơn hàng",
              },
              {
                id: "so_3",
                name: "Đăng ký hủy bỏ lệnh vận chuyển hàng",
              },
              {
                id: "so_4",
                name: "Hướng dẫn xuất kho toàn bộ đơn hàng(B2B)",
              },
              {
                id: "so_5",
                name: "Hướng dẫn xuất kho toàn bộ đơn hàng(Vendor)",
              },
              {
                id: "so_6",
                name: "Hướng dẫn xuất kho toàn bộ đơn hàng(Other)",
              },
            ],
          },
          {
            id: "som_2",
            name: "Shipping Schedules",
            items: [
              {
                id: "ss_1",
                name: "Tình hình dự kiến xuất kho",
              },
              {
                id: "ss_2",
                name: "Tình hình tạo hướng dẫn xuất kho",
              },
              {
                id: "ss_3",
                name: "Bố trí lấy hàng",
              },
              {
                id: "ss_4",
                name: "Xử lý hủy bỏ và phân công lại việc lấy hàng",
              },
              {
                id: "ss_5",
                name: "Danh sách sản phẩm có khuyến mãi được hướng dẫn xuất kho",
              },
              {
                id: "ss_6",
                name: "Tình hình tiếp nhận sản phẩm trả lại sau khi có lệnh vận chuyển hàng",
              },
              {
                id: "ss_7",
                name: "Tình trạng chi tiết hướng dẫn vận chuyển hàng",
              },
            ],
          },
          {
            id: "som_3",
            name: "Waybill Output",
            items: [
              {
                id: "wo_1",
                name: "In ra hóa đơn kèm phiếu giao hàng",
              },
              {
                id: "wo_2",
                name: "In ra chứng từ vận chuyển",
              },
              {
                id: "wo_3",
                name: "Thay đổi phương thức vận chuyển xuất kho",
              },
              {
                id: "wo_4",
                name: "Thay đổi cách thức chuyển chứng từ thu hồi hàng",
              },
              {
                id: "wo_5",
                name: "In ra hóa đơn kèm phiếu giao hàng(B2B)",
              },
              {
                id: "wo_6",
                name: "Thay đổi phương pháp vận chuyển xuất kho Excel",
              },
              {
                id: "wo_7",
                name: "In phiếu giao hàng hóa đơn điện tử Kho HCM(NEW)",
              },
              {
                id: "wo_8",
                name: "Sign Ebill Excel",
              },
              {
                id: "wo_9",
                name: "In ra chứng từ vận chuyển(NEW)",
              },
              {
                id: "wo_10",
                name: "In phiếu gia hàng hóa đơn điện tử Kho HN(NEW)",
              },
              {
                id: "wo_11",
                name: "In phiếu giao hàng không giá tiền(NEW)",
              },
            ],
          },
        ],
      },
      {
        id: "s_5",
        name: "Shipment Mgt",
        items: [
          {
            id: "sm_1",
            name: "Shipment Process",
            items: [
              {
                id: "sp_1",
                name: "Đăng ký gửi lại chứng từ vận chuyển",
              },
              {
                id: "sp_2",
                name: "Xác nhận xuất kho",
              },
              {
                id: "sp_3",
                name: "Quản lý nguyên nhân chưa chuyển hàng",
              },
              {
                id: "sp_4",
                name: "Xác nhận hoàn tất giao hàng",
              },
              {
                id: "sp_5",
                name: "Xác nhận thu tiền",
              },
              {
                id: "sp_6",
                name: "Xác nhận thu tiền[EXCEL]",
              },
            ],
          },
          {
            id: "sm_2",
            name: "Shipment Status",
            items: [
              {
                id: "ss_1",
                name: "Kiểm tra tình hình chứng từ vận chuyển",
              },
              {
                id: "ss_2",
                name: "Kiểm tra chi tiết chứng từ vận chuyển",
              },
              {
                id: "ss_3",
                name: "Theo dõi chứng từ vận chuyển đổi hàng",
              },
              {
                id: "ss_4",
                name: "Xác nhận việc xuất kho/thu hồi hàng",
              },
              {
                id: "ss_5",
                name: "Báo cáo giao hàng của từng đơn vị",
              },
              {
                id: "ss_6",
                name: "API GỬI TO ĐẾN CÔNG TY GIAO HÀNG",
              },
              {
                id: "ss_7",
                name: "HỦY GỬI API ĐỂ ĐẾN CÔNG TY GIAO HÀNG(EXCEL)",
              },
              {
                id: "ss_8",
                name: "Xem trạng thái đơn đặt hàng API",
              },
              {
                id: "ss_9",
                name: "Báo cáo các kênh TV",
              },
              {
                id: "ss_10",
                name: "Family Mall Report",
              },
              {
                id: "ss_11",
                name: "Update Item Code to Website",
              },
              {
                id: "ss_12",
                name: "Trả tiền tích lũy thiếu Promotion",
              },
              {
                id: "ss_13",
                name: "Xem Pending của đơn hàng",
              },
              {
                id: "ss_14",
                name: "Hoàn tất 6 bước Mobile Card",
              },
              {
                id: "ss_15",
                name: "Tình hình giá mới của sản phẩm",
              },
              {
                id: "ss_16",
                name: "Tỉ lệ thành công đơn hàng - SCM",
              },
              {
                id: "ss_17",
                name: "Tỉ lệ thành công đơn hàng theo khoàn thời gian - SCM",
              },
              {
                id: "ss_18",
                name: "Xem Pending của đơn hàng tại Nhà Vận Chuyển",
              },
              {
                id: "ss_19",
                name: "Tình trạng ký SA",
              },
              {
                id: "ss_21",
                name: "Ký hóa đơn điện tử HCM",
              },
              {
                id: "ss_21",
                name: "Quản lý hóa đơn điện tử",
              },
              {
                id: "ss_22",
                name: "Danh sách hóa đơn đã hủy",
              },
              {
                id: "ss_23",
                name: "Danh sách hóa đơn của đơn hàng hủy 4 bước",
              },
              {
                id: "ss_24",
                name: "Doanh số bán hàng SC",
              },
              {
                id: "ss_25",
                name: "Doanh sách đặt hàng Payment Online",
              },
              {
                id: "ss_26",
                name: "Ký hóa đơn điện tử HN",
              },
            ],
          },
        ],
      },
      {
        id: "s_6",
        name: "Direct Delivery Mgt",
        items: [
          {
            id: "ddm_1",
            name: "Direct Delivery Warehousing Mgt",
            items: [
              {
                id: "ddwm_1",
                name: "Đăng ký số lượng bán",
              },
              {
                id: "ddwm_2",
                name: "Xác nhận nhập kho giao trực tiếp",
              },
              {
                id: "ddwm_3",
                name: "Di chuyển hàng kho giao trực tiếp",
              },
            ],
          },
          {
            id: "ddm_2",
            name: "Direct Delivery Shipment",
            items: [
              {
                id: "dds_1",
                name: "Hướng dẫn xuất kho toàn bộ đơn hàng(Direct Dely)",
              },
              {
                id: "dds_2",
                name: "In hóa đơn cho sản phẩm giao trực tiếp",
              },
            ],
          },
        ],
      },
      {
        id: "s_7",
        name: "Collection Mgt",
        items: [
          {
            id: "cm_1",
            name: "Collection Process",
            items: [
              {
                id: "cp_1",
                name: "Upload dữ liệu thu hồi",
              },
              {
                id: "cp_2",
                name: "Đăng ký Scan tài liệu về việc thu hồi",
              },
              {
                id: "cp_3",
                name: "Đăng ký xác nhận thu hồi",
              },
              {
                id: "cp_4",
                name: "Đăng ký những dữ liệu chưa xử lý",
              },
              {
                id: "cp_5",
                name: "Hủy bỏ chỉ thị thu hồi hàng",
              },
            ],
          },
          {
            id: "cm_2",
            name: "Collection Status",
            items: [
              {
                id: "cs_1",
                name: "Tình hình xác nhận/tiếp nhận hàng bị trả lại",
              },
              {
                id: "cs_2",
                name: "Bảng hướng dẫn thu hồi hàng trả lại/đổi hàng",
              },
              {
                id: "cs_3",
                name: "In ra nhãn hàng xác nhận thu hồi",
              },
              {
                id: "cs_4",
                name: "Tình hình giải quyết hàng bị trả lại",
              },
              {
                id: "cs_5",
                name: "Tình hình xử lý nhập kho hàng thu hồi",
              },
              {
                id: "cs_6",
                name: "Tình hình cụ thể xác nhận thu hồi",
              },
              {
                id: "cs_7",
                name: "Tổng số xác nhận thu hồi hàng",
              },
              {
                id: "cs_8",
                name: "Tổng số hàng được thu hồi theo từng lý do",
              },
              {
                id: "cs_9",
                name: "Đăng ký kiểm tra chất lượng hàng bị trả lại(MD)",
              },
              {
                id: "cs_10",
                name: "API GỬI CO ĐẾN CÔNG TY GIAO HÀNG",
              },
            ],
          },
        ],
      },
      {
        id: "s_8",
        name: "Vendor Out Mgt",
        items: [
          {
            id: "vom_1",
            name: "Vendor Out Mgt",
            items: [
              {
                id: "vo_1",
                name: "Đăng ký số lượng hàng bị trả lại của nhà cung cấp",
              },
              {
                id: "vo_2",
                name: "Yêu cầu kết quả sản phẩm bị trả lại của nhà cung cấp",
              },
            ],
          },
        ],
      },
      {
        id: "s_9",
        name: "Other Logistics Mgt",
        items: [
          {
            id: "olm_1",
            name: "Packing Material Mgt",
            items: [
              {
                id: "pmm_1",
                name: "Đăng ký nhập/xuất kho bao bì đóng gói",
              },
              {
                id: "pmm_2",
                name: "Đăng ký xuất kho bao bì đóng gói theo tiêu chuẩn xuất kho",
              },
              {
                id: "pmm_3",
                name: "Xuất biên nhận bao bì đóng gói",
              },
              {
                id: "pmm_4",
                name: "Tình hình thanh toán bao bì đóng gói",
              },
            ],
          },
        ],
      },
      {
        id: "s_10",
        name: "Warehouse Mgt",
        items: [
          {
            id: "wm_1",
            name: "Inventory Mgt",
            items: [
              {
                id: "im_1",
                name: "Đăng ký thay đổi kệ để hàng",
              },
              {
                id: "im_2",
                name: "Điều chỉnh lượng đơn phẩm tồn kho",
              },
              {
                id: "im_3",
                name: "Điều chỉnh chất lượng loại hàng",
              },
              {
                id: "im_4",
                name: "Điều chỉnh số lượng hàng tồn kho",
              },
            ],
          },
          {
            id: "wm_2",
            name: "Adjustment Status",
            items: [
              {
                id: "as_1",
                name: "Kiểm tra nội dung thay đổi kệ để hàng",
              },
              {
                id: "as_2",
                name: "Kết quả điều chỉnh phân loại hàng tồn kho",
              },
              {
                id: "as_3",
                name: "Kết quả điều chỉnh hàng tồn kho(theo kệ để hàng)",
              },
              {
                id: "as_1",
                name: "Tổng số sản phẩm theo từng lý do điều chỉnh hàng tồn kho",
              },
            ],
          },
          {
            id: "wm_3",
            name: "Inventory Status",
            items: [
              {
                id: "em_1",
                name: "Extension Management",
              },
            ],
          },
          {
            id: "wm_4",
            name: "Item move by Warehouse",
            items: [
              {
                id: "em_1",
                name: "Extension Management",
              },
            ],
          },
        ],
      },
      {
        id: "s_11",
        name: "Delivery Cost Mgt",
        items: [
          {
            id: "dcm_1",
            name: "Delivery Cost Setting",
            items: [
              {
                id: "dcs_1",
                name: "Đăng ký phí vận chuyển hàng thông thường",
              },
              {
                id: "dcs_2",
                name: "Đăng ký phí vận chuyển hàng khổ lớn giá rẻ",
              },
              {
                id: "dcs_3",
                name: "Đăng ký phí vận chuyển sản phẩm oversize",
              },
              {
                id: "dcs_4",
                name: "Đăng ký phí vận chuyển sản phẩm lắp đặt",
              },
              {
                id: "dcs_5",
                name: "Đăng ký phí vận chuyển thương lượn giá",
              },
            ],
          },
          {
            id: "dcm_2",
            name: "Delivery Cost Calculate",
            items: [
              {
                id: "dcc_1",
                name: "Xác nhận phí trả hàng",
              },
              {
                id: "dcc_2",
                name: "Xác nhận phí trả hàng(B2B)",
              },
              {
                id: "dcc_3",
                name: "Tạo yêu cầu tính phí giao hàng",
              },
              {
                id: "dcc_4",
                name: "Xác nhận phí giao hàng sản phẩm chưa có kích thước",
              },
            ],
          },
          {
            id: "dcm_3",
            name: "Delivery Cost Status",
            items: [
              {
                id: "dcs_1",
                name: "Báo cáo phí vận chuyển theo tháng(B2C)",
              },
              {
                id: "dcs_2",
                name: "Báo cáo phí vận chuyển theo tháng(B2B)",
              },
              {
                id: "dcs_3",
                name: "Chi tiết phí vận chuyển theo tháng(B2C)",
              },
              {
                id: "dcs_4",
                name: "Chi tiết phí vận chuyển theo tháng(B2B)",
              },
              {
                id: "dcs_5",
                name: "Chi phí vận chuyển hàng tháng theo từng đơn vị",
              },
            ],
          },
          {
            id: "dcm_4",
            name: "Basic Info",
            items: [
              {
                id: "bi_1",
                name: "Item Demensión Management",
              },
              {
                id: "bi_2",
                name: "Detail Item",
              },
            ],
          },
        ],
      },
    ],
    account: [
      {
        id: "a_1",
        name: "Prepay Payment",
        items: [
          {
            id: "pp_1",
            name: "CMS",
            items: [
              {
                id: "cms_1",
                name: "Đăng ký thanh toán bằng tiền mặt",
              },
              {
                id: "cms_2",
                name: "Giải quyết thanh toán bằng tiền mặt",
              },
              {
                id: "cms_3",
                name: "Xử lý hủy bỏ trường hợp thanh toán bằng tiền mặt",
              },
              {
                id: "cms_4",
                name: "Hủy bỏ tất cả trường hợp chưa chuyển tiền",
              },
              {
                id: "cms_5",
                name: "Số trường hợp chưa được thanh toán bằng tiền mặt",
              },
              {
                id: "cms_6",
                name: "Giải quyết các trường hợp thanh toán bằng tiền mặt",
              },
              {
                id: "cms_7",
                name: "Số trường hợp hủy thanh toán bằng tiền mặt",
              },
            ],
          },
          {
            id: "pp_2",
            name: "Card",
            items: [
              {
                id: "card_1",
                name: "Hoàn tất việc thanh toán bằng thẻ",
              },
              {
                id: "card_2",
                name: "Lập tài liệu đăng ký thẻ",
              },
              {
                id: "card_3",
                name: "Đăng ký tài liệu yêu cầu thanh toán",
              },
              {
                id: "card_4",
                name: "Yêu cầu hủy bỏ thẻ",
              },
              {
                id: "card_5",
                name: "Trường hợp đặt hàng trả góp bằng thẻ",
              },
              {
                id: "card_6",
                name: "Thống kê thanh toán bằng thẻ",
              },
            ],
          },
          {
            id: "pp_3",
            name: "SCJ Point",
            items: [
              {
                id: "sp_1",
                name: "Quản lý điểm tích lũy",
              },
              {
                id: "sp_2",
                name: "Tình hình điểm tích lũy của từng khách hàng",
              },
              {
                id: "sp_3",
                name: "Tình hình tặng các dịch vụ cộng điểm khác",
              },
              {
                id: "sp_4",
                name: "Kỳ hạn sử dụng điểm tích lũy",
              },
              {
                id: "sp_5",
                name: "Tình hình sử dụng điểm tích lũy của nhân viên công ty",
              },
              {
                id: "sp_6",
                name: "Tổng số điểm cộng được tặng",
              },
              {
                id: "sp_7",
                name: "Tổng số điểm tích lũy đã dùng",
              },
            ],
          },
          {
            id: "pp_4",
            name: "Deposit",
            items: [
              {
                id: "d_1",
                name: "Quản lý số tiền đặt cọc",
              },
              {
                id: "d_2",
                name: "Tình hình cấp tiền đặt cọc theo ngày",
              },
              {
                id: "d_3",
                name: "Tình hình sử dụng tiền đặt cọc theo ngày",
              },
              {
                id: "d_4",
                name: "Tình hình tiền đặt cọc của từng khách hàng",
              },
            ],
          },
          {
            id: "pp_5",
            name: "CreditLoan",
            items: [
              {
                id: "cl_1",
                name: "Xử lý chấp nhận Creadit Loan",
              },
              {
                id: "cl_2",
                name: "Yêu cầu làm giấy tờ Creadit Loan",
              },
              {
                id: "cl_3",
                name: "Đăng nhập giấy tờ gửi tiền Creadit Loan",
              },
              {
                id: "cl_4",
                name: "Thống kê gửi tiền Credit Loan",
              },
            ],
          },
          {
            id: "pp_6",
            name: "Payment Online",
            items: [
              {
                id: "po_1",
                name: "Xác nhận thu tiền Payment Online",
              },
              {
                id: "po_2",
                name: "Hoàn trả tiền cho Payment Online",
              },
              {
                id: "po_3",
                name: "Xác nhận thu tiền trả góp (Payment Online)",
              },
              {
                id: "po_4",
                name: "Trường hợp đặt hàng trả góp bằng thẻ (Payment Online)",
              },
              {
                id: "po_5",
                name: "Thống kê thanh toán Payment Online",
              },
              {
                id: "po_6",
                name: "Installment Payment Online",
              },
            ],
          },
        ],
      },
      {
        id: "a_2",
        name: "Postpay Payment",
        items: [
          {
            id: "pp_1",
            name: "COD",
            items: [
              {
                id: "cod_1",
                name: "Giải quyết thanh toán COD(Mới) ",
              },
              {
                id: "cod_2",
                name: "Tình hình đã nhận được tài liệu thanh toán theo công ty giao hàng",
              },
            ],
          },
          {
            id: "p_2",
            name: "Status By Postpay",
            items: [
              {
                id: "sbp_1",
                name: "Tình hình chưa thanh toán trả sau",
              },
              {
                id: "sbp_2",
                name: "Tình hình thanh toán trả sau",
              },
              {
                id: "sbp_3",
                name: "Tình hình xuất kho những sản phẩm được thanh toán trả sau",
              },
              {
                id: "sbp_4",
                name: "Tình hình chưa thanh toán trả sau",
              },
              {
                id: "sbp_5",
                name: "Tình hình dự kiến thanh toán COD",
              },
            ],
          },
        ],
      },
      {
        id: "a_3",
        name: "Refund",
        items: [
          {
            id: "r_1",
            name: "Refund Proc",
            items: [
              {
                id: "rp_1",
                name: "Trả lại tiền mặt",
              },
              {
                id: "rp_2",
                name: "Giải quyết việc trả lại tiền sau khi xác nhận thu hồi hàng",
              },
            ],
          },
          {
            id: "r_2",
            name: "Status By Refund",
            items: [
              {
                id: "sbr_1",
                name: "Kết quả việc trả lại tiền",
              },
            ],
          },
        ],
      },
      {
        id: "a_4",
        name: "Other Anal",
        items: [
          {
            id: "oa_1",
            name: "Sale And Payment Anal",
            items: [
              {
                id: "spa_1",
                name: "Báo cáo doanh thu và thanh toán bán hàng",
              },
            ],
          },
          {
            id: "oa_2",
            name: "Other Anal",
            items: [
              {
                id: "oa_1",
                name: "Tình hình đăng ký thanh toán theo từng loại thanh toán",
              },
              {
                id: "oa_2",
                name: "Tình hình xác nhận/thanh toán theo từng loại thanh toán",
              },
              {
                id: "oa_3",
                name: "Monthly dilivery cost report by companies",
              },
              {
                id: "oa_4",
                name: "Monthly dilivery cost report by item",
              },
            ],
          },
        ],
      },
      {
        id: "a_5",
        name: "Receipt",
        items: [
          {
            id: "r_1",
            name: "Receipts Issued",
            items: [
              {
                id: "ri_1",
                name: "Đăng ký nhận biên lai",
              },
              {
                id: "ri_2",
                name: "In biên lai cho khách hàng",
              },
              {
                id: "ri_3",
                name: "In biên lai của từng vận đơn",
              },
              {
                id: "ri_4",
                name: "In DM địa chỉ của khách hàng",
              },
              {
                id: "ri_5",
                name: "In biên lai của từng vận đơn HĐĐT",
              },
            ],
          },
          {
            id: "r_2",
            name: "Customer DM Issued",
            items: [
              {
                id: "cmi_1",
                name: "Tình hình đăng ký nhận biên lai",
              },
              {
                id: "cmi_2",
                name: "Tình hình in biên lai",
              },
            ],
          },
          {
            id: "r_3",
            name: "Individual Income Tax",
            items: [
              {
                id: "iit_1",
                name: "Giải quyết việc chuyển tiền thuế thu nhập cá nhân",
              },
              {
                id: "iit_2",
                name: "Tình hình chuyển tiền thuế chu nhập cá nhân",
              },
            ],
          },
        ],
      },
      {
        id: "a_6",
        name: "Vendor Mgt",
        items: [
          {
            id: "vm_1",
            name: "Vendor Mgt",
            items: [
              {
                id: "vm_1",
                name: "Đăng ký công ty ký gửi hàng",
              },
              {
                id: "vm_2",
                name: "Đăng ký mã số bảo lưu/số khấu từ",
              },
              {
                id: "vm_3",
                name: "Quản lý phân loại công ty ký gửi theo tháng",
              },
            ],
          },
          {
            id: "vm_2",
            name: "Basic Payment Info",
            items: [
              {
                id: "bpi_1",
                name: "Quản lý mã số ngân hàng",
              },
              {
                id: "bpi_2",
                name: "Quản lý tài khoản chuyển tiền",
              },
              {
                id: "bpi_3",
                name: "Quản lý mã số công ty thẻ",
              },
              {
                id: "bpi_4",
                name: "Quản lý mã số thẻ",
              },
              {
                id: "bpi_5",
                name: "Quản lý công ty cho vay tín dụng",
              },
              {
                id: "bpi_6",
                name: "Đăng ký tiêu chuẩn vay tín dụng Rebate",
              },
            ],
          },
          {
            id: "vm_3",
            name: "Basic Info Status",
            items: [
              {
                id: "bis_1",
                name: "Tình hình đăng ký công ty ký gửi hàng",
              },
              {
                id: "bis_2",
                name: "Tình hình ngân hàng của công ty ký gửi hàng",
              },
              {
                id: "bis_3",
                name: "In DM của công ty ký gửi hàng",
              },
              {
                id: "bis_4",
                name: "Kiểm tra tiêu chuẩn quyết toán của công ty ký gửi hàng",
              },
              {
                id: "bis_5",
                name: "Tình hình hàng tồn của mỗi nhà cung cấp nhập hàng nguyên tắc",
              },
            ],
          },
        ],
      },
      {
        id: "a_7",
        name: "Vendor Settlement",
        items: [
          {
            id: "vs_1",
            name: "Bill Payment",
            items: [
              {
                id: "bp_1",
                name: "Upload dữ liệu thu hồi",
              },
              {
                id: "bp_2",
                name: "Đăng ký Scan tài liệu về việc thu hồi",
              },
              {
                id: "bp_3",
                name: "Đăng ký xác nhận thu hồi",
              },
              {
                id: "bp_4",
                name: "Đăng ký những dữ liệu chưa xử lý",
              },
              {
                id: "bp_5",
                name: "Hủy bỏ chỉ thị thu hồi hàng",
              },
              {
                id: "bp_6",
                name: "Hủy bỏ chỉ thị thu hồi hàng",
              },
            ],
          },
          {
            id: "vs_2",
            name: "Item Supply Price Inquire",
            items: [
              {
                id: "cs_1",
                name: "Tình hình xác nhận/tiếp nhận hàng bị trả lại",
              },
              {
                id: "cs_2",
                name: "Bảng hướng dẫn thu hồi hàng trả lại/đổi hàng",
              },
              {
                id: "cs_3",
                name: "In ra nhãn hàng xác nhận thu hồi",
              },
              {
                id: "cs_4",
                name: "Tình hình giải quyết hàng bị trả lại",
              },
              {
                id: "cs_5",
                name: "Tình hình xử lý nhập kho hàng thu hồi",
              },
              {
                id: "cs_6",
                name: "Tình hình cụ thể xác nhận thu hồi",
              },
              {
                id: "cs_7",
                name: "Tổng số xác nhận thu hồi hàng",
              },
              {
                id: "cs_8",
                name: "Tổng số hàng được thu hồi theo từng lý do",
              },
              {
                id: "cs_9",
                name: "Đăng ký kiểm tra chất lượng hàng bị trả lại(MD)",
              },
              {
                id: "cs_10",
                name: "API GỬI CO ĐẾN CÔNG TY GIAO HÀNG",
              },
            ],
          },
          {
            id: "vs_3",
            name: "Pinance I/F",
            items: [
              {
                id: "cs_1",
                name: "Tình hình xác nhận/tiếp nhận hàng bị trả lại",
              },
              {
                id: "cs_2",
                name: "Bảng hướng dẫn thu hồi hàng trả lại/đổi hàng",
              },
              {
                id: "cs_3",
                name: "In ra nhãn hàng xác nhận thu hồi",
              },
              {
                id: "cs_4",
                name: "Tình hình giải quyết hàng bị trả lại",
              },
              {
                id: "cs_5",
                name: "Tình hình xử lý nhập kho hàng thu hồi",
              },
              {
                id: "cs_6",
                name: "Tình hình cụ thể xác nhận thu hồi",
              },
              {
                id: "cs_7",
                name: "Tổng số xác nhận thu hồi hàng",
              },
              {
                id: "cs_8",
                name: "Tổng số hàng được thu hồi theo từng lý do",
              },
              {
                id: "cs_9",
                name: "Đăng ký kiểm tra chất lượng hàng bị trả lại(MD)",
              },
              {
                id: "cs_10",
                name: "API GỬI CO ĐẾN CÔNG TY GIAO HÀNG",
              },
            ],
          },
        ],
      },
      {
        id: "a_8",
        name: "Voucher Mgt",
        items: [
          {
            id: "vm_1",
            name: "Voucher Processing",
            items: [
              {
                id: "vo_1",
                name: "Đăng ký số lượng hàng bị trả lại của nhà cung cấp",
              },
              {
                id: "vo_2",
                name: "Yêu cầu kết quả sản phẩm bị trả lại của nhà cung cấp",
              },
            ],
          },
          {
            id: "vm_2",
            name: "Voucher Status",
            items: [
              {
                id: "vo_1",
                name: "Đăng ký số lượng hàng bị trả lại của nhà cung cấp",
              },
              {
                id: "vo_2",
                name: "Yêu cầu kết quả sản phẩm bị trả lại của nhà cung cấp",
              },
            ],
          },
        ],
      },
      {
        id: "a_9",
        name: "D/C Coupon",
        items: [
          {
            id: "dcc_1",
            name: "D/C Coupon Mgt",
            items: [
              {
                id: "pmm_1",
                name: "Đăng ký nhập/xuất kho bao bì đóng gói",
              },
              {
                id: "pmm_2",
                name: "Đăng ký xuất kho bao bì đóng gói theo tiêu chuẩn xuất kho",
              },
              {
                id: "pmm_3",
                name: "Xuất biên nhận bao bì đóng gói",
              },
              {
                id: "pmm_4",
                name: "Tình hình thanh toán bao bì đóng gói",
              },
            ],
          },
          {
            id: "dcc_2",
            name: "D/C Coupon Status",
            items: [
              {
                id: "pmm_1",
                name: "Đăng ký nhập/xuất kho bao bì đóng gói",
              },
              {
                id: "pmm_2",
                name: "Đăng ký xuất kho bao bì đóng gói theo tiêu chuẩn xuất kho",
              },
              {
                id: "pmm_3",
                name: "Xuất biên nhận bao bì đóng gói",
              },
              {
                id: "pmm_4",
                name: "Tình hình thanh toán bao bì đóng gói",
              },
            ],
          },
        ],
      },
      {
        id: "a_10",
        name: "B2B Mgt",
        items: [
          {
            id: "b2b_1",
            name: "B2B Processing",
            items: [
              {
                id: "im_1",
                name: "Đăng ký thay đổi kệ để hàng",
              },
              {
                id: "im_2",
                name: "Điều chỉnh lượng đơn phẩm tồn kho",
              },
              {
                id: "im_3",
                name: "Điều chỉnh chất lượng loại hàng",
              },
              {
                id: "im_4",
                name: "Điều chỉnh số lượng hàng tồn kho",
              },
            ],
          },
          {
            id: "b2b_2",
            name: "B2B Status",
            items: [
              {
                id: "as_1",
                name: "Kiểm tra nội dung thay đổi kệ để hàng",
              },
              {
                id: "as_2",
                name: "Kết quả điều chỉnh phân loại hàng tồn kho",
              },
              {
                id: "as_3",
                name: "Kết quả điều chỉnh hàng tồn kho(theo kệ để hàng)",
              },
              {
                id: "as_1",
                name: "Tổng số sản phẩm theo từng lý do điều chỉnh hàng tồn kho",
              },
            ],
          },
        ],
      },
      {
        id: "a_11",
        name: "MotorBike Mgt",
        items: [
          {
            id: "mkm_1",
            name: "MotorBike Processing",
            items: [
              {
                id: "dcs_1",
                name: "Đăng ký phí vận chuyển hàng thông thường",
              },
              {
                id: "dcs_2",
                name: "Đăng ký phí vận chuyển hàng khổ lớn giá rẻ",
              },
              {
                id: "dcs_3",
                name: "Đăng ký phí vận chuyển sản phẩm oversize",
              },
              {
                id: "dcs_4",
                name: "Đăng ký phí vận chuyển sản phẩm lắp đặt",
              },
              {
                id: "dcs_5",
                name: "Đăng ký phí vận chuyển thương lượn giá",
              },
            ],
          },
        ],
      },
    ],
    media: [
      {
        id: "m_1",
        name: "TV section",
        items: [
          {
            id: "tvs_1",
            name: "Basic Info",
            items: [
              {
                id: "bi_1",
                name: "Đăng kí chương trình",
              },
              {
                id: "bi_2",
                name: "Đăng ký khách mời đến dự chương trình",
              },
              {
                id: "bi_3",
                name: "Đăng ký băng ghi hình",
              },
            ],
          },
          {
            id: "tvs_2",
            name: "Program Lineup",
            items: [
              {
                id: "pl_1",
                name: "Đăng kí chương trình theo lịch phát sóng",
              },
              {
                id: "pl_2",
                name: "Quản lý nhân viên theo từng chương trình",
              },
              {
                id: "pl_3",
                name: "Đăng ký sản phẩm theo chương trình phát sóng",
              },
              {
                id: "pl_4",
                name: "Thay đổi thời gian phát sóng",
              },
              {
                id: "pl_5",
                name: "Đăng ký bố trí khách mời tham gia chương trình",
              },
            ],
          },
          {
            id: "tvs_3",
            name: "On-Air",
            items: [
              {
                id: "oa_1",
                name: "Đăng ký phát sóng trực tiếp",
              },
              {
                id: "oa_2",
                name: "Tình hình tiến hành phát sóng",
              },
              {
                id: "oa_3",
                name: "Tình hình phát sóng hiện tại",
              },
              {
                id: "oa_3",
                name: "Số lương bán trong chương trình Live",
              },
            ],
          },
          {
            id: "tvs_4",
            name: "Result",
            items: [
              {
                id: "r_1",
                name: "Nhận xét sau khi phát sóng",
              },
              {
                id: "r_2",
                name: "Đăng ký theo dõi chương trình phát sóng",
              },
            ],
          },
          {
            id: "tvs_5",
            name: "Lineup Inquiry",
            items: [
              {
                id: "li_1",
                name: "Kiểm tra lịch phát sóng theo tuần",
              },
              {
                id: "li_2",
                name: "Tình hình phát sóng sản phẩm",
              },
              {
                id: "li_3",
                name: "Tình hình băng ghi hình theo từng sản phẩm",
              },
              {
                id: "li_3",
                name: "Kiểm tra kết quả phát sóng theo ngày",
              },
              {
                id: "li_3",
                name: "Tình hình phát sóng của từng ngày phát sóng",
              },
            ],
          },
        ],
      },
      {
        id: "m_2",
        name: "CATALOG",
        items: [
          {
            id: "c_1",
            name: "CATALOG Production",
            items: [
              {
                id: "cp_1",
                name: "Đăng ký sản phẩm CATALOG",
              },
            ],
          },
          {
            id: "c_2",
            name: "CATALOG Mgt",
            items: [
              {
                id: "cm_1",
                name: "Lên danh sách khách hàng nhận CATALOG",
              },
              {
                id: "cm_2",
                name: "Tạo file CATALOG",
              },
              {
                id: "cm_3",
                name: "Giải quyết gửi lại CATALOG",
              },
              {
                id: "cm_4",
                name: "Đăng ký gửi lại CATALOG",
              },
            ],
          },
          {
            id: "c_3",
            name: "CATALOG Status",
            items: [
              {
                id: "cs_1",
                name: "Kiểm tra sản phẩm CATALOG",
              },
              {
                id: "cs_2",
                name: "Kiểm tra khách hàng được nhận CATALOG",
              },
              {
                id: "cs_3",
                name: "Tỷ lệ mua hàng qua CATALOG",
              },
              {
                id: "cs_4",
                name: "Tình hình mua hàng qua CATALOG",
              },
              {
                id: "cs_5",
                name: "Tỷ lệ phản ánh theo từng phu vực CATALOG",
              },
              {
                id: "cs_6",
                name: "Tỷ lệ phản hồi theo số lần gửi CATALOG",
              },
            ],
          },
        ],
      },
      {
        id: "m_3",
        name: "INTERNET",
        items: [
          {
            id: "i_1",
            name: "WebSurvey",
            items: [
              {
                id: "w_1",
                name: "Đăng ký WebSurvey",
              },
              {
                id: "w_2",
                name: "Đăng ký các vấn đề khảo sát",
              },
              {
                id: "w_3",
                name: "Chọn vấn đề khảo sát",
              },
              {
                id: "w_4",
                name: "Xem kết quả khảo sát",
              },
              {
                id: "w_5",
                name: "Xem hàng loạt kết quả khảo sát",
              },
            ],
          },
          {
            id: "i_2",
            name: "Pre Order Mgt",
            items: [
              {
                id: "pom_1",
                name: "Đăng ký số lượng có thể booking của sp internet",
              },
              {
                id: "pom_2",
                name: "Tình hình đặt hàng Pre-Order",
              },
            ],
          },
          {
            id: "i_3",
            name: "B2E Company Mgt",
            items: [
              {
                id: "bcm_1",
                name: "Đăng ký thông tin công ty B2E",
              },
              {
                id: "bcm_2",
                name: "Đăng ký thông tin nhân viên B2E",
              },
              {
                id: "bcm_3",
                name: "Tình hình doanh thu kênh B2E",
              },
            ],
          },
          {
            id: "i_4",
            name: "MRO Company Mgt",
            items: [
              {
                id: "mcm_1",
                name: "Đăng ký thông tin công ty MRO",
              },
              {
                id: "mcm_2",
                name: "Đăng ký thông tin nhân viên MRO",
              },
              {
                id: "mcm_3",
                name: "Tình hình doanh thu kênh MRO",
              },
              {
                id: "mcm_4",
                name: "Tình hình giao hàng phân theo sản phẩm MRO",
              },
            ],
          },
        ],
      },
    ],
    analysis: [
      {
        id: "a_1",
        name: "Master Data",
        items: [
          {
            id: "md_1",
            name: "BusinessPlan",
            items: [
              {
                id: "bp_1",
                name: "Đăng kí kết quả kế hoạch kinh doanh",
              },
            ],
          },
          {
            id: "md_2",
            name: "Master Data",
            items: [
              {
                id: "md_1",
                name: "Đăng kí thông tin doanh thu thực tế",
              },
            ],
          },
          {
            id: "md_3",
            name: "Marginal Profit Calculate",
            items: [
              {
                id: "mpc_1",
                name: "Đăng ký thông tin chi phí ước tính",
              },
              {
                id: "mpc_2",
                name: "Đăng ký thông tin chi phí thực tế",
              },
              {
                id: "mpc_3",
                name: "Tạo dữ liệu marginal profit",
              },
            ],
          },
        ],
      },
      {
        id: "a_2",
        name: "Actual Result Anal",
        items: [
          {
            id: "ara_1",
            name: "Daily Anal",
            items: [
              {
                id: "da_1",
                name: "Tình hình tiếp nhận từng loại đơn đặt hàng(Lịch)",
              },
              {
                id: "da_2",
                name: "Doanh thu theo kênh bán hàng(Lịch)",
              },
              {
                id: "da_3",
                name: "So sánh tình hình doanh thu của mỗi tháng",
              },
              {
                id: "da_4",
                name: "Tình hình thực tế theo kế hoạch kinh doanh(Mới)",
              },
              {
                id: "da_4",
                name: "GUINNESS",
              },
            ],
          },
          {
            id: "ara_2",
            name: "Sales Anal By Period",
            items: [
              {
                id: "sap_1",
                name: "Kết quả bán mỗi ngày của từng kênh bán hàng",
              },
              {
                id: "sap_2",
                name: "Kiểm tra kết quả bán hàng mỗi ngày của từng kênh bán hàng",
              },
              {
                id: "sap_3",
                name: "Tình hình đặt hàng/xuất kho theo kênh bán hàng",
              },
              {
                id: "sap_4",
                name: "Tình hình đặt hàng/xuất kho theo sản phẩm và kênh bán",
              },
              {
                id: "sap_5",
                name: "Tình hình đặt hàng/xuất kho thực tế của từng đơn vị",
              },
              {
                id: "sap_6",
                name: "Tình hình đặt hàng/trả lại thực tế của từng đơn vị",
              },
              {
                id: "sap_7",
                name: "Tình hình doanh thu mua/bán theo từng đơn vị",
              },
              {
                id: "sap_8",
                name: "Bảng tổng hợp ngày đặt hàng",
              },
            ],
          },
          {
            id: "ara_3",
            name: "Item Wise Anal",
            items: [
              {
                id: "iwa_1",
                name: "Tình hình Best/Worst của sản phẩm",
              },
              {
                id: "iwa_2",
                name: "Tình hình thực tế theo từng nhãn hiệu",
              },
              {
                id: "iwa_3",
                name: "Tình hình đặt hàng theo tháng",
              },
              {
                id: "iwa_4",
                name: "Tình hình đặt hàng theo ngày/giờ của sản phẩm",
              },
            ],
          },
          {
            id: "ara_4",
            name: "Marginal Anal",
            items: [
              {
                id: "ma_1",
                name: "Tình hình lợi nhuận đặt hàng/xuất kho theo kênh bán",
              },
              {
                id: "ma_2",
                name: "Tình hình lợi nhuận đặt hàng/xuất kho thực tế theo từng đơn vị",
              },
            ],
          },
          {
            id: "ara_5",
            name: "Time Anal",
            items: [
              {
                id: "ta_1",
                name: "Phân tích khách hàng theo các ngày trong tuần",
              },
            ],
          },
          {
            id: "ara_6",
            name: "Vendor Wise Anal",
            items: [
              {
                id: "vwa_1",
                name: "Tình hình bán hàng theo tháng của từng nhà cung cấp",
              },
              {
                id: "vwa_2",
                name: "Tình hình thanh toán theo sản phẩm/nhà cung cấp",
              },
              {
                id: "vwa_3",
                name: "Tình hình chi tiết bán hàng của từng nhà cung cấp",
              },
              {
                id: "vwa_4",
                name: "Tình hình chi tiết bán hàng của từng nhà cung cấp_KM",
              },
            ],
          },
          {
            id: "ara_7",
            name: "Complaint Anal",
            items: [
              {
                id: "ca_1",
                name: "Lý do hủy đơn đặt hàng/trả lại hàng/đổi hàng",
              },
              {
                id: "ca_2",
                name: "Tình hình khiếu nại của khách hàng đối với từng sản phẩm",
              },
            ],
          },
          {
            id: "ara_8",
            name: "Logistics Anal",
            items: [
              {
                id: "la_1",
                name: "Tổng số sản phẩm/số lượng vận chuyển",
              },
              {
                id: "la_2",
                name: "Tổng số theo thời gian xuất kho",
              },
              {
                id: "la_3",
                name: "Tổng số theo thời gian thu hàng",
              },
              {
                id: "la_4",
                name: "Tổng số lượng xuất kho hàng ngày",
              },
            ],
          },
        ],
      },
      {
        id: "a_3",
        name: "Media Anal",
        items: [
          {
            id: "ma_1",
            name: "TV",
            items: [
              {
                id: "tv_1",
                name: "Tình hình phát sóng theo tổ chức",
              },
              {
                id: "tv_2",
                name: "Tình hình thực tế của từng chương trình",
              },
              {
                id: "tv_3",
                name: "Tình hình hủy hàng khi đang phát sóng",
              },
              {
                id: "tv_4",
                name: "Tình hình đặt hàng của từng chương trình",
              },
              {
                id: "tv_5",
                name: "Tình hình phân bố khách hàng theo sản phẩm của từng ngày phát sóng",
              },
              {
                id: "tv_6",
                name: "Tình hình phát sóng theo nhà cung cấp",
              },
            ],
          },
          {
            id: "ma_2",
            name: "CATALOG",
            items: [
              {
                id: "c_1",
                name: "Phân tích đơn đặt hàng của khách hàng gửi Catalogue",
              },
              {
                id: "c_2",
                name: "Phân tích tình hình đối tượng gửi Catalogue",
              },
              {
                id: "c_3",
                name: "Danh mục khách đặt hàng sản phẩm Catalogue",
              },
              {
                id: "c_4",
                name: "Kiểm tra sản phẩm được đặt qua Catalogue",
              },
              {
                id: "c_5",
                name: "Tỉ lệ đáp ứng tái phát hành Catalogue",
              },
            ],
          },
        ],
      },
      {
        id: "a_4",
        name: "Customer Anal",
        items: [
          {
            id: "ca_1",
            name: "Customer Distribution",
            items: [
              {
                id: "cd_1",
                name: "Tình hình đăng ký khách hàng theo khu vực",
              },
              {
                id: "cd_2",
                name: "Phân bố theo giới tính/phân loại/khu vực",
              },
              {
                id: "cd_3",
                name: "Phân bố khách hàng theo khu vực/độ tuổi trung bình",
              },
              {
                id: "cd_4",
                name: "Phân bố khách hàng theo độ tuổi/tiêu chuẩn đăng ký/giới tính",
              },
            ],
          },
          {
            id: "ca_2",
            name: "Reginal Anal",
            items: [
              {
                id: "ra_1",
                name: "Tình hình thực tế đặt hàng theo khu vực",
              },
              {
                id: "ra_2",
                name: "Số lượng đặt hàng/xuất kho theo từng khu vực",
              },
              {
                id: "ra_3",
                name: "Tình hình tiếp nhận đặt hàng theo sản phẩm/khu vực",
              },
            ],
          },
          {
            id: "ca_3",
            name: "Class Anal",
            items: [
              {
                id: "ca_1",
                name: "Tình hình đặt hàng/xuất kho theo phân loại khách hàng",
              },
            ],
          },
          {
            id: "ca_4",
            name: "Customer Period Performance Distribution",
            items: [
              {
                id: "cpd_1",
                name: "Phân bố khách hàng theo độ tuổi/tỉ lệ/giới tính",
              },
            ],
          },
          {
            id: "ca_5",
            name: "Customer Performance Distribution By Month",
            items: [
              {
                id: "cpdm_1",
                name: "Tình hình đặt hàng theo khu vực của từng tháng",
              },
              {
                id: "cpdm_2",
                name: "Kết quả Best/Worst sản phẩm của khách hàng VIP",
              },
              {
                id: "cpdm_3",
                name: "Doanh thu theo giá tiền đặt hàng từng tháng",
              },
            ],
          },
          {
            id: "ca_6",
            name: "Customer Ranking Performance Analysis",
            items: [
              {
                id: "crpa_1",
                name: "Tình hình thực tế của khách hàng thân thiết",
              },
              {
                id: "crpa_2",
                name: "Tình hình số lượng hiện tại của khách hàng thân thiết",
              },
              {
                id: "crpa_3",
                name: "Tình hình sinh nhật khách hàng",
              },
              {
                id: "crpa_4",
                name: "Tình hình hết hạn tích lũy của khách hàng",
              },
              {
                id: "crpa_5",
                name: "Tình hình email khách hàng",
              },
            ],
          },
          {
            id: "ca_7",
            name: "Customer Anal With Repeated Order",
            items: [
              {
                id: "caro_1",
                name: "Tình hình số lần đặt hàng của khách hàng đặt nhiều lần",
              },
              {
                id: "caro_2",
                name: "Phân bố tình hình đặt hàng theo độ tuổi/giới tính",
              },
              {
                id: "caro_3",
                name: "Tình hình khách hàng đặt hàng lại trong tháng",
              },
            ],
          },
          {
            id: "ca_8",
            name: "Monthly Customer Data",
            items: [
              {
                id: "mcd_1",
                name: "Monthly customer data",
              },
            ],
          },
        ],
      },
    ],
    master: [
      {
        id: "m_1",
        name: "Basic Information",
        items: [
          {
            id: "mi_1",
            name: "Basic Code",
            items: [
              {
                id: "bc_1",
                name: "Quản lý kênh bán hàng",
              },
              {
                id: "bc_2",
                name: "Quản lý mã số chung",
              },
              {
                id: "bc_3",
                name: "Quản lý số bưu điện",
              },
              {
                id: "bc_4",
                name: "Quản lý khu vực được phân tích",
              },
            ],
          },
          {
            id: "bi_2",
            name: "Basic Organization Info",
            items: [
              {
                id: "boi_1",
                name: "Đăng ký thông tin của công ty",
              },
              {
                id: "boi_2",
                name: "Quản lý các bộ phận",
              },
              {
                id: "boi_3",
                name: "Quản lý nhân viên",
              },
              {
                id: "boi_4",
                name: "Quản lý tổ chức theo tháng",
              },
              {
                id: "boi_5",
                name: "Quản lý nhân viên của các công ty trực thuộc",
              },
              {
                id: "boi_6",
                name: "Quản lý mã số MD",
              },
              {
                id: "boi_7",
                name: "Quản lý các nhóm tiến hành",
              },
              {
                id: "boi_8",
                name: "Tình hình nhân viên",
              },
            ],
          },
          {
            id: "bi_3",
            name: "Privilege Mgt",
            items: [
              {
                id: "pm_1",
                name: "Quản lý nhóm",
              },
              {
                id: "pm_2",
                name: "Quản lý thông tin nhóm",
              },
              {
                id: "pm_3",
                name: "Kiểm tra người sử dụng",
              },
              {
                id: "pm_4",
                name: "Quản lý nhóm - người sử dụng",
              },
              {
                id: "pm_5",
                name: "Quản lý menu",
              },
              {
                id: "pm_6",
                name: "Quản lý đối tượng cần trợ giúp",
              },
            ],
          },
          {
            id: "bi_4",
            name: "System Mgt",
            items: [
              {
                id: "sm_1",
                name: "Quản lý các thông báo",
              },
              {
                id: "sm_2",
                name: "Quản lý nhóm từ trợ giúp",
              },
              {
                id: "sm_3",
                name: "Quản lý tin nhắn",
              },
              {
                id: "sm_4",
                name: "Quản lý log theo event",
              },
              {
                id: "sm_5",
                name: "Kiểm tra log theo event",
              },
              {
                id: "sm_6",
                name: "Từ điển chuyên ngành",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default DATA;
