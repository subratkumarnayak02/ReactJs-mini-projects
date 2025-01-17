import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import TreeView from "./components/recursive-menu";
import StarRating from "./components/star-rating";

import menus from "./components/recursive-menu/data";
import QrCodeGenerator from "./components/qr-code-generator";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}

      <QrCodeGenerator />
    </div>
  );
}

export default App;
