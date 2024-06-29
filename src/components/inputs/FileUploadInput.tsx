import React, { useState, useCallback } from 'react';
import { useDropzone, Accept } from 'react-dropzone';
import { useController, Control } from 'react-hook-form';
import clsx from 'clsx';
import { Description, Field, Label } from '@headlessui/react'
import { FaFileArrowUp } from "react-icons/fa6";
import { TbTrashXFilled } from "react-icons/tb";

type FileUploadInputProps = {
    name: string;
    label: string;
    acceptTypes: Accept;
    maxFiles: number;
    maxSizeInMB: number;
    control: Control<any>;
    rules?: { required: boolean };
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const FileUploadInput: React.FC<FileUploadInputProps> = ({ name, label, acceptTypes, maxFiles, maxSizeInMB, control, rules, variant = 'primary' }) => {
    const {
        field: { onChange, onBlur },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });

    const [files, setFiles] = useState<File[]>([]);
    const [fileRejections, setFileRejections] = useState<any[]>([]);

    const onDrop = useCallback((acceptedFiles: File[], fileRejectionItems: any[]) => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        setFileRejections(fileRejectionItems);
        onChange(acceptedFiles);
    }, [onChange]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: acceptTypes,
        maxFiles: maxFiles,
        maxSize: maxSizeInMB * 1048576
    });

    const removeFile = (fileName: string) => {
        const newFiles = files.filter(file => file.name !== fileName);
        setFiles(newFiles);
        onChange(newFiles);
    };

    // FIXME: clsx below is not neccesary
    const baseStyles = 'rounded-lg w-full focus:outline-none data-[focus]:outline data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 mt-1 block';
    const styles = {
        primary: 'border border-tertiary/20 text-secondary bg-white',
        secondary: 'border-secondary bg-yellow-100',
        tertiary: 'border-tertiary bg-green-100',
    };

    const dropzoneClassName = clsx(baseStyles, styles[variant], 'p-4 border-dashed');

    return (
        <Field className="">
            <Label className="text-base font-semibold capitalize text-[#333333] mb-2">{label}</Label>

            <div className={dropzoneClassName}>
                <div {...getRootProps()} className="flex flex-col items-center justify-center w-full p-5 py-16 rounded-lg cursor-pointer h-fit bg-secondary/5">
                    <input {...getInputProps()} onBlur={onBlur} />

                    <FaFileArrowUp className="size-16" />
                    <h3 className="text-primary">
                        Add File
                    </h3>

                    {isDragActive ? <p>Drop files...</p> : <p>or drag and drop</p>}
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

            {error && (
                <Description className="text-red-500 text-sm/6 line-clamp-1">{error.message}</Description>
            )}
        </Field>
    );
};

export default FileUploadInput;



