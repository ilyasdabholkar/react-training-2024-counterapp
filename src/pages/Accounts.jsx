import React, { useState } from 'react'
import { useEffect } from 'react';
import { getAccounts } from '../services/accountService';

function Accounts() {
    const [accounts,setAccounts] = useState([]);

    async function getAllAccounts(){
        try{
            const {data} = await getAccounts();
            setAccounts([...data]);
            console.log(accounts);
        }catch(ex){
            console.log(ex);
            alert("error occured");
        }
    }

    useEffect(()=>{
        getAllAccounts();
    },[])

  return (
    <table className='table table-bordered mt-5'>
        <thead>
            <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Account Type</th>
                <th>Amount</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {accounts.map((acct)=>(
                <tr key={acct.id}>
                    <td>{acct.fullname}</td>
                    <td>{acct.email}</td>
                    <td>{acct.phone}</td>
                    <td>{acct.accountType}</td>
                    <td>{acct.amount}</td>
                    <td>
                        <button className='btn btn-warning btn-sm mx-2'>
                            Edit
                        </button>

                        <button className='btn btn-danger btn-sm mx-2'>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            
        </tbody>
    </table>
  )
}

export default Accounts