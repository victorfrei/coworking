import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import * as React from 'react';


export default function HeaderStudioPage() {
    return (
        <div className="dark">
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">

                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Coworking
                    </span>
                </Navbar.Brand>

                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={false}
                    >
                        Empresas
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Projetos
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" active={true}>
                        Parceiros
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Usuários
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Sessões
                    </Navbar.Link>

                </Navbar.Collapse>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
            </Navbar>
        </div>
    )
}