import React from 'react'

type Props = {
  pref:
    | {
        prefCode: number
        prefName: string
      }[]

  onChange: (name: string, prefName: number, check: boolean) => void
}

const Styles: { [key: string]: React.CSSProperties } = {
  checkcardList: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px',
    justifyContent: 'flex-start',
    justifySelf: 'auto',
  },
  text: { display: 'contents', marginLeft: '1em', cursor: 'pointer' },
  checkcard: {
    borderRadius: '24px',
    border: 'solid 2px',
    textAlign: 'center',
    padding: '4px',
    margin: '0.5rem',
  },
}

// 都道府県一覧のチェックボックスを表示するコンポーネント
const CheckField: React.FC<Props> = ({ pref, onChange }) => {
  return (
    <>
      <div style={Styles.checkcardList}>
        {pref.map((pref) => (
          <div style={Styles.checkcard} key={pref.prefName}>
            <input
              type='checkbox'
              name='pref name'
              onChange={(e) => onChange(pref.prefName, pref.prefCode, e.target.checked)}
              id={'checkbox' + pref.prefCode}
            />
            <label style={Styles.text} htmlFor={'checkbox' + pref.prefCode}>
              {pref.prefName}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export default CheckField
