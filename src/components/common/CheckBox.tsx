type Props = {
  prefName: string
  prefCode: number
  onChange: (name: string, prefName: number, check: boolean) => void
}

const CheckBox: React.FC<Props> = (props) => {
  return (
    <div key={props.prefName}>
      <input
        type='checkbox'
        name='Prefecture name'
        onChange={(e) => props.onChange(props.prefName, props.prefCode, e.target.checked)}
        id={'checkbox' + props.prefCode}
      />
    </div>
  )
}

export default CheckBox
