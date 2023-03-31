import { BarChartOutlined, HomeOutlined, LogoutOutlined, MenuUnfoldOutlined, PlayCircleOutlined, SettingOutlined } from '@ant-design/icons'
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./styles/ArtriNavbar.css";

export default function ArtriNavbar() {
  return (
    <div>
      
      <nav className='navbar-artri'>
        <Link to="/">
          <div className="logo-artri-al">
              <img className="artri-logo-al" src='./src/assets/logosimplify.png'/>
          </div>
        </Link>
              <ul className='item-artri'>
                  <li className='link-item-artri'><Link to = "/artri/home"><HomeOutlined /></Link></li>
                  <li className='link-item-artri'><Link to = "/artri/practice_level"><PlayCircleOutlined /></Link></li>
                  <li className='link-item-artri'><Link to = "/artri/repository"><MenuUnfoldOutlined /></Link></li>
                  
                  <li className='link-item-artri'><Link to = "/artri/statistics"><BarChartOutlined /></Link></li>
                  <li className='link-item-artri'><Link to = "/artri/settings"><SettingOutlined /></Link></li>
                  <li className='link-item-artri'><Link to = "/artri/logout"><LogoutOutlined /></Link></li>
              </ul>
           
      </nav>
        <div className="container-information-artri">
            <Outlet />
        </div>
    
    </div>


  )
}
        