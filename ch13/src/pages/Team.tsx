import { useParams } from "react-router"
export default function Team(){
    const params = useParams();
    return(
        <>
        <h1>Team : teamId : {params.teamId} / groupId :{params.groupId}</h1>
        </>
    )
}