import { Tabs } from 'antd'
import './Header.scss'

const { TabPane } = Tabs

function Header() {
  const onChange = (key) => {
    console.log(key)
  }

  return (
    <header className="header">
      <Tabs centered defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Search" key="1" />
        <TabPane tab="Rated" key="2" />
      </Tabs>
    </header>
  )
}

export default Header
