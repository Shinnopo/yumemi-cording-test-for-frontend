import React from 'react'
import CheckBox from './common/CheckBox'
import Label from './common/Label'

type Props = {
  pref:
    | {
        prefCode: number
        prefName: string
      }[]

  onChange: (name: string, prefName: number, check: boolean) => void
}

const Styles: { [key: string]: React.CSSProperties } = {
  checkList: {
    display: 'flex',
    flexWrap: 'wrap',
    borderRadius: '50px',
    width: '90%',
    margin: 'auto',
    marginBottom: '50px',
    padding: '10px',
    justifyContent: 'flex-start',
    justifySelf: 'auto',
    boxShadow: '26px 26px 51px #bebebe, -26px -26px 51px #ffffff',
  },
  text: { display: 'contents', marginLeft: '1em', cursor: 'pointer' },
  checkcard: {
    borderRadius: '50px',
    textAlign: 'center',
    padding: '4px',
    margin: '0.5rem',
    boxShadow: '26px 26px 51px #bebebe, -26px -26px 51px #ffffff',
  },
}

const CheckField: React.FC<Props> = ({ pref, onChange }) => {
  return (
    <>
      <div style={Styles.checkList}>
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
