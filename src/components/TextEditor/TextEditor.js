import STYLES from '../../constants/styles'

const TextEditor = ({ update, defaultValues }) => {
  return (
    <div>
      <select defaultValue={defaultValues.fs} onChange={(e) => update('fs', e.target.value)}>
        {Object.keys(STYLES.FONT_SIZES).map((fs) => <option key={fs} value={fs}>{STYLES.FONT_SIZES[fs].name}</option>)}
      </select>
      <select defaultValue={defaultValues.lh} onChange={(e) => update('lh', e.target.value)}>
        {Object.keys(STYLES.LINE_HEIGHTS).map((lh) => <option key={lh} value={lh}>{STYLES.LINE_HEIGHTS[lh].name}</option>)}
      </select>
      <select defaultValue={defaultValues.color} onChange={(e) => update('color', e.target.value)}>
        {Object.keys(STYLES.TEXT_COLORS).map((color) => <option key={color} value={color}>{STYLES.TEXT_COLORS[color].name}</option>)}
      </select>
    </div>
  )
}

export default TextEditor