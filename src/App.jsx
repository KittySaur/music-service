import './css/style.css'
import Main from './components/main'
import Bar from './components/bar'
import Footer from './components/footer'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Main />
        <Bar />
        <Footer />
      </div>
    </div>
  )
}

export default App
