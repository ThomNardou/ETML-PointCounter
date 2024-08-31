"use client";

import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

const rows = [
  { studentId: 1, name: "pk88yte", points: 100 },
  { studentId: 2, name: "pk88yte", points: 150 },
  { studentId: 3, name: "pk88yte", points: 200 },
  { studentId: 4, name: "pk88yte", points: 250 },
  { studentId: 5, name: "pk88yte", points: 300 },
];

const modules = [
  { id: 1, name: "I347" },
  { id: 2, name: "I320" },
  { id: 3, name: "I164" },
  { id: 4, name: "I254" },
  { id: 5, name: "I236" },
];

export default function Home() {

  const [module, setModule] = React.useState<number>(0);

  return (
    <main>
      <div className="highScore pt-28 w-full text-center m-auto">

        <Box sx={{ maxWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Module</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Module"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "#23304d",
            width: "50%",
            display: "block"
          }}
        >
          <Table>
            <TableHead
              sx={{ borderBottomColor: "darkgray", borderBottomWidth: "5px" }}
            >
              <TableRow sx={{ bgcolor: "#475b87" }}>
                <TableCell
                  sx={{ fontSize: "18px", color: "white", width: "20%" }}
                >
                  Place
                </TableCell>

                <TableCell
                  sx={{
                    borderLeftColor: "darkgray",
                    borderLeftWidth: "2px",
                    fontSize: "18px",
                    color: "white",
                    width: "40%",
                  }}
                >
                  Nom
                </TableCell>
                <TableCell
                  sx={{
                    borderLeftColor: "darkgray",
                    borderLeftWidth: "2px",
                    fontSize: "18px",
                    color: "white",
                    width: "40%",
                  }}
                >
                  Points Totaux
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.studentId}>
                  <TableCell sx={{ color: "white" }}>{index + 1}</TableCell>
                  <TableCell
                    sx={{
                      borderBottomColor: "darkgray",
                      borderLeftColor: "darkgray",
                      borderLeftWidth: "2px",
                      color: "white",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottomColor: "darkgray",
                      borderLeftColor: "darkgray",
                      borderLeftWidth: "2px",
                      color: "white",
                    }}
                  >
                    {row.points}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
}
