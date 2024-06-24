import computer from "../assets/image-computer.png";
import device from "../assets/image-devices.png";

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
        <img src={device} className="image" alt="device-image" />;
        <h3> Supercharge your Workflow</h3>
        <h6>
          Clipboard allow you to track and organize Everything you copy.
          instantly{" "}
        </h6>
      </div>
      
    </div>
  );
};

export default Page1;
