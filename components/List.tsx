import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function List(props: { Data: any }) {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 20,
  //   maxColumns: 5,
  // });


  const columns = [

    { field: 'id', hide: true },

    { field: 'nome', headerName: 'Nome', width: 110 },

    { field: 'thumbnail', headerName: 'Thumbanail', width: 180, editable: false },

    { field: 'descricao', headerName: 'Descrição', width: 120, editable: false },

    // { field: 'traderEmail', headerName: 'Trader Email', width: 150 }
  ]

  const datas = {columns, rows: props.Data}

  return (
    <div style={{ height: 'calc(100vh - 70px)', width: '100%' }}>
      <DataGrid {...datas} disableColumnMenu />
    </div>
  );
}
