export interface Story {
    id: string;
    authorName: string;
    content: string;
}

export interface CreateStoryDto {
    authorName: string;
    content: string;
}
