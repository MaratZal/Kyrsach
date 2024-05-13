import NavButton from "./NavButton";
import 'tailwindcss/tailwind.css'
export default function Header() {
    return (
        <header className="bg-zinc-900 flex  justify-between w-full">
            <img src="/img/logo3.webp" height={100} width={100} className="hidden md:flex"></img>
            <div className="flex gap-5 flex-col md:flex-row justify-center  items-center">
                <NavButton title="Главная" link="MainPage"/>
                <NavButton title="О нас" link="AboutPage"/>
                <NavButton title="События" link="IventsPage"/>
                <NavButton title="Меню" link="Menu"/>
                <NavButton title="Контакты" link="Contacs"/>
            </div>
        </header>

    )
}