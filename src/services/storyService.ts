import { Story, CreateStoryDto } from "../types/story";

const API_URL = "https://sms-express-app-1-production-a843.up.railway.app/api/stories";

export const getAllStories = async (): Promise<Story[]> => {
    const response = await fetch(`${API_URL}/`);
    return response.json();
};

export const getStoryById = async (id: string): Promise<Story> => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};

export const createStory = async (storyData: CreateStoryDto): Promise<Story> => {
    const response = await fetch(`${API_URL}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(storyData),
    });
    return response.json();
};

export const updateStory = async (id: string, storyData: CreateStoryDto): Promise<Story> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(storyData),
    });
    return response.json();
};

export const deleteStory = async (id: string): Promise<void> => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
