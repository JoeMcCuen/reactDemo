import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  warningLevel?: "primary" | "secondary" | "warning" | "danger";
  dismissible?: "alert-dismissible" | "";
  onClose: () => void;
}

const Alert = ({
  children,
  warningLevel = "warning",
  dismissible = "",
  onClose,
}: Props) => {
  return (
    <>
      <div className={"alert alert-" + warningLevel + " " + dismissible}>
        {children}
        <button
          type="button"
          className="btn-close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        >
          {" "}
        </button>
      </div>
      ;
    </>
  );
};

export default Alert;
