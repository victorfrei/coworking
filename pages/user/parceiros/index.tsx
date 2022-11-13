import * as React from 'react';
import Header from '../../../components/header';
import axios from 'axios';
import List from '../../../components/List';
import HeaderStudioPage from '../../../components/HeaderStudioPage';
import Footer from '../../../components/Footer';
import { Button, Checkbox, Label, Modal, Table, TextInput } from 'flowbite-react';


export async function getServerSideProps() {

    const parceiros = (await axios.get("https://coworking-backend-thexarcano.vercel.app/api/parceiros")).data;

    return {
        props: {
            parceiros
        }
    }
}




export default function CheckboxListSecondary(props: { parceiros: any }) {
    const [checked, setChecked] = React.useState([1]);
    const [isOpen, setIsOpen] = React.useState(false);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <div className='dark'>
            <div>
                <HeaderStudioPage />

                <Table className='rounded-none' hoverable={true}>
                    <Table.Head className='rounded-none'>
                        <Table.HeadCell>
                            Nome
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Thumbnail
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Descrição
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Ações
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y rouded-none">
                        {props.parceiros.map((e: any, key: number) =>
                            <Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {e.nome}
                                </Table.Cell>
                                <Table.Cell>
                                    {e.thumbnail}
                                </Table.Cell>
                                <Table.Cell>
                                    {e.descricao}
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        onClick={() => setIsOpen(true)}
                                        className="font-medium text-blue-600 hover:underline cursor-pointer dark:text-blue-500"
                                    >
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        )}

                        {["", "", "", "", "", "", "", "", "", ""].map((e: any, key: number) =>
                            <Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {e.nome}
                                </Table.Cell>
                                <Table.Cell>
                                    {e.thumbnail}
                                </Table.Cell>
                                <Table.Cell>
                                    {e.descricao}
                                </Table.Cell>
                                <Table.Cell>
                                    <a

                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    >

                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>

                <React.Fragment>
                    <Modal
                        show={isOpen}
                        size="md"
                        className='dark'
                        popup={true}
                        onClose={() => setIsOpen(false)}
                    >
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                    Menu de Edição de Parceiros
                                </h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="Id"
                                            value="ID"
                                        />
                                    </div>
                                    <TextInput
                                        id="id"
                                        readOnly
                                        placeholder="name@company.com"
                                        value="63713ab0dc9313e4b23e4fa5"
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="Nome"
                                            value="Nome"
                                        />
                                    </div>
                                    <TextInput
                                        id="nome"
                                        placeholder="name@company.com"
                                        value="Ceuma"
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="password"
                                            value="Thumbnail"
                                        />
                                    </div>
                                    <TextInput
                                        id="password"
                                        type="text"
                                        value="/branding/ceuma_branco.png"
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="password"
                                            value="Descrição"
                                        />
                                    </div>
                                    <TextInput
                                        id="password"
                                        type="text"
                                        value=""
                                        required={true}
                                    />
                                </div>

                                <div className=" flex gap-2 w-full">
                                    <Button color="failure">
                                        Apagar Parceiro
                                    </Button>
                                    <Button>
                                        Alterar Parceiro
                                    </Button>

                                </div>

                            </div>
                        </Modal.Body>
                    </Modal>
                </React.Fragment>

                <Footer />
            </div>
        </div>
    );
}