import './App.scss'
import Header from '../Header'
import Search from '../Search'
import MovieList from '../MovieList'

function App() {
  return (
    <main className="main">
      <Header />
      <Search />
      <MovieList />
    </main>
  )
}

export default App
