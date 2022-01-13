import Grid from '@mui/material/Grid';
import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const CategoryScreen = () => {
  const headers = ['id', 'name', 'old', 'description', 'actions'];
  const rows = [
    {
      id: 2,
      name: 'abc',
      description: 'abc',
      old: 30,
      action: (
        <div>
          <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
        </div>
      )
    },
    {
      id: 1,
      name: 'abc',
      description: 'hello',
      old: 30,
      action: (
        <div>
          <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
        </div>
      )
    }
  ];
  return (
    <Grid>
      <Filter title="Category" btnTitle="+ Add Categories" />
      <Table headers={headers} rows={rows} />
    </Grid>
  );
};

export default CategoryScreen;
