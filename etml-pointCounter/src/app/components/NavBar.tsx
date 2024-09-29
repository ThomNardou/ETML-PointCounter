"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@mui/material"
import axios from 'redaxios'
import dotenv from 'dotenv'

dotenv.config()

export default function NavBarComponent() {
    function goToLogin() {
        axios.get(`${process.env.baseUrl}/login`, {
            withCredentials: true
        })
    }
    return (
        <>
            <header className="w-full h-20 mt-8 flex items-center justify-between">
                <Image className="ml-4" src="/logo.png" alt="Logo" width={80} height={80} style={{backgroundColor: 'red'}}/>
                <nav className="w-1/4">
                    <ul className="flex justify-evenly">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/admin">Admin</Link>
                        </li>
                        <li>
                            <Button className="test" onClick={goToLogin} variant="contained" color="primary">Login</Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}