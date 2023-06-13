import "../index.css";
import musicBR from "../images/Filipe Penna - Brazilian music.pdf";
import musicLATAM from "../images/Filipe Penna - Latin American music.pdf";
import Header from "../composants/Header";
import Navbar from "../composants/Navbar";

function Spotify() {
  const lateral = "45%";
  const height = 152;

  return (
    <>
      <Header />

      <div className="Workspace">
        <Navbar />
        <div className="Page">
          <h1>Welcome to Latin America</h1>
          <p>
            I created slides presentations to introduce both Brazilian and Latin
            America genres to friends. I invite you to explore them using the
            following decks alongwith with their respectives playlist.
          </p>

          <div className="Music-presentations">
            <div className="Music-presentation">
              <h2>Brazilian music</h2>

              <iframe src={musicBR} height="400px"></iframe>

              <iframe
                title="Playlist Brazilian music"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/7rvKLEDFIzmoYHLXaknVT9?utm_source=generator&theme=0"
                // width={lateral}
                height={height}
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            <div className="Music-presentation">
              <h2>Latin American music</h2>
              <iframe src={musicLATAM} height="400px"></iframe>

              <iframe
                title="Playlist Latin American music"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/0fFgvEOgZd5XBnDs02Ed4F?utm_source=generator&theme=0"
                // width="100%"
                height={height}
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <h1>Top Songs</h1>
          <p>
            Here are my Spotify Top Songs annual playlists. <br></br>I invite
            you to listen the musics that have been a part of my life in these
            last few years :)
          </p>

          <div className="Music-player">
            <iframe
              title="Playlist 2022"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1F0sijgNaJdgit?utm_source=generator&theme=0&lang=en"
              width={lateral}
              height={height}
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            <iframe
              title="Playlist 2021"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1EUMDoJuT8yJsl?utm_source=generator&theme=0"
              width={lateral}
              height={height}
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            <iframe
              title="Playlist 2020"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1EM4i9yO6TaGzz?utm_source=generator&theme=0"
              width={lateral}
              height={height}
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            <iframe
              title="Playlist 2019"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1EtiRYAOd7IOFS?utm_source=generator&theme=0"
              width={lateral}
              height={height}
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            <iframe
              title="Playlist 2018"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1Ejt3MQv5SPJN9?utm_source=generator&theme=0"
              width={lateral}
              height={height}
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            <iframe
              title="Playlist 2017"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1E9WPLi0c2QFN7?utm_source=generator&theme=0"
              width={lateral}
              height={height}
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spotify;
