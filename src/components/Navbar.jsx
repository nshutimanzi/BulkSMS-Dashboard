import { useState } from 'react';
import { IconChartBar, IconHome, IconMail, IconUsers } from '@tabler/icons-react';
import mtnlogo from './../assets/mtnlg.png';
import { Image } from '@mantine/core';
import '../styles/navbar.scss';

const data = [
  { link: '', label: 'Overview', icon: IconHome },
  { link: '', label: 'Users', icon: IconUsers },
  { link: '', label: 'SMS Management', icon: IconMail },
  { link: '', label: 'Reports', icon: IconChartBar },
];

export default function Navbar() {
  const [active, setActive] = useState('Overview');

  const links = data.map((item) => (
    <a
      className="link"
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className="linkIcon" stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className="navbar">
      <div className="navbarMain">
        <div className="logo">
          <Image h={50} w={100} fit="contain" src={mtnlogo} />
        </div>
        {links}
      </div>
    </nav>
  );
}