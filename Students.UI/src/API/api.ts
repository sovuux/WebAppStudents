import axios from "axios";

const API_URL = "localhost:7167/api/Student"

const DataBaseQeuries = {
    async getStudent() {
        const response = await axios.get(API_URL)
        return response.data
    },

    async postStudent() {
        const response = await axios.get(API_URL)
        return response.data
    },

    async putStudent() {
        const response = await axios.put(API_URL)
        return response.data
    },

    async deleteStudent() {
        const response = await axios.delete(API_URL + `?{id}`)
        return response.data
    }
}

export default DataBaseQeuries
