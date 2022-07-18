import '../css/style.css'
import Centerblock from './centerblock'

function Main() {
  return (
    <main className="main">
      <Navigation />
      <Centerblock />
      <Sidebar />
    </main>
  )
}

function Navigation() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="./img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Главное
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <Personal userName="Sergey.Ivanov" />
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarItem
            link="http://"
            imgSrc="img/playlist01.png"
            alt="day's playlist"
          />
          <SidebarItem
            link="http://"
            imgSrc="img/playlist02.png"
            alt="day's playlist"
          />

          <SidebarItem
            link="http://"
            imgSrc="img/playlist03.png"
            alt="day's playlist"
          />
        </div>
      </div>
    </div>
  )
}

function Personal(props) {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">{props.userName}</p>
      <div className="sidebar__avatar">{props.avatar}</div>
    </div>
  )
}

function SidebarItem(props) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={props.link}>
        <img className="sidebar__img" src={props.imgSrc} alt={props.alt} />
      </a>
    </div>
  )
}

export default Main
