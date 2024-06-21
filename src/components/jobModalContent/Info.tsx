import { Heading } from "../index"


const Info = () => {
    return (
        <div className="w-full h-full mt-4">
            <Heading size="sm" className="leading-tight ">Info
            </Heading>
            <div className="w-[20rem] p-4 rounded-lg bg-secondary/20"></div>

            <div className="mt-2">
                <Heading size="sm" className="capitalize ">Number
                </Heading>
                <p>123456</p>
            </div>
            <div className="mt-2">
                <Heading size="sm" className="capitalize ">Project
                </Heading>
                <p>The Project 1</p>
            </div>
            <div className="mt-2">
                <Heading size="sm" className="capitalize ">
                    Client
                </Heading>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="mt-2">
                <Heading size="sm" className="capitalize ">
                    Client
                </Heading>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="mt-2">
                <div className="flex justify-between gap-x-1">
                    <div className="flex flex-col ">
                        <Heading size="sm" className="capitalize ">
                            Address
                        </Heading>
                        <p>Street number, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, recusandae? Recusandae quas officiis temporibus ab ipsam aliquid aliquam delectus animi ut.</p>
                    </div>
                    <div className="h-24 rounded w-44 bg-secondary/20"></div>
                </div>

            </div>

            <div className="mt-2">
                <Heading size="sm" className="capitalize ">
                    Description
                </Heading>
                <p>Street number, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, recusandae? Recusandae quas officiis temporibus ab ipsam aliquid aliquam delectus animi ut.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam perferendis saepe quae. Alias assumenda eligendi non officiis, fuga nostrum sapiente quod nesciunt illo iste atque cupiditate doloribus dolore facere.</p>
            </div>
        </div>
    )
}

export default Info