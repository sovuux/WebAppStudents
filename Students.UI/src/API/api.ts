import axios from "axios";
import { StudentType } from "../types/models.ts";

const API_URL = import.meta.env.VITE_API_URL;

const handleError = (error: unknown): never => {
    throw new Error(`${error}`)
}

const request = async <T>(method: "GET" | "POST" | "PUT" | "DELETE", url: string, data: T | null = null) => {
    try {
        const response = await axios({ method, url, data });
        return response.data;
    }
    catch (error) {
        handleError(error);
    }
}

const DataBaseQueries = {
    getStudents: (): Promise<StudentType[]> => request<StudentType[]>("GET", API_URL),

    postStudent: (studentObject: StudentType): Promise<StudentType> => request<StudentType>("POST", API_URL, studentObject),

    putStudent: (studentObject: StudentType): Promise<StudentType> => request<StudentType>("PUT", API_URL, studentObject),

    deleteStudent: (id: number): Promise<void> => request<void>("DELETE", `${API_URL}?Id=${id}`)
}

export default DataBaseQueries