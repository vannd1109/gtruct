import InputField from "../../../../components/form-controls/InputField";
import PasswordField from "../../../../components/form-controls/PasswordField";

function LoginForm(props) {
  return (
    <main className="login-form mt-5">
      <div className="cotainer">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                Đăng nhập hệ thống quản lý
                <select>
                  <option>Vietnamese</option>
                  <option>English</option>
                </select>
              </div>
              <div className="card-body">
                <form action method>
                  <div className="form-group row mt-3">
                    <InputField />
                  </div>
                  <div className="form-group row mt-3">
                    <PasswordField />
                  </div>
                  <div className="form-group row mt-3">
                    <div className="col">
                      <div className="checkbox d-flex">
                        <label>
                          <input type="checkbox" name="remember" /> Ghi nhớ
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col mt-3">
                    <button type="submit" className="btn btn-success">
                      Đăng nhập
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginForm;
