import { Field, ErrorMessage } from "formik";

interface ReservationFormGroupProps {
  label: string;
  name: string;
  value?: string;
  type?: string;
  readOnly?: boolean;
}

function ReservationFormGroup({
  label,
  name,
  value,
  type = "text",
  readOnly = false,
}: ReservationFormGroupProps) {
  return (
    <div className="flex items-center">
      <label htmlFor={name} className="w-[80px] text-black text-sm">
        {label}
      </label>
      <div style={{ width: "calc(100% - 80px)" }}>
        <Field
          type={type}
          id={name}
          name={name}
          value={value}
          readOnly={readOnly}
          className="w-full  border-1 border-gray-300 rounded"
        />
        <ErrorMessage
          name={name}
          component="p"
          className="text-xs text-red-600"
        />
      </div>
    </div>
  );
}

export default ReservationFormGroup;
