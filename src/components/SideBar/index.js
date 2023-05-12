import React from 'react'
import {SideBarContainer , Icon , CloseIcon, SidebarWrapper ,SidebarLink ,SidebarMenu, SideBtnWrap ,SidebarRoute} from './SideBarElementes'


const SideBar = ({isOpen , toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
        <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      
    </SideBarContainer>
  )
}

export default SideBar
