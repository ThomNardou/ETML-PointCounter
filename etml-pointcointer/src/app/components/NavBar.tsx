import Image from "next/image"

export default function NavBarComponent() {
    return (
        <>
            <header className="w-full h-20 flex justify-center mt-10 mb-10">
                <div className="w-6/12 h-20 rounded-full  bg-slate-800 flex items-center">
                    <nav className="w-full flex justify-end">
                        <ul className="navBar flex w-2/5 mr-12 justify-between items-center text-white">
                            <li>Gamification</li>
                            <li>about</li>
                            <li><Image src={""} alt="User Pfp" width={60} height={60} className="bg-neutral-700 rounded-full"/></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}