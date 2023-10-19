import { InputText } from "primereact/inputtext";

const App = () => {
  return (
    <>
      <span className="p-input-icon-left h-10">
        <i className="pi pi-search" />
        <InputText placeholder="Search"/>
      </span>

      <span className="p-input-icon-right">
        <i className="pi pi-spin pi-spinner" />
        <InputText />
      </span>
    </>
  );
};

export default App;
