import './App.scss'
import { useState } from 'react'
//import debounce from 'lodash.chunk'

import Header from '../Header'
import Search from '../Search'
import MovieList from '../MovieList'
import MovieFinder from '../../service/MovieFinder'

function App() {
  const [keyWord, setKeyWord] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [pages, setPages] = useState(0)
  const mFinder = new MovieFinder()

  function debounce(fn, debounceTime) {
    let timer
    return function (...args) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, debounceTime)
    }
  }

  const onError = () => {
    setError(true)
    setLoading(false)
  }

  const changeValue = (value, page = 1) => {
    setLoading(true)
    if (value !== '') {
      setKeyWord(value)
      mFinder
        .getData(
          `https://api.themoviedb.org/3/search/movie?api_key=2062761ca6ba3d41c1bdd751dc896bcb&language=en-US&query=${value}&page=${page}&include_adult=false`
        )
        .then((body) => {
          const tempArr = []
          body.results.forEach((item) => {
            tempArr.push({
              id: item.id,
              title: item.original_title,
              image: item.backdrop_path,
              date: item.release_date,
              overview: item.overview
            })
          })
          setPages(body.total_results)
          setMovies([...tempArr])
          setLoading(false)
        })
        .catch(onError)
    }
    setKeyWord(value)
  }

  const debouncedChangeValue = debounce(changeValue, 1000)

  const changePage = (value, page) => {
    changeValue(value, page)
  }

  return (
    <main className="main">
      <Header />
      <Search onChange={debouncedChangeValue} />
      <MovieList
        keyWord={keyWord}
        movies={movies}
        loading={loading}
        error={error}
        pages={pages}
        changePage={changePage}
      />
    </main>
  )
}

export default App
