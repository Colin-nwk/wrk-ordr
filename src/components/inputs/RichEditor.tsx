import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichEditor = ({ name, label }: { name: string, label?: string }) => {
    const [value, setValue] = useState('');
    return (
        <div className="w-full">
            {name}
            {label}
            <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
    )
}

export default RichEditor



// import React from 'react';
// import { Controller, useFormContext } from 'react-hook-form';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// type RichTextEditorProps = {
//     name: string;
//     label?: string;
// }

// const RichTextEditor: React.FC<RichTextEditorProps> = ({ name, label }) => {
//     const { control } = useFormContext(); // Access the form context

//     return (
//         <Controller
//             name={name}
//             control={control}
//             render={({ field }) => (
//                 <>
//                     <span>{label}</span>
//                     <ReactQuill
//                         theme="snow"
//                         value={field.value || ''}
//                         onChange={field.onChange}
//                         onBlur={field.onBlur}
//                     />
//                 </>
//             )}
//         />
//     );
// };

// export default RichTextEditor;
