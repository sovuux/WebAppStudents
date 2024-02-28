export type StudentModel = {
    [key: string]: number | string | undefined
    id?: number
    name?: string
    surname?: string
    patron?: string
    city?: string
    postIndex?: string
    street?: string
    email?: string
    phoneNumber?: string
    faculty?: string
    specialty?: string
    course?: number
    groupName?: string
}

export type ColumnModel = {
    key: keyof StudentModel
    content?: string
}