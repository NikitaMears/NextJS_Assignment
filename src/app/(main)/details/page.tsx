import { useRouter } from "next/router"

export default function DetailPage() {
    const router = useRouter()

    const details=router.query


    return(<div>{details?.id}</div>)
}