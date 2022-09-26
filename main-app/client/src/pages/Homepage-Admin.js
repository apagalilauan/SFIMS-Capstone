import SideNav from './Sidenav';
import HomeAdmin from './Home-Admin';
import MainForm from './MainForm.js'

import '../global.scss';


function HomepageAdmin() {
  return (
    <div class='app'>
      <div id='side'>
        <SideNav />
      </div>
      <div id='home'>      
         <HomeAdmin/>
      </div>
    </div>
  );
}//app end

export default HomepageAdmin;