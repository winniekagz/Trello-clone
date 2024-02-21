interface Board{
    Board:Map<TypedColumn,Column>
}
type TypedColumn='todo'|'completed'|'inProgress'

interface Column{
    id:TypedColumn
    todos:Todos[]
}

interface Todos{
$id:string,
$createdAt:string,
$status:TypedColumn
$image?:string
}

interface Image {
    bucketId:string,
    fileId:string
}