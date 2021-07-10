import { Menu } from 'semantic-ui-react'

const items = [
  { key: 'about', active: true, name: 'About', icon: 'users' },
  { key: 'projects', active: false, name: 'Projects' },
  { key: 'resume', active: false, name: 'Resume' }
]
const Navigation = () => {
  return (
    <Menu size='massive' inverted pointing color='olive' items={items} />
  );
};

export default Navigation;
