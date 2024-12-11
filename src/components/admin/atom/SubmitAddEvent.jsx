import {Button} from '@nextui-org/react'
const SubmitAddEvent = ({handleEvent}) =>{
    return(
        <Button
            size='lg'
            className='bg-yellow-500 text-base text-abugelap w-[300px] font-semibold'
            onPress={()=>{
                console.log('click')
                handleEvent()
            }}
        >
            Submit
        </Button>
    )
}
export default SubmitAddEvent