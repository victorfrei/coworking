import * as React from 'react';
import Header from '../../../components/header';
import axios from 'axios';
import List from '../../../components/List';


export async function getServerSideProps() {

    const parceiros = (await axios.get("https://coworking-backend-thexarcano.vercel.app/api/parceiros")).data;
  
    return {
      props: {
        parceiros
      }
    }
  }
  



export default function CheckboxListSecondary(props:{parceiros: any}) {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <div>
            <Header />
            <List Data={props.parceiros}/>
            {/* <DataGrid {...props.parceiros} disableColumnMenu /> */}
        </div>
    );
}