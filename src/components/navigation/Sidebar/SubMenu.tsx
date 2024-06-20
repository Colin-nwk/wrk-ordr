import { Link } from "react-router-dom"

const SubMenu = ({ pathname, path, sub }: { pathname: any, path: string, sub: any }) => {
    return (
        <>
            <span className="flex flex-col space-y-3">
                {pathname === path && sub?.map((el: any, index: number) => (
                    <span
                        key={index}
                        className={` first-of-type:mt-4 relative flex items-center justify-start ml-2 space-x-5 h-fit animated-appearance ${index !== sub.length - 1 ? 'border-l-before' : 'border-l-before last'}`}
                    >
                        <span className="border-b-[1px] rounded-bl-lg border-secondary/40 h-5 w-2.5 absolute -top-4 first-of-type:mt-2.5 "></span>
                        <Link to={el.path} className="w-full h-full text-sm font-medium">{el.label}</Link>
                    </span>
                ))}
            </span>
        </>
    )
}

export default SubMenu