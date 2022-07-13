import * as React from "react";
import { Input, Tooltip } from "@chakra-ui/react";
import { InputProps } from "./validations";


const ChakraInput = ({
  label,
  htmlAttributes,
  register,
  validations,
  placeholder,
  _placeholder,
  requirements,
  message,
  pattern
}: InputProps) => {
  return (
    <>
      <Tooltip label={message} hasArrow arrowSize={15}>
      <Input
        {...htmlAttributes}
        _placeholder={_placeholder}
        placeholder={placeholder}
        {...register(label, {
          ...requirements,
          validate: { ...validations },
          pattern: pattern
        })}
      />
     </Tooltip> 
    </>
  );
};

export default ChakraInput;
