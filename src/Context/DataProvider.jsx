import { useEffect, useState } from 'react';
import { DataContext } from './DataContext';

const DataProvider = ({children}) => {
const [data,setData]=useState([])
const [loading,setLoading]=useState(true)


useEffect(()=>{

const fetchData=async()=>{
    try {
        const res=await fetch("/games.json");
        const result=await res.json();
        setData(result)
        setLoading(false)


    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}
fetchData()

},[])

const dataInfo={
    data,loading
}
    return (
        <DataContext value={dataInfo}>
            {children}
        </DataContext>
    );
};

export default DataProvider;