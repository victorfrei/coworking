
import { useForm, SubmitHandler } from "react-hook-form";
// import Image from 'next/image'


type Inputs = {
    example: string,
    nome: string,
    thumbnail: string,
    descricao: string,
};


export default function Form(props:{SubmitHandle: any}) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data)=> props.SubmitHandle(data);

    return (
        <>

            <div className="flex min-h-full w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

                <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="nome" className="sr-only">
                                Nome
                            </label>
                            <input
                                {...register("nome")}
                                id="nome"
                                name="nome"
                                type="text"
                                autoComplete="nome"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Digite o nome do parceiro"
                            />
                        </div>

                        <div>
                            <label htmlFor="thumbnail" className="sr-only">
                                Thumbnail
                            </label>
                            <input
                                {...register("thumbnail")}
                                id="thumbnail"
                                name="thumbnail"
                                type="text"
                                autoComplete="thumbnail"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Digite o caminho para a thumbnail"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="descricao" className="sr-only">
                            descrição
                        </label>
                        <input
                        {...register("descricao")}
                            id="descricao"
                            name="descricao"
                            type="text"
                            autoComplete="descricao"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Digite a descricao"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Executar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
