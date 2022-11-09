import studentData from '../models/student.js';
export const getStudents = async (req, res)=> {
    try {
        const allStudents = await  studentData.find();
        res.status(200).json(allStudents);
        
    } catch (error) {
        res.status(404).json({message: error.message})
        
    }
};

export const createStudent = async (req, res)=> {
    const student = req.body;
    
    const newStudent =  new studentData (student);
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(404).json({message:error.message})
        
    };
};

export const deleteStudent = async (req, res)=> {
    const id = req.params.id
    
    try {
        await studentData.findByIdAndRemove(id).exec();
        res.send ('successfully Deleted');
       
    } catch (error) {
        console.log(error);
       
        
    };
};

// export const editStudent = async (req, res)=> {
//     const student = req.body;
    
//     const edit =  new studentData (student);
//     try {
//         await edit.save();
//         res.status(201).json(edit);
//     } catch (error) {
//         res.status(404).json({message:error.message})
        
//     };
// }

