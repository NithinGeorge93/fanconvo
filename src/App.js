import logo from './Fanconvo-header-logo.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row pt-2">
        <div className="col-6 mb-3">
          <img src={logo} className="logo" alt="logo" width="250px" height="40px" />
        </div>
        <div className="col-6 mt-2">
          <div className="float-right">
            <a className="pr-2 sign-up white" href="#">Sign up</a>
            <a className="pl-2 login white" href="#">Login</a>
          </div>
        </div>
        <div className="col-12">
          <p className="white">A marketplace for conversation, mentorships and performance.</p>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-sm-3 col-xs-12 mb-2">
              <p className="white mb-0 mt-2">Search New Talent</p>
            </div>
            <div className="col-xs-6 col-xs-12">
              <div className="pl-2 pr-2">
                <div className="input-group search-box mb-3">
                  <input type="text" clclassNameass="form-control" placeholder=""></input>
                  <div className="input-group-append">
                    <span className="input-group-text">&#128269;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-box mb-4">
            <ul className="nav nav-tabs mb-3">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#home">FAN SIGNUP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu1">TALENT SIGNUP</a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane container active" id="home">
                <div className="form-group">
                  <label for="usr">Frist Name*</label>
                  <input type="text" className="form-control" id="usr" placeholder="Frist Name"></input>
                </div>
                <div className="form-group">
                  <label for="pwd">Last Name*</label>
                  <input type="text" className="form-control" id="pwd" placeholder="Last Name"></input>
                </div>
                <div className="form-group">
                  <label for="usr">Username*</label>
                  <input type="text" className="form-control" id="usr" placeholder="Username"></input>
                </div>
                <div className="form-group">
                  <label for="pwd">Email*</label>
                  <input type="email" className="form-control" id="pwd" placeholder="Email"></input>
                </div>
                <div className="form-group">
                  <label for="usr">Timezone*</label>
                  <input type="text" className="form-control" id="usr" placeholder="Timezone"></input>
                </div>
                <div className="form-group">
                  <label for="pwd">Password*</label>
                  <input type="password" className="form-control" id="pwd" placeholder="Password"></input>
                </div>
                <div className="form-check-inline col-12">
                  <label className="form-check-label w-100 text-center">
                    <input type="checkbox" className="form-check-input" value=""></input> I agree to the <span><a href="#">Terms and Conditions</a></span>
                  </label>
                </div>
                <div className="col-12 text-center mt-3">
                  <botton className="btn btn-success">SIGN UP</botton>
                  <p className="white mt-3">Already have an account? <span><a className="login-link" href="#">Log in</a></span></p>
                </div>
              </div>
              <div className="tab-pane container fade" id="menu1">
              <div className="form-group">
                  <label for="usr">Frist Name*</label>
                  <input type="text" className="form-control" id="usr" placeholder="Frist Name"></input>
                </div>
                <div className="form-group">
                  <label for="pwd">Last Name*</label>
                  <input type="text" className="form-control" id="pwd" placeholder="Last Name"></input>
                </div>
                <div className="form-group">
                  <label for="usr">Username*</label>
                  <input type="text" className="form-control" id="usr" placeholder="Username"></input>
                </div>
                <div className="form-group">
                  <label for="pwd">Email*</label>
                  <input type="email" className="form-control" id="pwd" placeholder="Email"></input>
                </div>
                <div className="form-group">
                  <label for="usr">Timezone*</label>
                  <input type="text" className="form-control" id="usr" placeholder="Timezone"></input>
                </div>
                <div className="form-group">
                  <label for="pwd">Password*</label>
                  <input type="password" className="form-control" id="pwd" placeholder="Password"></input>
                </div>
                <div className="form-check-inline col-12">
                  <label className="form-check-label w-100 text-center">
                    <input type="checkbox" className="form-check-input" value=""></input> I agree to the <span><a href="#">Terms and Conditions</a></span>
                  </label>
                </div>
                <div className="col-12 text-center mt-3">
                  <botton className="btn btn-success">SIGN UP</botton>
                  <p className="white mt-3">Already have an account? <span><a className="login-link" href="#">Log in</a></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-4">
            <img src={logo} className="logo" alt="logo" width="200px" height="30px" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-4">
                <p>How Fanconvo Works?</p>
              </div>
              <div className="col-4">
                <p>Terms of Use</p>
              </div>
              <div className="col-4">
                <p>Contact Us</p>
              </div>
              <div className="col-12">
                <p>@2021 Fanconvo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
