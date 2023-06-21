import { FieldHookConfig, useField } from "formik";
import Select, { SingleValue } from "react-select";
import React from "react";

export const SelectField: React.FC<FieldHookConfig<string>> = ({
  ...props
}) => {
  // Inpout Value
  const arrayForLoop: number[] = [];
  for (let i: number = 1; i <= 10; i++) {
    arrayForLoop.push(i);
  }

  //   Usefield
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched } = helpers;

  //   React Select
  const options = arrayForLoop.map((item) => ({
    value: item,
    label: item,
  }));

  return (
    <div>
      <Select
        name={field.name}
        options={options}
        onChange={(
          option: SingleValue<{
            value: number;
            label: number;
          }>
        ) => {
          if (option) setValue(option.value.toString());
        }}
        onBlur={() => setTouched(true)}
      />

      {meta.touched && meta.error ? (
        <div className="text-xs text-red-600 ">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SelectField;
