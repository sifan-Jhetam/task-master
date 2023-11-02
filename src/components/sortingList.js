import React from "react"
import { Select, Space } from "antd"

export function SortingList({setSorting,sorting}){

    function handleSorting(e,ch){
        if(ch="priority"){
            setSorting((prev)=>{
                let temp=prev
                temp.priority=e
                return temp
            })
        }

        else{
            setSorting((prev)=>{
                let temp=prev
                temp.status=e
                return temp
            })
        }
        console.log(e,ch)

    }

    return(

        <>
                <Space wrap >
                <Select
                  defaultValue="defult"
                  placeholder="Select Priority"
                  value={sorting.priority}
                  style={{ width: 120 }}
                 onChange={(e)=>handleSorting(e,"priority")}
                  options={[
                    { value: 'default', label: 'default' },
                    { value: 'low', label: 'low' },
                    { value: 'medium', label: 'high' },
                    { value: 'high', label: 'high' },
                  
                  ]}
                />
                </Space>

                <Space wrap >
                <Select
                  defaultValue="default"
                  placeholder="Select Status"
                  value={sorting.status}
                  style={{ width: 120 }}
                  onChange={(e)=>handleSorting(e,"status")}
                  options={[
                    { value: 'default', label: 'default' },
                    { value: 'pending', label: 'pending' },
                    { value: 'completed', label: 'completed' },
                  ]}
                />
                </Space>
        </>
    )
}