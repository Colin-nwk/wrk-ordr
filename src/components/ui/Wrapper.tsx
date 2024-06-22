import React from "react"
import clsx from "clsx"
const Wrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <section className={clsx('bg-white rounded-lg p-5 w-full h-full', className)}>{children}
        </section>
    )
}

export default Wrapper