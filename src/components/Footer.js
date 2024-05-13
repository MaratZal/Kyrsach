export default function Footer() {
    return (
              <footer className="flex bg-zinc-900 w-full h-auto items-left p-3 justify-around z-5 shadow-inner flex-col md:flex-row ">
            <div className="flex flex-col justify-start items-start ">
                <h4 className="text-gray-200 font-roboto font-bold text-lg">
                    О нас
                    
                </h4>
                <button>
                    <p className="text-gray-200 font-roboto font-base text-md">  ООО Coffe Love </p>
                </button>
            </div>
            <div className="flex flex-col justify-start items-start ">
                <h4 className="text-gray-200 font-roboto font-bold text-lg">
                    Контакты
                </h4>
                <button>
                    <p className="text-gray-200 font-roboto font-base text-md"> example@gmail.com </p>
                </button>
                <button>
                    <p className="text-gray-200 font-roboto font-base text-md">vk.com/ссылка </p>
                </button>
            </div>
        </footer>
    )
}