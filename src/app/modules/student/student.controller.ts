import { Request, Response } from 'express';
import { studentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // console.log(student);
    const result = await studentService.createStudentIntoDB(studentData);
    console.log(result);
    res.status(201).send(result);
  } catch (error) {
    // res.status(500).send({ message: 'Internal Server Error' });
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      data: result,
      success: true,
      message: 'All students fetched successfully',
    });
  } catch (error) {
    // res.status(500).send({ message: 'Internal Server Error' });
    console.log(error);
  }
};

const getStudentById = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getStudentByIdFromDB(studentId);
    res.status(200).json({
      data: result,
      success: true,
      message: 'Student fetched successfully',
    });
  } catch (error) {
    // res.status(500).send({ message: 'Internal Server Error' });
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getStudentById,
};
