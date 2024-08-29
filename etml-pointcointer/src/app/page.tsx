import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  { studentId: 1, name: 'pk88yte', points: 100 },
  { studentId: 2, name: 'pk88yte', points: 150 },
  { studentId: 3, name: 'pk88yte', points: 200 },
  { studentId: 4, name: 'pk88yte', points: 250 },
  { studentId: 5, name: 'pk88yte', points: 300 },
];


export default function Home() {
  return (
    <main>
      <TableContainer component={Paper} sx={{backgroundColor: "#23304d", width: "50%"}}>
        <Table>
          
          <TableHead sx={{borderBottomColor: "darkgray", borderBottomWidth: "5px"}}>
            <TableRow sx={{bgcolor: "#475b87"}}>
              <TableCell>Nom</TableCell>
              <TableCell sx={{borderLeftColor: "darkgray", borderLeftWidth: "2px"}}>Points</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.studentId}>
                <TableCell sx={{borderBottomColor: "darkgray"}}>{row.name}</TableCell>
                <TableCell sx={{borderBottomColor: "darkgray", borderLeftColor: "darkgray", borderLeftWidth: "2px"}}>{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </main>
  );
}
