


//import Tabs from 'react-bootstrap/Tabs'
//import Tab from 'react-bootstrap/Tab';
//******************************************************* */
// const MenuBar = () => {
//     const [items, setitems] =  useState(fakeData);
//     const breakfast = items.filter(item => item.category === "breakfast");
//     const lunch = items.filter(item => item.category === "lunch")
//     const dinner = items.filter(item => item.category === "dinner")
//     console.log(breakfast);
    
//     return (
//         <div className="header ">
//             <Tabs  defaultActiveKey="lunch" id="uncontrolled-tab-example">
//                 <Tab eventKey="breakfast" title="Breakfast">
//                     <div className="row">
                       
//                         {
//                         breakfast.map( item => (<div className="col-md-4">
//                             <Items item={item}></Items>
//                         </div>))
//                         }
                        
//                     </div>
//                 </Tab>
//                 <Tab eventKey="lunch" title="Lunch">
//                 <div className="row">
//                     {
//                         lunch.map( item => (<div className="col-md-4">
//                             <Items item={item}></Items>
//                         </div>))
//                     }
//                  </div>
//                 </Tab>
//                 <Tab eventKey="dinner" title="Dinner" >
//                 <div className="row">
//                     {
//                         dinner.map( item => (<div className="col-md-4">
//                             <Items item={item}></Items>
//                             </div>))
//                     }
//                  </div>
//                 </Tab>
//             </Tabs>
//         </div>
//     );
// };

// export default MenuBar;