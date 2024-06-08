import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import IconPlusDark from '../../assets/Accordion/IconPlus';
import IconMinusDark from '../../assets/Accordion/IconMinus';

import styles from './Accordion.module.scss';
import Input from '../Input';
import SelectUI from '../Select';
import {
  useGetTotalAuthorsQuery,
  useGetTotalLocationsQuery,
} from '../../redux/query/artApi';

export default function AccordionUsage({
  title,
  value,
  onChangeValue,
  valueFrom,
  valueTo,
  onChangeInputFromValue,
  onChangeInputToValue,
}) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const { data: authors = [] } = useGetTotalAuthorsQuery('');
  const { data: locations = [] } = useGetTotalLocationsQuery('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Accordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
      className={styles.blockMain}
    >
      <AccordionSummary
        expandIcon={
          expanded === 'panel1' ? <IconMinusDark /> : <IconPlusDark />
        }
        aria-controls="panel1-content"
        id="panel1-header"
        className={styles.blockUp}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails className={styles.blockDown}>
        {title === 'Years' ? (
          <Input
            valueFrom={valueFrom}
            valueTo={valueTo}
            onChangeInputFromValue={onChangeInputFromValue}
            onChangeInputToValue={onChangeInputToValue}
          />
        ) : (
          <SelectUI
            title={title}
            data={title === 'Artist' ? authors : locations}
            value={value}
            onChangeValue={onChangeValue}
          />
        )}
      </AccordionDetails>
    </Accordion>
  );
}
