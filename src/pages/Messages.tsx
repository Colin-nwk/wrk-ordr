
import { FileUploadInput } from "../components"
import { useForm, FormProvider } from 'react-hook-form';


const Messages = () => {


    const acceptTypes = {
        'image/png': ['.png', '.webp']
        // 'application/pdf': ['.pdf'],
        // 'text/csv': ['.csv'],
        // 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
        // 'application/msword': ['.doc'],
        // 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    };

    const methods = useForm({
        defaultValues: {
            documents: []
        }
    });
    return (

        <div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
                    <FileUploadInput
                        name="documents"
                        acceptTypes={acceptTypes}
                        maxFiles={5}
                        maxSizeInMB={5}
                        label="upload docs"
                    />
                    <button type="submit">Submit</button>
                </form>
            </FormProvider>
        </div>
    )
}

export default Messages