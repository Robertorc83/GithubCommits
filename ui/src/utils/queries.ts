import axios from "axios"

const COMMITS_URL = "http://localhost:3000/commits"

export async function fetchCommits(){
    try {
        const { data } = await axios.get(COMMITS_URL) 
        return data
    } catch (error) {
        console.error(`Error fetching commits: ${error}`)
        throw new Error("Failed to fetch commits");
    }
} 