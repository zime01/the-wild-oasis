// import { useUser } from 'features/authentication/useUser';
import { useUser } from "./useUser";
import { useState } from "react";
// import Button from "ui/Button";
import Button from "../../ui/Button";
// import FileInput from "ui/FileInput";
import FileInput from "../../ui/FileInput";
// import Form from "ui/Form";
import Form from "../../ui/Form";
// import FormRow from "ui/FormRow";
import FormRow from "../../ui/FormRow";
// import Input from "ui/Input";
import Input from "../../ui/Input";
// import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  // We don't need the loading state
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  //const { mutate: updateUser, isLoading: isUpdating } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();
  }

  // function handleCancel(e) {
  //   // We don't even need preventDefault because this button was designed to reset the form (remember, it has the HTML attribute 'reset')
  //   setFullName(currentFullName);
  //   setAvatar(null);
  // }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          //disabled={isUpdating}
          id="fullName"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          //disabled={isUpdating}
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          // We should also validate that it's actually an image, but never mind
        />
      </FormRow>
      <FormRow>
        <Button type="reset" variation="secondary">
          Cancel
        </Button>
        <Button>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
