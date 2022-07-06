import React,{useState} from 'react';
import { Text,View,StyleSheet,Image } from 'react-native';
// import Stepper from 'react-native-customizable-stepper';
import step1Icon from './Assests/user.png'
import step2Icon from './Assests/user.png';
import step3Icon from './Assests/user.png';
import step4Icon from './Assests/user.png';
// import View from 'rn-tooltip';
// import common from '../../constants/constants';
import { ProgressSteps, ProgressStep, } from 'react-native-progress-steps';
const ProSteps = () => { 
   
    const [icons, setIcons]=useState(0)
    const stepDetailsList = [
        { stepName: "Order confirmed", iconImg: step1Icon },
        { stepName: "Order accepted", iconImg:  step2Icon},
        { stepName: "Driver assigned", iconImg: step3Icon },
        { stepName: "Order delivered", iconImg: step4Icon},
    ]
  return (
        
    <View style={{height:100,width:'100%', borderColor:'red',borderWidth:2,backgroundColor:'#00ADF2'}}>
    <ProgressSteps
   progressBarColor="#00ADF2"
   activeStepIconBorderColor="#00ADF2" 
   completedProgressBarColor='#00ADF2'
   activeStepIconColor='#00ADF2'
   completedStepIconColor='#00ADF2'
   disabledStepIconColor='#00ADF2'
   setIcons={icons}
   labelColor='white'
   activeLabelColor='black'
   activeStepNumColor='red'
   completedCheckColor='red'
   disabledStepNumColor='#00ADF2'
    > 
        <ProgressStep label="Description" nextBtnTextStyle={'red'} 
        >
            <View style={{ height:30,width:50,backgroundColor:'red' }}>
                <Text style={{}}>This is the content within step 1!</Text>
            </View>
        </ProgressStep>
     
        <ProgressStep label="Pictures" previousBtnTextStyle={{color:'red'}}>
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 2!</Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Details">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 3!</Text>
            </View>
        </ProgressStep>
    </ProgressSteps>
</View>
  )}
  export default ProSteps;