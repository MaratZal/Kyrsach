import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contacs() {
    return (
        <>
        <Header />
        <main className="min-h-screen flex flex-col justify-start" >
            
        <ol className="p-6 font-roboto text-zinc-900 text-xl"> Адреса:
            <li>улица Колотушкина 12</li>
            <li>улица Пушкина 23</li>
            <li>улица Марата 19</li>
        </ol>
        <ol className="p-6 font-roboto text-zinc-900 text-xl" >Контакты:
        <li>example@gmail.com</li>
        <li>vk.com/ссылка</li>
        </ol>
        </main>
        <Footer/>
        </>
    )
}