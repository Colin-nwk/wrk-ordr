import { FC, useState, useCallback } from 'react';
import { useDropzone, Accept } from 'react-dropzone';
import { useFormContext, Controller } from 'react-hook-form';
import { Heading } from '../index';
import { FaFileArrowUp } from "react-icons/fa6";
import { TbTrashXFilled } from "react-icons/tb";

type FileUploadInputProps = {
    name: string;
    label: string;
    acceptTypes: Accept;
    maxFiles: number;
    maxSizeInMB: number;
}

const FileUploadInput: FC<FileUploadInputProps> = ({ name, label, acceptTypes, maxFiles, maxSizeInMB }) => {
    const { control } = useFormContext();
    const [files, setFiles] = useState<File[]>([]);
    const [fileRejections, setFileRejections] = useState<any[]>([]);

    const onDrop = useCallback((acceptedFiles: File[], fileRejectionItems: any[]) => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        setFileRejections(fileRejectionItems);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: acceptTypes,
        maxFiles: maxFiles,
        maxSize: maxSizeInMB * 1048576
    });

    const removeFile = (fileName: string) => {
        const newFiles = files.filter(file => file.name !== fileName);
        setFiles(newFiles);
    };

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={[]}
            render={({ field }) => {
                const { onChange, onBlur } = field;
                return (
                    <div className="space-y-2">
                        <span className="text-base font-semibold capitalize text-[#333333]">{label}</span>
                        <div className='w-full p-4 bg-white border border-gray-200 border-dashed rounded-xl'>
                            <div {...getRootProps()} className="flex flex-col items-center justify-center w-full p-5 py-16 rounded-lg cursor-pointer h-fit bg-secondary/5">
                                <input {...getInputProps()} onBlur={onBlur} onChange={(event) => {
                                    onChange(event.target.files);
                                    onDrop(Array.from(event.target.files || []), []);
                                }} />

                                <FaFileArrowUp className="size-16" />
                                <Heading className="text-primary" size="sm">
                                    Add File
                                </Heading>

                                {isDragActive ?
                                    <p> drop files...</p> :
                                    <p>or drag and drop</p>
                                }
                            </div>
                            <ul>
                                {files.map(file => (
                                    <li key={file.name} className="flex items-center justify-between p-2 text-primary">
                                        {file.name} - {Math.round(file.size / 1024 / 1024 * 100) / 100} MB
                                        <button type="button" onClick={() => removeFile(file.name)}>
                                            <TbTrashXFilled className="text-red-500 transition-all duration-300 ease-in-out size-6 hover:text-red-700" />{""}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            {fileRejections.length > 0 && (
                                <div className="text-red-500 text-sm/6">
                                    <p>Error: Some files were rejected:</p>
                                    <ul>
                                        {fileRejections.map((rejection, index) => (
                                            <li key={index}>
                                                {rejection.file.name}: {rejection.errors.map((error: any) => <span className="text-sm/6" key={error.code}>{error.message}</span>)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                );
            }}
        />
    );
};

export default FileUploadInput;

