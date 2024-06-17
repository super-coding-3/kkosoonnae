import { Field, ErrorMessage } from "formik";

interface ReservationTextAreaProps {
  label: string;
  name: string;
}
function ReservationTextArea({ label, name }: ReservationTextAreaProps) {
  return (
    <div className="reservation-formgroup flex items-center">
      <label htmlFor={name} className="w-[80px] text-black text-sm">
        {label}
      </label>
      <div style={{ width: "calc(100% - 80px)" }}>
        <Field
          as="textarea"
          id={name}
          name={name}
          className="w-full h-24 border-1 border-gray-300 rounded"
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

export default ReservationTextArea;
