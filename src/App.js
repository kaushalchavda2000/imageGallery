import { useEffect, useState } from "react";
import ImageSection from "./components/ImageSection/ImageSection";
import SearchBar from "./components/SearchBar/SearchBar";
const MY_ACCESS_KEY = "SMjCLOdLKjW_Uka3skfNLk9aK_vr1oA9F0iONfxaHgU";
const listApi = `https://api.unsplash.com/photos?client_id=${MY_ACCESS_KEY}&per_page=15`;
let searchTimeout, page=2;

function App() {
  const searchApi = `https://api.unsplash.com/search/photos?client_id=${MY_ACCESS_KEY}&per_page=10`;
  const [imageData, setimageData] = useState([]);
  const [lastQuery,setlastQuery] = useState("random");
  let scroll = true;

  window.onscroll = function () {

    //on scroll data loading when reach at the bottom of the page.
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && scroll) {
      fetch(`${searchApi}&query=${lastQuery}&page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setimageData((prev) =>(
          [...prev].concat(data.results)
        ));
      })
      .catch((e) => {
        console.log(e);
      });
      page += 1;
      scroll = false;
    }
  };

  useEffect(() => {
    searchTimeout = setTimeout(() => {
      getImages(listApi);
    });
  }, []);

  const getImages = (url, search) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (search) {
          setimageData(data.results);
        } else {
          setimageData(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeHandler = (inputValue) => {
    setlastQuery(inputValue);
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      if (inputValue === "") {
        getImages(listApi);
      } else {
        getImages(`${searchApi}&query=${inputValue}`, true);
      }
    }, 1000);
  };

  return (
    <>
      <SearchBar onChange={onChangeHandler} />
      <ImageSection imageData={imageData} />
    </>
  );
}

export default App;
