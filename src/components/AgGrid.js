import { AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import "../styles.css";

const AgGrid  = props => {
    return (
            <div className="ag-theme-balham" style={{height: "100%", maxWidth: "90vw"}}> 
            {props.data[0] !== undefined ? (
                <AgGridReact
                    columnDefs={Object.keys(props.data[0]).map((result => ({headerName: result.toUpperCase(), field: result.toLowerCase(), sortable: true, filter: true, suppressSizeToFit: true})))}
                    rowData={props.data}
                    pagination={true}
                />
            ): (
                <div style={{textAlign: "center"}}>
                    <span style={{fontFamily: "unset", fontSize: "32px", color: "white"}}>Loading..</span>
                </div>
            )}
            </div>
    )
}

export default AgGrid;