import logo from './logo.svg';
import './App.css';
import './style.css';
import leafIcon from './icons/leaf-icon.png';
import gitIcon from './icons/git-icon.png';
import compassIcon from './icons/compas-icon-1.png';
import searchIcon from './icons/search-icon-1.png';
import plantPreview from './icons/plant-drawing-1.png';


function App() {
  return (

    <div>
      <div className="block-main">
        <header className="header">

          <div className="left-section">
            <a href="https://mlaflam.github.io/simple-website/">
              <img className="leaf-icon" src={leafIcon} alt="Leaf Icon" />
            </a>

            <div className="title">FloraFinders</div>

            <div className="header-link">

              <div className="header-name-left">Explore</div>
            </div>
            <div className="header-link">
              <div className="header-name-left">About</div>
            </div>
          </div>



          <div className="right-section">
            <div className="sign-in-container">
              Sign in
            </div>
            <a href="https://github.com/mlaflam/native-plants-website" target="_blank">
              <img className="git-icon" src={gitIcon} alt="GitHub Icon" />
            </a>
          </div>


        </header>

        <div className="block">

          <div id="search-box-container">
            <div className="explore-container">
              <a href="https://mlaflam.github.io/simple-website/">
                <img className="explore-icon" src={compassIcon} alt="Compass Icon" />
              </a>
              <div className="explore-title">Explore</div>
            </div>

            <div className="explore-info">
              Explore, learn, and connect with the unique plants that call each state home.
            </div>

              <div id="search-container">
              <img className="search-icon" src={searchIcon} alt="Search Icon" />
                  <input className="search" type="text" id="city" placeholder="Enter state" />
                  </div>

              </div>

              <div className="block-ex">
                <div id="example-plants-grid">

                  <div className="example-plant">
                      <div className="plant-block">
                        <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                          target="_blank">
                      <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                        </a>
                      </div>

                      <div className="plant-info">
                        <div className="plant-scientfic-name">
                          Trifolium bilineatum
                        </div>

                        <div className="plant-common-name">
                          Clover
                        </div>

                      </div>
              </div>

              <div className="example-plant">
                <div className="plant-block">
                  <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                    target="_blank">
                    <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                  </a>
                </div>

                <div className="plant-info">
                  <div className="plant-scientfic-name">
                    Trifolium bilineatum
                  </div>

                  <div className="plant-common-name">
                    Clover
                  </div>

                </div>
              </div>

              <div className="example-plant">
                <div className="plant-block">
                  <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                    target="_blank">
                    <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                  </a>
                </div>

                <div className="plant-info">
                  <div className="plant-scientfic-name">
                    Trifolium bilineatum
                  </div>

                  <div className="plant-common-name">
                    Clover
                  </div>

                </div>
              </div>

              <div className="example-plant">
                <div className="plant-block">
                  <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                    target="_blank">
                    <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                  </a>
                </div>

                <div className="plant-info">
                  <div className="plant-scientfic-name">
                    Trifolium bilineatum
                  </div>

                  <div className="plant-common-name">
                    Clover
                  </div>

                </div>
              </div>

              <div className="example-plant">
                <div className="plant-block">
                  <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                    target="_blank">
                    <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                  </a>
                </div>

                <div className="plant-info">
                  <div className="plant-scientfic-name">
                    Trifolium bilineatum
                  </div>

                  <div className="plant-common-name">
                    Clover
                  </div>

                </div>
              </div>

              <div className="example-plant">
                <div className="plant-block">
                  <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                    target="_blank">
                    <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                  </a>
                </div>

                <div className="plant-info">
                  <div className="plant-scientfic-name">
                    Trifolium bilineatum
                  </div>

                  <div className="plant-common-name">
                    Clover
                  </div>

                </div>
              </div>

              <div className="example-plant">
                <div className="plant-block">
                  <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                    target="_blank">
                    <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                  </a>
                </div>

                <div className="plant-info">
                  <div className="plant-scientfic-name">
                    Trifolium bilineatum
                  </div>

                  <div className="plant-common-name">
                    Clover
                  </div>

                </div>
              </div>

              <div className="example-plant">
                <div className="plant-block">
                  <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                    target="_blank">
                    <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                  </a>
                </div>

                <div className="plant-info">
                  <div className="plant-scientfic-name">
                    Trifolium bilineatum
                  </div>

                  <div className="plant-common-name">
                    Clover
                  </div>

                </div>
              </div>

              <div className="example-plant">
                <div className="plant-block">
                  <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                    target="_blank">
                    <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                  </a>
                </div>

                <div className="plant-info">
                  <div className="plant-scientfic-name">
                    Trifolium bilineatum
                  </div>

                  <div className="plant-common-name">
                    Clover
                  </div>

                </div>
              </div>

              <div className="example-plant">
                <div className="plant-block">
                  <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                    target="_blank">
                    <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                  </a>
                </div>

                <div className="plant-info">
                  <div className="plant-scientfic-name">
                    Trifolium bilineatum
                  </div>

                  <div className="plant-common-name">
                    Clover
                  </div>

                </div>
              </div>

              <div className="example-plant">
                <div className="plant-block">
                  <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                    target="_blank">
                    <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                  </a>
                </div>

                <div className="plant-info">
                  <div className="plant-scientfic-name">
                    Trifolium bilineatum
                  </div>

                  <div className="plant-common-name">
                    Clover
                  </div>

                </div>
              </div>

              <div className="example-plant">
                <div className="plant-block">
                  <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
                    target="_blank">
                    <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
                  </a>
                </div>

                <div className="plant-info">
                  <div className="plant-scientfic-name">
                    Trifolium bilineatum
                  </div>

                  <div className="plant-common-name">
                    Clover
                  </div>

                </div>
              </div>
              






                </div>
              </div>

          </div>

          <footer className="footer">
            footies
          </footer>
        </div>

    </div>

  );
}

export default App;
