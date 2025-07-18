import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { styled } from "@mui/system";

// Styled 컴포넌트 정의
const StyledPaper = styled(Paper)({
  width: "100%",
  marginTop: "24px",
  overflow: "auto",
});

const StyledTable = styled(Table)({
  minWidth: 1080,
});

const customers = [
  {
    id: 1,
    image: "https://i.pravatar.cc/70?img=3",
    name: "박창영",
    birthday: "980630",
    gender: "male",
    job: "student",
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/70?img=1",
    name: "홍길동",
    birthday: "901023",
    gender: "male",
    job: "cooker",
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/70?img=10",
    name: "김수현",
    birthday: "950101",
    gender: "male",
    job: "actor",
  },
];

class App extends Component {
  render(){
    return (
      <StyledPaper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {
              return (
                <Customer key={c.id}
                          id={c.id}
                          image={c.image}
                          name={c.name}
                          birthday={c.birthday}
                          gender={c.gender}
                          job={c.jop}
                />
              );             
            })}
          </TableBody>
        </StyledTable>
      </StyledPaper>
    );
  }
}

export default App;