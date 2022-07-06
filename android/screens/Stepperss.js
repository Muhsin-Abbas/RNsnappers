

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import Stepper from  "./A"
// import step1Icon from '../../Assests/user.png';
// import step2Icon from '../../Assests/user.png';
// import step3Icon from '../../Assests/home.png'
// const stepDetailsList = [
//     { stepName: "Order confirmed", iconImg: step1Icon },
//     { stepName: "Order accepted", iconImg: step2Icon },
//     { stepName: "Order accepted", iconImg1: step3Icon },
//     { stepName: "Order accepted", iconImg: step2Icon },
//     // { stepName: "Driver assigned", iconImg: step3Icon },
//     // { stepName: "Order delivered", iconImg: step4Icon },
// ]
// // import common from '../../constants/constants';
// const Steppers = (props) => {
// //     const [stepsCount, setStepsCount] = useState(props.numberOfSteps);
// //     const [lastActivated, setLastActivated] = useState(props.lastActivated);
// //     const [lastFailed, setLastFailed] = useState(props.lastFailed || null);

// //     const elements = [];
// //     const stepDetailsList = props.stepDetailsList;
// //     const lightBg = props.hoverBackground;
// //     const hoverTextColor = props.hoverTextColor;
// //     const widthString = (100 / stepsCount).toString() + '%'
// //     for (var i = 0; i < stepsCount; i++) {
// //         if (i != stepsCount - 1) {
// //             if (lastActivated && i + 1 < lastActivated) {
// //                 elements.push(
// //                     <View style={{ display: 'flex', flexDirection: 'row', width: widthString }} key={i}>
// //                         <View style={[styles(props).step, styles(props).activated]}>
// //                             <Tooltip withOverlay={false} backgroundColor={lightBg} popover={<Text style={{ color: hoverTextColor }}>{stepDetailsList[i].stepName}</Text>}>
// //                                 <Image resizeMode="center" style={styles(props).iconImgActivated} source={stepDetailsList[i].iconImg} />
// //                             </Tooltip>
// //                         </View>

// //                         <View style={[styles(props).next, styles(props).activated]}>
// //                         </View>
// //                     </View>
// //                 )
// //             }
// //             else if (lastActivated && i + 1 == lastActivated) {
// //                 if (lastFailed && lastFailed > lastActivated) {
// //                     elements.push(
// //                         <View style={{ display: 'flex', flexDirection: 'row', width: widthString }} key={i}>
// //                             <View style={[styles(props).step, styles(props).activated]}>
// //                                 <Tooltip withOverlay={false} backgroundColor={lightBg} popover={<Text style={{ color: hoverTextColor }}>{stepDetailsList[i].stepName}</Text>}>
// //                                     <Image resizeMode="center" style={styles(props).iconImgActivated} source={stepDetailsList[i].iconImg} />
// //                                 </Tooltip>
// //                             </View>
// //                             <View style={[styles(props).next, styles(props).failed]}>
// //                             </View>
// //                         </View>
// //                     )
// //                 }
// //                 else {
// //                     elements.push(
// //                         <View style={{ display: 'flex', flexDirection: 'row', width: widthString }} key={i}>
// //                             <View style={[styles(props).step, styles(props).activated]}>
// //                                 <Tooltip withOverlay={false} backgroundColor={lightBg} popover={<Text style={{ color: hoverTextColor }}>{stepDetailsList[i].stepName}</Text>}>
// //                                     <Image resizeMode="center" style={styles(props).iconImgActivated} source={stepDetailsList[i].iconImg} />
// //                                 </Tooltip>
// //                             </View>
// //                             <View style={[styles(props).next]}>
// //                             </View>
// //                         </View>
// //                     )
// //                 }
// //             }
// //             else if (lastFailed && i + 1 < lastFailed) {
// //                 elements.push(
// //                     <View style={{ display: 'flex', flexDirection: 'row', width: widthString }} key={i}>
// //                         <View style={[styles(props).step, styles(props).failed]}>
// //                             <Tooltip withOverlay={false} backgroundColor={lightBg} popover={<Text style={{ color: hoverTextColor }}>{stepDetailsList[i].stepName}</Text>}>
// //                                 <Image resizeMode="center" style={styles(props).iconImgActivated} source={stepDetailsList[i].iconImg} />
// //                             </Tooltip>
// //                         </View>

// //                         <View style={[styles(props).next, styles(props).failed]}>
// //                         </View>
// //                     </View>
// //                 )
// //             }

// //             else if (lastFailed && i + 1 == lastFailed) {

// //                 elements.push(
// //                     <View style={{ display: 'flex', flexDirection: 'row', width: widthString }} key={i}>
// //                         <View style={[styles(props).step, styles(props).failed]}>
// //                             <Tooltip withOverlay={false} backgroundColor={lightBg} popover={<Text style={{ color: hoverTextColor }}>{stepDetailsList[i].stepName}</Text>}>
// //                                 <Image resizeMode="center" style={styles(props).iconImgActivated} source={stepDetailsList[i].iconImg} />
// //                             </Tooltip>
// //                         </View>
// //                         <View style={[styles(props).next]}>
// //                         </View>
// //                     </View>
// //                 )

// //             }
// //             else if (lastActivated && lastFailed && (i + 1 > lastActivated) && (i + 1 == lastFailed)) {
// //                 elements.push(
// //                     <View style={{ display: 'flex', flexDirection: 'row', width: widthString }} key={i}>
// //                         <View style={[styles(props).step, styles(props).failed]}>
// //                             <Tooltip withOverlay={false} backgroundColor={lightBg} popover={<Text style={{ color: hoverTextColor }}>{stepDetailsList[i].stepName}</Text>}>
// //                                 <Image resizeMode="center" style={styles(props).iconImgActivated} source={stepDetailsList[i].iconImg} />
// //                             </Tooltip>
// //                         </View>
// //                         <View style={[styles(props).next, styles(props)]}>
// //                         </View>
// //                     </View>
// //                 )
// //             }
// //             else if (lastActivated && lastFailed && (i + 1 > lastActivated) && (i + 1 < lastFailed)) {
// //                 elements.push(
// //                     <View style={{ display: 'flex', flexDirection: 'row', width: widthString }} key={i}>
// //                         <View style={[styles(props).step, styles(props).failed]}>
// //                             <Tooltip withOverlay={false} backgroundColor={lightBg} popover={<Text style={{ color: hoverTextColor }}>{stepDetailsList[i].stepName}</Text>}>
// //                                 <Image resizeMode="center" style={styles(props).iconImgActivated} source={stepDetailsList[i].iconImg} />
// //                             </Tooltip>
// //                         </View>
// //                         <View style={[styles(props).next, styles(props).failed]}>
// //                         </View>
// //                     </View>
// //                 )
// //             }
// //             else {
// //                 elements.push(
// //                     <View style={{ display: 'flex', flexDirection: 'row', width: widthString }} key={i}>
// //                         <View style={[styles(props).step]}>
// //                             <Tooltip withOverlay={false} backgroundColor={lightBg} popover={<Text style={{ color: hoverTextColor }}>{stepDetailsList[i].stepName}</Text>}>
// //                                 <Image resizeMode="center" style={styles(props).iconImg} source={stepDetailsList[i].iconImg} />
// //                             </Tooltip>
// //                         </View>
// //                         <View style={[styles(props).next]}>
// //                         </View>
// //                     </View>
// //                 )
// //             }
// //         }
// //         else {
// //             if (lastActivated && i + 1 == lastActivated) {
// //                 elements.push(
// //                     <View style={{ display: 'flex', flexDirection: 'row', borderColor: 'green', borderWidth: 0, width: widthString }} key={i}>
// //                         <View style={[styles(props).step, styles(props).activated]}>
// //                             <Tooltip withOverlay={false} backgroundColor={lightBg} popover={<Text style={{ color: hoverTextColor }}>{stepDetailsList[i].stepName}</Text>}>
// //                                 <Image resizeMode="center" style={styles(props).iconImgActivated} source={stepDetailsList[i].iconImg} />
// //                             </Tooltip>
// //                         </View>
// //                     </View>
// //                 )
// //             }
// //             else if (lastFailed && i + 1 == lastFailed) {
// //                 elements.push(
// //                     <View style={{ display: 'flex', flexDirection: 'row', borderColor: 'green', borderWidth: 0, width: widthString }} key={i}>
// //                         <View style={[styles(props).step, styles(props).failed]}>
// //                             <Tooltip withOverlay={false} backgroundColor={lightBg} popover={<Text style={{ color: hoverTextColor }}>{stepDetailsList[i].stepName}</Text>}>
// //                                 <Image resizeMode="center" style={styles(props).iconImgActivated} source={stepDetailsList[i].iconImg} />
// //                             </Tooltip>
// //                         </View>
// //                     </View>
// //                 )
// //             }
// //             else {
// //                 elements.push(
// //                     <View style={{ display: 'flex', flexDirection: 'row', borderColor: 'green', borderWidth: 0, width: widthString }} key={i}>
// //                         <View style={[styles(props).step]}>
// //                             <Tooltip withOverlay={false} backgroundColor={lightBg} popover={<Text style={{ color: hoverTextColor }}>{stepDetailsList[i].stepName}</Text>}>
// //                                 <Image resizeMode="center" style={styles(props).iconImg} source={stepDetailsList[i].iconImg} />
// //                             </Tooltip>
// //                         </View>
// //                     </View>
// //                 )
// //             }
// //         }
// //     }
//   return (
//     <View style={{ height: 60, width: '100%' }}>
//     <Stepper 
//         successColor="#339933" 
//         failedColor="#ff0000" 
//         numberOfSteps={3} 
//         lastActivated={3} 
//         lastFailed={3} 
//         // lastActivated
//         stepDetailsList={stepDetailsList} 
//         hoverBackground="grey" hoverTextColor="white"
//     />
// </View>
//   );
// }

// export default Steppers;


import React, { Component } from 'react';
import RN from 'react-native';
import {StyleSheet}  from 'react-native'
export default class Steppers extends Component {

  constructor(props) {
    super(props);
    this.state={
      selectedIndex:0,
      state : { active: null },
      //you can change every urlActive and urlInactive url to your needed image
      tabList:[
        {label:'Description', urlActive:'https://png.pngitem.com/pimgs/s/0-1127_pointing-finger-vector-3-finger-icon-hd-png.png', urlInactive:'https://www.nicepng.com/png/detail/367-3672338_tick-mark-icon-png-green-check-png.png'},
        {label:'Picture', urlActive:'https://png.pngitem.com/pimgs/s/0-1127_pointing-finger-vector-3-finger-icon-hd-png.png', urlInactive:'https://www.nicepng.com/png/detail/367-3672338_tick-mark-icon-png-green-check-png.png'},
        {label:'Details', urlActive:'https://png.pngitem.com/pimgs/s/0-1127_pointing-finger-vector-3-finger-icon-hd-png.png', urlInactive:'https://www.nicepng.com/png/detail/367-3672338_tick-mark-icon-png-green-check-png.png'},
      ]
    }
  }

  render() {
    console.disableYellowBox = true;
    return (
      <RN.View style={{height:70,width:'100%',marginTop:40,backgroundColor:'#203b3d'}}>
        <RN.View style={{flex:0.9, flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#203b3d'}}>
          {
            //loop throught the state
            this.state.tabList.map((item,index)=>{
              return(
                //the style just to make it beautiful and easy to debug
                <RN.TouchableOpacity style={{flex:1, alignItems:'center', backgroundColor:index==0?'#2a949c':index==1?'#2a949c':'#2a949c'}}
                  //this onpress to handle of active selected tab
                  onPress={()=>{this.setState({selectedIndex:index})}}
                  
                >
                  <RN.View>
                    <RN.Image 
                      //here's the magic show off
                      source={{uri:this.state.selectedIndex==index?item.urlActive:item.urlInactive}}

                      style={{width:35, height:35,resizeMode:'cover',}}
                    />
                     <RN.Text style={this.state.active === 0 ? styles.btnActive : styles.btn }>{item.label}</RN.Text>
                  </RN.View>
                </RN.TouchableOpacity>
              )
            })
          }
        </RN.View>
      </RN.View>
    );
  }
}
const styles=StyleSheet.create({
    btnActive:{
        color:'black'
    },
    btn:{
        color:'white'
    }
})