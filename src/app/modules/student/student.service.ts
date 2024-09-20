import { Student } from './student.interface';
import { studentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await studentModel.create(student);
  // console.log(result);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await studentModel.find();
  return result;
};

const getStudentByIdFromDB = async (id: string) => {
  const result = await studentModel.findOne({ id });
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getStudentByIdFromDB,
};
