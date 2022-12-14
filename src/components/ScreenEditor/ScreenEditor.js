import STYLES from '../../constants/styles'

const TextEditor = ({ update, defaultValues }) => {
	return (
		<div>
			<select defaultValue={defaultValues.fs} onChange={(e) => update('bg', e.target.value)}>
				{Object.keys(STYLES.SCREEN_BACKGROUNDS).map((bg) => <option key={bg} value={bg}>{STYLES.SCREEN_BACKGROUNDS[bg].name}</option>)}
			</select>
		</div>
	)
}

export default TextEditor