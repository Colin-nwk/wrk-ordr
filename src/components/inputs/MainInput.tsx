import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'

const MainInput = ({ label, placeholder, }: { label: string, placeholder: string }) => {
    return (
        <Field className="mb-4">
            <Label className="text-base font-semibold capitalize text-[#333333]">{label}</Label>
            <Input
                className={clsx(
                    'mt-2 block w-full rounded-lg border border-tertiary/20 py-2 px-3 text-secondary bg-[#F5F5F8]',
                    'focus:outline-none data-[focus]:outline data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )}
                placeholder={placeholder}
            />
            {/* <Description className="text-red-500 text-sm/6 line-clamp-1">Use your real name so people will recognize you.</Description> */}
        </Field>

    )
}

export default MainInput