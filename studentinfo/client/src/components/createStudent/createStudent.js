import   React,{ useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles.css';
import axios from 'axios';


export default function CreateStudent() {
    // const classes = useStyles();
    const [ student, setStudent ] = useState({
      regNo: 0,
      studentName:'',
      grade:'',
      section:''
    });
    const createStudent= ()=>{
     console.log(student);

      axios.post('http://localhost:5000/students', student ).then(()=>{
        window.location.reload(false)
       
      })

    }
  return (
    <>
    <h2> create student</h2>
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off" container="true" justifyContent= "space-between" >
      <div className="input">
        <TextField id="outlined-basic" label="Registration No." variant="outlined" value={student.regNo} onChange={(event)=>{
          setStudent({...student, regNo: event.target.value}) }} />
      </div>
      <div className="input">
        <TextField  id="outlined-basic" label="Name" variant="outlined" value={student.studentName}  onChange={(event)=>{
          setStudent({...student,  studentName:event.target.value})}} /> 
      </div >
      <div className="input">
        <TextField  id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event)=>{
          setStudent({...student,  grade:event.target.value})}} />
          
      </div>
      <div className="input">
        <TextField  id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event)=>{
          setStudent({...student,  section: event.target.value})}} />
      </div>
      <div className="btn">
        <Button  variant="contained" color="primary" onClick={createStudent}>
        Create
        </Button>
      </div>
    </Box>
    </>
    
  );
}
