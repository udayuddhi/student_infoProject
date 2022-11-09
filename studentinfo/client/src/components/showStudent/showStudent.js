import  React,{ useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import  IconButton  from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';



export default function ShowStudents() {
  const [studentsList , setStudentList] = useState([])

  const deleteStudent = (id) =>  {
    
    axios.delete(`http://localhost:5000/students/${id}`).then(() => {
      window.location.reload(false);

    });

  }
  // const editStudent = (id) =>  {
    
  //   axios.edit(`http://localhost:5000/students/${id}/name`).then(() => {

  //   });

  // }
 useEffect(()=>{
    axios.get('http://localhost:5000/students').then((allStudents) =>{
      setStudentList(allStudents.data) 
    })
  },[])
  return (
    <>
    <h2> All Students</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Registration No. </TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">section</TableCell>
            <TableCell align="right">Action</TableCell>
            {/* <TableCell align="right">Edit</TableCell> */}

          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right"> <IconButton aria-label="delete" size="small" onClick={()=> deleteStudent(student._id)}>
              <DeleteIcon fontSize="small" /></IconButton>
              </TableCell>
              {/* <TableCell align="right"> <Button color="secondary" onClick={()=> editStudent(student._id)}>
              <i className="fa-regular fa-pen-to-square"></i>
              </Button>
              </TableCell> */}
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
