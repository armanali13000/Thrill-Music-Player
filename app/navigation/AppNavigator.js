import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import PlayList from '../screens/PlayList';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name='AudioList' component={AudioList} options={{
            tabBarIcon: (color, size) => (<Ionicons name="headset" size={24} color={color} />)
            
        }} />
        <Tab.Screen name='Player' component={Player} options={{
            tabBarIcon: (color, size) => (<FontAwesome5 name="compact-disc" size={24} color={color} />)
            
        }}  />
        <Tab.Screen name='PlayList' component={PlayList} options={{
            tabBarIcon: (color, size) => (<MaterialIcons name="library-music" size={24} color="color" />)
            
        }}  />
    </Tab.Navigator>
}



export default AppNavigator;
