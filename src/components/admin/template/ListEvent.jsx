'use client'
import { Card } from '@nextui-org/card'
import { useState } from 'react'
import dynamic from 'next/dynamic.js'
const TableEvent = dynamic(() => import('../organism/TableEvent.jsx'), { ssr: false })
import PaginationBottom from '../atom/PaginationBottom.jsx'
import AddEvent from './AddEvent.jsx'
import OptionListEvent from '../organism/OptionListEvent.jsx'
const ListEvent = () => {
    const [isAdd, setIsAdd] = useState(false)
    const handleIsAdd = () => {
        setIsAdd(!isAdd)
    }

    return (
        <>{
            isAdd ? (
                <AddEvent handleIsAdd={handleIsAdd}/>
            ) : (
                <main
                    className='min-h-screen bg-[#F5F5F5] pl-16 py-11'
                >
                    <h5 className='font-sans text-base text-gray-700'>1 September 2024</h5>
                    <h1 className='font-sans text-2xl text-gray-700'>List Acara My Academy</h1>
                    <Card
                        shadow='xl'
                        className='w-[80%] p-8 bg-white mt-9'
                    >
                        <OptionListEvent handleIsAdd={handleIsAdd}/>
                        <TableEvent />
                        <div className='flex justify-center mt-8'>
                            <PaginationBottom />
                        </div>
                    </Card>
                </main>
            )
        }
        </>
    )
}
export default ListEvent