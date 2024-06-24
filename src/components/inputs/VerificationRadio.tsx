import { Radio, RadioGroup } from '@headlessui/react'

import { ImRadioChecked2 } from "react-icons/im";

import { useState } from 'react'

const VerificationRadio = () => {
    const plans = [
        { name: 'SMS Verification', id: 'sms', },
        { name: 'Email Verification', id: 'email', },
    ]
    const [selected, setSelected] = useState(plans[0]);
    console.log(selected.id)
    return (
        <div className='w-full mt-4'>
            <RadioGroup by="name" value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
                {plans.map((plan) => (
                    <Radio
                        key={plan.id}
                        value={plan}
                        className="group relative flex cursor-pointer rounded-lg  py-4 px-5 text-secondary transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-primary data-[checked]:bg-primary/5 border"
                    >
                        <div className="flex items-center justify-between w-full">
                            <div className="text-sm/6">
                                <p className="font-semibold text-secondary">{plan.name}</p>
                                <div className="flex gap-2 text-white/50">
                                    <p className="text-sm/6">Receive verification code via <span className='uppercase'>
                                        {plan.id}</span></p>
                                </div>
                            </div>
                            <ImRadioChecked2 className="size-6 fill-primary opacity-5 transition group-data-[checked]:opacity-100 " />

                        </div>
                    </Radio>
                ))}
            </RadioGroup>
        </div>
    )
}

export default VerificationRadio