// import React from 'react';
// import { Controller, useFormContext } from 'react-hook-form';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// type RichTextEditorProps = {
//     name: string;
//     label?: string;
// }

// const RichTextEditor: React.FC<RichTextEditorProps> = ({ name, label }) => {
//     const { control } = useFormContext();

//     return (
//         <Controller
//             name={name}
//             control={control}
//             render={({ field }) => (
//                 <>
//                     <div className="space-y-2 bg-white">
//                         <span className="text-base font-semibold capitalize text-[#333333]">{label}</span>
//                         <div className='w-full'>
//                             <ReactQuill
//                                 theme="snow"
//                                 value={field.value || ''}
//                                 onChange={field.onChange}
//                                 onBlur={field.onBlur}
//                                 className='w-full border-none min-h-20 focus-within:border-none focus:rounded-xl rounded-xl'
//                             />

//                         </div>
//                     </div>
//                 </>
//             )}
//         />
//     );
// };

// export default RichTextEditor;


import React from 'react';
import { useController, Control } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Description, Field, Label } from '@headlessui/react'

type RichTextEditorProps = {
    name: string;
    label: string;
    control: Control<any>;
    rules?: { required: boolean };
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ name, label, control, rules }) => {
    const {
        field: { onChange, onBlur, value },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });

    return (
        <Field className="">
            <Label className="text-base font-semibold capitalize text-[#333333] mb-2">{label}</Label>

            <div className='relative'>
                <ReactQuill
                    theme="snow"
                    value={value || ''}
                    onChange={onChange}
                    onBlur={onBlur}
                    className='w-full border-none min-h-20 focus-within:border-none focus:rounded-xl rounded-xl'
                />
            </div>

            {error && (
                <Description className="text-red-500 text-sm/6 line-clamp-1">{error.message}</Description>
            )}
        </Field>
    );
};

export default RichTextEditor;
