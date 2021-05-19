import React from 'react';
import ninjaStyles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
const ninjas = ({ninjas}) => {
  
    return (
        <div>
            <h1>All Ninjas</h1>
            {
                ninjas.map(ninja=>(
                    <Link href={"/ninjas/"+ ninja.id} key={ninja.id}>
                        <a className={ninjaStyles.single}>
                            <h3>{ninja.name}</h3>
                        </a>

                    </Link>
                ))
            }
        </div>
    );
};

export const getStaticProps =async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const data= await res.json();

    return{
        props: {
            ninjas: data
        }
    }
}

export default ninjas;