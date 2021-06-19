function Logo({ className }) {
    return (
        <span className={`p-1 text-xl font-black leading-none text-gray-900 ${className || ''}`}><span>Strack</span><span className="text-red-500">.</span></span>
    )
}

export default Logo;
