import './MovieList.scss'
import { Image, Card, Tag, Rate, Pagination } from 'antd'
const { Meta } = Card

export default function Search() {
  const elem = (
    <div className="card-top">
      <span>The way back</span>
      <div className="rating">6.6</div>
    </div>
  )

  return (
    <>
      <ul className="movie-list">
        <li>
          <Image
            width={183}
            height={281}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Card hoverable title={elem} bordered={false} style={{ width: 268 }}>
            <Meta description="March 5, 2020 " />
            <div className="tags">
              <Tag>Action</Tag>
              <Tag>Drama</Tag>
            </div>
            <p>
              A former basketball all-star, who has lost his wife and family
              foundation in a struggle with addiction attempts to regain his
              soul and salvation by becoming the coach of a disparate ethnically
              mixed high ...
            </p>
            <Rate count={10} allowHalf defaultValue={2.5} />
          </Card>
        </li>
        <li>
          <Image
            width={183}
            height={281}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Card hoverable title={elem} bordered={false} style={{ width: 268 }}>
            <Meta description="March 5, 2020 " />
            <div className="tags">
              <Tag>Action</Tag>
              <Tag>Drama</Tag>
            </div>
            <p>
              A former basketball all-star, who has lost his wife and family
              foundation in a struggle with addiction attempts to regain his
              soul and salvation by becoming the coach of a disparate ethnically
              mixed high ...
            </p>
            <Rate count={10} allowHalf defaultValue={2.5} />
          </Card>
        </li>
        <li>
          <Image
            width={183}
            height={281}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Card hoverable title={elem} bordered={false} style={{ width: 268 }}>
            <Meta description="March 5, 2020 " />
            <div className="tags">
              <Tag>Action</Tag>
              <Tag>Drama</Tag>
            </div>
            <p>
              A former basketball all-star, who has lost his wife and family
              foundation in a struggle with addiction attempts to regain his
              soul and salvation by becoming the coach of a disparate ethnically
              mixed high ...
            </p>
            <Rate count={10} allowHalf defaultValue={2.5} />
          </Card>
        </li>
        <li>
          <Image
            width={183}
            height={281}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Card hoverable title={elem} bordered={false} style={{ width: 268 }}>
            <Meta description="March 5, 2020 " />
            <div className="tags">
              <Tag>Action</Tag>
              <Tag>Drama</Tag>
            </div>
            <p>
              A former basketball all-star, who has lost his wife and family
              foundation in a struggle with addiction attempts to regain his
              soul and salvation by becoming the coach of a disparate ethnically
              mixed high ...
            </p>
            <Rate count={10} allowHalf defaultValue={2.5} />
          </Card>
        </li>
        <li>
          <Image
            width={183}
            height={281}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Card hoverable title={elem} bordered={false} style={{ width: 268 }}>
            <Meta description="March 5, 2020 " />
            <div className="tags">
              <Tag>Action</Tag>
              <Tag>Drama</Tag>
            </div>
            <p>
              A former basketball all-star, who has lost his wife and family
              foundation in a struggle with addiction attempts to regain his
              soul and salvation by becoming the coach of a disparate ethnically
              mixed high ...
            </p>
            <Rate count={10} allowHalf defaultValue={2.5} />
          </Card>
        </li>
        <li>
          <Image
            width={183}
            height={281}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Card hoverable title={elem} bordered={false} style={{ width: 268 }}>
            <Meta description="March 5, 2020 " />
            <div className="tags">
              <Tag>Action</Tag>
              <Tag>Drama</Tag>
            </div>
            <p>
              A former basketball all-star, who has lost his wife and family
              foundation in a struggle with addiction attempts to regain his
              soul and salvation by becoming the coach of a disparate ethnically
              mixed high ...
            </p>
            <Rate count={10} allowHalf defaultValue={2.5} />
          </Card>
        </li>
      </ul>
      <Pagination size="small" total={50} />
    </>
  )
}
