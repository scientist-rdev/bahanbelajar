import Homedesc from "./components/homedesc";

export default function Home() {
  return (
    <div className="dcontent" id="dcontentH">
      <div className="ddivcontent dheadcontent" id="ddesccontentH">
        <div>
          <span>Welcome </span>
          <span>to </span>
          <span>My </span>
          <span>Website</span>
        </div>
        <Homedesc />
      </div>
      <div className="ddivcontent dbodycontent" id="dtextcontentH">
        <p>This is some text content for the home.</p>
      </div>
      <div className="ddivcontent dtailcontent" id="ddetailcontentH">
        <p>Here you can find more details about the website.</p>
      </div>
    </div>
  );
}
