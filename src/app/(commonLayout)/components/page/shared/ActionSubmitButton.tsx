/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Spinner } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

const ActionSubmitButton = ({ children }: any) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant="faded">
      {pending ? <Spinner /> : children}
    </Button>
  );
};

export default ActionSubmitButton;
