import React from "react";
import KpiListItems from "./ui/KpiListItems.jsx";
// import CaseListComponent from "./ui/CaseListComponent.jsx";
import ListComponent from "../common/components/ListComponent.jsx";

const columns = [
  { field: "id", header: "id" },
  { field: "is_active", header: "Activo" },
  { field: "customer_id", header: "id CLiente" },
  { field: "professional_id", header: "id Profesional" },
  { field: "category_id", header: "Categoria" },
  { field: "started", header: "Iniciado" },
  { field: "typeservice_id", header: "Tipo" },
  { field: "closed", header: "Cerrado" },
  { field: "delivered", header: "Entregado" },
];

const columnFilter = [
  { field: "id", header: "id", type: "text" },
  { field: "is_active", header: "Activo", type: "check" },
  { field: "customer_id", header: "id CLiente", type: "text" },
  { field: "professional_id", header: "id Profesional", type: "text" },
  { field: "category_id", header: "Categoria", type: "text" },
  { field: "started", header: "Iniciado", type: "check" },
  { field: "typeservice_id", header: "Tipo", type: "check" },
  { field: "closed", header: "Cerrado", type: "check" },
  { field: "delivered", header: "Entregado", type: "check" },
];

const initialFieldsValues = {
  id: "",
  is_active: "",
  customer_id: "",
  professional_id: "",
  category_id: "",
  started: "",
  typeservice_id: "",
  closed: "",
  delivered: "",
};

const CaseList = () => {
  return (
    <ListComponent
      initialFieldsValues={initialFieldsValues}
      table="case"
      columns={columns}
      columnFilter={columnFilter}
    />
  );

  // return (
  //   <div className="w-full flex justify-content-center h-full">
  //     <div className="flex flex-column gap-5 p-5 w-full max-container-width">
  //       <KpiListItems />
  //       {/* <CaseListComponent /> */}
  //     </div>
  //   </div>
  // );
};

export default CaseList;
