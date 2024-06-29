
import { CustomButton, CustomCheckbox, CustomInput, CustomSelect, FileUploadInput, RichEditor, Wrapper } from "../components"

import useDynamicForm from "../hooks/useDynamicForm";
import { Field } from "../schemas/dynamicSchema";

const Messages = () => {


    const acceptTypes = {
        'image/png': ['.png', '.webp']
        // 'application/pdf': ['.pdf'],
        // 'text/csv': ['.csv'],
        // 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
        // 'application/msword': ['.doc'],
        // 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    };


    const fields: Field[] = [
        { name: 'username', type: 'text', minLength: 3, placeholder: 'Username', errorMessage: 'Username must be at least 3 characters long', isRequired: true },
        { name: 'email', type: 'email', placeholder: 'Email', errorMessage: 'Invalid email address', isRequired: true },
        { name: 'age', type: 'number', min: 18, placeholder: 'Age', errorMessage: 'You must be at least 18 years old', isRequired: true },
        { name: "documents", type: "file", isRequired: true, max: 5, maxSizeInMB: 5, min: 1 },
        { name: "description", type: "string", isRequired: true },
        { name: 'country', type: 'select', options: ['USA', 'Canada', 'UK'], placeholder: 'Country', errorMessage: 'Please select a country', isRequired: true },
        { name: 'subscribe', type: 'checkbox', placeholder: 'Subscribe to newsletter', isRequired: true },
        // {
        //     name: 'gender', type: 'radio', options: ['Male', 'Female'], isRequired: true
        // }
    ];


    const defaultValues = {
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        age: "25",
        documents: "",
        description: "<p>lorem  lorem ipsom</p> <br/> <strong>Stronger</strong> <br/> <h1>headings</h1>"

    };



    const { control, handleSubmit, formState } = useDynamicForm(fields, defaultValues);
    const { isValid } = formState;


    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (

        <Wrapper>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                <FileUploadInput
                    name="documents"
                    acceptTypes={acceptTypes}
                    maxFiles={5}
                    maxSizeInMB={5}
                    label="upload docs"
                    control={control}

                />
                <RichEditor name="description" label="description" control={control} rules={{ required: true }} placeholder="Write something awesome..." />

                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    type="text"
                    variant="primary"
                    label="username"
                    rules={{ required: true }}
                />
                <CustomInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    type="email"
                    label="email"
                    variant="primary"
                    rules={{ required: true }}
                />
                <CustomSelect name="country" control={control} label="country" options={['USA', 'Canada', 'UK']} />
                <CustomInput
                    name="age"
                    control={control}
                    placeholder="Age"
                    type="number"
                    label="age"
                    variant="primary"
                />
                <CustomCheckbox name="subscribe" label="Subscribe to newsletter" control={control} />

                <CustomButton label="submit" variant="primary" size="lg" type="submit" disabled={!isValid} />
            </form>
        </Wrapper>

    )
}

export default Messages