import React from "react"
import { Character } from "../../Models/Character"

interface CharacterStatusContainerProps {
  character: Character;
}

const CharacterStatusContainer: React.FunctionComponent<CharacterStatusContainerProps> = (props: CharacterStatusContainerProps) => {
  return (
    <React.Fragment>
      <div>
        <label>フィジカル：{props.character.status.strength}</label>
      </div>

      <div>
        <label>スピード：{props.character.status.speed}</label>
      </div>

      <div>
        <label>シュート：{props.character.status.shooting}</label>
      </div>

      <div>
        <label>パス：{props.character.status.passing}</label>
      </div>

      <div>
        <label>テクニック：{props.character.status.technique}</label>
      </div>
    </React.Fragment>
  )
}

export { CharacterStatusContainer }