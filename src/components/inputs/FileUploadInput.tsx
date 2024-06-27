// import React from 'react'
import { Description, Field, Input } from '@headlessui/react'

import { Wrapper } from "../index"

const FileUploadInput = () => {
    return (
        <div className='w-full bg-white p-4'>

            <Field className="w-full h-full">
                <Description className="text-sm/6 font-medium  capitalize mb-4">Upload</Description>

                <Wrapper className='border rounded-2xl'>

                    <label htmlFor='upload' className=" w-full h-fit bg-secondary/5 p-5 rounded-xl flex">
                        <Input name="upload" id="upload" className="hidden" type="file" />
                    </label>
                </Wrapper>
            </Field>

        </div>
    )
}

export default FileUploadInput