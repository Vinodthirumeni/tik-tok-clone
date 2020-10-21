import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./Video";
import Response from "./response";

function App() {
  const [videos, setVideos] = useState([]);
  let count = 0;

  useEffect(() => {
    // db.collection("videos").onSnapshot((snapshot) =>
    //   setVideos(snapshot.docs.map((doc) => doc.data()))
    // );
    setVideos(Response.categories[0].videos);
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str?.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="app">
      <h1>Hai hello</h1>
      <div className="app__videos">
        {videos.map((vid) => (
          <Video
            count={(count = count + 1)}
            url={vid.url ? vid.url : vid.sources[0]}
            channel={vid.channel}
            description={truncate(vid.description, 80)}
            song={vid.song}
            likes={vid.likes}
            messages={vid.messages}
            shares={vid.shares}
          />
        ))}
        }
      </div>
    </div>
  );
}

export default App;
