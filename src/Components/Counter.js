import React, { useState } from 'react'
import { Button,  Grid, Segment } from 'semantic-ui-react'
import './Counter.css'
function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  let counterClass = '';
  if (count < 5) {
    counterClass = 'green';
  } else if (count < 10) {
    counterClass = 'blue';
  } else {
    counterClass = 'red';
  }

  return (

    
    
    <Segment >

      <Grid columns={2} style={{ textAlign:'center', justifyContent:'center'}}> 
       
        <Grid.Row >
          <Grid.Column>
            <div>
            <h2>Count </h2>
            {/* <h1>{count}</h1> */}
            <h1 className={counterClass}>{count}</h1>
            </div>
          </Grid.Column>
        </Grid.Row>
       
        <Grid.Row >

          <Grid.Column>
            <Button color='green'  disabled={count === 10}  onClick={handleIncrement}>Increment</Button>
          </Grid.Column>

          <Grid.Column>
            <Button color='red' 
            disabled={count === 0} 
            onClick={handleDecrement}>Decrement</Button>
          </Grid.Column>
        </Grid.Row>

      </Grid>

    </Segment>
    
  )
}

export default Counter
