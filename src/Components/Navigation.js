import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const items = [
  { key: 'about', active: true, name: 'About', icon: 'users' },
  { key: 'projects', active: false, name: 'Projects' },
  { key: 'resume', active: false, name: 'Resume' }
]
const Navigation = () => {
  return (
    <Menu size='massive' icon='labeled' inverted pointing color='olive'>
      <Link to='/'>
      <Menu.Item>
      <Icon name='address card' />
        <Link to='/' />
        About
      </Menu.Item>
      </Link>
      <Link to='/projects'>
      <Menu.Item>
      <Icon name='folder open'/>
        <Link to='/projects' />
        Projects
      </Menu.Item>
      </Link>
      <Link to='/resume'>
      <Menu.Item>
        <Icon name='briefcase'/>
        <Link to='/resume' />
        Resume
      </Menu.Item>
      </Link>
    </Menu>
  );
};

export default Navigation;
