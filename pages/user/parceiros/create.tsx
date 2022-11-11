
import { LockClosedIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import Swal from 'sweetalert2'
import Form from './_form'
// import Image from 'next/image'

export default function Create() {
    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <Form SubmitHandle={(data: any) => axios.post("https://coworking-backend-thexarcano.vercel.app/api/parceiros", data).then(()=>Swal.fire({text:"Parceiro criado com sucesso!!",icon:"success"}))} />
            </div>
        </>
    )
}
