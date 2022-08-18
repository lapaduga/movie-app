import './MovieList.scss'
import { Image, Card, Tag, Rate, Pagination, Alert, Spin } from 'antd'
import { format } from 'date-fns'
import { useState } from 'react'

const { Meta } = Card

export default function MovieList({
  movies,
  error,
  loading,
  keyWord,
  pages,
  changePage
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const shortenText = (text) => {
    if (text.length > 200) {
      let str = text.slice(0, 200)
      let newStr = str.slice(0, str.lastIndexOf(' '))
      newStr += ' ...'
      return newStr
    }
    return text
  }

  if (!keyWord) {
    return <Alert message="Type in the movie name" type="info" />
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
        description="Unfortunately we are having troubles with TMDB. We are working on fixing it."
        type="error"
        closable
      />
    )
  }

  if (!navigator.onLine) {
    return (
      <Alert
        message="No connection..."
        description="Unfortunately you have been disconnected. Try to send request a bit later."
        type="error"
        closable
      />
    )
  }

  if (movies.length === 0) {
    if (keyWord) {
      return (
        <Alert message="There is no such movie in our database" type="info" />
      )
    }
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
                  description={
                    item.date
                      ? format(new Date(item.date), 'MMMM d, yyy')
                      : 'Is coming'
                  }
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
      <Pagination
        onChange={(page) => {
          setCurrentPage(page)
          changePage(keyWord, page)
        }}
        current={currentPage}
        defaultPageSize={20}
        size="small"
        total={pages}
        showSizeChanger={false}
      />
    </>
  )
}
