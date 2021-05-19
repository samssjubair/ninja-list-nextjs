import Link from 'next/link';
import { useEffect } from 'react';
import {useRouter} from 'next/router'

const NotFound = () => {
    const router= useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/");
        },3000)
    },[])
    return (
        <div className="not-found">
            <h1>Oooopppps!</h1>
            <p>The page you request can't be found</p>
            <p>Try again later or go to <Link href="/"><a>Home</a></Link> </p>
        </div>
    );
};

export default NotFound;