import { Input } from 'antd'
import './Search.scss'

export default function Search({ onChange }) {
  return (
    <div className="search">
      <Input
        placeholder="Type to search..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
