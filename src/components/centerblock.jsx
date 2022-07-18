import '../css/style.css'

function Centerblock() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <CenterblockContent />
    </div>
  )
}

export default Centerblock

function Search() {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}
function Filter() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__button button-author _btn-text">исполнителю</div>
      <div className="filter__button button-year _btn-text">году выпуска</div>
      <div className="filter__button button-genre _btn-text">жанру</div>
    </div>
  )
}

function CenterblockContent() {
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
        <Playlist
          name="Guilt"
          author="Nero"
          album="Welcome Reality"
          time="4:44"
        />
        <Playlist
          name="Elektro"
          author="Dynoro, Outwork, Mr. Gee"
          album="Elektro"
          time="2:22"
        />
        <Playlist
          name="I’m Fire"
          author="Ali Bakgor"
          album="I’m Fire"
          time="2:22"
        />
        <Playlist
          name="Non Stop"
          author="Стоункат, Psychopath"
          album="Non Stop"
          time="4:12"
          span="(Remix)"
        />
        <Playlist
          name="Run Run"
          author="Jaded, Will Clarke, AR/CO"
          album="Run Run"
          time="2:54"
          span="(feat. AR/CO)"
        />
        <Playlist
          name="Eyes on Fire"
          author="Blue Foundation, Zeds Dead"
          album="Eyes on Fire"
          time="5:20"
          span="(Zeds Dead Remix)"
        />
        <Playlist
          name="Mucho Bien"
          author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
          album="Mucho Bien"
          time="3:41"
          span="Hi Profile Remix"
        />
        <Playlist
          name="Knives n Cherries"
          author="minthaze"
          album="Captivating"
          time="1:48"
        />
        <Playlist
          name="How Deep Is Your Love"
          author="Calvin Harris, Disciples"
          album="How Deep Is Your Love"
          time="3:32"
        />
        <Playlist
          name="Morena"
          author="Tom Boxer"
          album="Soundz Made in Romania"
          time="3:36"
        />
      </div>
    </div>
  )
}

function Playlist(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {props.name}{' '}
              <span className="track__title-span">{props.span}</span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {props.author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {props.album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">{props.time}</span>
        </div>
      </div>
    </div>
  )
}
