import { Input } from 'antd'
import './Search.scss'

export default function Search({ onChange, setInitialPage }) {
  return (
    <div className="search">
      <Input
        placeholder="Type to search..."
        onChange={(e) => {
          onChange(e.target.value)
          setInitialPage(1)
        }}
      />
    </div>
  )
}
