import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Paginator } from "primereact/paginator";
import CustomeFilter from "./CustomerFilter.jsx";

const columns = [
  { field: "id", header: "id" },
  { field: "identification", header: "Identificacion" },
  { field: "name", header: "Nombre" },
  { field: "phone", header: "Telefono" },
  { field: "email", header: "Email" },
  { field: "address", header: "Direccion" },
];

const initialFieldsValues = {
  identification: "",
  name: "",
  phone: "",
  email: "",
  address: "",
};

const CustomerList = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [customers, setCustomers] = useState();
  const [elementSelected, setElementSelected] = useState();
  const [first, setFirst] = useState(0);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);
  const [count, setCount] = useState(0);
  const [filtered, setFiltered] = useState(0);
  const [filterFields, setFilterFields] = useState(initialFieldsValues);

  const getCustomers = async (offset = 0) => {
    let response;
    if (filtered === 0) {
      response = await actions.getAll("customer", 10, offset);
    } else {
      response = await actions.getFilter("customer", filterFields, 0, offset);
    }
    if (response.ok) {
      setCustomers(response.data);
      setCount(response.count);
      setRows(10);
    }
    setFilterFields(initialFieldsValues);
  };

  const header = (
    <div className="flex flex-row justify-content-between">
      <CustomeFilter
        setFiltered={setFiltered}
        setFilterFields={setFilterFields}
        filterFields={filterFields}
        filtered={filtered}
        initialFieldsValues={initialFieldsValues}
      />
    </div>
  );

  useEffect(() => {
    getCustomers();
  }, [filtered]);

  return (
    <div className=" max-container-width mx-auto">
      <DataTable
        value={customers}
        header={header}
        stripedRows
        selectionMode="single"
        selection={elementSelected}
        onSelectionChange={(e) => navigate("/customer/detail/" + e.value.id)}
        // scrollable scrollHeight="70vh"
      >
        {columns.map((col) => {
          return (
            <Column
              key={col.field}
              field={col.field}
              header={col.header}
              sortable
            />
          );
        })}
      </DataTable>
      <Paginator
        template={{ layout: "PrevPageLink PageLinks NextPageLink" }}
        first={first}
        rows={rows}
        page={page}
        totalRecords={count}
        onPageChange={(e) => {
          console.log(e);
          setPage(e.page);
          setRows(e.rows);
          setFirst(e.first);
          getCustomers(e.first);
        }}
      />
    </div>
  );
};
export default CustomerList;
