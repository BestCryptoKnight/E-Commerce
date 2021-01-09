import { Chip } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { useState } from 'react';
import CustomTooltip from './CustomTooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Chips = () => {
  const classes = useStyles();
  const [chipData, setChipData] = useState([
    { key: 0, label: 'electronics' },
    { key: 1, label: 'jewelery' },
    { key: 2, label: 'men clothing' },
    { key: 3, label: 'women clothing' },
  ]);

  const handleDelete = (chipToDelete) => () =>
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'women clothing') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <CustomTooltip title={`Remove ${data.label} category`}>
              <Chip
                icon={icon}
                label={data.label}
                onDelete={data.label === 'All' ? undefined : handleDelete(data)}
                className={classes.chip}
              />
            </CustomTooltip>
          </li>
        );
      })}
    </Paper>
  );
};

export default Chips;
