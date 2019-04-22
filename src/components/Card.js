import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  paper: { margin: '16px', padding: '16px' }
}

const Card = ({ classes, question, onSubmit }) => {
  const [checked, setChecked] = useState({})

  function renderAnswer (letter, text) {
    return (
      <FormControlLabel
        key={letter}
        control={
          <Checkbox
            checked={!!checked[letter]}
            onChange={e =>
              setChecked({ ...checked, [letter]: !checked[letter] })
            }
            value={letter}
          />
        }
        label={`${letter}. ${text}`}
      />
    )
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant='subheading'>{question.id}</Typography>
      <Typography variant='title'>{question.text}</Typography>
      <FormGroup>
        {Object.keys(question.answers).map(key =>
          renderAnswer(key, question.answers[key])
        )}
      </FormGroup>
      <Button
        variant='contained'
        color='primary'
        onClick={() => onSubmit(checked)}
      >
        Submit
      </Button>
    </Paper>
  )
}

export default withStyles(styles)(Card)
