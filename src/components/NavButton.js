import 'tailwindcss/tailwind.css'
export default function NavButton({title, link}) {
    return (
        <a href={link} className='text-gray-200 font-roboto p-5 text-nowrap hover:text-white transition-all'>{title}</a>
    )
}