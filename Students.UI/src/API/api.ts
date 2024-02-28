import axios from "axios";
import { StudentType } from "../types/models";

const API_URL = "https://localhost:7167/api/Student"

const DataBaseQeuries = {
    async getStudents() {
        try {
            const response = await axios.get(API_URL)
            return response.data
        }
        catch (error) {
            throw new Error(`${error}`)
        }
    },

    async postStudent(studentObject:StudentType) {
        try {
            const response = await axios.post(API_URL, studentObject)
            return response.data
        }
        catch (error) {
            throw new Error(`${error}`)
        }
    },

    async putStudent(studentObject:StudentType) {
        try {
            const response = await axios.put(API_URL, studentObject)
            return response.data
        }
        catch (error) {
            throw new Error(`${error}`)
        }
    },

    async deleteStudent(id:Number) {
        try {
            const response = await axios.delete(API_URL + `?Id=${id}`)
            return response.data
        }
        catch (error) {
            throw new Error(`${error}`)
        }
    }
} 

export default DataBaseQeuries


