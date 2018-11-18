// import React, { Component } from 'react';

// import AllProjects from '../Projects/AllProjects';

// class DashNav extends Component {
//   constructor() {
//     super();
//     this.state = {
//       pageLoad: 'projects'
//     }
//   }
  
//   render() {
//     let projectName;
//     const { pageLoad } = this.state;
//     return (
//       <div>
//         <div className='dash-nav-item'>
//           Projects
//         </div>
//         <div className='dash-nav-item'>
//           Tab 2
//         </div>
//         <div className='dash-nav-item'>
//           Tab 3
//         </div>
//         <div className='dash-nav-item project-name'>
//           { !!projectName ? projectName : 'No Project Selected' }
//         </div>
//         {
//           pageLoad === 'projects' &&
//             <AllProjects />
//         }
//       </div>
//     );
//   }
// }

// export default DashNav;