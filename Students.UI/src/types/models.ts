export type StudentType = {
    id: number
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
    key: string
    content?: string
}

export type UserType = {
    login: string,
    password: string
}