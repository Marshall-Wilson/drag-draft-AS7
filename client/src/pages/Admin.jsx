import React, {useEffect, useState} from 'react'
import AdminForm from '../components/AdminForm.jsx';

const Admin = () => {
    // Draft Data 
    const [queens, setQueens] = useState([]);
    const [types, setTypes] = useState([]);
    const [categories, setCategories] = useState([]);

    // Retrieve queens list on mount
    useEffect(() => {
        const fetchAll = async () => {
            const queensJson = await fetch('/api/queens', {
                method: 'GET'
            });
            const queens = await queensJson.json();
            const earnerTypesJson = await fetch('/api/earnerTypes', {
                method: 'GET'
            });
            const earnerTypes = await earnerTypesJson.json();

            setQueens(queens);
            setTypes(earnerTypes);

            let newCategories = [];
            for (const idx in earnerTypes) {
                if (!newCategories.includes(earnerTypes[idx].category)) {
                    newCategories.push(earnerTypes[idx].category);
                }
            }
            setCategories(newCategories);
        }
        fetchAll();
    }, [])

  return (
    <AdminForm
        queens={queens}
        types={types}
        categories={categories}
    />
  )
}

export default Admin