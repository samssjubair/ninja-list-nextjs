

export const getStaticPaths=async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users/");
    const data=await res.json();
    const paths= data.map(ninja=>{
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps=async (context)=>{
    const id=context.params.id;
    const res= await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const data=await res.json();

    return {
        props: {ninja: data}
    }
}

const details = ({ninja}) => {
    return (
        <div>
            <h1>Ninja Details</h1>
            <h2>{ninja.name}</h2>
            <h3>{ninja.website}</h3>
            <h3>{ninja.email}</h3>
            
        </div>
    );
};

export default details;