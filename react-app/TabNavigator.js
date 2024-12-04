

const Tab = createBottomTabNavigator();

const createBottomTabNavigator = () =>{
    return(
        <Tab.Navigator
        tabBarOptions ={{
            activeTintColor: 'white',
            incativeTintColor: 'lightgray',
            style: {
                backgroundColor: '#FF6347',
            },
            labelStyle: {
                fontSize: 12,
            }
        }}
        >
            <Tab.Screen></Tab.Screen>
            name = 'Home'
            component = {{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name = "home" size={26} color={color}></MaterialCommunityIcons>
                )
            }}
        </Tab.Navigator>
    )
}