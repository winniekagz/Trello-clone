import { database } from "@/appwrite"

export const getTodosGroupedByColumns=async()=>{
    const data=await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODO_COLLECTION_ID!,
        )
    console.log(data)
}