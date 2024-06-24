import computer from "../assets/image-computer.png";
import device from "../assets/image-devices.png";
import preview from "../assets/icon/icon-preview.svg";
import blacklist from "../assets/icon/icon-blacklist.svg"
import text from "../assets/icon/icon-text.svg";

const Page1 = () => {
  return (
    <div>
      <div className="header">
        <h3> A history in everything you copy</h3>
        <h6>
          Clipboard allow you to track and organize Everything you copy.
          instantly access your Clipboard on your device{" "}
        </h6>
        <button className="Green"> Download for iOS </button>{" "}
        <button className="blue"> Download for Mac </button>
      </div>
      <div className="middle">
        <h3> A history in everything you copy</h3>
        <h6>
          Clipboard allow you to track and organize Everything you copy.
          instantly <br /> access your Clipboard on your device{" "}
        </h6>
      </div>
      <div className="main-div">
        <span className="third-div">
          <img src={computer} className="image" alt="computer-image" />;
        </span>
        <div className="listdiv">
          <h3>Quick search</h3>
          <h6>
            {" "}
            Easily search ur snippets by content, <br /> Category, wed
            address,application and mor{" "}
          </h6>
          <h3>iCloud Sync</h3>
          <h6>
            {" "}
            Easily search ur snippets by content, <br /> Category, wed
            address,application and mor{" "}
          </h6>
          <h3>Complete Histoty</h3>
          <h6>
            {" "}
            Easily search ur snippets by content, <br /> Category, wed
            address,application and mor{" "}
          </h6>
        </div>
      </div>
      <br />
      <div className="foruth-div">
        <h3> Access Clipboard Anywhere</h3>
        <h6>
          Clipboard allow you to track and organize Everything you copy.
          instantly <br /> access your Clipboard on your device{" "}
        </h6>
        <img src={device} alt="device-image" />;
        <h3> Supercharge your Workflow</h3>
        <h6>
          Clipboard allow you to track and organize Everything you copy.
          instantly{" "}
        </h6>
      </div>
      <div className="fifth-div">
<div className="icon">
<img src={blacklist} width={50} height={32} alt="logo" />
<h3> Create baclists</h3>
  <h6>Clipboard allow you to track and organize Everything you copy. instantly <br/> access your Clipboard on your
    device </h6>
</div>
<div className="icon">
<img src={text} width={50} height={32} alt="logo" />
<h3> Plan text snippets</h3>
  <h6>Clipboard allow you to track and organize Everything you copy. instantly <br/> access your Clipboard on your
    device </h6>
</div>
<div className="icon">  
<img src={preview} width={50} height={32} alt="logo" />
  <h3> Sneak preview</h3>
  <h6>Clipboard allow you to track and organize Everything you copy. instantly <br/> access your Clipboard on your
    device </h6>
</div>
</div>
<div className="sixth-div">
    <div className="Simage"> <img src={device} alt="device-image" />;</div>
    <div className="Simage"> <img src={device} alt="device-image" />;</div>
    <div className="Simage"> <img src={device} alt="device-image" />;</div>
    <div className="Simage"> <img src={device} alt="device-image" />;</div>
    <div className="Simage"> <img src={device} alt="device-image" />;</div>
  </div>
  <div className="seventh-div">
  <h3> A history in everything you copy</h3>
    <h6> Clipboard allow you to track and organize Everything you copy. instantly <br/> access your Clipboard on your
      device </h6>
    <button className="Green"> Download for iOS </button> <button className="blue"> Download for Mac </button>
  </div>
  <br/>
  <div className="eighth-div">
    <div className="elogo">
      {/* <svg className="sv" width="125" height="125" xmlns="http://www.w3.org/2000/svg"><g stroke="#26BBA4" stroke-width="10" fill="none" fill-rule="evenodd"><circle cx="62.5" cy="62.5" r="57.5"/><path d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0" stroke-linecap="round"/></g></svg> */}
</div>
<div className="Emargin">
    <h3>FAQs</h3>
    <br/>
    <a href="">Contact Us</a>
  </div>
    <div className="Emargin">
      <h3>Privacy Policy</h3>
      <br/>
      <br/>
      <p>Press Kit </p>
    </div>
      <div className="Emargin">
        <h3>install Guide</h3>
      </div>        
    </div>
    </div>
      
  );
};

export default Page1;
