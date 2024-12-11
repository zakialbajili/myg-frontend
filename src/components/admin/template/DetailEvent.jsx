'use client'
import { Button } from '@nextui-org/button'
import dynamic from 'next/dynamic.js'
const TableEvent = dynamic(() => import('../organism/TableEvent.jsx'), { ssr: false })
import PaginationBottom from '../atom/PaginationBottom.jsx'
import icons from '@/components/icons/icon'
import Image from 'next/image.js'
// import AddEvent from './AddEvent.jsx'
// import OptionListEvent from '../organism/OptionListEvent.jsx'
import { Card } from "@nextui-org/card"
const DetailEvent = () => {
    const { EditRounded, PlusCircleIcon } = icons
    return (
        <main
            className='min-h-screen bg-[#f5f5f5] px-16 py-11'
        >
            <h5 className='font-sans text-base text-gray-700'>1 September 2024</h5>
            <h1 className='font-sans text-2xl text-gray-700'>Detail Acara</h1>
            <div className='w-full flex justify-center'>
                <Card
                    shadow='xl'
                    className='w-fit p-8 bg-white mt-9'
                >
                    {/* <OptionListEvent handleIsAdd={handleIsAdd} /> */}
                    <div className='flex justify-end gap-3 mb-5'>
                        <Button
                            className='py-3 px-4 bg-yellow-500 text-abugelap font-sans font-semibold text-base flex gap-3'
                        >
                            <EditRounded />
                            Edit Acara
                        </Button>
                        <Button
                            className='py-3 px-4 bg-yellow-500 text-abugelap font-sans font-semibold text-base flex gap-3'
                        >
                            <PlusCircleIcon />
                            <span>Tambah Materi</span>
                        </Button>
                    </div>
                    <div className='flex flex-row gap-8 max-w-[1024px]'>
                        <div className='w-[400px] min-h-[650px] relative'>
                            <div className='absolute w-full h-full rounded-lg'>
                                <Image
                                    src={'/images/brosur/Aesthetic Skincare Gynecology Aesthetical.jpg'}
                                    alt='Brousur'
                                    fill
                                    style={{
                                        borderRadius:'8px'
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 max-w-[468px]'>
                            <h1 className='font-bold text-4xl font-sans'>Workshop Kecantikan Alami</h1>
                            <p className='text-lg'>Pelajari teknik kecantikan alami menggunakan bahan-bahan organik dan metode tradisional.</p>
                            <p className='text-lg text-yellow-700'>27 Juli 2024</p>
                            <p className='text-lg'>RT.13/RW.6, Kb. Kosong, Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10630</p>
                            <p className='font-semibold font-sans text-[32px]'>Rp. 1.600.000</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-8'>
                        <PaginationBottom />
                    </div>
                </Card>
            </div>
        </main>
    )
}
export default DetailEvent