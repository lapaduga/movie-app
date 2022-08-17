import './MovieList.scss'
import { Image, Card, Tag, Rate, Pagination, Alert, Spin } from 'antd'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

const { Meta } = Card
import MovieFinder from '../../service/MovieFinder'

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const onError = () => {
    setError(true)
    setLoading(false)
  }

  const mFinder = new MovieFinder()
  useEffect(() => {
    mFinder
      .getData(
        'https://api.themoviedb.org/3/search/movie?api_key=2062761ca6ba3d41c1bdd751dc896bcb&language=en-US&query=return&page=1&include_adult=false'
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
        setMovies([...tempArr])
        setLoading(false)
      })
      .catch(onError)
  }, [])

  const shortenText = (text) => {
    if (text.length > 200) {
      let str = text.slice(0, 200)
      let newStr = str.slice(0, str.lastIndexOf(' '))
      newStr += ' ...'
      return newStr
    }
    return text
  }

  if (loading) {
    return (
      <Spin tip="Loading...">
        <Alert
          message="Getting information from TMDB"
          description="Please, wait for a second"
          type="info"
        />
      </Spin>
    )
  }

  if (error) {
    return (
      <Alert
        message="Something went wrong..."
        description="Unfortunately we are having troubles with TMDB. Try to send request a bit later."
        type="error"
        closable
      />
    )
  }

  return (
    <>
      <ul className="movie-list">
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <Image
                width={183}
                height={281}
                src={'https://image.tmdb.org/t/p/original' + item.image}
              />
              <Card
                hoverable
                title={
                  <div className="card-top">
                    <span title={item.title}>{item.title}</span>
                    <div className="rating">6.6</div>
                  </div>
                }
                bordered={false}
                style={{ width: 268 }}
              >
                <Meta
                  description={format(new Date(item.date), 'MMMM d, yyy')}
                />
                <div className="tags">
                  <Tag>Action</Tag>
                  <Tag>Drama</Tag>
                </div>
                <p>{shortenText(item.overview)}</p>
                <Rate count={10} allowHalf defaultValue={2.5} />
              </Card>
            </li>
          )
        })}
      </ul>
      <Pagination size="small" total={50} />
    </>
  )
}
