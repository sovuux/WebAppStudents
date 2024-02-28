export type StudentType = {
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

export type ColumnType = {
    key: keyof StudentType
    content?: string
}