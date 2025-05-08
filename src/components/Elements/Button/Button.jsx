const Button = (props) => {
    const { children } = props
    return (
        <button className= "bg-gray-800 w-[200px] text-white cursor-pointer hover:bg-gray-700 py-2 ml-5 rounded-xl">{children}</button>
    )
}

export default Button