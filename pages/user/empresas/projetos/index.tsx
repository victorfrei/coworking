import * as React from 'react';
import Header from '../../../../components/header';
import axios from 'axios';
import List from '../../../../components/List';






export async function getServerSideProps() {

    const projetos = (await axios.get("https://coworking-backend-thexarcano.vercel.app/api/projetos")).data;
  
    return {
      props: {
        projetos
      }
    }
  }
  



export default function CheckboxListSecondary(props:{projetos: any}) {
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
            <List Data={props.projetos}/>
        </div>
    );
}