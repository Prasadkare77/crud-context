import React, { createContext, useState } from 'react'

export const EmployeeContext = createContext()

export const EmployeeProvider = ({children}) => {
    const [employees,setEmployee] = useState([])

    const addEmployee = (employee) => {
        console.log(employee);
        setEmployee([...employees,employee])
    }
  return (
    <div>
        <EmployeeContext.Provider value={{employees,addEmployee}}>
            {children}
        </EmployeeContext.Provider>
    </div>
  )
}
