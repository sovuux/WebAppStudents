import axios from "axios";

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

    async postStudent() {
        try {
            const response = await axios.post(API_URL)
            return response.data
        }
        catch (error) {
            throw new Error(`${error}`)
        }
    },

    async putStudent() {
        try {
            const response = await axios.put(API_URL)
            return response.data
        }
        catch (error) {
            throw new Error(`${error}`)
        }
    },

    async deleteStudent() {
        try {
            const response = await axios.delete(API_URL + `?Id=доллар{вставить айди}`)
            return response.data
        }
        catch (error) {
            throw new Error(`${error}`)
        }
    }
}

export default DataBaseQeuries
