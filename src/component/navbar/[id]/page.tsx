/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewApi({ params }: { params: { id: string } }) {
    const [data] = useState<any[]>([]);
    
    useEffect(() => {
        async function getData() {
          try {
            const response = await axios.get(`https://656ac001dac3630cf7274458.mockapi.io/api/register/dataDriver=${params.id}`);
            if (response.status === 200) {
                const responseBody = response.data;
            } else {
                console.error("Failed to fetch data:", response.statusText);
            }
          } catch (error) {
              console.error("Error fetching data:", error);
          }
        }
        getData();
    }, [params.id]);


    return(
        <>
          <div className="card-container bg-green-200">
          <h3 className="text-center">Product code number: {params.id}</h3>
            {data.map((item) => (
              <div key={item.id}>
                <div>
                    {item.name}
                </div>
              </div>
            ))}
          </div>
        </>
    )

}