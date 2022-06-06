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

const CheckField: React.FC<Props> = ({ pref, onChange }) => {
  return (
    <>
      <div>
        {pref.map((pref) => (
          <div key={pref.prefName}>
            <CheckBox
              prefName={pref.prefName}
              prefCode={pref.prefCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange(pref.prefName, pref.prefCode, e.target.checked)
              }
            />
            <Label prefName={pref.prefName} prefCode={pref.prefCode} />
          </div>
        ))}
      </div>
    </>
  )
}

export default CheckField
