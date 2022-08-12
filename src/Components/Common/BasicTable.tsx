import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Character } from '../../Models/Character';
import { Gear, SumStatus } from '../../Models/Gears/Gear';
import { Status } from '../../Models/Status';

interface CharacterStatusTableProps {
  characters: Character[];
  gears: Gear[];
}

export const CharacterStatusTable: React.FunctionComponent<CharacterStatusTableProps> = (props: CharacterStatusTableProps) => {
  const status: Status = SumStatus(props.gears);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">キャラクター<br/>ギア合計値</TableCell>
            <TableCell align="right" width={80}>フィジカル<br/> {status.strength}</TableCell>
            <TableCell align="right" width={80}>スピード<br/> {status.speed}</TableCell>
            <TableCell align="right" width={80}>シュート<br/> {status.shooting}</TableCell>
            <TableCell align="right" width={80}>パス<br/> {status.passing}</TableCell>
            <TableCell align="right" width={80}>テクニック<br/> {status.technique}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.characters.map((character) => (
            <TableRow
              key={character.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {character.name}
              </TableCell>
              <TableCell align="right">{character.status.strength}</TableCell>
              <TableCell align="right">{character.status.speed}</TableCell>
              <TableCell align="right">{character.status.shooting}</TableCell>
              <TableCell align="right">{character.status.passing}</TableCell>
              <TableCell align="right">{character.status.technique}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
