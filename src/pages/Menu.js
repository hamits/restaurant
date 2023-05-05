
import {MenuList} from '../helpers/MenuList'

function Menu(){
    return(
        <div className='menuContainer'>
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuListContainer">
            {MenuList.map((menu)=>{
                console.log(menu)
                return(
                    <div className='menuList'>
                        <img src={menu.image} alt="" />
                        <h3>{menu.name}</h3>
                        <p>{menu.prize} TL</p>
                    </div>
                )
        })}
            </div>
        </div>
    )
}

export default Menu