import {categoryData} from '../../utils/categoryData';
import CategoryCard from './CategoryCard';
import {styles} from './style';
import {Text, View} from 'react-native';

const Category = () => {
  return (
    <View style={styles.exploreCategoryContainer}>
      <View style={styles.headingTextcontainer}>
        <Text style={styles.headingText}>Explore Categories</Text>
      </View>
      <View style={styles.categoryContainer}>
        {categoryData.map((item, index) => (
          <CategoryCard
            name={item.name}
            gradientColor={item.gradientColor}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};
export default Category;
