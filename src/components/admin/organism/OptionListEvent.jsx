import LimitPage from '../atom/LimitPage.jsx'
import SearchInput from '../atom/SearchInput.jsx'
import AddEvent from '../atom/AddEvent.jsx'
const OptionListEvent = ({handleIsAdd})=>{
    return(
        <div
            className='flex flex-row justify-between mb-8'
        >
            <LimitPage/>
            <div className='flex gap-5'>
                <SearchInput/>
                <AddEvent handleIsAdd={handleIsAdd}/>
            </div>
        </div>
    )
}
export default OptionListEvent