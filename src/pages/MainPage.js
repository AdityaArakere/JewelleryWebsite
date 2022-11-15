function MainPage() {
  return (
    <div className="main">
      <div className="container-fluid bg">
        <h1 className="text">hey</h1>
      </div>

      <div className="second_bg">
        <h1 className="sec">Student Information</h1>
        <div className="column">
          <div className="row">
            <img src={require("./silver_img.png")} alt="" />
            <img src={require("./silver_img1.png")} alt="" />
          </div>
          <div className="row">
            <img src={require("./silver_img1.png")} alt="" />
            <img src={require("./silver_img.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
