import { Grid, Table, TableContainer } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './App.css'
import BasicTable, { CharacterStatusTable } from './Components/Common/BasicTable'
import EnhancedTable from './Components/Common/SortAndSelectingTable'
import { CharacterStatusContainer } from './Components/Container/CharacterStatusContainer'
import { GearSettingContainer } from './Components/Container/GearSettingContainer'
import { Character, Characters } from './Models/Character'
import { ArmsGears } from './Models/Gears/ArmsGears'
import { BodyGears } from './Models/Gears/BodyGears'
import { Gear } from './Models/Gears/Gear'
import { HeadGears } from './Models/Gears/HeadGears'
import { LegsGears } from './Models/Gears/LegsGears'

let head: Gear = HeadGears[0];
let arms: Gear = HeadGears[0];
let body: Gear = HeadGears[0];
let legs: Gear = HeadGears[0];

const App: React.FunctionComponent = () => {

  // const [character, setCharacter] = useState<Character>(Characters[0]);
  const [characters, setCharacters] = useState<Character[]>(Characters);
  // const [head, setHead] = useState<Gear>(HeadGears[0]);
  // const [arms, setArms] = useState<Gear>(ArmsGears[0]);
  // const [body, setBody] = useState<Gear>(BodyGears[0]);
  // const [legs, setLegs] = useState<Gear>(LegsGears[0]);


  function updateStatusGear(character: Character, gear: Gear): Character {
    const copyCharacter: Character = JSON.parse(JSON.stringify(character));
    copyCharacter.status.strength = copyCharacter.status.strength + gear.status.strength;
    copyCharacter.status.speed = copyCharacter.status.speed + gear.status.speed;
    copyCharacter.status.shooting = copyCharacter.status.shooting + gear.status.shooting;
    copyCharacter.status.passing = copyCharacter.status.passing + gear.status.passing;
    copyCharacter.status.technique = copyCharacter.status.technique + gear.status.technique;
    return copyCharacter;
  }

  function updateStatus(character: Character): Character {
    // console.log("updateStatus");
    // console.log(head);
    // console.log(arms);
    // console.log(body);
    // console.log(legs);
    let copyCharacter: Character = JSON.parse(JSON.stringify(character));
    copyCharacter = updateStatusGear(copyCharacter, head);
    copyCharacter = updateStatusGear(copyCharacter, arms);
    copyCharacter = updateStatusGear(copyCharacter, body);
    copyCharacter = updateStatusGear(copyCharacter, legs);
    return copyCharacter;
  }

  function handleChangeGear() {
    console.log("App : handleChangeGear")
    // const copyCharacters: Character = JSON.parse(JSON.stringify(Characters));
    const copyCharacters: Character[] = Characters.map( character => updateStatus(character))
    setCharacters(copyCharacters);
  }

  // function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
  //   setCharacter(Characters[Number(event.target.value) - 1]);
  // }

  // useEffect(
  //   () => {
  //     handleChangeGear();
  //   },
  //   []
  // );

  function updateHead(gear: Gear) {
    head = gear;
    handleChangeGear();
  }

  function updateArms(gear: Gear) {
    arms = gear;
    handleChangeGear();
  }

  function updateBody(gear: Gear) {
    body = gear;
    handleChangeGear();
  }

  function updateLegs(gear: Gear) {
    legs = gear;
    handleChangeGear();
  }

  return (
    <React.Fragment>
      {/* <div className='input-character'>
        <label>キャラクター：</label>
        <select onChange={(e) => handleChange(e)}>
          {Characters.map((character) => 
            <React.Fragment key={character.id}>              
              <option value={character.id}>{character.name}</option>
            </React.Fragment>
          )}
        </select>
      </div> */}

      {/* <div className='display-status'>
        <CharacterStatusContainer character={character}/>
      </div> */}

      <div className='input-gear'>
        {/* <label>ギア設定</label> */}

        <div className='input-gear-head flex-container'>
          <label>ヘッド</label>
          <div className='flex-container-column'>
            <GearSettingContainer gears={HeadGears} dispatchSelecteGear={(gear: Gear) => updateHead(gear)} />
          </div>

          <label>アーム</label>
          <div className='flex-container-column'>
            <GearSettingContainer gears={ArmsGears} dispatchSelecteGear={(gear: Gear) => updateArms(gear)} />
          </div>

          <label>ボディ</label>
          <div className='flex-container-column'>
            <GearSettingContainer gears={BodyGears} dispatchSelecteGear={(gear: Gear) => updateBody(gear)} />
          </div>

          <label>レッグ</label>
          <div className='flex-container-column'>
            <GearSettingContainer gears={LegsGears} dispatchSelecteGear={(gear: Gear) => updateLegs(gear)} />
          </div>
        </div>

        <div className='input-gear-arms flex-container'>
       </div>

        <div className='input-gear-body flex-container'>
       </div>

        <div className='input-gear-legs flex-container'>
        </div>
      </div>

      <CharacterStatusTable characters={characters} gears={[head, arms, body, legs]}/>
    </React.Fragment>
  )
}

export default App
