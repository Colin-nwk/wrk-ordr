
import { FC, useState, useCallback } from 'react';
import { useDropzone, Accept } from 'react-dropzone';
import { useFormContext, Controller } from 'react-hook-form';

interface FileUploadInputProps {
    name: string;
    label: string;
    acceptTypes: Accept;
    maxFiles: number;
    maxSizeInMB: number;
}

const FileUploadInput: FC<FileUploadInputProps> = ({ name, acceptTypes, maxFiles, maxSizeInMB, label }) => {
    const { control } = useFormContext();

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, []);

    const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
        onDrop,
        accept: acceptTypes,
        maxFiles: maxFiles,
        maxSize: maxSizeInMB * 1048576
    });

    const [files, setFiles] = useState<File[]>([]);

    const removeFile = (fileName: string) => {
        const newFiles = files.filter(file => file.name !== fileName);
        setFiles(newFiles);
    };

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={[]}
            render={({ field: { onChange, onBlur, value } }) => (

                <div >
                    <span>{label}</span>

                    <div className='w-full p-4 bg-white rounded-xl'>
                        <div {...getRootProps()} className="flex w-full p-5 rounded-lg cursor-pointer h-fit bg-secondary/5">
                            <input {...getInputProps()} onBlur={onBlur} onChange={(event) => {
                                onChange(event.target.files);
                                onDrop(Array.from(event.target.files || []));
                            }} />
                            {
                                isDragActive ?
                                    <p>Drop the files here ...</p> :
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                            }
                        </div>
                        <ul>
                            {files.map(file => (
                                <li key={file.name} className="flex items-center justify-between p-2">
                                    {file.name} - {Math.round(file.size / 1024 / 1024 * 100) / 100} MB
                                    <button type="button" onClick={() => removeFile(file.name)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        {fileRejections.length > 0 && (
                            <div>
                                <p className="text-red-500">Error: Some files were rejected:</p>
                                <ul>
                                    {fileRejections.map((rejection, index) => (
                                        <li key={index}>
                                            {rejection.file.name}: {rejection.errors.map((error: any) => <span key={error.code}>{error.message}</span>)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        />
    );
};

export default FileUploadInput;
