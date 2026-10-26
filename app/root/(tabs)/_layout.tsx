// import { NativeTabs } from 'expo-router/unstable-native-tabs';
// import { Platform } from 'react-native';
// import { Tabs } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons'; 

// const ACTIVE_COLOR = "#F5A623";
// const INACTIVE_COLOR = "#9CA3AF";


// function AndroidTabLayout(){
//     const isAdmin = true;
//     return(
//          <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: ACTIVE_COLOR,
//         tabBarInactiveTintColor: INACTIVE_COLOR,
//         tabBarStyle: {
//           backgroundColor: "#1C1C2E",
//           borderTopWidth: 0,
//           height: 73,
//           paddingTop: 8,
//           paddingBottom: 10,
//         },
//         tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, size, focused }) => (
//             <Ionicons
//               name={focused ? "home" : "home-outline"}
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: "Explore",
//           tabBarIcon: ({ color, size, focused }) => (
//             <Ionicons
//               name={focused ? "search" : "search-outline"}
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="favorites"
//         options={{
//           title: "Favorites",
//           tabBarIcon: ({ color, size, focused }) => (
//             <Ionicons
//               name={focused ? "heart" : "heart-outline"}
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ color, size, focused }) => (
//             <Ionicons
//               name={focused ? "person" : "person-outline"}
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//      { isAdmin &&(
        
//      )}
//     </Tabs>
//     )
// }

// function IOSTabLayout(){
//     const isAdmin = true;
//     return  (
//     <NativeTabs tintColor={ACTIVE_COLOR}>
//       <NativeTabs.Trigger name="index">
//         <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
//         <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
//       </NativeTabs.Trigger>
//       <NativeTabs.Trigger name="explore">
//         <NativeTabs.Trigger.Icon sf="magnifyingglass" md="search" />
//         <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
//       </NativeTabs.Trigger>
//         <NativeTabs.Trigger name="favorite">
//         <NativeTabs.Trigger.Icon sf="heart.fill" md="favorite" />
//         <NativeTabs.Trigger.Label>Favourites</NativeTabs.Trigger.Label>
//       </NativeTabs.Trigger>
//        <NativeTabs.Trigger name="profile">
//         <NativeTabs.Trigger.Icon sf="person.fill" md="person" />
//         <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
//       </NativeTabs.Trigger>
//       {isAdmin}
//     </NativeTabs>
//   );
// }

// export default function TabLayout() {
//   return Platform.OS === "ios" ? <IOSTabLayout/> : <AndroidTabLayout/>
// }

import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { Platform } from 'react-native';
import { userUserStore } from '../../../store/userStore';


const ACTIVE_COLOR = "#F5A623";
const INACTIVE_COLOR = "#9CA3AF";

function AndroidTabLayout(){
    const isAdmin = userUserStore((state) => state.isAdmin);
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: ACTIVE_COLOR,
                tabBarInactiveTintColor: INACTIVE_COLOR,
                tabBarStyle: {
                    backgroundColor: "#1C1C2E",
                    borderTopWidth: 0,
                    height: 73,
                    paddingTop: 8,
                    paddingBottom: 10,
                },
                tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "search" : "search-outline"}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorite"
                options={{
                    title: "Favorites",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "heart" : "heart-outline"}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            {/* Admin Tab - Android */}
            {isAdmin && (
                <Tabs.Screen
                    name="add"
                    options={{
                        title: "Admin",
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons
                                name={focused ? "shield-checkmark" : "shield-outline"}
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            )}
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

function IOSTabLayout(){
    const isAdmin = userUserStore((state) => state.isAdmin);
    return (
        <NativeTabs tintColor={ACTIVE_COLOR}>
            {/* Slot is required for NativeTabs */}
           
            
            <NativeTabs.Trigger name="index">
                <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
            </NativeTabs.Trigger>
            
            <NativeTabs.Trigger name="explore">
                <NativeTabs.Trigger.Icon sf="magnifyingglass" md="search" />
                <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>
            
            <NativeTabs.Trigger name="favorite">
                <NativeTabs.Trigger.Icon sf="heart.fill" md="favorite" />
                <NativeTabs.Trigger.Label>Favourites</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>
            
            {/* Admin Tab - iOS */}
            {isAdmin && (
                <NativeTabs.Trigger name="add">
                    <NativeTabs.Trigger.Icon sf="shield.fill" md="shield" />
                    <NativeTabs.Trigger.Label>Admin</NativeTabs.Trigger.Label>
                </NativeTabs.Trigger>
            )}
            
            <NativeTabs.Trigger name="profile">
                <NativeTabs.Trigger.Icon sf="person.fill" md="person" />
                <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}

export default function TabLayout() {
    return Platform.OS === "ios" ? <IOSTabLayout/> : <AndroidTabLayout/>
}