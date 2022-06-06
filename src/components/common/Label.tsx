type Props = {
  prefName: string
  prefCode: number
}

const Label: React.FC<Props> = (props) => {
  return (
    <div key={props.prefName}>
      <label htmlFor={'checkbox' + props.prefCode}>{props.prefName}</label>
    </div>
  )
}

export default Label
