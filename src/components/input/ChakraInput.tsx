import * as React from "react";
import { Input } from "@chakra-ui/react";
import { InputProps } from "./validations";

const ChakraInput = ({
  label,
  htmlAttributes,
  register,
  validations,
  placeholder,
  _placeholder,
  requirements,
  pattern
}: InputProps) => {
  return (
    <>
      <Input
        {...htmlAttributes}
        _placeholder={_placeholder}
        placeholder={placeholder}
        {...register(label, {
          ...requirements,
          validate: { ...validations }
        })}
      />
    </>
  );
};
export default ChakraInput;
