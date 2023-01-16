import { useQuery } from '@apollo/client'
import { TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Key, useState } from 'react';
import { Character, GET_CHARACTERS } from '../../queries/Queries';
import { Card } from '../Card/Card';

const useStyles = makeStyles(() => ({

}))

function Home() {
  const { data, loading, error } = useQuery<{ characters: Character }>(GET_CHARACTERS);
  // const [page, setPage] = useState(2);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  const classes = useStyles();

  // const handleChangePage = (
  //   event: React.MouseEvent<HTMLButtonElement> | null,
  //   newPage: number,
  // ) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <div>
      {loading ? <p>Loading...</p> : <Card />}
      {error && <p>Error! {error.message}</p>}
      {/* <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      <p style={{ color: "#fff" }}>Carregar Mais...</p>
    </div>
  )
}

export default Home