import api from "./apiConfig.js"
import { useNavigate } from "react-router-dom"

export const getQuotes = async () => {
    try {
        const response = await api.get("/quotes")
        return response.data
    } catch (error) {
        console.error("Error getting quotes:", error)
    }
}

export const getQuote = async (id) => {
    try {
        const response = await api.get(`/quotes/${id}`)
        return response.data
    } catch (error) {
        console.error("Error getting quote:", error)
    }
}

export const createQuote = async (quoteData) => {
    try {
        const response = await api.post(`/quotes`, quoteData)
        return response.data
    } catch (error) {
        console.error("Error creating quote:", error)
    }
}

export const editQuote = async (id, quoteData) => {
    try {
        const response = await api.put(`quotes/${id}`, quoteData)
        return response.data
    } catch (error) {
        console.error("Error updating quote:", error)
    }
}

export const deleteQuote = async (id) => {
    try {
        const response = await api.delete(`quotes/${id}`)
        return response.data
        
    } catch (error) {
        console.error("Error delete quote:", error)
    }
}