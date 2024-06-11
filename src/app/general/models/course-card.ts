export interface Course {
    id: number,
    imgUrl: string,
    title: string;
    description: string;
    duration: number;
    price: number;
}

export enum CourseSortValues {
    Title = "Title",
    Price = "Price",
    Duration = "Duration"
}