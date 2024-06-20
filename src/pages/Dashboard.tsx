
import { Wrapper, Heading, Activity, Schedule } from "../components"

const Dashbaord = () => {
    return (

        <>
            <main className="w-full h-full">
                <Heading className="text-[30px]">
                    Dashboard
                </Heading>
                <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
                    <Wrapper >
                        <Heading className="my-4 text-2xl ">
                            Schedule
                        </Heading>

                        <Schedule />


                        <div>
                            {/* <div className="relative flex items-center justify-center my-3">
                                <div className="flex-grow border-t "></div>
                                <span className="flex-shrink px-4 text-xs text-secondary/50">Fri 3, May 2024</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>
                            <div className="flex w-full gap-4 py-4 mb-4 border-b">
                                <div className="flex flex-col items-center justify-center flex-1 w-20 pl-3 pr-3 border-r h-fit">
                                    <Heading size="md" className="w-full line-clamp-1">
                                        9:00
                                    </Heading>
                                    <span className="font-medium uppercase">am</span>
                                </div>
                                <div className="flex flex-col space-y-1 ">
                                    <Heading size="md" className="capitalize line-clamp-1">
                                        Job title
                                    </Heading>
                                    <p className="text-base line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.lorem Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur  </p>

                                    <span className="font-medium text-paragraph">James Carter</span>
                                </div>
                            </div>
                            <div className="flex w-full gap-4 py-4 mb-4 border-b">
                                <div className="flex flex-col items-center justify-center flex-1 w-20 pl-3 pr-3 border-r h-fit">
                                    <Heading size="md" className="w-full line-clamp-1">
                                        9:00
                                    </Heading>
                                    <span className="font-medium uppercase">am</span>
                                </div>
                                <div className="flex flex-col space-y-1 ">
                                    <Heading size="md" className="capitalize line-clamp-1">
                                        Job title
                                    </Heading>
                                    <p className="text-base line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.lorem Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem velit nostrum quis quibusdam </p>

                                    <span className="font-medium text-paragraph">James Carter</span>
                                </div>
                            </div> */}
                        </div>

                    </Wrapper>
                    <Wrapper className="overflow-y-scroll max-h-96">
                        <Heading className="my-4 text-2xl ">
                            Activities
                        </Heading>
                        {/* <aside className="w-full h-full mt-4">
                            <div className="relative flex items-center pb-4 space-x-4 border-b cursor-pointer">
                                <img src={nature} alt="" className="size-[80px] rounded-md" />
                                <div className="flex flex-col">
                                    <Heading size="md" className="w-full line-clamp-1">
                                        Grace Jones uploaded a file
                                    </Heading>
                                    <span className="flex-shrink text-xs text-secondary/50">Fri 3, May 2024</span>
                                    <span className="font-medium text-paragraph line-clamp-2">James Carter</span>
                                </div>
                            </div>
                            <div className="relative flex items-center pb-4 space-x-4 border-b cursor-pointer">
                                <div className="flex flex-col">
                                    <Heading size="md" className="w-full line-clamp-1">
                                        Grace Jones uploaded a file
                                    </Heading>
                                    <span className="flex-shrink text-xs text-secondary/50">Fri 3, May 2024</span>
                                    <span className="font-medium text-paragraph line-clamp-1">James Carter</span>
                                    <p className="text-base font-light line-clamp-2">Lorem ipsum dolor </p>
                                </div>
                            </div>

                        </aside> */}
                        <Activity />
                    </Wrapper>
                </div>



            </main>
        </>

    )
}

export default Dashbaord