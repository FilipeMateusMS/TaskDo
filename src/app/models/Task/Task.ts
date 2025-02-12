export interface Task {
    id?: number;
    nmTask: string;
    nmCategory?: string; // ? = opcional( ? = means optional)
    isFinalized: boolean;
}
