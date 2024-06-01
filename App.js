import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const categoriesData = [
    { title: 'Exercise', tasks: 12, categoryImage: require('./photos/exercise-icon.png') },
    { title: 'Study', tasks: 12, categoryImage: require('./photos/study-icon.webp') },
    { title: 'Code', tasks: 12, categoryImage: require('./photos/coding-icon.webp') },
    { title: 'Travel', tasks: 12, categoryImage: require('./photos/travel-icon.png') },
    { title: 'Cook', tasks: 12, categoryImage: require('./photos/cook-icon.webp') },
    { title: 'Music', tasks: 12, categoryImage: require('./photos/music-icon.webp') },
    { title: 'Gardening', tasks: 12, categoryImage: require('./photos/gardening-icon.png') },
    { title: 'Meditate', tasks: 12, categoryImage: require('./photos/meditate-icon.webp') },
    { title: 'Read', tasks: 12, categoryImage: require('./photos/read-icon.webp') },
    { title: 'Art', tasks: 12, categoryImage: require('./photos/art-icon.png') },


  ];

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.welcomeMessageContainer}>Hello , Devs</Text>
          <Text style={styles.smallText}>14 tasks today</Text>
        </View>
        <View style={styles.userIconContainer}>
          <Image style={styles.userIcon} source={require('./photos/user-icon.jpg')} />
        </View>
      </View>

      <View style={styles.searchFilterContainer}>
        <Icon name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder='Search'
          placeholderTextColor='black'         
          keyboardType='text'
        />
        <View style={styles.filterContainer}>
        <Icon name="sliders" style={styles.filterIcon} />
        </View>
      </View>

      <Text style={styles.categoriesTitle}>Categories</Text>

      <View >
        <ScrollView horizontal={true} style={styles.categoriesContainer}>
          {categoriesData.map((category, index) => (
            <View key={index} style={styles.category}>
              <Text style={styles.title}>{category.title}</Text>
              <Text style={styles.tasks}>{category.tasks} Tasks</Text>
              <View  style={styles.categoryImage}>
                  <Image style={styles.categoryIcons} source={category.categoryImage}/>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0e2d3',
    flex: 1,
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },

  welcomeMessageContainer: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'serif'
  },

  smallText:{
    fontSize: 12.5,
  },

  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  userIconContainer: {
    display: 'flex',
    justifyContent: 'center'
  },

  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },

  searchFilterContainer:{
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  searchBar:{
    backgroundColor: 'white',
    width: 260,
    borderRadius: 10,
    paddingLeft: 35,
    fontWeight: 'bold',
    fontSize: 18,
  },

  searchIcon:{
    fontSize: 18,
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
  },

  filterContainer: {
    width: 40,
    borderRadius: 10,
    backgroundColor: '#f3775b',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterIcon:{
    color: 'white',
    fontSize: 30,
  },

  categoriesTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginBottom: 10,
  },

  categoriesContainer: {
    display: 'flex',
    flexDirection: 'row',
    
  },

  category:{
    marginRight: 20,
    height: 190,
    width: 180,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingTop: 10,
  },

  title:{
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 15,
  },

  tasks:{
    marginLeft: 20,
    fontSize: 10,
  },

  categoryImage:{
    height: 120,
    width: 130,
    marginLeft: 20,

  },

  categoryIcons:{
    backgroundColor: 'white',
    height: 140,
    width: 140,
  }

});
